"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import iconImg from '../../../public/assets/profile.jpg';
import Box from '../components/Box';
import { IoCodeSlash } from "react-icons/io5";
import { motion } from 'framer-motion';
import { FaLinkedin } from "react-icons/fa";

const About = () => {
    const [cvFileUrl, setCvFileUrl] = useState('../../../public/assets/Vinay_Sohaliya.pdf'); // Replace with the actual path to your CV file

    const handleDownload = () => {
        const anchor = document.createElement('a');
        anchor.href = cvFileUrl;
        anchor.download = 'VinaySohaliya_Resume.pdf'; // Replace with your desired file name
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
    };

    return (
        <div className='h-screen flex flex-col items-center'>
            <div className='text-center mb-8'>
                <h1 className='text-4xl font-bold'>About Me</h1>
                <p className='text-lg'>My Introduction</p>
            </div>

            <div className='flex flex-col sm:flex-row justify-around sm:flex sm:items-center sm:justify-around h-full items-center'>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className=' mb-4'
                >
                    <Image src={iconImg} alt='Vinay Sohaliya - Web Developer' width={300} className='rounded-xl' />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className='flex flex-col items-center justify-center md:w-1/2'>
                    <div className='flex mb-4'>
                        <Box
                        icon={<FaLinkedin/>}
                            // firstText="Eperience"
                            lastText="Connect"
                            link="https://www.linkedin.com/in/vinay-sohaliya-vin01/"
                        />
                         <Box
                            icon={<FaGithub/>}
                            firstText="Experience"
                            lastText="2 Years"
                            link="https://github.com/Vinaysohaliya"
                            

                        />
                         <Box
                            icon={<FaSquareXTwitter/>}
                            lastText="Connect"
                            link="https://twitter.com/Vinay___1"
                        />


                    </div>

                    <div className='flex flex-col w-2/3 md:w-2/3 text-gray-700'>
                    GATE qualified computer science Enginer skilled in Java,JavaScript, CSS3, HTML5 , BootStrap , Next js, Express js, Tailwind CSS, Socket io, React js, Node js, Redux, MongoDB, MySQL, Appwrite, SQL, Framer Motion and Data Structures.
                          </div>

                    <button onClick={handleDownload} className='bg-zinc-800 text-white px-4 py-2 mt-4 rounded w-1/3 md:w-1/5'>
                        Download CV
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
