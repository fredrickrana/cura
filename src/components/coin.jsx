import React from "react";
import { motion } from "framer-motion";

export default function Coin() {
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration: 3
      }}
      className="container flex w-full justify-center m-auto flex-wrap "
    >
        <motion.img
          initial={{
            y: -15
          }}
          animate={{
            y: [-15, 4, -15],
            opacity: 1
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatDelay: 0
          }}
          src="/images/coin.png" alt="coin" className="w-36 h-36 mt-[3%] lg:w-[25%] lg:h-[40%]"
        />
      <div className="w-[100%] space-y-2 my-3">
        <h1 className="font-bold text-center text-lg">What is the <span className="text-xl">curarcoin</span>?</h1>
        <p className="text-center mb-10">Curacoin is the token award when dataset is purchased. It is priced based on matching of user preferences and desired quality of data by the data buyer.</p>
      </div>
      <div>
        <img src="/images/curar.png" alt="curar" className="mb-20"/>
      </div>
    </motion.div>
  );
}
