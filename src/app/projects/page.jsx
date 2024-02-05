"use client"

import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';




const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'Intsa',
            image: '../../../public/assets/work1.jpg',
            githubLink: 'https://github.com/Vinaysohaliya/insta',
            projectLink: 'https://insta-black-seven.vercel.app/',
        }, {
            id: 2,
            title: 'Megablog',
            image: '../../../public/assets/about.jpg',
            githubLink: 'https://github.com/Vinaysohaliya/megaBlog',
            projectLink: 'https://poster-rosy.vercel.app/',
        },
        {
            id: 3,
            title: 'My Cart',
            image: '../../../public/assets/about.jpg',
            githubLink: 'https://github.com/Vinaysohaliya/Ecom-app',
            // projectLink: 'https://project1.example.com',
        },
        {
            id: 4,
            title: 'LMS',
            image: '../../../public/assets/about.jpg',
            githubLink: 'https://github.com/Vinaysohaliya/lms-frontend',
            // projectLink: 'https://project1.example.com',
        },

        
    ];

    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className='container mx-auto my-8 overflow-hidden'
    >
        <h1 className='text-4xl font-bold mb-4 text-center'>Projects</h1>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        >
            {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    title={project.title}
                    image={project.image}
                    githubLink={project.githubLink}
                    projectLink={project.projectLink}
                />
            ))}
        </motion.div>
    </motion.div>
    );
};

export default Projects;
