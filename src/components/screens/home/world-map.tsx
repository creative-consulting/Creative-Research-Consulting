"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { motion } from "framer-motion";
import { gsap } from "gsap";

interface Location {
  id: string;
  name: string;
  coords: [number, number];
  type: "client" | "office";
  region?: string;
}

const locations: Location[] = [
  // Asia Pacific
  {
    id: "bd-1",
    name: "Bangladesh",
    coords: [23.685, 90.3563],
    type: "client",
    region: "Asia Pacific",
  },
  {
    id: "cn-1",
    name: "China",
    coords: [35.8617, 104.1954],
    type: "client",
    region: "Asia Pacific",
  },
  {
    id: "hk-1",
    name: "Hong Kong",
    coords: [22.3193, 114.1694],
    type: "client",
    region: "Asia Pacific",
  },
  {
    id: "in-1",
    name: "India",
    coords: [20.5937, 78.9629],
    type: "client",
    region: "Asia Pacific",
  },
  {
    id: "id-1",
    name: "Indonesia",
    coords: [-0.7893, 113.9213],
    type: "client",
    region: "Asia Pacific",
  },
  {
    id: "jp-1",
    name: "Japan",
    coords: [36.2048, 138.2529],
    type: "client",
    region: "Asia Pacific",
  },
  {
    id: "my-1",
    name: "Malaysia",
    coords: [4.2105, 101.9758],
    type: "client",
    region: "Asia Pacific",
  },
  {
    id: "np-1",
    name: "Nepal",
    coords: [28.3949, 84.124],
    type: "client",
    region: "Asia Pacific",
  },
  {
    id: "sg-1",
    name: "Singapore",
    coords: [1.3521, 103.8198],
    type: "client",
    region: "Asia Pacific",
  },
  {
    id: "th-1",
    name: "Thailand",
    coords: [15.87, 100.9925],
    type: "client",
    region: "Asia Pacific",
  },
  {
    id: "vn-1",
    name: "Vietnam",
    coords: [14.0583, 108.2772],
    type: "client",
    region: "Asia Pacific",
  },

  // Middle East
  {
    id: "bh-1",
    name: "Bahrain",
    coords: [26.0667, 50.5577],
    type: "client",
    region: "Middle East",
  },
  {
    id: "ir-1",
    name: "Iran",
    coords: [32.4279, 53.688],
    type: "client",
    region: "Middle East",
  },
  {
    id: "iq-1",
    name: "Iraq",
    coords: [33.3152, 44.3661],
    type: "client",
    region: "Middle East",
  },
  {
    id: "kw-1",
    name: "Kuwait",
    coords: [29.3759, 47.9774],
    type: "client",
    region: "Middle East",
  },
  {
    id: "qa-1",
    name: "Qatar",
    coords: [25.276987, 51.520008],
    type: "client",
    region: "Middle East",
  },
  {
    id: "sa-1",
    name: "Saudi Arabia",
    coords: [23.8859, 45.0792],
    type: "client",
    region: "Middle East",
  },
  {
    id: "ae-1",
    name: "United Arab Emirates",
    coords: [23.4241, 53.8478],
    type: "client",
    region: "Middle East",
  },

  // Offices
  {
    id: "bd-office",
    name: "Dhaka Office",
    coords: [23.685, 90.3563],
    type: "office",
    region: "Asia Pacific",
  },
];

const getFlagEmoji = (countryName: string) => {
  const flagEmojis: Record<string, string> = {
    Bangladesh: "🇧🇩",
    China: "🇨🇳",
    "Hong Kong": "🇭🇰",
    India: "🇮🇳",
    Indonesia: "🇮🇩",
    Japan: "🇯🇵",
    Malaysia: "🇲🇾",
    Nepal: "🇳🇵",
    Singapore: "🇸🇬",
    Thailand: "🇹🇭",
    Vietnam: "🇻🇳",
    Bahrain: "🇧🇭",
    Iran: "🇮🇷",
    Iraq: "🇮🇶",
    Kuwait: "🇰🇼",
    Qatar: "🇶🇦",
    "Saudi Arabia": "🇸🇦",
    "United Arab Emirates": "🇦🇪",
    "Dhaka Office": "🇧🇩",
  };
  return flagEmojis[countryName] || "📍";
};

const InteractiveEarth = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  // Three.js refs
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const globeRef = useRef<THREE.Mesh | null>(null);
  const pointsRef = useRef<THREE.Group | null>(null);

  // State
  const [hoveredLocation, setHoveredLocation] = useState<Location | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFilter, setActiveFilter] = useState<"all" | "client" | "office">(
    "all"
  );
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  // Get unique regions
  const regions = Array.from(
    new Set(locations.map((loc) => loc.region))
  ).filter(Boolean) as string[];

  // Filter locations based on active filter and selected region
  const filteredLocations = locations.filter((location) => {
    const matchesFilter =
      activeFilter === "all" || location.type === activeFilter;
    const matchesRegion = !selectedRegion || location.region === selectedRegion;
    return matchesFilter && matchesRegion;
  });

  // Initialize Three.js scene
  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    // const container = containerRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x040d21);
    scene.fog = new THREE.FogExp2(0x040d21, 0.001);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 3);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    rendererRef.current = renderer;

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;
    controls.minDistance = 1.5;
    controls.maxDistance = 5;
    controlsRef.current = controls;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    const hemisphereLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
    scene.add(hemisphereLight);

    // Create Earth
    const createEarth = () => {
      const geometry = new THREE.SphereGeometry(1, 128, 128);

      // Load textures for realistic earth
      const textureLoader = new THREE.TextureLoader();
      const earthTexture = textureLoader.load(
        "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_atmos_2048.jpg"
      );
      const bumpMap = textureLoader.load(
        "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_normal_2048.jpg"
      );
      const specularMap = textureLoader.load(
        "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_specular_2048.jpg"
      );

      const material = new THREE.MeshPhongMaterial({
        map: earthTexture,
        bumpMap: bumpMap,
        bumpScale: 0.05,
        specularMap: specularMap,
        specular: new THREE.Color("grey"),
        shininess: 5,
      });

      const globe = new THREE.Mesh(geometry, material);
      globeRef.current = globe;
      scene.add(globe);

      // Add atmosphere
      const atmosphereGeometry = new THREE.SphereGeometry(1.02, 64, 64);
      const atmosphereMaterial = new THREE.ShaderMaterial({
        vertexShader: `
          varying vec3 vNormal;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          varying vec3 vNormal;
          void main() {
            float intensity = pow(0.7 - dot(vNormal, vec3(0, 0, 1.0)), 2.0);
            gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity;
          }
        `,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
        transparent: true,
      });

      const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
      scene.add(atmosphere);
    };

    // Create location points
    const createPoints = () => {
      const pointsGroup = new THREE.Group();
      pointsRef.current = pointsGroup;

      filteredLocations.forEach((location) => {
        const [lat, lng] = location.coords;
        const phi = (90 - lat) * (Math.PI / 180);
        const theta = (lng + 180) * (Math.PI / 180);

        const radius = 1.01;
        const x = -(radius * Math.sin(phi) * Math.cos(theta));
        const y = radius * Math.cos(phi);
        const z = radius * Math.sin(phi) * Math.sin(theta);

        // Create point
        const pointGeometry = new THREE.SphereGeometry(0.02, 16, 16);
        const pointColor = location.type === "office" ? 0x10b981 : 0x3b82f6;
        const pointMaterial = new THREE.MeshPhongMaterial({
          color: pointColor,
          emissive: pointColor,
          emissiveIntensity: 0.3,
          shininess: 30,
        });

        const point = new THREE.Mesh(pointGeometry, pointMaterial);
        point.position.set(x, y, z);
        point.userData = location;

        // Create glow effect
        const glowGeometry = new THREE.SphereGeometry(0.03, 16, 16);
        const glowMaterial = new THREE.MeshBasicMaterial({
          color: pointColor,
          transparent: true,
          opacity: 0.3,
        });
        const glow = new THREE.Mesh(glowGeometry, glowMaterial);
        glow.position.set(x, y, z);

        // Create pulsing ring
        const ringGeometry = new THREE.RingGeometry(0.02, 0.03, 32);
        const ringMaterial = new THREE.MeshBasicMaterial({
          color: pointColor,
          transparent: true,
          opacity: 0.5,
          side: THREE.DoubleSide,
        });
        const ring = new THREE.Mesh(ringGeometry, ringMaterial);
        ring.position.set(x, y, z);
        ring.lookAt(0, 0, 0);

        pointsGroup.add(glow);
        pointsGroup.add(point);
        pointsGroup.add(ring);

        // Store references for animation
        point.userData.glow = glow;
        point.userData.ring = ring;
      });

      scene.add(pointsGroup);
    };

    // Create stars
    const createStars = () => {
      const starsGeometry = new THREE.BufferGeometry();
      const starPositions = [];

      for (let i = 0; i < 5000; i++) {
        const radius = 50;
        const x = (Math.random() - 0.5) * radius;
        const y = (Math.random() - 0.5) * radius;
        const z = (Math.random() - 0.5) * radius;
        starPositions.push(x, y, z);
      }

      starsGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(starPositions, 3)
      );

      const starsMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.1,
        transparent: true,
        opacity: 0.8,
      });

      const stars = new THREE.Points(starsGeometry, starsMaterial);
      scene.add(stars);
    };

    // Mouse interaction
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      setMousePosition({ x: event.clientX, y: event.clientY });

      raycaster.setFromCamera(mouse, camera);

      if (pointsRef.current) {
        const intersects = raycaster.intersectObjects(
          pointsRef.current.children,
          true
        );

        if (intersects.length > 0) {
          const intersectedObject = intersects[0].object;
          if (intersectedObject.userData && intersectedObject.userData.name) {
            setHoveredLocation(intersectedObject.userData as Location);
            canvas.style.cursor = "pointer";
          }
        } else {
          setHoveredLocation(null);
          canvas.style.cursor = "default";
        }
      }
    };

    canvas.addEventListener("mousemove", onMouseMove);

    // Initialize scene elements
    createEarth();
    createPoints();
    createStars();
    setIsLoaded(true);

    // Animation loop
    let time = 0;
    const animate = () => {
      time += 0.01;
      controls.update();

      // Animate points
      if (pointsRef.current) {
        pointsRef.current.children.forEach((child, index) => {
          if (child.userData && child.userData.ring) {
            const scale = 1 + Math.sin(time * 2 + index) * 0.2;
            child.userData.ring.scale.setScalar(scale);
            child.userData.ring.material.opacity =
              0.3 + Math.sin(time * 2 + index) * 0.2;
          }
        });
      }

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!camera || !renderer) return;

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", onMouseMove);

      // Cleanup Three.js objects
      scene.clear();
      renderer.dispose();
    };
  }, [filteredLocations]);

  // GSAP animation for  entrance
  useEffect(() => {
    if (containerRef.current) {
      gsap.from(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
    >
      {/* Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen sm:pt-0 pt-[16px] sm:pb-0 pb-6 px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1
            className="sm:text-5xl text-2xl font-bold sm:mb-6 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Global Presence
          </motion.h1>

          <motion.p
            className="sm:text-xl text-[16px] text-slate-300 sm:mb-8 mb-4 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Connecting with partners across{" "}
            <span className="text-blue-400 font-semibold">
              {
                new Set(
                  locations
                    .filter((l) => l.type === "client")
                    .map((l) => l.name)
                ).size
              }
            </span>{" "}
            countries worldwide
          </motion.p>
        </motion.div>

        {/* Filter controls */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 sm:mb-12 mb-7"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-4 py-2 sm:text-[16px] text-sm rounded-full transition-all ${
              activeFilter === "all"
                ? "bg-white/20 backdrop-blur-sm border border-white/30 text-white"
                : "bg-white/5 hover:bg-white/10 border border-transparent text-slate-300"
            }`}
          >
            Show All
          </button>
          <button
            onClick={() => setActiveFilter("client")}
            className={`px-4 py-2 sm:text-[16px] text-sm rounded-full transition-all ${
              activeFilter === "client"
                ? "bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-300"
                : "bg-blue-500/5 hover:bg-blue-500/10 border border-transparent text-slate-300"
            }`}
          >
            Client Locations
          </button>
          <button
            onClick={() => setActiveFilter("office")}
            className={`px-4 py-2 sm:text-[16px] text-sm rounded-full transition-all ${
              activeFilter === "office"
                ? "bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 text-emerald-300"
                : "bg-emerald-500/5 hover:bg-emerald-500/10 border border-transparent text-slate-300"
            }`}
          >
            Our Offices
          </button>

          {regions.length > 0 && (
            <select
              value={selectedRegion || ""}
              onChange={(e) => setSelectedRegion(e.target.value || null)}
              className="px-4 py-2 sm:text-[16px] text-sm rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Regions</option>
              {regions.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          )}
        </motion.div>

        {/* Stats */}
        <motion.div
          ref={statsRef}
          className="grid grid-cols-1 md:grid-cols-3 sm:gap-8 gap-5 max-w-4xl mx-auto w-full sm:w-fit"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 50 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <div className="text-center bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <div className="text-4xl font-bold text-blue-400 mb-2">
              {locations.filter((l) => l.type === "client").length}
            </div>
            <div className="text-slate-300">Client Locations</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <div className="text-4xl font-bold text-purple-400 mb-2">
              {regions.length}
            </div>
            <div className="text-slate-300">Regions Covered</div>
          </div>
          <div className="text-center bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
            <div className="text-4xl font-bold text-emerald-400 mb-2">
              {locations.filter((l) => l.type === "office").length}
            </div>
            <div className="text-slate-300">Global Offices</div>
          </div>
        </motion.div>
      </div>

      {/* Location tooltip */}
      {hoveredLocation && (
        <motion.div
          className="absolute z-50 pointer-events-none"
          style={{
            left: mousePosition.x + 20,
            top: mousePosition.y - 60,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
        >
          <div className="bg-black/80 backdrop-blur-sm text-white px-4 py-3 rounded-lg border border-white/20 shadow-xl">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-lg">
                {getFlagEmoji(hoveredLocation.name)}
              </span>
              <span className="font-semibold">{hoveredLocation.name}</span>
            </div>
            <div
              className={`text-xs px-2 py-1 rounded-full inline-block ${
                hoveredLocation.type === "client"
                  ? "bg-blue-500/30 text-blue-300"
                  : "bg-emerald-500/30 text-emerald-300"
              }`}
            >
              {hoveredLocation.type === "client"
                ? "Client Location"
                : "Our Office"}
            </div>
            {hoveredLocation.region && (
              <div className="text-xs text-slate-300 mt-1">
                {hoveredLocation.region}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default InteractiveEarth;
