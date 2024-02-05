'use client'
import iconImg from '../../../public/assets/work1.jpg';





// components/ProjectCard.js
import React from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';

const ProjectCard = ({ title, image, githubLink, projectLink }) => {
    const controls = useAnimation();

    const handleDragEnd = (event, info) => {
        // Check if the card has been dragged beyond a certain threshold
        if (Math.abs(info.offset.x) > 50 || Math.abs(info.offset.y) > 50) {
            // Animate the card back to its original position
            controls.start({ x: 0, y: 0 });
        }
    };

    return (
        <motion.div
            drag
            dragConstraints={{
                top: -100,
                left: -100,
                right: 100,
                bottom: 100,
            }}
            dragElastic={0.05} // Adjust the elastic value as needed
            animate={controls}
            onDragEnd={handleDragEnd}
            className='bg-white rounded p-2 shadow-md'>
            <Image src={iconImg} alt={title} className='w-full h-40 object-cover mb-4 rounded-md' />
            <h2 className='text-xl text-center font-bold mb-2'>{title}</h2>
            <div className='flex justify-between mb-4'>
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={githubLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:font-bold px-2'>
                    GitHub
                </motion.a>
                {projectLink && (
                    <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={projectLink}
                        target='_blank'
                        rel='noopener noreferrer'
                        className=' hover:font-bold px-2 --body-color'>
                        Project
                    </motion.a>
                )}
            </div>
        </motion.div>
    );
};

export default ProjectCard;
