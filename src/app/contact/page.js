"use client";
import { motion } from "framer-motion";
function ContactPage() {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ delay: 1, duration: 1, ease: "easeOut" }}
    ></motion.div>
  );
}

export default ContactPage;
