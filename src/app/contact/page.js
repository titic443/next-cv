"use client";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
function ContactPage() {
  const text = "Say Hello";
  const [sucess, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_ID
      )
      .then((result) => {
        console.log(result);
        setSuccess(true);
        form.current.reset();
      })
      .catch((error) => {
        console.log(error);
        setError(true);
        form.current.reset();
      });
  };
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ delay: 1, duration: 1, ease: "easeOut" }}
    >
      <div className="flex flex-col h-full lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Text container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>
        {/* Form container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24">
          <form onSubmit={sendEmail} ref={form} className="flex flex-col gap-4">
            <span>Dear Lama Dev</span>
            <textarea
              rows="6"
              className="bg-transparent border-b-2 border-black resize-none outline-none"
              name="user_message"
            ></textarea>
            <span>My mail address is:</span>
            <input
              type="text"
              className="bg-transparent border-b-2 border-black outline-none"
              name="user_email"
            />
            <span>Regards</span>
            <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">
              Send
            </button>
            {sucess && (
              <span className="text-green-500 font-semibold">
                Your messge has been sent successfully
              </span>
            )}
            {error && (
              <span className="text-red-500 font-semibold">
                Something went wrong
              </span>
            )}
          </form>
        </div>
      </div>
    </motion.div>
  );
}

export default ContactPage;
