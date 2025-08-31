"use client";

import { cn } from "@/lib/utils/cn";
import { NavData } from "@/types/lang";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { IoIosArrowDown, IoIosClose, IoIosMenu } from "react-icons/io";
import SpaceButton from "../3d/space-button";

interface NavItem {
  title: string;
  link: string;
  child?: NavItem[];
  megaMenu?: boolean;
}

interface NavBarProps {
  data: NavData;
  className?: string;
}

const NavBar: FC<NavBarProps> = ({ data, className = "" }) => {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    const handleResize = () => setIsMobile(mediaQuery.matches);
    handleResize();
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownEnter = (title: string) => {
    if (isMobile) return;
    setActiveDropdown(title);
  };

  const handleDropdownLeave = () => {
    if (isMobile) return;
    setActiveDropdown(null);
  };

  const isActiveLink = (link: string) => {
    // Handle language prefix in pathname
    const cleanPathname = pathname.replace(/^\/(en|bn|hi)/, "") || "/";
    const cleanLink = link.replace(/^\/(en|bn|hi)/, "") || "/";

    return (
      cleanPathname === cleanLink ||
      (cleanLink !== "/" && cleanPathname.startsWith(cleanLink))
    );
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleMobileDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  const renderDropdownColumns = (items: NavItem[]) => {
    const columns = [];
    const maxColumns = 4;
    const totalItems = items.length;
    const columnCount = Math.min(maxColumns, totalItems);
    const itemsPerColumn = Math.ceil(totalItems / columnCount);

    for (let i = 0; i < columnCount; i++) {
      const startIndex = i * itemsPerColumn;
      const columnItems = items.slice(startIndex, startIndex + itemsPerColumn);

      columns.push(
        <div
          key={i}
          className={cn(
            "min-w-[180px]",
            i < columnCount - 1 ? "pr-6 border-r border-gray-200" : ""
          )}
        >
          <ul className="space-y-2">
            {columnItems.map((subItem) => (
              <li
                key={subItem.link}
                className={cn(
                  "menu-item group",
                  isActiveLink(subItem.link) && "active"
                )}
              >
                <Link
                  href={subItem.link}
                  onClick={closeMobileMenu}
                  className={cn(
                    "block py-1 px-3 text-sm transition-all font-medium duration-200 rounded group",
                    "hover:translate-x-2.5",
                    isActiveLink(subItem.link)
                      ? "text-primary"
                      : "text-gray-700 hover:text-primary"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span className="relative">
                      {subItem.title}
                      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </span>
                    <FiArrowUpRight className="ml-2 text-xs opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    return <div className="flex gap-6">{columns}</div>;
  };

  const renderDesktopMenu = () => {
    return (
      <div className="hidden lg:flex items-center justify-between w-full">
        <div className="flex items-center flex-1">
          <div className="flex-shrink-0 mr-10">
            <Link href="/" className="inline-block">
              <Image
                src="/logo-white.png"
                alt="Company Logo"
                width={160}
                height={60}
                priority
                className="w-auto lg:h-8 xl:h-10 object-contain transition-opacity hover:opacity-90"
              />
            </Link>
          </div>

          <ul className="flex items-center space-x-6 font-medium">
            {data?.navItems?.map((item) => (
              <li
                key={item.title}
                className="group transition-all duration-250 relative"
                onMouseEnter={() => handleDropdownEnter(item.title)}
                onMouseLeave={handleDropdownLeave}
              >
                <Link
                  href={item.link}
                  className={cn(
                    "flex items-center space-x-1 py-2 text-sm font-semibold transition-colors relative",
                    activeDropdown === item.title || isActiveLink(item.link)
                      ? "text-primary"
                      : "text-gray-800 hover:text-primary",
                    item.child ? "pr-2" : ""
                  )}
                >
                  <span className="relative inline-block">
                    {item.title}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  {item.child && (
                    <IoIosArrowDown
                      className={cn(
                        "text-xs transition-transform duration-250",
                        activeDropdown === item.title && "rotate-180"
                      )}
                    />
                  )}
                </Link>

                {item.child && (
                  <AnimatePresence>
                    {activeDropdown === item.title && (
                      <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 25 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="absolute left-0 top-full w-screen bg-white/95 backdrop-blur-xl z-50 border-t border-gray-100 shadow-xl"
                      >
                        <div className="container mx-auto p-4 rounded-b-lg">
                          {renderDropdownColumns(item.child)}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-end flex-1">
          <SpaceButton href="/contact">{data.btnText}</SpaceButton>
        </div>
      </div>
    );
  };
  const renderMobileMenu = () => {
    if (!isMobile) return null;

    return (
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed top-0 left-0 h-screen w-full bg-white z-[9999999999999]"
          >
            {/* Close Button Header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-100 bg-white">
              <Link href="/" className="inline-block" onClick={closeMobileMenu}>
                <Image
                  src="/logo-white.png"
                  alt="Creative Consulting"
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain"
                  // style={{ filter: "brightness(0) invert(0)" }}
                />
              </Link>
              <button
                type="button"
                className="p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
                aria-label="Close menu"
                onClick={closeMobileMenu}
              >
                <IoIosClose className="h-8 w-8" />
              </button>
            </div>

            <div className="h-full overflow-y-auto py-4 px-6">
              <ul>
                {data?.navItems?.map((item) => (
                  <li key={item.title} className="border-b border-gray-100">
                    <div className="flex flex-col">
                      <div className="flex items-center justify-between py-3 px-2">
                        {!item.child ? (
                          <Link
                            href={item.link}
                            className={cn(
                              "w-full text-lg font-semibold group",
                              isActiveLink(item.link)
                                ? "text-primary"
                                : "text-gray-800 hover:text-primary"
                            )}
                            onClick={closeMobileMenu}
                          >
                            <div className="flex items-center justify-between">
                              <span className="relative inline-block">
                                {item.title}
                                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                              </span>
                              <FiArrowUpRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                            </div>
                          </Link>
                        ) : (
                          <>
                            <span
                              className={cn(
                                "text-lg font-semibold group",
                                isActiveLink(item.link)
                                  ? "text-primary"
                                  : "text-gray-800 hover:text-primary"
                              )}
                            >
                              <div className="flex items-center">
                                <span className="relative inline-block">
                                  {item.title}
                                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                                </span>
                              </div>
                            </span>
                            {item.child && (
                              <IoIosArrowDown
                                className={cn(
                                  "text-base transition-transform duration-200",
                                  activeDropdown === item.title && "rotate-180"
                                )}
                                onClick={() => toggleMobileDropdown(item.title)}
                              />
                            )}
                          </>
                        )}
                      </div>
                      {item.child && activeDropdown === item.title && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="pl-4 overflow-hidden"
                        >
                          {item.child.map((subItem) => (
                            <li key={subItem.link} className="py-3">
                              <Link
                                href={subItem.link}
                                className={cn(
                                  "block py-2 px-4 text-base font-medium rounded-md transition-all duration-200 group",
                                  "hover:translate-x-1 hover:text-primary",
                                  isActiveLink(subItem.link)
                                    ? "text-primary bg-primary/10"
                                    : "text-gray-700 hover:text-primary hover:bg-gray-50"
                                )}
                                onClick={closeMobileMenu}
                              >
                                <div className="flex items-center justify-between">
                                  <span className="relative inline-block">
                                    {subItem.title}
                                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                                  </span>
                                  <FiArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="px-2 mt-6">
                <SpaceButton href="/contact">{data.btnText}</SpaceButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <nav
      className={cn(
        "top-0 w-full z-50 bg-white transition-all duration-300",
        isScrolled ? "shadow-sm py-2" : "sm:py-3 py-2",
        className
      )}
    >
      <div className="container mx-auto px-4">
        {renderDesktopMenu()}

        <div className="lg:hidden flex items-center justify-between py-0">
          <div className="flex items-center">
            <Link href="/" className="inline-block">
              <Image
                src="/logo-white.png"
                alt="Creative Consulting"
                width={160}
                height={60}
                className="h-10 w-auto object-contain transition-opacity hover:opacity-90"
                // style={{ filter: "brightness(80) invert(0)" }}
              />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <SpaceButton className="!hidden lg:!block" href="/contact">
              {data.btnText}
            </SpaceButton>
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
              aria-label="Toggle menu"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? (
                <IoIosClose className="h-7 w-7" />
              ) : (
                <IoIosMenu className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {renderMobileMenu()}
    </nav>
  );
};

export default NavBar;
