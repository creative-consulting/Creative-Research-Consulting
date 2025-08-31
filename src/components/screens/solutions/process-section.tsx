// // "use client";

// // import { motion } from "framer-motion";
// // import { ProcessSectionData } from "@/types/lang";
// // import SectionHeading from "@/components/ui/section-heading";

// // export default function ProcessSection({ data }: { data: ProcessSectionData }) {
// //   return (
// //     <section className="py-20 px-4 max-w-7xl mx-auto">
// //       <SectionHeading title={data.title} description={data.description} />

// //       <div className="relative">
// //         <div className="hidden md:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-gradiant-one via-gradiant-two to-gradaint-three-ml-0.5"></div>

// //         <div className="space-y-12 md:space-y-0">
// //           {data.steps.map((step, index) => (
// //             <ProcessStep key={step.step} {...step} index={index} />
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // function ProcessStep({
// //   step,
// //   title,
// //   description,
// //   icon,
// //   index,
// // }: {
// //   step: string;
// //   title: string;
// //   description: string;
// //   icon: string;
// //   index: number;
// // }) {
// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
// //       whileInView={{ opacity: 1, x: 0 }}
// //       transition={{ duration: 0.5, delay: index * 0.1 }}
// //       viewport={{ once: true }}
// //       className={`relative flex flex-col md:flex-row items-center ${
// //         index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
// //       } mb-8`}
// //     >
// //       <div
// //         className={`flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-gradiant-one via-gradiant-two to-gradaint-three text-white text-2xl font-bold z-10 ${
// //           index % 2 === 0 ? "md:mr-8" : "md:ml-8"
// //         }`}
// //       >
// //         {step}
// //       </div>
// //       <div
// //         className={`flex-grow mt-4 md:mt-0 ${
// //           index % 2 === 0 ? "md:text-right" : "md:text-left"
// //         }`}
// //       >
// //         <div className="bg-white p-6 rounded-lg shadow-md">
// //           <div className="text-3xl mb-2">{icon}</div>
// //           <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
// //           <p className="text-gray-600">{description}</p>
// //         </div>
// //       </div>
// //     </motion.div>
// //   );
// // }

// // "use client";

// // import { motion } from "framer-motion";
// // import { ProcessSectionData } from "@/types/lang";
// // import SectionHeading from "@/components/ui/section-heading";

// // export default function ProcessSection({ data }: { data: ProcessSectionData }) {
// //   return (
// //     <section className="py-20 px-4 max-w-7xl mx-auto">
// //       <SectionHeading title={data.title} description={data.description} />

// //       <div className="relative">
// //         <div className="hidden md:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-gradiant-one via-gradiant-two to-gradaint-three-ml-0.5"></div>

// //         <div className="space-y-12 md:space-y-0">
// //           {data.steps.map((step, index) => (
// //             <ProcessStep key={step.step} {...step} index={index} />
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // function ProcessStep({
// //   step,
// //   title,
// //   description,
// //   icon,
// //   index,
// // }: {
// //   step: string;
// //   title: string;
// //   description: string;
// //   icon: string;
// //   index: number;
// // }) {
// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
// //       whileInView={{ opacity: 1, x: 0 }}
// //       transition={{ duration: 0.5, delay: index * 0.1 }}
// //       viewport={{ once: true }}
// //       className={`relative flex flex-col md:flex-row items-center ${
// //         index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
// //       } mb-8`}
// //     >
// //       <div
// //         className={`flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-gradiant-one via-gradiant-two to-gradaint-three text-white text-2xl font-bold z-10 ${
// //           index % 2 === 0 ? "md:mr-8" : "md:ml-8"
// //         }`}
// //       >
// //         {step}
// //       </div>
// //       <div
// //         className={`flex-grow mt-4 md:mt-0 ${
// //           index % 2 === 0 ? "md:text-right" : "md:text-left"
// //         }`}
// //       >
// //         <div className="bg-white p-6 rounded-lg shadow-md">
// //           <div className="text-3xl mb-2">{icon}</div>
// //           <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
// //           <p className="text-gray-600">{description}</p>
// //         </div>
// //       </div>
// //     </motion.div>
// //   );
// // }

// "use client";

// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useRef } from "react";
// import SectionHeading from "@/components/ui/section-heading";
// import { ProcessSectionData } from "@/types/lang";
// import { cn } from "@/lib/utils/cn";

// export default function ProcessSection({ data }: { data: ProcessSectionData }) {
//   return (
//     <section className="sm:py-9 sm:pb-0 pb-8 px-4 max-w-7xl mx-auto">
//       <SectionHeading title={data.title} description={data.description} />

//       <div className="relative sm:my-9">
//         <div className="hidden md:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-gradiant-one via-gradiant-two to-gradaint-three -ml-0.5"></div>

//         <div className="sm:space-y-24 space-y-8">
//           {data.steps.map((step, index) => (
//             <ProcessStep key={step.step} {...step} index={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function ProcessStep({
//   step,
//   title,
//   description,
//   icon,
//   dittails,
//   index,
// }: {
//   step: string;
//   title: string;
//   description: string;
//   icon: string;
//   dittails?: [
//     {
//       heading: string;
//       description: string;
//       image: string;
//       content: string[];
//     }
//   ];
//   index: number;
// }) {
//   const [isHovered, setIsHovered] = useState(false);
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const ref = useRef<HTMLDivElement>(null);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (ref.current) {
//       const rect = ref.current.getBoundingClientRect();
//       setPosition({
//         x: e.clientX - rect.left,
//         y: e.clientY - rect.top,
//       });
//     }
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//       viewport={{ once: true }}
//       className={`relative flex flex-col md:flex-row items-center ${
//         index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
//       }`}
//     >
//       {/* Step number circle */}
//       <div
//         className={`flex-shrink-0 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-gradiant-one via-gradiant-two to-gradaint-three text-white text-2xl font-bold z-10 border-4 border-white shadow-lg ${
//           index % 2 === 0 ? "md:mr-8" : "md:ml-8"
//         }`}
//       >
//         {step}
//       </div>

//       {/* Step content */}
//       <div
//         className={`flex-grow mt-6 md:mt-0 w-full ${
//           index % 2 === 0 ? "md:pr-8" : "md:pl-8"
//         }`}
//       >
//         <motion.div
//           ref={ref}
//           whileHover={{ scale: 1.02 }}
//           className={cn(
//             "bg-white sm:p-6 p-4 sm:h-[8rem] rounded-xl shadow-[0_0px_14px_-5px_rgba(0,0,0,0.25)] cursor-pointer relative overflow-hidden",
//             index % 2 === 0 ? "ml-auto" : "mr-auto"
//           )}
//           onMouseEnter={() => setIsHovered(true)}
//           onMouseLeave={() => setIsHovered(false)}
//           onMouseMove={handleMouseMove}
//         >
//           {/* Floating icon */}
//           <motion.div
//             initial={{ scale: 0.8 }}
//             animate={{ scale: isHovered ? 1.2 : 1 }}
//             transition={{ duration: 0.3 }}
//             className={cn(
//               "absolute -top-4 -right-4 text-6xl opacity-20",
//               index % 2 === 0 ? "right-4" : "left-4"
//             )}
//           >
//             {icon}
//           </motion.div>

//           <div
//             className={cn(
//               "relative z-10",
//               index % 2 === 0 ? "text-left" : "text-right"
//             )}
//           >
//             <h3 className="sm:text-lg text-base font-bold text-gray-800 mb-2 group">
//               <span className="inline-block  transition-colors duration-300">
//                 {title}
//               </span>
//             </h3>
//             <p className="text-gray-600 sm:text-base text-sm">{description}</p>
//           </div>

//           {/* Floating details tooltip */}
//         </motion.div>
//       </div>
//       <AnimatePresence>
//         {isHovered && dittails?.length && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{
//               opacity: 1,
//               scale: 1,
//               x: position.x - 200,
//               y: position.y - 150,
//             }}
//             exit={{ opacity: 0, scale: 0.9 }}
//             transition={{
//               type: "spring",
//               damping: 25,
//               stiffness: 300,
//             }}
//             className="absolute w-full bg-white p-4 rounded-lg shadow-xl z-20 pointer-events-none"
//             style={{
//               left: 0,
//               top: 0,
//               originX: 0.5,
//               originY: 0.5,
//             }}
//           >
//             <div className="space-y-2">
//               {dittails?.map(
//                 (
//                   dittail: {
//                     heading: string;
//                     description: string;
//                     image: string;
//                     content: string[];
//                   },
//                   i
//                 ) => (
//                   <div className="space-y-1" key={i}>
//                     <h4 className="text-sm font-bold text-black">
//                       {dittail.heading}
//                     </h4>
//                     <p className="text-xs text-gray-600">
//                       {dittail.description}
//                     </p>

//                     {dittail.content && (
//                       <ul className="space-y-1 mt-2">
//                         {dittail.content
//                           .slice(0, 3)
//                           .map((item: string, i: number) => (
//                             <li key={i} className="flex items-start">
//                               <span className="text-gradiant-two mr-1 text-xs">
//                                 •
//                               </span>
//                               <span className="text-xs text-gray-700">
//                                 {item}
//                               </span>
//                             </li>
//                           ))}
//                       </ul>
//                     )}
//                   </div>
//                 )
//               )}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { useState } from "react";
// import SectionHeading from "@/components/ui/section-heading";
import { ProcessSectionData } from "@/types/lang";
// import { cn } from "@/lib/utils/cn";
import { ChevronDown, ChevronUp } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useRef } from "react";
// import SectionHeading from "@/components/ui/section-heading";
// import { ProcessSectionData } from "@/types/lang";
// import { cn } from "@/lib/utils/cn";
// import { ChevronDown, ChevronUp } from "lucide-react";

export default function ProcessSection({ data }: { data: ProcessSectionData }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleStep = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="sm:py-7 py-4 px-4 sm:px-6 bg-gray-50"
    >
      <div className="sm:max-w-5xl max-w-full mx-auto">
        <h2 className="text-center sm:text-4xl text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gradiant-one via-gradiant-two to-gradaint-three sm:mb-2 mb-1.5 animate-glossy-gradient">
          {data.title}
        </h2>
        <p className="text-center text-gray-600 sm:text-lg text-base sm:mb-12 mb-8">
          {data.description}
        </p>

        <motion.div variants={containerVariants} className="space-y-4">
          {data.steps.map((step, index) => (
            <ProcessStep
              key={step.step}
              {...step}
              index={index}
              isActive={activeIndex === index}
              onToggle={() => toggleStep(index)}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

function ProcessStep({
  step,
  title,
  description,
  // icon,
  dittails,
  // index,
  isActive,
  onToggle,
}: {
  step: string;
  title: string;
  description: string;
  icon: string;
  dittails?: [
    {
      heading: string;
      description: string;
      image: string;
      content: string[];
    }
  ];
  index: number;
  isActive: boolean;
  onToggle: () => void;
}) {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200"
    >
      <button
        className="w-full cursor-pointer text-left p-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
        onClick={onToggle}
      >
        <div className="flex items-center">
          <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-gradiant-one via-gradiant-two to-gradaint-three text-white font-bold mr-4">
            {step}
          </div>
          <div className="text-left">
            <h3 className="sm:text-base text-sm font-semibold text-gray-800">
              {title}
            </h3>
            <p className="sm:text-sm text-xs text-gray-600 mt-1">
              {description}
            </p>
          </div>
        </div>
        {isActive ? (
          <ChevronUp className="h-5 w-5 text-black flex-shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-black flex-shrink-0" />
        )}
      </button>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isActive ? "auto" : 0,
          opacity: isActive ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-4 pb-4">
          {dittails && dittails.length > 0 && (
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              {dittails.map((detail, i) => (
                <div key={i} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    {detail.heading}
                  </h4>
                  <p className="text-gray-600 text-sm mb-2">
                    {detail.description}
                  </p>
                  {detail.content && detail.content.length > 0 && (
                    <ul className="list-disc list-inside space-y-1">
                      {detail.content.map((item, j) => (
                        <li key={j} className="text-gray-600 text-sm">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
