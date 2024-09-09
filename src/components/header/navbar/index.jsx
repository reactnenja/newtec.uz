import { motion } from "framer-motion";
import { Globe, Mail, Menu, PaintRoller, Shield } from "lucide-react";
import React, { useEffect, useState } from "react";
// useTranslation
import { useTranslation } from "react-i18next";
// useTranslation
import { CgClose } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import NavbarScroll from "../../../utils/scrolls";
import SubNav from "./subnav";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();
    const navigate = useNavigate();
    // Ekran o'lchami o'zgarganda menyuni avtomatik yopish uchun hook
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsOpen(false);
                document.body.style.overflow = "auto"; // Menyu yopilganda scrollni tiklaymiz
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Menyu ochilganda scrollni to'xtatish uchun hook
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"; // Menyu ochilganda sahifa skrollini o'chiramiz
        } else {
            document.body.style.overflow = "auto"; // Menyu yopilganda skrollni qayta tiklaymiz
        }
    }, [isOpen]);

    const handleOpen = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const isLink = [
        { name: t("home"), href: "#hero" },
        { name: t("about"), href: "#about" },
        { name: t("blog"), href: "#blog" },
        { name: t("prices"), href: "#prices" },
        { name: t("teams"), href: "#teams" },
        { name: t("contact"), href: "#contact" },
    ];
    const links = [
        {
            name: t("web"),
            href: "/hosting",
            icon: <Globe />,
        },
        {
            name: t("email"),
            href: "/hosting",
            icon: <Mail />,
        },
        {
            name: t("ssl"),
            href: "/ssl-certificates",
            icon: <Shield />,
        },
        {
            name: t("website"),
            href: "/website-builder",
            icon: <PaintRoller />,
        },
    ];

    return (
        <nav className="sticky top-0 w-full z-50 h-[132px] bg-white shadow-md text-black ">
            <div className="h-[calc(132-80)px]">
                {" "}
                <NavbarScroll />
                <SubNav />
            </div>
            <div className="container-xxl max-sm:container-sm max-md:container-md  max-lg:container-xxl max-xl:container-xxl max-xxl:container-xxl mx-auto px-4 md:px-20">
                <div className="flex justify-between items-center gap-2 h-[60px]">
                    <a href="/">
                        <h1 className="text-2xl font-bold">NEWTEC</h1>
                    </a>
                    <div className="flex items-center gap-8">
                        <ul className="hidden items-center gap-8 lg:flex xl:flex 2xl:flex">
                            {isLink?.map((item, index) => (
                                <li key={index}>
                                    <a
                                        className="hover link-border hover:scale-110 duration-700 transition-all"
                                        href={item.href}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex gap-3">
                            <button
                                onClick={() => navigate("/login")}
                                className="bg-transparent duration-700 transition-all lg:bg-black lg:text-white lg:px-4 lg:py-2 lg:rounded-md xl:rounded-md 2xl:rounded-md xl:bg-black 2xl:bg-black xl:text-white 2xl:text-white xl:hover:text-white xl:hover:bg-zinc-700 2xl:hover:bg-zinc-700 2xl:hover:text-white xl:px-4 xl:py-2 sm:underline md:underline sm:underline-offset-1 lg:no-underline xl:no-underline xl:hover:scale-105 2xl:hover:scale-105 sm:py-2 md:py-2 sm:hover:text-black 2xl:no-underline"
                            >
                                {t("login")}
                            </button>
                            <button
                                onClick={() => navigate("/register")}
                                className="bg-transparent duration-700 transition-all lg:bg-black lg:text-white lg:px-4 lg:py-2 lg:rounded-md xl:rounded-md 2xl:rounded-md xl:bg-black 2xl:bg-black xl:text-white 2xl:text-white xl:hover:text-white xl:hover:bg-zinc-700 2xl:hover:bg-zinc-700 2xl:hover:text-white xl:px-4 xl:py-2 sm:underline md:underline sm:underline-offset-1 lg:no-underline xl:no-underline xl:hover:scale-105 2xl:hover:scale-105 sm:py-2 md:py-2 sm:hover:text-black 2xl:no-underline"
                            >
                                {t("register")}
                            </button>
                            <button
                                onClick={handleOpen}
                                className="flex lg:hidden xl:hidden 2xl:hidden justify-center items-center border text-zinc-700 rounded-md p-2 hover:scale-105 duration-700 transition-all"
                            >
                                <Menu size={32} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: isOpen ? 0 : "-100%" }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="fixed top-0 left-0 w-full overflow-y-auto h-screen bg-black/20 backdrop-blur-lg"
            >
                <div className="bg-white/20 py-4 px-2 mb-3 flex justify-between items-center shadow">
                    <a href="/">
                        <h1 className="text-xl font-bold">{t("menu")}</h1>
                    </a>
                    <button
                        onClick={handleOpen}
                        className="flex lg:hidden xl:hidden p-2 text-zinc-700 2xl:hidden justify-center items-center"
                    >
                        <CgClose size={32} />
                    </button>
                </div>
                <div className="container mx-auto px-4">
                    <div className="bg-black rounded-xl mb-4 p-2 w-full b h-[300px] flex justify-center items-center">
                        <ul className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-1 w-full p-2">
                            {links?.map((item, index) => (
                                <li
                                    key={index}
                                    className="w-full flex justify-center"
                                >
                                    <a
                                        href={item.href}
                                        onClick={closeMenu}
                                        className="text-white flex items-center gap-4 text-center hover:bg-zinc-700 duration-500 rounded-md w-full justify-start px-4 py-3"
                                    >
                                        {item.icon}
                                        <span>{item.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <hr className="border-2" />
                    <ul className="flex flex-col gap-2 py-4">
                        {isLink?.map((item, index) => (
                            <li key={index} className="w-full">
                                <a
                                    href={item.href}
                                    onClick={closeMenu}
                                    className="text-2xl duration-700 text-black w-full inline-block rounded-md p-2 hover:translate-x-4 transition-all"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </nav>
    );
};

export default Navbar;
