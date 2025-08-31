// "use client";

// import { motion } from "framer-motion";
// import { IndustriesGridData } from "@/types/lang";
// import SectionHeading from "@/components/ui/section-heading";
// import Link from "next/link";

// export default function IndustriesGrid({ data }: { data: IndustriesGridData }) {
//   return (
//     <section className="py-20 px-4 max-w-7xl mx-auto">
//       <SectionHeading title={data.title} description={data.description} />

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {data.industries.map((industry) => (
//           <IndustryCard key={industry.id} {...industry} />
//         ))}
//       </div>
//     </section>
//   );
// }

// function IndustryCard(industry: {
//   id: number;
//   name: string;
//   icon: string;
//   color: string;
//   image: string;
// }) {
//   return (
//     <motion.div
//       whileHover={{ y: -10 }}
//       className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
//     >
//       <div
//         className={`h-48 ${industry.color} flex items-center justify-center`}
//         style={{
//           backgroundImage: `url(${industry.image})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <span className="text-4xl bg-white bg-opacity-80 p-4 rounded-full">
//           {industry.icon}
//         </span>
//       </div>
//       <div className="p-6">
//         <h3 className="text-2xl font-bold text-gray-800 mb-2">
//           {industry.name}
//         </h3>
//         <Link
//           href={`#industry-${industry.id}`}
//           className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
//         >
//           Learn more →
//         </Link>
//       </div>
//     </motion.div>
//   );
// }

// Updated industries-grid.tsx with enhanced animations
// "use client";

// import { motion } from "framer-motion";
// import { IndustriesGridData } from "@/types/lang";
// import SectionHeading from "@/components/ui/section-heading";
// import Link from "next/link";

// export default function IndustriesGrid({ data }: { data: IndustriesGridData }) {
//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const item = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0 },
//   };

//   return (
//     <section className="py-20 px-4 max-w-7xl mx-auto">
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         viewport={{ once: true }}
//       >
//         <SectionHeading title={data.title} description={data.description} />
//       </motion.div>

//       <motion.div
//         variants={container}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true }}
//         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//       >
//         {data.industries.map((industry) => (
//           <motion.div key={industry.id} variants={item}>
//             <IndustryCard {...industry} />
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// }

// function IndustryCard(industry: {
//   id: number;
//   name: string;
//   icon: string;
//   color: string;
//   image: string;
// }) {
//   return (
//     <motion.div
//       whileHover={{
//         y: -10,
//         transition: { type: "spring", stiffness: 300 },
//       }}
//       whileTap={{ scale: 0.95 }}
//       className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
//     >
//       <motion.div
//         className={`h-48 ${industry.color} flex items-center justify-center relative overflow-hidden`}
//         style={{
//           backgroundImage: `url(${industry.image})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//         whileHover={{ scale: 1.05 }}
//       >
//         <motion.span
//           className="text-4xl bg-white bg-opacity-80 p-4 rounded-full z-10"
//           animate={{
//             scale: [1, 1.1, 1],
//             rotate: [0, 5, -5, 0],
//           }}
//           transition={{
//             duration: 2,
//             repeat: Infinity,
//             repeatDelay: 2,
//           }}
//         >
//           {industry.icon}
//         </motion.span>
//         <motion.div
//           className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300"
//           whileHover={{ backgroundColor: "rgba(0,0,0,0.1)" }}
//         />
//       </motion.div>
//       <div className="p-6">
//         <h3 className="text-2xl font-bold text-gray-800 mb-2">
//           {industry.name}
//         </h3>
//         <Link href={`#industry-${industry.id}`} className="inline-block">
//           <motion.div
//             whileHover={{ x: 5 }}
//             className="text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center"
//           >
//             Learn more
//             <motion.span
//               animate={{ x: [0, 5, 0] }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//               }}
//               className="ml-1"
//             >
//               →
//             </motion.span>
//           </motion.div>
//         </Link>
//       </div>
//     </motion.div>
//   );
// }

// import { motion } from "framer-motion";
// import { IndustryData } from "@/types/lang";

// interface IndustriesGridProps {
//   data: {
//     title: string;
//     subtitle: string;
//     industries: IndustryData[];
//   };
// }

// export default function IndustriesGrid({ data }: IndustriesGridProps) {
//   return (
//     <section className="py-20 px-4 max-w-7xl mx-auto">
//       <div className="text-center mb-16">
//         <h2 className="text-4xl font-bold text-gray-900 mb-4">{data.title}</h2>
//         <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//           {data.subtitle}
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {data.industries.map((industry) => (
//           <motion.div
//             key={industry.id}
//             whileHover={{ y: -10 }}
//             className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
//           >
//             <div
//               className={`h-48 ${industry.color} flex items-center justify-center`}
//               style={{
//                 backgroundImage: `url(${industry.image})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               <span className="text-4xl bg-white bg-opacity-80 p-4 rounded-full">
//                 {industry.icon}
//               </span>
//             </div>
//             <div className="p-6">
//               <h3 className="text-2xl font-bold text-gray-800 mb-2">
//                 {industry.name}
//               </h3>
//               <p className="text-gray-600 mb-4">{industry.description}</p>
//               <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
//                 Learn more →
//               </button>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

// import { motion } from "framer-motion";
// import { IndustryData } from "@/types/lang";

// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// };

// const item = {
//   hidden: { opacity: 0, y: 20 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
// };

// interface IndustriesGridProps {
//   data: {
//     title: string;
//     subtitle: string;
//     industries: IndustryData[];
//   };
// }

// export default function IndustriesGrid({ data }: IndustriesGridProps) {
//   return (
//     <motion.section
//       className="py-20 px-4 max-w-7xl mx-auto"
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true, margin: "-100px" }}
//       variants={container}
//     >
//       <motion.div className="text-center mb-16" variants={item}>
//         <h2 className="text-4xl font-bold text-gray-900 mb-4">{data.title}</h2>
//         <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//           {data.subtitle}
//         </p>
//       </motion.div>

//       <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {data.industries.map((industry) => (
//           <motion.div
//             key={industry.id}
//             variants={item}
//             whileHover={{
//               y: -10,
//               transition: { duration: 0.3 },
//             }}
//             className="bg-white rounded-xl shadow-lg overflow-hidden"
//           >
//             <div
//               className={`h-48 ${industry.color} flex items-center justify-center`}
//               style={{
//                 backgroundImage: `url(${industry.image})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//               }}
//             >
//               <motion.span
//                 className="text-4xl bg-white bg-opacity-80 p-4 rounded-full"
//                 whileHover={{ rotate: 10, scale: 1.1 }}
//               >
//                 {industry.icon}
//               </motion.span>
//             </div>
//             <div className="p-6">
//               <h3 className="text-2xl font-bold text-gray-800 mb-2">
//                 {industry.name}
//               </h3>
//               <p className="text-gray-600 mb-4">{industry.description}</p>
//               <motion.button
//                 className="text-blue-600 font-medium"
//                 whileHover={{ x: 5 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 Learn more →
//               </motion.button>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </motion.section>
//   );
// }
"use client";
import SectionHeading from "@/components/ui/section-heading";
import { IndustryData } from "@/types/lang";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface IndustriesGridProps {
  data: {
    title: string;
    subtitle: string;
    industries: IndustryData[];
  };
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

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

export default function IndustriesGrid({ data }: IndustriesGridProps) {
  return (
    <motion.section
      className="sm:py-10 py-7 px-4 max-w-7xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* <motion.div className="text-center mb-16" variants={itemVariants}>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">{data.title}</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {data.subtitle}
        </p>
      </motion.div> */}
      <SectionHeading title={data.title} description={data.subtitle} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-8 gap-5">
        {(data.industries ?? []).slice(0, 9).map((industry) => (
          <motion.div
            key={industry.id}
            variants={itemVariants}
            whileHover={{
              y: -10,
              transition: { duration: 0.3 },
            }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div
              className={`h-48 ${industry.color} flex items-center justify-center`}
              style={{
                backgroundImage: `url(${industry.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <motion.span
                className="text-4xl bg-white bg-opacity-80 p-4 rounded-full"
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                {industry.icon}
              </motion.span>
            </div>
            <div className="sm:p-4 p-2.5">
              <h3 className="sm:text-xl text-base font-bold text-gray-800 mb-2">
                {industry.name}
              </h3>
              <p className="sm:text-base text-sm text-gray-600 mb-4">
                {industry.description}
              </p>
              {/* <motion.button
                className="text-primary font-medium"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Learn more →
              </motion.button> */}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center mx-auto sm:pt-10 pt-7 sm:pb-3.5 pb-9">
        <Button
          href="/industries/all"
          variant="primaryLink"
          className="sm:px-20 px-9"
        >
          Show More Industries
        </Button>
      </div>
    </motion.section>
  );
}
