import React from "react";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Modal from "./modal";
import useModal from "./useModal";

export default function Header() {
  const { isOpen, toggle } = useModal();
  return (
    <div className="container relative m-auto pb-12 flex justify-between max-w-7xl z-20 items-center">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 4,
          easing: "ease-in"
        }}
      >
        <span>
          <img src="/images/curarLogo.png" alt="logo"
            className="absolute saturate-0 w-20 top-2 left-[4%]"
          />
        </span>
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5
        }}
        className='text-right mt-5'
      >
        <a className='px-8 font-bold hidden xl:inline-flex text-m text-gray-900 hover:text-purple-900' href="#about">Dataverse-Data Marketplace</a>
        <a className='px-8 font-bold hidden xl:inline-flex text-m text-gray-900 hover:text-purple-900' href="#curadao">CuraDao</a>
        <a className='px-8 font-bold hidden xl:inline-flex text-m text-gray-900 hover:text-purple-900' href="#wallet">CuraWallet</a>
        <a className='px-8 font-bold hidden xl:inline-flex text-m text-gray-900 hover:text-purple-900' href="#partners">Dao Partners</a>
        <a className='px-8 font-bold hidden xl:inline-flex text-m text-gray-900 hover:text-purple-900' href="#contact">Contact</a>
        <Bars3Icon className="inline-flex xl:hidden text-gray-900 h-10 w-10 mr-[20px] cursor-pointer" onClick={toggle} />
        <Modal isOpen={isOpen} toggle={toggle}>
          <XMarkIcon className="absolute top-[3%] text-white h-10 w-10 right-[8%] headerButton cursor-pointer" onClick={toggle} />
          <motion.div
            initial={{
              y: 1000,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1
            }}
            className="space-y-12"
          >
            <div>
              <a className='px-8 uppercase text-m text-white headerButton text-3xl hover:text-purple-900' href="#about" onClick={toggle}>Datraverse-Data Marketplace</a>
            </div>
            <div>
              <a className='px-8 uppercase text-m text-white headerButton text-3xl hover:text-purple-900' href="#curadao" onClick={toggle}>CuraDao</a>
            </div>
            <div>
              <a className='px-8 uppercase text-m text-white headerButton text-3xl hover:text-purple-900' href="#wallet" onClick={toggle}>CuraWallet</a>
            </div>
            <div>
              <a className='px-8 uppercase text-m text-white headerButton text-3xl hover:text-purple-900' href="#partners" onClick={toggle}>Dao Partners</a>
            </div>
            <div>
              <a className='px-8 uppercase text-m text-white headerButton text-3xl hover:text-purple-900' href="#contact" onClick={toggle}>Contact</a>
            </div>
          </motion.div>
        </Modal>
      </motion.div>
    </div>
  )
}
