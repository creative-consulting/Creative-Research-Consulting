"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";

export default function LottieAnimation() {
  const phone = "8801948373084";
  const url = `https://wa.me/${phone}`;

  return (
    <motion.a href={url} target="_blank">
      <DotLottieReact
        src="https://lottie.host/78e5b5ca-610c-4501-8e75-f46971e68d1a/1azmNdRiPg.lottie"
        loop
        autoplay
        className="w-[7rem] h-[7rem]"
      />
    </motion.a>
  );
}
