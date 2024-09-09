import { motion } from "framer-motion";
import React from "react";
import {
    FaDatabase,
    FaEnvelope,
    FaLock,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaServer,
} from "react-icons/fa";

const Hosting = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="bg-blue-800 text-white text-center py-16">
                <h1 className="text-5xl font-extrabold">
                    Reliable Web Hosting Solutions
                </h1>
                <p className="mt-4 text-xl">
                    Fast, Secure, and Scalable Hosting Services
                </p>
                <a
                    href="#plans"
                    className="mt-8 inline-block px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400"
                >
                    Explore Our Plans
                </a>
            </div>

            {/* Services Section */}
            <div className="container mx-auto px-4 py-16" id="services">
                <h2 className="text-4xl font-extrabold text-center mb-12">
                    Our Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition duration-300"
                    >
                        <FaServer className="text-4xl text-blue-600 mb-4" />
                        <h3 className="text-2xl font-semibold">Web Hosting</h3>
                        <p className="text-gray-600 mt-2">
                            High-performance servers with 99.9% uptime
                            guarantee.
                        </p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition duration-300"
                    >
                        <FaLock className="text-4xl text-green-600 mb-4" />
                        <h3 className="text-2xl font-semibold">
                            SSL Certificates
                        </h3>
                        <p className="text-gray-600 mt-2">
                            Keep your website secure with our SSL certificate
                            options.
                        </p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition duration-300"
                    >
                        <FaDatabase className="text-4xl text-red-600 mb-4" />
                        <h3 className="text-2xl font-semibold">
                            Database Hosting
                        </h3>
                        <p className="text-gray-600 mt-2">
                            Managed database solutions for your applications.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Pricing Section */}
            <div className="bg-gray-100 py-16" id="plans">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-extrabold text-center mb-12">
                        Pricing Plans
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                            <h3 className="text-2xl font-semibold mb-4">
                                Basic Plan
                            </h3>
                            <p className="text-4xl font-bold mb-4">$5/month</p>
                            <p className="text-gray-600 mb-4">
                                1 Website, 10GB Storage, 50GB Bandwidth
                            </p>
                            <a
                                href="#contact"
                                className="inline-block px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400"
                            >
                                Get Started
                            </a>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                            <h3 className="text-2xl font-semibold mb-4">
                                Standard Plan
                            </h3>
                            <p className="text-4xl font-bold mb-4">$10/month</p>
                            <p className="text-gray-600 mb-4">
                                5 Websites, 50GB Storage, 200GB Bandwidth
                            </p>
                            <a
                                href="#contact"
                                className="inline-block px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400"
                            >
                                Get Started
                            </a>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                            <h3 className="text-2xl font-semibold mb-4">
                                Premium Plan
                            </h3>
                            <p className="text-4xl font-bold mb-4">$20/month</p>
                            <p className="text-gray-600 mb-4">
                                Unlimited Websites, 100GB Storage, Unlimited
                                Bandwidth
                            </p>
                            <a
                                href="#contact"
                                className="inline-block px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400"
                            >
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="container mx-auto px-4 py-16" id="testimonials">
                <h2 className="text-4xl font-extrabold text-center mb-12">
                    What Our Clients Say
                </h2>
                <div className="flex flex-wrap justify-center">
                    <div className="bg-white shadow-lg rounded-lg p-6 m-4 max-w-sm">
                        <p className="text-gray-600">
                            “Excellent service and support. Our website
                            performance has improved significantly.”
                        </p>
                        <div className="flex items-center mt-4">
                            <img
                                src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=50"
                                alt="Client"
                                className="w-12 h-12 rounded-full mr-4"
                            />
                            <div>
                                <h4 className="font-semibold">Alex Johnson</h4>
                                <p className="text-gray-500">
                                    CEO, Tech Innovations
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-6 m-4 max-w-sm">
                        <p className="text-gray-600">
                            “Reliable hosting with excellent uptime. Highly
                            recommended!”
                        </p>
                        <div className="flex items-center mt-4">
                            <img
                                src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=50"
                                alt="Client"
                                className="w-12 h-12 rounded-full mr-4"
                            />
                            <div>
                                <h4 className="font-semibold">Emma Williams</h4>
                                <p className="text-gray-500">
                                    Founder, Web Solutions
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="bg-blue-800 text-white py-16" id="contact">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-extrabold text-center mb-12">
                        Contact Us
                    </h2>
                    <div className="flex flex-wrap justify-center">
                        <div className="w-full md:w-1/2 lg:w-1/3 mb-8">
                            <h3 className="text-2xl font-semibold mb-4">
                                Email
                            </h3>
                            <p className="flex items-center">
                                <FaEnvelope className="mr-3" />{" "}
                                support@webhosting.com
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 mb-8">
                            <h3 className="text-2xl font-semibold mb-4">
                                Phone
                            </h3>
                            <p className="flex items-center">
                                <FaPhoneAlt className="mr-3" /> +1 234 567 890
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 mb-8">
                            <h3 className="text-2xl font-semibold mb-4">
                                Location
                            </h3>
                            <p className="flex items-center">
                                <FaMapMarkerAlt className="mr-3" /> 1234 Street
                                Name, City, Country
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hosting;
