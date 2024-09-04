import { Menu } from "lucide-react";
import React, { useState } from "react";
import SubNav from "./subnav";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };
    const isLink = [
        {
            name: "Home",
            href: "/",
        },
        {
            name: "About",
            href: "/about",
        },
        {
            name: "Blog",
            href: "/blog",
        },

        {
            name: "Prices",
            href: "/pricing",
        },
        {
            name: "Teams",
            href: "/team",
        },
        {
            name: "Services",
            href: "/services",
        },
    ];
    return (
        <nav className="fixed top-0 w-full z-50 bg-white shadow-md text-black h-32">
            <SubNav />
            <div className="container-xxl max-sm:container-sm max-md:container-md  max-lg:container-xxl max-xl:container-xxl max-xxl:container-xxl mx-auto px-4 md:px-20">
                <div className="flex justify-between items-center gap-2">
                    <a href="/">
                        <h1 className="text-2xl font-bold">NEWTEC</h1>
                    </a>
                    <div className="flex items-center gap-8">
                        <ul className="hidden items-center gap-8  lg:flex xl:flex 2xl:flex">
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
                            <button className="bg-transparent duration-700 transition-all lg:bg-black lg:text-white lg:px-4 lg:py-2 lg:rounded-md xl:rounded-md 2xl:rounded-md xl:bg-black 2xl:bg-black xl:text-white 2xl:text-white xl:px-4 xl:py-2 sm:underline md:underline sm:underline-offset-1 lg:no-underline xl:no-underline xl:hover:scale-105 2xl:hover:scale-105 sm:py-2 md:py-2 sm:hover:text-black 2xl:no-underline ">
                                Login
                            </button>
                            <button className="bg-transparene duration-700 transition-all lg:bg-black lg:text-white lg:px-4 lg:py-2 lg:rounded-md xl:rounded-md 2xl:rounded-md xl:bg-black 2xl:bg-black xl:text-white 2xl:text-white xl:px-4 xl:py-2 sm:underline md:underline sm:underline-offset-1 lg:no-underline xl:no-underline xl:hover:scale-105 2xl:hover:scale-105 sm:py-2 md:py-2 sm:hover:text-black 2xl:no-underline ">
                                Register
                            </button>
                            <button
                                onClick={handleOpen}
                                className="flex lg:hidden xl:hidden 2xl:hidden justify-center items-center border bg-black text-white rounded-md p-2 hover:scale-105 duration-700 transition-all"
                            >
                                <Menu size={32} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div
                    className={`${
                        isOpen ? "-translate-x-0" : "-translate-x-full"
                    } fixed top-32 left-0 w-[800px] h-screen p-4 bg-black/20 backdrop-blur-lg overflow-hidden`}
                >
                    <div className="container mx-auto px-4">
                        <ul className="flex flex-col gap-4">
                            {isLink?.map((item, index) => (
                                <li key={index} className="w-full">
                                    <a
                                        href={item.href}
                                        className="bg-white text-black w-full inline-block rounded-md p-2 hover:scale-105 hover:bg-slate-200 hover:text-black transition-all"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
