import { Globe, Headphones, Shield, ThumbsUp } from "lucide-react"; // Lucide ikonalarini import qildik
import React, { useEffect, useRef } from "react";
import { FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import Typed from "typed.js";
import { ImagesHero } from "../../../assets/index";

const Hero = () => {
    // useRef ni Typed.js instansiyasi uchun ishlatamiz
    const typedRef = useRef(null);
    const elementRef = useRef(null);

    useEffect(() => {
        // Typed.js ni ishga tushirish
        typedRef.current = new Typed(elementRef.current, {
            strings: [
                "Empower Your Online Presence with Top-Tier Web Hosting",
                "Seamless Communication with Premium Email Hosting",
                "Fortify Your Site with Trusted SSL Certificates",
                "Craft Your Perfect Site with Our Website Builder",
            ],
            typeSpeed: 30,
            backSpeed: 20, // Istalgancha qo'shishingiz mumkin
            loop: true, // Matnlarni qayta-qayta ko'rsatish uchun
        });

        // Component unmount bo'lganda Typed.js ni tozalash
        return () => {
            typedRef.current.destroy();
        };
    }, []);

    const cardData = [
        {
            title: "Reliability",
            description:
                "Count on us for consistent performance and dependable services, ensuring your business runs smoothly.",
            icon: <Shield size={48} className="text-blue-500" />, // Lucide dan Shield ikonasini ishlatdik
        },
        {
            title: "Customer Satisfaction",
            description:
                "Our top priority is your satisfaction. We strive to exceed your expectations with our services.",
            icon: <ThumbsUp size={48} className="text-blue-500" />, // Lucide dan ThumbsUp ikonasini ishlatdik
        },
        {
            title: "Global Reach",
            description:
                "We provide services that span the globe, making sure you can reach your audience wherever they are.",
            icon: <Globe size={48} className="text-blue-500" />, // Lucide dan Globe ikonasini ishlatdik
        },
        {
            title: "24/7 Support",
            description:
                "Our support team is available 24/7 to help you with any issues you may have.",
            icon: <Headphones size={48} className="text-blue-500" />, // Lucide dan Headphones ikonasini ishlatdik
        },
    ];
    return (
        <div className="py-[60px]">
            <div className="container-xxl max-sm:container-sm max-md:container-md  max-lg:container-xxl max-xl:container-xxl max-xxl:container-xxl mx-auto px-4 py-20 md:px-20">
                <div className="flex flex-col lg:flex-row justify-between items-center mb-10">
                    <div className="lg:w-1/2 mb-6 lg:mb-0">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-bold leading-tight">
                            NEWTEC -{" "}
                            <span className="text-blue-500">
                                IT Solutions Company
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl font-bold leading-8 md:leading-10 mb-6">
                            <span className="element" ref={elementRef}></span>
                        </p>
                        <div className="flex gap-3 items-center mb-8">
                            <a
                                href="/"
                                className="text-2xl md:text-3xl animate-pulse"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="/"
                                className="text-2xl md:text-3xl animate-bounce"
                            >
                                <FaTelegram />
                            </a>
                            <a
                                href="/"
                                className="text-2xl md:text-3xl animate-pulse"
                            >
                                <FaThreads />
                            </a>
                            <a
                                href="/"
                                className="text-2xl md:text-3xl animate-bounce"
                            >
                                <FaYoutube />
                            </a>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="bg-zinc-950 px-4 py-2 hover:bg-zinc-800 duration-300 text-white rounded">
                                Get Started
                            </button>
                            <button className="hover:bg-zinc-950 px-4 py-2 text-black hover:text-white hover:rounded bg-transparent border-b border-solid border-zinc-950 duration-700">
                                Learn More...
                            </button>
                        </div>
                    </div>
                    <div className="lg:w-1/2 flex justify-center lg:justify-end">
                        <img
                            className="w-full h-auto object-cover border-2 border-solid rounded-md"
                            src={ImagesHero}
                            alt="hero image"
                        />
                    </div>
                </div>
                {/* card */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  2xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
                    {cardData.map((item, index) => (
                        <div
                            key={index}
                            className="shadow px-3 py-5 h-auto flex justify-center items-center gap-3 flex-col rounded-md border border-solid hover:-translate-y-2 duration-300 cursor-pointer"
                        >
                            <div className="flex items-center gap-3">
                                {item.icon}
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-center">
                                {item.title}
                            </h3>
                            <p className="text-sm md:text-md text-center">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;
