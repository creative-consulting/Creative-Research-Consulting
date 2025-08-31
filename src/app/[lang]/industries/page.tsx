// "use client";

// import { Canvas, useFrame } from "@react-three/fiber";
// import {
//   OrbitControls,
//   useTexture,
//   Environment,
//   Float,
// } from "@react-three/drei";
// import { motion } from "framer-motion";
// import { TypeAnimation } from "react-type-animation";
// import * as THREE from "three";
// import { useRef, Suspense } from "react";

// // 3D Industry Icons Component
// const IndustryIcons = () => {
//   const groupRef = useRef<THREE.Group>(null);

//   // Pexels.com image URLs for each industry
//   const pexelsImages: string[] = [
//     "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg", // Technology
//     "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg", // Healthcare
//     "https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg", // Finance
//     "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg", // Retail
//     "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg", // Manufacturing
//   ];

//   // Load textures for each image
//   const textures = useTexture(pexelsImages);

//   // Sample icons with images
//   const icons = [
//     { position: [0, 0, 0], size: 1, rotation: [0, 0, 0] }, // Center
//     { position: [3, 1, -2], size: 0.8, rotation: [0.2, 0.4, 0] },
//     { position: [-2, 2, 1], size: 0.7, rotation: [0.1, -0.3, 0.1] },
//     { position: [2, -1, -1], size: 0.6, rotation: [-0.2, 0.1, 0.3] },
//     { position: [-3, 0, 2], size: 0.9, rotation: [0.3, -0.2, -0.1] },
//   ];

//   useFrame(({ clock }) => {
//     if (groupRef.current) {
//       groupRef.current.rotation.y = clock.getElapsedTime() * 0.1;
//     }
//   });

//   return (
//     <group ref={groupRef}>
//       {icons.map((icon, index) => (
//         <Float
//           key={index}
//           speed={2 + index * 0.5}
//           rotationIntensity={0.5}
//           floatIntensity={0.5}
//         >
//           <mesh
//             position={icon.position as [number, number, number]}
//             rotation={icon.rotation as [number, number, number]}
//           >
//             <boxGeometry args={[icon.size, icon.size, icon.size]} />
//             {textures[index] && (
//               <>
//                 <meshStandardMaterial
//                   attach="material-0"
//                   map={textures[index]}
//                 />
//                 <meshStandardMaterial
//                   attach="material-1"
//                   map={textures[index]}
//                 />
//                 <meshStandardMaterial
//                   attach="material-2"
//                   map={textures[index]}
//                 />
//                 <meshStandardMaterial
//                   attach="material-3"
//                   map={textures[index]}
//                 />
//                 <meshStandardMaterial
//                   attach="material-4"
//                   map={textures[index]}
//                 />
//                 <meshStandardMaterial
//                   attach="material-5"
//                   map={textures[index]}
//                 />
//               </>
//             )}
//           </mesh>
//         </Float>
//       ))}
//     </group>
//   );
// };
// const IndustriesHero = () => {
//   return (
//     <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900 overflow-hidden">
//       {/* 3D Background */}
//       <div className="absolute inset-0 z-0">
//         <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
//           <ambientLight intensity={0.5} />
//           <pointLight position={[10, 10, 10]} intensity={1} />
//           <Suspense fallback={null}>
//             <IndustryIcons />
//             <Environment preset="city" />
//           </Suspense>
//           <OrbitControls
//             enableZoom={false}
//             autoRotate
//             autoRotateSpeed={0.5}
//             enablePan={false}
//           />
//         </Canvas>
//       </div>

//       {/* Hero Content */}
//       <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
//         >
//           <TypeAnimation
//             sequence={[
//               "Industry-Specific Insights",
//               1500,
//               "Sector-Focused Research",
//               1500,
//               "Tailored Market Intelligence",
//               1500,
//             ]}
//             wrapper="span"
//             speed={40}
//             style={{ display: "inline-block" }}
//             repeat={Infinity}
//           />
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8"
//         >
//           Deep-dive research across 16+ industries to uncover trends,
//           opportunities, and competitive advantages
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6, duration: 0.8 }}
//         >
//           <button className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-full hover:bg-blue-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
//             Explore Industries
//           </button>
//         </motion.div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-10 left-0 right-0 flex justify-center">
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ repeat: Infinity, duration: 2 }}
//         >
//           <svg
//             className="h-8 w-8 text-white"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M19 14l-7 7m0 0l-7-7m7 7V3"
//             />
//           </svg>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// // Industries Page Component
// export default function IndustriesPage() {
//   const industries = [
//     {
//       id: 1,
//       name: "Personal Care",
//       description:
//         "Skincare, cosmetics, hair care and wellness market insights",
//       icon: "💄",
//       color: "bg-pink-100 text-pink-600",
//       image:
//         "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg",
//     },
//     {
//       id: 2,
//       name: "Tobacco",
//       description: "Evolving consumption patterns and market dynamics",
//       icon: "🚬",
//       color: "bg-gray-100 text-gray-600",
//       image:
//         "https://images.pexels.com/photos/1267700/pexels-photo-1267700.jpeg",
//     },
//     {
//       id: 3,
//       name: "Smartphones",
//       description: "Consumer preferences and technological breakthroughs",
//       icon: "📱",
//       color: "bg-blue-100 text-blue-600",
//       image:
//         "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg",
//     },
//     {
//       id: 4,
//       name: "Home Care",
//       description: "Products and services for modern households",
//       icon: "🏠",
//       color: "bg-green-100 text-green-600",
//       image:
//         "https://images.pexels.com/photos/5824893/pexels-photo-5824893.jpeg",
//     },
//     {
//       id: 5,
//       name: "Food & Beverages",
//       description: "Consumer trends and product innovation",
//       icon: "🍽️",
//       color: "bg-red-100 text-red-600",
//       image: "https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg",
//     },
//     {
//       id: 6,
//       name: "Automotive",
//       description: "From traditional vehicles to cutting-edge technologies",
//       icon: "🚗",
//       color: "bg-yellow-100 text-yellow-600",
//       image: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg",
//     },
//   ];

//   return (
//     <div className="bg-gray-50">
//       <IndustriesHero />

//       {/* Industries Grid Section */}
//       <section className="py-20 px-4 max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             Our Industry Expertise
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Specialized research methodologies tailored to each sector&apos;s
//             unique challenges
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {industries.map((industry) => (
//             <motion.div
//               key={industry.id}
//               whileHover={{ y: -10 }}
//               className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
//             >
//               <div
//                 className={`h-48 ${industry.color} flex items-center justify-center`}
//                 style={{
//                   backgroundImage: `url(${industry.image})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                 }}
//               >
//                 <span className="text-4xl bg-white bg-opacity-80 p-4 rounded-full">
//                   {industry.icon}
//                 </span>
//               </div>
//               <div className="p-6">
//                 <h3 className="text-2xl font-bold text-gray-800 mb-2">
//                   {industry.name}
//                 </h3>
//                 <p className="text-gray-600 mb-4">{industry.description}</p>
//                 <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
//                   Learn more →
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Methodology Section */}
//       <section className="py-20 bg-gray-100">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">
//               Our Research Approach
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               Custom methodologies for each industry&apos;s unique requirements
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="bg-white p-8 rounded-xl shadow-md">
//               <div className="text-blue-600 text-4xl mb-4">🔍</div>
//               <h3 className="text-xl font-bold text-gray-800 mb-3">
//                 Industry-Specific Frameworks
//               </h3>
//               <p className="text-gray-600">
//                 Tailored research models that account for each sector&apos;s
//                 regulatory environment, competitive landscape, and consumer
//                 behaviors.
//               </p>
//             </div>

//             <div className="bg-white p-8 rounded-xl shadow-md">
//               <div className="text-blue-600 text-4xl mb-4">📊</div>
//               <h3 className="text-xl font-bold text-gray-800 mb-3">
//                 Cross-Industry Benchmarking
//               </h3>
//               <p className="text-gray-600">
//                 Comparative analysis that identifies best practices and
//                 innovation opportunities across different markets.
//               </p>
//             </div>

//             <div className="bg-white p-8 rounded-xl shadow-md">
//               <div className="text-blue-600 text-4xl mb-4">🚀</div>
//               <h3 className="text-xl font-bold text-gray-800 mb-3">
//                 Future-Focused Insights
//               </h3>
//               <p className="text-gray-600">
//                 Predictive modeling and trend analysis to anticipate market
//                 shifts before they happen.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-r from-gradiant-one via-gradiant-two to-gradaint-three text-white">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6">
//             Need Custom Industry Research?
//           </h2>
//           <p className="text-xl mb-8 max-w-3xl mx-auto">
//             Our team specializes in developing bespoke research solutions for
//             niche markets and emerging industries.
//           </p>
//           <button className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-full hover:bg-blue-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
//             Contact Our Experts
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// }
// import IndustriesHero from "@/components/screens/industries/hero";
// import IndustriesGrid from "@/components/screens/industries/industries-grid";
// import IndustryDetails from "@/components/screens/industries/industry-details";
// import MethodologySection from "@/components/screens/industries/methodology";
// import getLangData from "@/lib/translator/getLangData";
// import { SupportedLang } from "@/types/lang";

// const IndustriesPage = async ({
//   params,
// }: {
//   params: Promise<{ lang: SupportedLang }>;
// }) => {
//   const { lang } = await params;

//   // Fetch all data
//   const heroData = await getLangData(lang, "screen/industries/hero");
//   const industriesData = await getLangData(
//     lang,
//     "screen/industries/industries"
//   );
//   const methodologyData = await getLangData(
//     lang,
//     "screen/industries/methodology"
//   );
//   // const ctaData = await getLangData(lang, "screen/industries/cta");

//   return (
//     <div className="bg-gray-50">
//       {/* <IndustriesHero data={heroData} /> */}
//       <IndustriesGrid data={industriesData} />
//       <IndustryDetails data={industriesData} />
//       <MethodologySection data={methodologyData} />
//       {/* <CtaSection data={ctaData} lang={lang} /> */}
//     </div>
//   );
// };

// export default IndustriesPage;

// page.tsx (same as before)
// import IndustriesHero from "@/components/screens/industries/hero";
// import IndustriesGrid from "@/components/screens/industries/industries-grid";
// import IndustryDetails from "@/components/screens/industries/industry-details";
// import MethodologySection from "@/components/screens/industries/methodology";
// // import CtaSection from "@/components/screens/industries/cta-section";
// import getLangData from "@/lib/translator/getLangData";
// import { SupportedLang } from "@/types/lang";

// const IndustriesPage = async ({
//   params,
// }: {
//   params: Promise<{ lang: SupportedLang }>;
// }) => {
//   const { lang } = await params;

//   // Fetch all data
//   const heroData = await getLangData(lang, "screen/industries/hero");
//   const industriesData = await getLangData(
//     lang,
//     "screen/industries/industries"
//   );
//   const methodologyData = await getLangData(
//     lang,
//     "screen/industries/methodology"
//   );
//   // const ctaData = await getLangData(lang, "screen/industries/cta");

//   return (
//     <div className="bg-gray-50">
//       <IndustriesHero data={heroData} />
//       <IndustriesGrid data={industriesData} />
//       <IndustryDetails data={industriesData} />
//       <MethodologySection data={methodologyData} />
//       {/* <CtaSection data={ctaData} lang={lang} /> */}
//     </div>
//   );
// };

// export default IndustriesPage;

// import getLangData from "@/lib/translator/getLangData";
// import IndustriesHero from "@/components/screens/industries/hero-section";
// import IndustriesGrid from "@/components/screens/industries/industries-grid";
// import IndustriesCTA from "@/components/screens/industries/cta-section";
import IndustriesHero from "@/components/screens/industries/hero";
import IndustriesGrid from "@/components/screens/industries/industries-grid";
import MethodologySection from "@/components/screens/industries/methodology";
import getLangData from "@/lib/translator/getLangData";
import { IndustryData, MethodologyData, SupportedLang } from "@/types/lang";

const IndustriesPage = async ({
  params,
}: {
  params: Promise<{ lang: SupportedLang }>;
}) => {
  const { lang } = await params;
  interface IndustriesGridProps {
    title: string;
    subtitle: string;
    industries: IndustryData[];
  }

  interface MethodologySectionProps {
    title: string;
    subtitle: string;
    methods: MethodologyData[];
  }
  const heroData = await getLangData(lang, "screen/industries/hero");

  const industriesData: IndustriesGridProps = await getLangData(
    lang,
    "screen/industries/industries"
  );
  const methodologyData: MethodologySectionProps = await getLangData(
    lang,
    "screen/industries/methodology"
  );
  // const ctaData = await getLangData(lang, "screen/industries/cta");

  return (
    <>
      <IndustriesHero data={heroData} />
      <IndustriesGrid data={industriesData} />
      <MethodologySection data={methodologyData} />
      {/* <IndustriesCTA data={ctaData} /> */}
    </>
  );
};

export default IndustriesPage;
