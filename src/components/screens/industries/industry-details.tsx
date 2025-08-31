// "use client";

// import { IndustryDetailsData } from "@/types/lang";
// import { motion } from "framer-motion";

// export default function IndustryDetails({
//   data,
// }: {
//   data: IndustryDetailsData;
// }) {
//   return (
//     <section className="py-20 px-4 max-w-7xl mx-auto">
//       {data.industries.map((industry) => (
//         <div key={industry.id} className="mb-32">
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="flex flex-col md:flex-row gap-8 mb-12"
//           >
//             <div className="md:w-1/3">
//               <div
//                 className={`h-64 rounded-xl ${industry.color} flex items-center justify-center`}
//                 style={{
//                   backgroundImage: `url(${industry.image})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                 }}
//               >
//                 <span className="text-6xl bg-white bg-opacity-80 p-6 rounded-full">
//                   {industry.icon}
//                 </span>
//               </div>
//             </div>
//             <div className="md:w-2/3">
//               <h2 className="text-3xl font-bold text-gray-800 mb-4">
//                 {industry.name}
//               </h2>
//               <p className="text-lg text-gray-600 mb-6">{industry.overview}</p>
//             </div>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {industry.keyFocusAreas.map((area, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="bg-white p-6 rounded-xl shadow-md"
//               >
//                 <h3 className="text-xl font-bold text-gray-800 mb-4">
//                   {area.title}
//                 </h3>
//                 <ul className="space-y-2">
//                   {area.items.map((item, itemIndex) => (
//                     <li key={itemIndex} className="flex items-start">
//                       <svg
//                         className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M5 13l4 4L19 7"
//                         />
//                       </svg>
//                       <span className="text-gray-600">{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// }
// Updated industry-details.tsx with enhanced animations
// "use client";

// import { IndustryDetailsData } from "@/types/lang";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { useEffect, useRef } from "react";

// export default function IndustryDetails({
//   data,
// }: {
//   data: IndustryDetailsData;
// }) {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   // Parallax effect for background elements
//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

//   // Handle smooth scrolling when clicking industry links
//   useEffect(() => {
//     const handleHashChange = () => {
//       const hash = window.location.hash;
//       if (hash) {
//         const element = document.querySelector(hash);
//         if (element) {
//           element.scrollIntoView({
//             behavior: "smooth",
//             block: "start",
//           });
//         }
//       }
//     };

//     // Initial check on load
//     handleHashChange();

//     // Listen for hash changes
//     window.addEventListener("hashchange", handleHashChange);

//     return () => {
//       window.removeEventListener("hashchange", handleHashChange);
//     };
//   }, []);

//   return (
//     <section
//       ref={containerRef}
//       className="py-20 px-4 max-w-7xl mx-auto relative overflow-hidden"
//     >
//       {/* Animated background elements */}
//       <motion.div className="absolute inset-0 -z-10 opacity-10" style={{ y }}>
//         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 rounded-full filter blur-3xl" />
//       </motion.div>

//       {data.industries.map((industry, industryIndex) => {
//         const isEven = industryIndex % 2 === 0;

//         return (
//           <div
//             key={industry.id}
//             className="mb-32"
//             id={`industry-${industry.id}`}
//           >
//             {/* Header with alternating layout */}
//             <motion.div
//               initial={{ opacity: 0, x: isEven ? -100 : 100 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{
//                 duration: 0.8,
//                 type: "spring",
//                 stiffness: 50,
//               }}
//               viewport={{ once: true, margin: "-100px" }}
//               className={`flex flex-col md:flex-row gap-8 mb-12 ${
//                 isEven ? "" : "md:flex-row-reverse"
//               }`}
//             >
//               <div className="md:w-1/3">
//                 <motion.div
//                   whileHover={{ scale: 1.03 }}
//                   className={`h-64 rounded-xl ${industry.color} flex items-center justify-center overflow-hidden relative`}
//                   style={{
//                     backgroundImage: `url(${industry.image})`,
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                   }}
//                 >
//                   {/* Subtle parallax effect on image */}
//                   <motion.div
//                     className="absolute inset-0"
//                     style={{
//                       y: useTransform(scrollYProgress, [0, 1], [0, 20]),
//                     }}
//                   />
//                   <motion.span
//                     className="text-6xl bg-white bg-opacity-80 p-6 rounded-full z-10"
//                     animate={{
//                       rotate: [0, 10, -10, 0],
//                       scale: [1, 1.1, 1.1, 1],
//                     }}
//                     transition={{
//                       duration: 2,
//                       repeat: Infinity,
//                       repeatDelay: 3,
//                     }}
//                   >
//                     {industry.icon}
//                   </motion.span>
//                 </motion.div>
//               </div>
//               <div className="md:w-2/3">
//                 <motion.h2
//                   className="text-3xl font-bold text-gray-800 mb-4"
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.2 }}
//                   viewport={{ once: true }}
//                 >
//                   {industry.name}
//                 </motion.h2>
//                 <motion.p
//                   className="text-lg text-gray-600 mb-6"
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.4 }}
//                   viewport={{ once: true }}
//                 >
//                   {industry.overview}
//                 </motion.p>
//               </div>
//             </motion.div>

//             {/* Key focus areas with staggered animation */}
//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, margin: "-50px" }}
//               variants={{
//                 hidden: { opacity: 0 },
//                 visible: {
//                   opacity: 1,
//                   transition: {
//                     staggerChildren: 0.1,
//                   },
//                 },
//               }}
//               className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
//             >
//               {industry.keyFocusAreas.map((area, index) => (
//                 <motion.div
//                   key={index}
//                   variants={{
//                     hidden: { opacity: 0, y: 50 },
//                     visible: {
//                       opacity: 1,
//                       y: 0,
//                       transition: {
//                         type: "spring",
//                         stiffness: 50,
//                       },
//                     },
//                   }}
//                   whileHover={{
//                     y: -5,
//                     boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
//                   }}
//                   className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
//                 >
//                   <h3 className="text-xl font-bold text-gray-800 mb-4">
//                     {area.title}
//                   </h3>
//                   <ul className="space-y-2">
//                     {area.items.map((item, itemIndex) => (
//                       <motion.li
//                         key={itemIndex}
//                         className="flex items-start"
//                         initial={{ opacity: 0, x: -20 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ delay: itemIndex * 0.05 + index * 0.1 }}
//                         viewport={{ once: true }}
//                       >
//                         <motion.svg
//                           className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           stroke="currentColor"
//                           animate={{
//                             scale: [1, 1.2, 1],
//                             rotate: [0, 10, -10, 0],
//                           }}
//                           transition={{
//                             duration: 0.5,
//                             delay: itemIndex * 0.1,
//                           }}
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth={2}
//                             d="M5 13l4 4L19 7"
//                           />
//                         </motion.svg>
//                         <span className="text-gray-600">{item}</span>
//                       </motion.li>
//                     ))}
//                   </ul>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </div>
//         );
//       })}
//     </section>
//   );
// }
