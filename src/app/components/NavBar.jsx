"use client"
import React from 'react';
import Links from './Links';
import { motion } from 'framer-motion';


const NavBar = () => {
  return (
    <nav className=' p-2'>
      <div className='container mx-auto flex items-center justify-between '>
        <motion.div 
        animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 360, 360, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
        className='text-2xl font-bold'>Vinay Sohaliya</motion.div>

        <div className='flex space-x-4'>
          <Links  href="/" text="Home" />
          <Links href="/about" text="About" />
          <Links href="/projects" text="Projects" />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
