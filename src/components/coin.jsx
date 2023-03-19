import React from "react";
import { motion } from "framer-motion";
// import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";

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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam enim nibh, hendrerit ut lectus eu, eleifend sodales sem. Morbi vestibulum sem a arcu mollis fringilla. Ut at libero sed sem interdum egestas. Aliquam erat volutpat. Nunc porta finibus arcu, ultrices dignissim massa. Integer congue convallis efficitur. Fusce id posuere risus, quis scelerisque nisi. Nullam eget imperdiet odio. Morbi volutpat massa augue, sagittis gravida sapien rhoncus ac. Aliquam interdum egestas lorem eget feugiat. Duis eu euismod nunc. Nunc tortor arcu, facilisis in dolor mattis, accumsan aliquet enim. Maecenas rhoncus auctor molestie. Mauris odio nibh, semper nec dictum id, volutpat at eros. Morbi lobortis quam nec tellus finibus blandit.</p>
      </div>
      <div>
        <img src="/images/curar.png" alt="curar" className="mb-20"/>
      </div>
    </motion.div>
  );
}
