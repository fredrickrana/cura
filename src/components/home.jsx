import React from "react";
import { motion } from "framer-motion";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div className="container h-screen flex w-full justify-center m-auto">
      <div className="mt-[8%] text-left lg:w-[80%]">
        <motion.h3
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1
          }}
          transition={{
            duration: 3
          }}
          className="text-2xl lg:text-5xl pt-8 text-left tracking-[.05em] text-[#000]"
        >
          The Future of Drug Discovery
        </motion.h3>
        <motion.h1
          initial={{
            opacity: 0,
            x: +500
          }}
          whileInView={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 2.5
          }}
          className="text-3xl lg:text-7xl font-semibold pt-6 text-left text-[#000]"
        >
          Depends On <span className="lg:text-7xl drop-shadow-xl font-sfmono text-[#000] tracking-[.05em]">Everyone's Data</span>
        </motion.h1>
        <motion.p
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1
          }}
          transition={{
            duration: 2.5
          }}
          className="mt-6 text-lg"
        >Curating and building high quality data sets.</motion.p>
        <motion.div
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 2.5
          }}
          className="text-sm lg:text-lg mt-[3%] space-x-8 flex flex-wrap align-middle justify-center"
        >
          <button className="border border-black text-sm text-white rounded-full p-4 bg-[#02213A] hover:bg-[#93ECEa]/90 hover:border-0">
            Dataverse.io <span className="block">Launch the Marketplace</span></button>
        </motion.div>
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
