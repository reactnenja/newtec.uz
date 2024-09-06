import React from "react";
import {
    FaEnvelope,
    FaFacebookF,
    FaGithub,
    FaInstagram,
    FaLinkedinIn,
    FaMapMarkerAlt,
    FaPhone,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-zinc-800 text-white">
            <div className="container mx-auto px-4 py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">NewTec</h2>
                        <p className="text-sm">
                            Innovating for a better tomorrow
                        </p>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="hover:text-slate-300 transition-colors"
                            >
                                <FaFacebookF />
                            </a>
                            <a
                                href="#"
                                className="hover:text-slate-300 transition-colors"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="#"
                                className="hover:text-slate-300 transition-colors"
                            >
                                <FaTwitter />
                            </a>
                            <a
                                href="#"
                                className="hover:text-slate-300 transition-colors"
                            >
                                <FaLinkedinIn />
                            </a>
                            <a
                                href="#"
                                className="hover:text-slate-300 transition-colors"
                            >
                                <FaYoutube />
                            </a>
                            <a
                                href="#"
                                className="hover:text-slate-300 transition-colors"
                            >
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="/"
                                    className="hover:text-slate-300 transition-colors"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/about"
                                    className="hover:text-slate-300 transition-colors"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/services"
                                    className="hover:text-zinc-300 transition-colors"
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/products"
                                    className="hover:text-zinc-300 transition-colors"
                                >
                                    Products
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/contact"
                                    className="hover:text-slate-300 transition-colors"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-4">
                            Resources
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#blog"
                                    className="hover:text-slate-200 transition-colors"
                                >
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#careers"
                                    className="hover:text-slate-200 transition-colors"
                                >
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#faq"
                                    className="hover:text-slate-200 transition-colors"
                                >
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#privacy"
                                    className="hover:text-slate-200 transition-colors"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#teams"
                                    className="hover:text-slate-200 transition-colors"
                                >
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <h3 className="text-xl font-semibold mb-4">
                            Newsletter
                        </h3>
                        <p className="mb-4 text-sm">
                            Stay updated with our latest news and offers.
                        </p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="p-2 w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-zinc-800"
                            />
                            <button
                                type="submit"
                                className="bg-zinc-700 text-white p-2 hover:bg-zinc-900 transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="bg-black py-4">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-400">
                        &copy; 2023 NewTec. All rights reserved.
                    </p>
                    <div className="flex gap-5 items-start mt-4 md:mt-0 sm:flex-row md:flex-row xl:flex-row lg:flex-col justify-start flex-col">
                        <a
                            href="#"
                            className="text-sm text-gray-400 hover:text-white transition-colors"
                        >
                            <FaMapMarkerAlt className="inline mr-2" />
                            123 Tech Street, City, Country
                        </a>
                        <a
                            href="tel:+1234567890"
                            className="text-sm text-gray-400 hover:text-white transition-colors"
                        >
                            <FaPhone className="inline mr-2" />
                            +1 (234) 567-890
                        </a>
                        <a
                            href="mailto:info@newtec.com"
                            className="text-sm text-gray-400 hover:text-white transition-colors"
                        >
                            <FaEnvelope className="inline mr-2" />
                            info@newtec.com
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
