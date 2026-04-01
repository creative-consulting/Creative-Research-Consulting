"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiPhone, FiMail, FiMapPin, FiArrowUpRight } from "react-icons/fi";
import {
  FaFacebook,
  FaPinterest,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import FooterPopup from "../ui/FooterPopup";
import { useState } from "react";
import Popupmodal from "../../data/lang/en/popupmodal.json";
import FooterData from "../../data/lang/en/footer.json";
import { LuMailPlus } from "react-icons/lu";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [openPopup, setOpenPopup] = useState<
    null | "privacyPolicy" | "termsConditions" | "cookiePolicy"
  >(null);

  const iconMap = {
    FiPhone: <FiPhone className="text-gray-400" />,
    MailPlus: <LuMailPlus className="text-gray-400" />,
    FiMail: <FiMail className="text-gray-400" />,
    FiMapPin: <FiMapPin className="text-gray-400" />,
    FaFacebook: <FaFacebook />,
    FaPinterest: <FaPinterest />,
    FaTwitter: <FaTwitter />,
    FaYoutube: <FaYoutube />,
    FaLinkedin: <FaLinkedin />,
    FaWhatsapp: <FaWhatsapp />,
  };

  return (
    <footer className="bg-gray-900 text-gray-100 border-t border-gray-800">
      <div className="container mx-auto px-4 pt-8 pb-4 sm:pt-10 sm:pb-6">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:gap-12 gap-6 lg:gap-8 sm:mb-10 mb-3">
          {/* Contact Column */}
          <div className="space-y-8">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="sm:text-xl text-[16px] mb-4 font-semibold tracking-tight text-white"
            >
              Head Quarter
            </motion.h3>

            <ul className="sm:space-y-4 space-y-3">
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-start gap-3 group"
              >
                <span className="mt-0.5">{iconMap.FiPhone}</span>
                <Link
                  href="tel:+8801948373084"
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base flex items-center gap-1"
                >
                  +8801948373084
                  <FiArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-start gap-3 group"
              >
                <span className="mt-0.5">{iconMap.MailPlus}</span>
                <Link
                  href="mailto:abu.sayeed@ccslbd.com"
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base flex items-center gap-1"
                >
                  info@ccslbd.com
                  <FiArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-start gap-3 group"
              >
                <span className="mt-0.5">{iconMap.FiMail}</span>
                <Link
                  href="mailto:abu.sayeed@ccslbd.com"
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base flex items-center gap-1"
                >
                  abu.sayeed@ccslbd.com
                  <FiArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-start gap-3"
              >
                <span className="mt-0.5">{iconMap.FiMapPin}</span>
                <p className="text-gray-300 text-sm sm:text-base">
                  Level-3, House-1286/3 East Monipur, Begum Rokeya Sarani,
                  Mirpur-10, Dhaka-1216, Bangladesh.
                </p>
              </motion.li>
            </ul>

            {/* Social Media */}
            <div className="space-y-4 sm:pt-4 pt-0">
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="sm:text-xl text-[16px] mb-4 font-semibold tracking-tight text-white"
              >
                Follow Us:
              </motion.h3>

              <motion.div
                className="flex gap-4 flex-wrap"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, staggerChildren: 0.1 }}
              >
                {[
                  {
                    icon: "FaFacebook",
                    href: "https://www.facebook.com/creativeCSbd/",
                    color: "#1877F2",
                  },
                  {
                    icon: "FaPinterest",
                    href: "https://www.pinterest.com/creativecsbd/",
                    color: "#E60023",
                  },
                  {
                    icon: "FaTwitter",
                    href: "https://x.com/i/flow/login?redirect_after_login=%2FCreativeCSbd",
                    color: "#1DA1F2",
                  },
                  {
                    icon: "FaYoutube",
                    href: "https://www.youtube.com/channel/UCjLsusc9UcrALANKNVryBbA",
                    color: "#FF0000",
                  },
                  {
                    icon: "FaLinkedin",
                    href: "https://www.linkedin.com/company/creative-market-research-agency-bangladesh/?viewAsMember=true",
                    color: "#0A66C2",
                  },
                  {
                    icon: "FaWhatsapp",
                    href: "https://api.whatsapp.com/send?phone=8801948373084",
                    color: "#25D366",
                  },
                ].map((platform, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ y: -3 }}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ backgroundColor: platform.color } as any}
                    className="text-white p-2 rounded-full hover:scale-110 transition-transform"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {iconMap[platform.icon as keyof typeof iconMap]}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="space-y-6">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="sm:text-xl text-[16px] mb-4 font-semibold tracking-tight text-white"
            >
              Solutions
            </motion.h3>

            <ul className="space-y-3">
              {[
                "Market Research",
                "Social Research",
                "Political Research & Public Opinion Polls",
                "Customized Research Solutions",
                "Data Analytics & Strategic Consulting",
                "Survey Scripting & Programming",
                "Retail & Distributor Audit",
                "Call Center for Telephonic Survey",
                "Fieldwork & Data Collection",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Link
                    href="/solutions/all"
                    className="text-gray-300 hover:text-primary transition-colors text-sm sm:text-base inline-flex items-center gap-1 group"
                  >
                    {item}
                    <FiArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Industries Column */}
          <div className="space-y-6">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="sm:text-xl text-[16px] mb-4 font-semibold tracking-tight text-white"
            >
              Industries
            </motion.h3>

            <ul className="space-y-3">
              {[
                "Personal Care",
                "Tobacco",
                "Smartphones",
                "Home Care",
                "Food & Beverages",
                "Automotive",
                "Property",
                "Financial Services",
                "Electronics",
                "Healthcare & Contraception",
                "Telecommunication",
                "Home Appliances & Furnishing",
                "Travel Services",
                "Material Construction",
                "Public Transportation",
                "E-Commerce",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.03 }}
                >
                  <Link
                    href="/industries/all"
                    className="text-gray-300 hover:text-primary transition-colors text-sm sm:text-base inline-flex items-center gap-1 group"
                  >
                    {item}
                    <FiArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          {/* <div className="space-y-6">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="sm:text-xl text-[16px] mb-4 font-semibold tracking-tight text-white"
            >
              Company
            </motion.h3>
            <ul className="space-y-3 sm:mb-6 mb-2">
              {FooterData.four.links.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={item.link}
                    className="text-gray-300 hover:text-primary transition-colors text-sm sm:text-base inline-flex items-center gap-1 group"
                  >
                    {item.title}
                    <FiArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div> */}
          <div className="space-y-6">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="sm:text-xl text-[16px] mb-4 font-semibold tracking-tight text-white"
            >
              Company
            </motion.h3>
            <ul className="space-y-3 sm:mb-6 mb-2">
              {FooterData.four.links.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <a
                    href={item.link}
                    onClick={(e) => {
                      if (item.link.includes("#")) {
                        const id = item.link.split("#")[1];
                        const el = document.getElementById(id);
                        if (el) {
                          e.preventDefault();
                          setTimeout(() => {
                            const offset = 80;
                            const top =
                              el.getBoundingClientRect().top +
                              window.pageYOffset -
                              offset;
                            window.scrollTo({
                              top,
                              behavior: "smooth",
                            });
                          }, 100);
                        }
                      }
                    }}
                    className="text-gray-300 hover:text-primary transition-colors text-sm sm:text-base inline-flex items-center gap-1 group"
                  >
                    {item.title}
                    <FiArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <motion.div
          className="border-t border-gray-800"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        />

        {/* Bottom Bar */}
        <div className="sm:pt-8 pt-3 py-3 sm:py-0 flex sm:flex-row flex-col justify-between items-center sm:gap-0 gap-4">
          <motion.div
            className="flex sm:gap-10 gap-2 text-xs"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="#"
              onClick={() => setOpenPopup("privacyPolicy")}
              className="text-gray-400 hover:text-white text-sm! sm:text-[16px] transition-colors underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              onClick={() => setOpenPopup("termsConditions")}
              className="text-gray-400 hover:text-white text-sm! sm:text-[16px] transition-colors underline"
            >
              Terms & Conditions
            </Link>
            <Link
              href="#"
              onClick={() => setOpenPopup("cookiePolicy")}
              className="text-gray-400 hover:text-white text-sm! sm:text-[16px] transition-colors underline"
            >
              Cookie Policy
            </Link>
            {/* popupmodal */}
            {openPopup && (
              <FooterPopup
                isOpen={!!openPopup}
                onClose={() => setOpenPopup(null)}
                content={Popupmodal[openPopup]}
              />
            )}
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className=" text-gray-400 sm:text-[16px] text-sm"
          >
            &copy; {currentYear} Creative Consulting. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};
