import React from "react";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Modal from "./modal";
import useModal from "./useModal";

export default function Header() {
  const { isOpen, toggle } = useModal();
  return (
    <div className="container m-auto pb-12 flex justify-between max-w-7xl z-20 items-center">
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
            className="absolute saturate-0 w-20 top-2 left-2"
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
        <a className='px-8 uppercase hidden xl:inline-flex text-m text-gray-900' href="#home">About Us</a>
        <a className='px-8 uppercase hidden xl:inline-flex text-m text-gray-900' href="#about">Blog</a>
        <a className='px-8 uppercase hidden xl:inline-flex text-m text-gray-900' href="#skills">Documentation</a>
        <a className='px-8 uppercase hidden xl:inline-flex text-m text-gray-900' href="#projects">Careers</a>
        <a className='px-8 uppercase hidden xl:inline-flex text-m text-gray-900' href="#contact">Contact</a>
        <Bars3Icon className="inline-flex xl:hidden text-gray-400 h-10 w-10 mr-[20px] cursor-pointer" onClick={toggle} />
        <Modal isOpen={isOpen} toggle={toggle}>
          <XMarkIcon className="absolute top-[3%] text-gray-400 h-10 w-10 right-[8%] headerButton cursor-pointer" onClick={toggle} />
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
              <a className='px-8 uppercase text-m text-white headerButton text-3xl' href="#home" onClick={toggle}>About Us</a>
            </div>
            <div>
              <a className='px-8 uppercase text-m text-white headerButton text-3xl' href="#about" onClick={toggle}>Blog</a>
            </div>
            <div>
              <a className='px-8 uppercase text-m text-white headerButton text-3xl' href="#skills" onClick={toggle}>Documentation</a>
            </div>
            <div>
              <a className='px-8 uppercase text-m text-white headerButton text-3xl' href="#projects" onClick={toggle}>Careers</a>
            </div>
            <div>
              <a className='px-8 uppercase text-m text-white headerButton text-3xl' href="#contact" onClick={toggle}>Contact</a>
            </div>
          </motion.div>
        </Modal>
      </motion.div>
    </div>
  )
}
