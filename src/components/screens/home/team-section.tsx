"use client";
import React from "react";
import { motion } from "framer-motion";
import { HomeTeamMember } from "@/types/lang";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/section-heading";

interface TeamSectionProps {
  data: HomeTeamMember[];
}

const TeamSection: React.FC<TeamSectionProps> = ({ data }) => {
  return (
    <section className="sm:py-9 py-7 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Our Research Experts"
          description="Meet the brilliant minds driving innovation and discovery"
        />

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-8 gap-6">
          {data.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              className="w-full h-80 perspective-1000"
            >
              <Link
                href={`/team/${member.id}`}
                passHref
                className="block h-full focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/50 rounded-xl"
                aria-label={`View ${member.name}'s profile`}
              >
                <motion.div
                  className="relative w-full h-full preserve-3d group"
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                >
                  {/* Front of the card */}
                  <motion.div
                    className="absolute inset-0 backface-hidden bg-white rounded-xl shadow-lg flex flex-col items-center justify-center p-4 text-center border border-gray-100"
                    variants={{
                      rest: { rotateY: 0 },
                      hover: { rotateY: 180 },
                    }}
                    transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                  >
                    <div className="w-28 h-28 mx-auto mb-5 rounded-full overflow-hidden  border-4 border-primary shadow-lg relative">
                      <Image
                        src={member.image}
                        alt={`Portrait of ${member.name}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover !w-full !h-full "
                        priority={index < 4} // Only load first 4 images eagerly
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1.5">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium text-sm">
                      {member.position}
                    </p>
                    <div className="absolute bottom-4 right-4 flex items-center justify-center w-8 h-8 bg-primary rounded-full text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </motion.div>

                  {/* Back of the card */}
                  <motion.div
                    className="absolute inset-0 backface-hidden bg-gradient-to-br from-primary to-primary-dark text-black rounded-xl shadow-lg p-4 flex flex-col items-center justify-center overflow-hidden border border-primary/20"
                    variants={{
                      rest: { rotateY: 180 },
                      hover: { rotateY: 360 },
                    }}
                    transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                  >
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-2 border-white/30 shadow-md relative">
                      <Image
                        src={member.image}
                        alt=""
                        fill
                        // sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover !w-full !h-full"
                      />
                    </div>
                    <h3 className="text-lg font-bold mb-1 text-center">
                      {member.name}
                    </h3>
                    <p className="text-primary-light text-sm font-medium mb-3 text-center">
                      {member.position}
                    </p>

                    <motion.p
                      className="text-sm mb-4 line-clamp-3 text-black text-center"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      {member.bio}
                    </motion.p>

                    <div className="flex-wrap justify-center gap-2 mb-4 hidden">
                      {member.expertise.map((skill, i) => (
                        <motion.span
                          key={i}
                          className="px-3 py-1 text-xs font-medium bg-white/10 text-black rounded-full backdrop-blur-sm"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 * i }}
                          viewport={{ once: true }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>

                    <motion.div
                      className="mt-auto pt-3 text-sm font-medium flex items-center text-black hover:text-primary transition-colors"
                      whileHover={{ x: 3 }}
                    >
                      View full profile
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-1"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animation styles */}
      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
};

export default TeamSection;
