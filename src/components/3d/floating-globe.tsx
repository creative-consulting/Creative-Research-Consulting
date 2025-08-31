// components/3d/floating-globe.tsx
'use client';

import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { OrbitControls } from 'three/addons/controls/OrbitControls';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer';
import { RenderPass } from 'three/addons/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass';
import { RGBELoader } from 'three/addons/loaders/RGBELoader';

const FloatingGlobe = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mountRef.current) return;

        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
            powerPreference: "high-performance"
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        mountRef.current.appendChild(renderer.domElement);

        // Environment map
        new RGBELoader()
            .load('/environments/industrial_sunset_puresky_1k.hdr', (texture) => {
                texture.mapping = THREE.EquirectangularReflectionMapping;
                scene.environment = texture;
                scene.background = texture;
            });

        // Globe
        const loader = new GLTFLoader();
        let globe: THREE.Group;

        loader.load('/models/earth.glb', (gltf) => {
            globe = gltf.scene;
            globe.scale.set(3, 3, 3);
            globe.position.z = 0;
            scene.add(globe);

            // Add hover effects
            const raycaster = new THREE.Raycaster();
            const mouse = new THREE.Vector2();

            // Highlight material for countries
            const highlightMaterial = new THREE.MeshBasicMaterial({
                color: 0x3b82f6,
                transparent: true,
                opacity: 0.8
            });

            // Mouse move event
            const handleMouseMove = (event: MouseEvent) => {
                mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
                mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

                raycaster.setFromCamera(mouse, camera);

                if (globe) {
                    const intersects = raycaster.intersectObject(globe, true);

                    // Reset all materials
                    globe.traverse((child) => {
                        if (child instanceof THREE.Mesh) {
                            (child as THREE.Mesh).material = child.userData.originalMaterial;
                        }
                    });

                    // Highlight intersected country
                    if (intersects.length > 0) {
                        const intersected = intersects[0].object;
                        if (intersected instanceof THREE.Mesh) {
                            intersected.userData.originalMaterial = intersected.material;
                            intersected.material = highlightMaterial;
                        }
                    }
                }
            };

            window.addEventListener('mousemove', handleMouseMove);

            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
            };
        });

        // Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 3, 5);
        scene.add(directionalLight);

        // Bloom effect
        const renderScene = new RenderPass(scene, camera);
        const bloomPass = new UnrealBloomPass(
            new THREE.Vector2(window.innerWidth, window.innerHeight),
            1.5, 0.4, 0.85
        );
        bloomPass.threshold = 0;
        bloomPass.strength = 1.5;
        bloomPass.radius = 0.5;

        const composer = new EffectComposer(renderer);
        composer.addPass(renderScene);
        composer.addPass(bloomPass);

        // Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableZoom = false;
        controls.enablePan = false;
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.5;
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;

        // Camera position
        camera.position.z = 7;

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            composer.render();

            // Gentle floating animation
            if (globe) {
                globe.rotation.y += 0.001;
                globe.position.y = Math.sin(Date.now() * 0.001) * 0.2;
            }
        };
        animate();

        // Handle resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            composer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            mountRef.current?.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={ mountRef } className = "absolute inset-0" />;
};

export default FloatingGlobe;