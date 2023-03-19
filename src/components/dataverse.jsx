import React from "react";
import { motion } from "framer-motion";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";

export default function Dataverse() {
  return (
    <div className="container h-screen flex w-full justify-center m-auto">
      <div className="mt-[10%] lg:w-[80%] text-center align-middle">
        <motion.h1
          initial={{
            opacity: 0,
            x: -300
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 2.5
          }}
          className="text-3xl lg:text-7xl font-semibold pt-6 text-[#000] inline"
        >
          data<span className="lg:text-7xl drop-shadow-xl font-sfmono text-[#8CA48D]/90 tracking-[.05em]">verse</span>
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
            x: +300
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 2.5
          }}
          className="mt-6 text-lg lg:inline"
        ><hr /> data layer for drug discovery experiments
        </motion.p>
        <motion.div
          initial={{
            y: -12
          }}
          animate={{
            y: [-12, 8, -12],
            opacity: 1
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatDelay: 0
          }}
          className="flex mt-[20%]"
        >
          <div className="m-auto">
            <ChevronDoubleDownIcon className="text-black w-8 lg:w-14" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
