import { motion } from "framer-motion"; // Framer Motion uchun
import { Globe, Mail, Server } from "lucide-react"; // Lucide Icons
import React from "react";

// Framer Motion animatsiya variantlari
const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

const features = [
    {
        icon: <Mail size={40} />,
        title: "Email xizmatlari",
        description: "Tezkor va xavfsiz email xizmatlari.",
    },
    {
        icon: <Globe size={40} />,
        title: "Domain boshqaruvi",
        description: "Domainingizni oson boshqaring.",
    },
    {
        icon: <Server size={40} />,
        title: "Server Xavfsizligi",
        description: "Yuqori darajadagi xavfsiz serverlar.",
    },
];

const EmailHosting = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
            {/* Sarlavha */}
            <motion.h1
                className="text-4xl font-bold text-gray-800 mb-8 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                Email Hosting Xizmati
            </motion.h1>

            {/* Xizmatlar ro'yxati */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-lg text-center"
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        variants={fadeInUp}
                    >
                        <div className="text-blue-500 mb-4">{feature.icon}</div>
                        <h2 className="text-xl font-semibold mb-2">
                            {feature.title}
                        </h2>
                        <p className="text-gray-600">{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default EmailHosting;
