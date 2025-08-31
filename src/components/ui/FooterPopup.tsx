"use client";
import { FC, useEffect } from "react";
import { X } from "lucide-react";
import Link from "next/link";

interface FooterPopupProps {
  isOpen: boolean;
  onClose: () => void;
  content: {
    title: string;
    paragraph1: string;
    list: string[];
    contact?: string;
    email?: string;
  };
}

const FooterPopup: FC<FooterPopupProps> = ({ isOpen, onClose, content }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      ></div>
      {/* popup */}

      <div className="relative sm:block flex flex-col justify-center bg-white sm:max-w-[40rem] max-w-full sm:h-[32rem] h-screen w-full sm:p-12 p-6 sm:rounded-2xl rounded-0 shadow-lg z-10">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black cursor-pointer"
        >
          <X size={20} />
        </button>

        <h2 className="sm:text-2xl text-xl text-black text-center font-semibold sm:mb-4 mb-7">
          {content.title}
        </h2>
        <p className="sm:mb-6 mb-7 sm:text-lg text-base text-black">
          {content.paragraph1}
        </p>
        <ul className="list-disc pl-5 space-y-2 sm:mb-8 mb-7">
          {content.list.map((item, idx) => (
            <li className="text-black sm:text-base text-sm" key={idx}>
              {item}
            </li>
          ))}
        </ul>
        {content.contact && (
          <p className="text-black sm:text-base text-sm">
            {content.contact}
            <br />
            📧{" "}
            <Link
              href={`mailto:${content.email}`}
              className="text-blue-600 underline font-bold"
            >
              {content.email}
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default FooterPopup;
