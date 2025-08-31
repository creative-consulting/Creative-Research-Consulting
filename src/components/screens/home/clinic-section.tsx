// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import SectionHeading from "@/components/ui/section-heading";
// import { FaCar, FaMotorcycle } from "react-icons/fa";
// import { IoMdSpeedometer } from "react-icons/io";
// import { GiSteeringWheel } from "react-icons/gi";
// import { MdPrecisionManufacturing } from "react-icons/md";
// import { BiAnalyse } from "react-icons/bi";
// import { BsGraphUp } from "react-icons/bs";
// // import { ClinicSectionData, ClinicService } from "@/types/home";

// const featureIcons: Record<string, React.ReactNode> = {
//   conducted: <IoMdSpeedometer className="w-5 h-5" />,
//   prototype: <GiSteeringWheel className="w-5 h-5" />,
//   assesses: <BiAnalyse className="w-5 h-5" />,
//   helps: <MdPrecisionManufacturing className="w-5 h-5" />,
//   interactive: <IoMdSpeedometer className="w-5 h-5" />,
//   exploration: <GiSteeringWheel className="w-5 h-5" />,
//   ideal: <BsGraphUp className="w-5 h-5" />,
// };

// const ClinicCard: React.FC<{
//   service: ClinicService;
//   icon: React.ReactNode;
//   color: string;
// }> = ({ service, icon, color }) => {
//   const cardVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//     hover: {
//       y: -5,
//       boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
//     },
//   };

//   return (
//     <motion.div
//       initial="hidden"
//       whileInView="visible"
//       whileHover="hover"
//       variants={cardVariants}
//       viewport={{ once: true, margin: "-50px" }}
//       className={`bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:border-${color}-100`}
//     >
//       <div className="p-6">
//         <div className="flex items-start gap-4 mb-4">
//           <div
//             className={`flex-shrink-0 w-12 h-12 rounded-lg bg-${color}-50 flex items-center justify-center text-${color}-600`}
//           >
//             {icon}
//           </div>
//           <div>
//             <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
//             <p className="text-gray-600 mt-1">{service.description}</p>
//           </div>
//         </div>

//         <div className="mt-6 space-y-3">
//           {service.features.map((feature, idx) => (
//             <div key={idx} className="flex items-start gap-3">
//               <span className={`text-${color}-500 mt-0.5 flex-shrink-0`}>
//                 {featureIcons[feature.split(" ")[0].toLowerCase()] ||
//                   featureIcons.conducted}
//               </span>
//               <p className="text-gray-700">{feature}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const ClinicSection: React.FC<{ data: ClinicSectionData }> = ({ data }) => {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container px-4 mx-auto sm:px-6 lg:px-8">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           variants={containerVariants}
//           viewport={{ once: true }}
//           className="max-w-4xl mx-auto text-center mb-12"
//         >
//           <SectionHeading
//             title={data.heading}
//             description={data.subHeading}
//             // center={true}
//           />
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
//           <ClinicCard
//             service={data.carClinic}
//             icon={<FaCar className="w-6 h-6" />}
//             color="primary"
//           />
//           <ClinicCard
//             service={data.bikeClinic}
//             icon={<FaMotorcycle className="w-6 h-6" />}
//             color="blue"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ClinicSection;
