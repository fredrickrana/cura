import React from "react";
import { motion } from "framer-motion";

export default function Home() {

  return (
    <div className="container h-screen flex w-full justify-center m-auto">
      <div className="mt-[12%] text-center w-2/4">
        <motion.h3
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            duration: 3
          }}
          className="md:text-lg pt-8 text-left font-mono tracking-[.05em] text-[#000]"
        >
          The future of medicine
        </motion.h3>
        <motion.h1
          initial={{
            opacity: 0,
            x: +500
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 2.5
          }}
          className="text-3xl lg:text-5xl font-semibold pt-6 text-left text-[#000]"
        >
          Belongs To <span className="links lg:text-5xl drop-shadow-xl font-sfmono text-[#000] tracking-[.03em]">Everyone.</span>
        </motion.h1>
      </div>
    </div>
  );
}
