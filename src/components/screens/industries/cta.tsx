// "use client";

// import { motion } from "framer-motion";
// import { IndustriesCtaData } from "@/types/lang";
// import { SupportedLang } from "@/types/lang";

// export default function CtaSection({
//   data,
//   lang,
// }: {
//   data: IndustriesCtaData;
//   lang: SupportedLang;
// }) {
//   return (
//     <section className="py-20 px-4 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
//       <div className="max-w-4xl mx-auto text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: -30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-3xl md:text-4xl font-bold mb-6"
//         >
//           {data.title}
//         </motion.h2>

//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="text-lg md:text-xl mb-8"
//         >
//           {data.description}
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{
//             type: "spring",
//             stiffness: 100,
//             damping: 10,
//             delay: 0.4,
//           }}
//           viewport={{ once: true }}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="inline-block"
//         >
//           <a
//             href={`/${lang}/contact`}
//             className="bg-white text-blue-900 font-semibold px-8 py-4 rounded-full hover:bg-blue-100 transition-all duration-300 shadow-lg inline-block"
//           >
//             {data.ctaText}
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
