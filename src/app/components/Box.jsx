"use client"
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation'
import React from 'react';


const Box = ({ icon, firstText, lastText,link }) => {
    const router=useRouter();

    function handleClick() {
        router.push(link);
    }

    return (
        <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{
                scale: 0.8,
                rotate: -90,
                borderRadius: "100%"
            }}
           onClick={handleClick}
            className='flex flex-col border-2 border-black p-2 text-center items-center justify-center rounded-md mx-2 mb-4 md:mb-0 cursor-pointer'>
            <div className='mb-2'>{icon}</div>
            <div className='text-sm md:text-base'>{firstText}</div>
            <div className='text-sm md:text-base'>{lastText}</div>
        </motion.div>
    );
};

export default Box;
