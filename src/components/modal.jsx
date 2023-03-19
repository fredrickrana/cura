import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export default function Modal(props: ModalType) {
  return (
    <>
      {props.isOpen && (
        <motion.div
          initial={{
            opacity: 0.5,
            y: -800
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 1
          }}
          className="modal-overlay" onClick={props.toggle}
        >
          <div onClick={(e) => e.stopPropagation()} className="modal-box">
            {props.children}
          </div>
        </motion.div>
      )}
    </>
  );
}
