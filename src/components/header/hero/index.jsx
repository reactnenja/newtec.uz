import { Globe, Headphones, Shield, ThumbsUp } from "lucide-react"; // Lucide ikonalarini import qildik
import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import Typed from "typed.js";
import { ImagesHero } from "../../../assets/index";

const Hero = () => {
    // useRef ni Typed.js instansiyasi uchun ishlatamiz
    const typedRef = useRef(null);
    const elementRef = useRef(null);
    const { t } = useTranslation();

    useEffect(() => {
        // Typed.js ni ishga tushirish
        typedRef.current = new Typed(elementRef.current, {
            strings: [t("hero1"), t("hero2"), t("hero3"), t("hero4")],
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
            title: t("reliability"),
            description: t("cardDescription1"),
            icon: <Shield size={48} className="text-blue-500" />, // Lucide dan Shield ikonasini ishlatdik
        },
        {
            title: t("customer"),
            description: t("cardDescription2"),
            icon: <ThumbsUp size={48} className="text-blue-500" />, // Lucide dan ThumbsUp ikonasini ishlatdik
        },
        {
            title: t("global"),
            description: t("cardDescription3"),
            icon: <Globe size={48} className="text-blue-500" />, // Lucide dan Globe ikonasini ishlatdik
        },
        {
            title: t("support"),
            description: t("cardDescription4"),
            icon: <Headphones size={48} className="text-blue-500" />, // Lucide dan Headphones ikonasini ishlatdik
        },
    ];
    return (
        <div className="pt-[20px]  " id="hero">
            <div className="container-xxl max-sm:container-sm max-md:container-md  max-lg:container-xxl max-xl:container-xxl max-xxl:container-xxl mx-auto px-4 md:px-20">
                <div className="flex flex-col lg:flex-row justify-between items-center mb-10">
                    <div className="lg:w-1/2 mb-6 lg:mb-0">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-bold leading-tight">
                            NEWTEC -{" "}
                            <span className="text-blue-500">
                                {t("heroheading1")}
                            </span>
                        </h1>
                        <p className="w-full md:w-10/12 sm:w-full text-xl md:text-2xl font-bold leading-8 md:leading-10 mb-6">
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
                                {t("herobutton1")}
                            </button>
                            <button className="hover:bg-zinc-950 px-4 py-2 text-black hover:text-white hover:rounded bg-transparent border-b border-solid border-zinc-950 duration-700">
                                {t("herobutton2")}
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
