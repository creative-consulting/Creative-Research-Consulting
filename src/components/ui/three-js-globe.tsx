"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function ThreeJsGlobe({ countryName }: { countryName: string }) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    globe: THREE.Mesh;
    particles: THREE.Points;
    animationId: number;
  } | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (mountRef.current) {
      observer.observe(mountRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mountRef.current || !isVisible) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / 500,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(mountRef.current.clientWidth, 500);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create globe geometry
    const geometry = new THREE.SphereGeometry(2, 32, 32);
    
    // Create wireframe material
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x0066cc,
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });
    
    // Create solid material
    const solidMaterial = new THREE.MeshBasicMaterial({
      color: 0x004499,
      transparent: true,
      opacity: 0.3
    });

    // Create globe meshes
    const globeWireframe = new THREE.Mesh(geometry, wireframeMaterial);
    const globeSolid = new THREE.Mesh(geometry, solidMaterial);
    
    scene.add(globeWireframe);
    scene.add(globeSolid);

    // Add particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute(
      'position', 
      new THREE.BufferAttribute(positions, 3)
    );
    
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x0088ff,
      size: 0.02,
      transparent: true,
      opacity: 0.8
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Add country name text
    const createText = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 256;
      const context = canvas.getContext('2d');
      
      if (context) {
        context.fillStyle = 'rgba(0, 0, 0, 0)';
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.font = 'Bold 40px Arial';
        context.textAlign = 'center';
        context.fillStyle = '#0066cc';
        context.fillText(countryName, canvas.width/2, canvas.height/2);
        
        const texture = new THREE.CanvasTexture(canvas);
        const material = new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
          side: THREE.DoubleSide
        });
        
        const textGeometry = new THREE.PlaneGeometry(3, 1.5);
        const textMesh = new THREE.Mesh(textGeometry, material);
        textMesh.position.set(0, 0, 2.2);
        scene.add(textMesh);
      }
    };

    createText();

    camera.position.z = 5;

    // Add controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    // controls.enableDamping = true;
    // controls.dampingFactor = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;

    // Animation
    const animate = () => {
      const animationId = requestAnimationFrame(animate);
      
      globeWireframe.rotation.x += 0.005;
      globeWireframe.rotation.y += 0.01;
      globeSolid.rotation.x += 0.003;
      globeSolid.rotation.y += 0.007;
      particles.rotation.x += 0.001;
      particles.rotation.y += 0.002;

      controls.update();
      renderer.render(scene, camera);
      
      if (sceneRef.current) {
        sceneRef.current.animationId = animationId;
      }
    };

    animate();

    // Store scene reference
    sceneRef.current = {
      scene,
      camera,
      renderer,
      globe: globeWireframe,
      particles,
      animationId: 0
    };

    // Handle resize
    const handleResize = () => {
      if (mountRef.current && sceneRef.current) {
        sceneRef.current.camera.aspect = mountRef.current.clientWidth / 500;
        sceneRef.current.camera.updateProjectionMatrix();
        sceneRef.current.renderer.setSize(mountRef.current.clientWidth, 500);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.animationId);
        mountRef.current?.removeChild(renderer.domElement);
      }
    };
  }, [isVisible, countryName]);

  return <div ref={mountRef} className="w-full h-[500px]" />;
}