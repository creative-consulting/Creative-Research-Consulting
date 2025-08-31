// "use client";

// import { MethodologySectionData } from "@/types/lang";
// import SectionHeading from "@/components/ui/section-heading";

// export default function MethodologySection({
//   data,
// }: {
//   data: MethodologySectionData;
// }) {
//   return (
//     <section className="py-20 bg-gray-100">
//       <div className="max-w-7xl mx-auto px-4">
//         <SectionHeading title={data.title} description={data.description} />

//         <div className="grid md:grid-cols-3 gap-8">
//           {data.items.map((item, index) => (
//             <MethodologyCard key={index} {...item} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function MethodologyCard({
//   icon,
//   title,
//   description,
// }: {
//   icon: string;
//   title: string;
//   description: string;
// }) {
//   return (
//     <div className="bg-white p-8 rounded-xl shadow-md">
//       <div className="text-blue-600 text-4xl mb-4">{icon}</div>
//       <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
//       <p className="text-gray-600">{description}</p>
//     </div>
//   );
// }

// Updated methodology.tsx with animations
// "use client";

// import { motion } from "framer-motion";
// import { MethodologySectionData } from "@/types/lang";

// export default function MethodologySection({
//   data,
// }: {
//   data: MethodologySectionData;
// }) {
//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const item = {
//     hidden: { opacity: 0, y: 50 },
//     show: { opacity: 1, y: 0 },
//   };

//   return (
//     <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//             {data.title}
//           </h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             {data.description}
//           </p>
//         </motion.div>

//         <motion.div
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, margin: "-100px" }}
//           className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
//         >
//           {data.items.map((method, index) => (
//             <motion.div
//               key={index}
//               variants={item}
//               whileHover={{
//                 y: -10,
//                 transition: { type: "spring", stiffness: 200 },
//               }}
//               className="bg-white p-8 rounded-xl shadow-md"
//             >
//               <motion.div
//                 className="text-4xl mb-6"
//                 animate={{
//                   rotate: [0, 10, -10, 0],
//                   scale: [1, 1.1, 1.1, 1],
//                 }}
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity,
//                   repeatDelay: 3,
//                 }}
//               >
//                 {method.icon}
//               </motion.div>
//               <h3 className="text-xl font-bold text-gray-800 mb-3">
//                 {method.title}
//               </h3>
//               <p className="text-gray-600">{method.description}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// import { MethodologyData } from "@/types/lang";

// interface MethodologySectionProps {
//   data: {
//     title: string;
//     subtitle: string;
//     methods: MethodologyData[];
//   };
// }

// export default function MethodologySection({ data }: MethodologySectionProps) {
//   return (
//     <section className="py-20 bg-gray-100">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             {data.title}
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             {data.subtitle}
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {data.methods.map((method, index) => (
//             <div key={index} className="bg-white p-8 rounded-xl shadow-md">
//               <div className="text-blue-600 text-4xl mb-4">{method.icon}</div>
//               <h3 className="text-xl font-bold text-gray-800 mb-3">
//                 {method.title}
//               </h3>
//               <p className="text-gray-600">{method.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import { motion } from "framer-motion";
import { MethodologyData } from "@/types/lang";
import SectionHeading from "@/components/ui/section-heading";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

interface MethodologySectionProps {
  data: {
    title: string;
    subtitle: string;
    methods: MethodologyData[];
  };
}

export default function MethodologySection({ data }: MethodologySectionProps) {
  return (
    <motion.section
      className="sm:py-8 py-5 bg-gray-100"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
    >
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading title={data.title} description={data.subtitle} />
        {/* <motion.div className="text-center mb-16" variants={item}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {data.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {data.subtitle}
          </p>
        </motion.div> */}

        <motion.div className="grid md:grid-cols-3 sm:gap-8 gap-5">
          {data.methods.map((method, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 },
              }}
              className="bg-white sm:p-6 p-2 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <motion.div
                className="text-blue-600 text-4xl sm:mb-2.5 mb-1.5"
                // whileHover={{ scale: 1.1 }}
              >
                {method.icon}
              </motion.div>
              <h3 className="sm:text-lg text-base font-bold text-gray-800 sm:mb-1.5 mb-1">
                {method.title}
              </h3>
              <p className="text-black sm:text-base text-sm">
                {method.description}
              </p>
              {method.list && (
                <ul className="list-disc  mt-3 text-gray-500 flex flex-col gap-2 ml-4">
                  {method.list.map((item, idx) => (
                    <li className="sm:text-base text-sm" key={idx}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
