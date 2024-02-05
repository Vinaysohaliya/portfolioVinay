"use client";
import React from 'react';
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
    const handleWhatsAppClick = () => {
        const phoneNumber = '9727067509'; // Replace with your WhatsApp number
        const message = `Hi, I'm interested in your services. Can we chat?`;

        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, '_blank');
    };

    const handleEmailClick = () => {
        const email = 'sohaliyavin01@gmail.com'; // Replace with your email address
        const subject = 'Interested in your services';
        const body = 'Hi, I would like to inquire about your services.';

        const emailUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.open(emailUrl, '_blank');
    };

    return (
        <div className="fixed bottom-0 right-0 mb-8 mr-8">
            <div className="flex items-center">
                <button
                    type="button"
                    className="bg-green-500 text-white px-4 py-2 rounded-md mr-4 focus:outline-none focus:ring focus:border-blue-300"
                    onClick={handleWhatsAppClick}
                >
                    <FaWhatsapp size={24} color="white" />
                </button>
                <button
                    type="button"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    onClick={handleEmailClick}
                >
                    <FaEnvelope size={24} color="white" />
                </button>
            </div>
        </div>
    );
};

export default ContactUs;
