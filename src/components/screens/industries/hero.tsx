// Updated hero.tsx with enhanced animations
"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { IndustriesHeroData } from "@/types/lang";
import IndustryIcons3D from "@/components/ui/industry-icons-3d";
import Link from "next/link";

export default function IndustriesHero({ data }: { data: IndustriesHeroData }) {
  return (
    <section className="relative sm:h-[58vh] h-[55vh] sm:pt-0 pt-10 flex items-center justify-center bg-gradient-to-br from-gradiant-one via-gradiant-two to-gradaint-three overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <IndustryIcons3D />
      </motion.div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            duration: 0.8,
          }}
          className="text-2xl sm:text-5xl font-bold text-white mb-6"
        >
          <TypeAnimation
            sequence={[
              data.title,
              1500,
              "Sector-Focused Research",
              1500,
              "Tailored Market Intelligence",
              1500,
            ]}
            wrapper="span"
            speed={40}
            style={{ display: "inline-block" }}
            repeat={Infinity}
          />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            delay: 0.3,
            type: "spring",
            stiffness: 50,
            duration: 0.8,
          }}
          className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto sm:mb-30 mb-4"
        >
          {data.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.6,
            type: "spring",
            stiffness: 100,
            damping: 10,
          }}
        >
          <Link href="/industries/all">
            <button className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-full cursor-pointer transition-all duration-300 transform hover:scale-105 shadow-lg">
              {data.ctaText}
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
// "use client";

// import { motion } from "framer-motion";
// import { TypeAnimation } from "react-type-animation";
// import { IndustriesHeroData } from "@/types/lang";
// import IndustryIcons3D from "@/components/ui/industry-icons-3d";

// export default function IndustriesHero({ data }: { data: IndustriesHeroData }) {
//   return (
//     <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900 overflow-hidden">
//       <div className="absolute inset-0 z-0">
//         <IndustryIcons3D />
//       </div>

//       <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
//         >
//           <TypeAnimation
//             sequence={[
//               data.title,
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
//           {data.subtitle}
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6, duration: 0.8 }}
//         >
//           <button className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-full hover:bg-blue-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
//             {data.ctaText}
//           </button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
