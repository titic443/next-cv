"use client";
import { AnimatePresence } from "framer-motion";
import Navbar from "./navbar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

function TransitionProvider({ children }) {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        className="w-screen h-screen  bg-gradient-to-b from-blue-100 to-red-200 "
      >
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{ height: "0" }}
          exit={{ height: "100vh" }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.div
          className="fixed m-auto  text-white cursor-default top-0 bottom-0 left-0 right-0  text-8xl z-50 h-fit w-fit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
        >
          {pathName.substring(1)}
        </motion.div>
        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
}

export default TransitionProvider;
