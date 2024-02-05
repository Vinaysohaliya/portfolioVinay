'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import profileImg from "../../public/assets/profile.jpg";

export default function Home() {
  return (
    <div className="container mx-auto p-8 grid grid-cols-1 sm:grid-cols-2 flex-wrap flex items-center justify-center w-screen">
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 50 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center"
      >
        <motion.h1
          
          className="text-4xl font-bold">Vinay Sohaliya</motion.h1>
        <h2 className="text-2xl font-semibold">Web Developer</h2>
        <p className="mt-4 w-1/2 ">

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 1000, y: 50 }}
        animate={{ opacity: 1, x: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="mt-8  overflow-hidden"
      >
        <Image src={profileImg} alt="Vinay Sohaliya" className=" mb-4 rounded" width={400} height={300} />

      </motion.div>
    </div>
  );
}
