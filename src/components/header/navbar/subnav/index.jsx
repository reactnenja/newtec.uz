import { Moon, Sun } from "lucide-react";
import React, { useState } from "react";

const SubNav = () => {
    const [click, setClick] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState({
        icon: <span className="fi fi-us"></span>,
        name: "English",
    });

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const selectLanguage = (language) => {
        setSelectedLanguage(language);
        setIsOpen(false);
    };

    const languages = [
        { icon: <span className="fi fi-us"></span>, name: "English" },
        { icon: <span className="fi fi-ru"></span>, name: "Russian" },
        { icon: <span className="fi fi-uz"></span>, name: "Uzbek" },
    ];

    const links = [
        { name: "Web Hosting", href: "/web-hosting" },
        { name: "Email Hosting", href: "/email-hosting" },
        { name: "SSL Certificates", href: "/ssl-certificates" },
        { name: "Website Builder", href: "/website-builder" },
    ];

    const handleClick = () => {
        setClick(!click);
    };

    return (
        <div className="w-full h-auto mb-3 py-2 bg-zinc-900 rounded-b-[20px] sm:rounded-b-[46px] md:rounded-b-[46px] lg:rounded-b-[46px] xl:rounded-b-[46px] 2xl:rounded-b-[46px]">
            <div className="container-xxl max-sm:container-sm max-md:container-md  max-lg:container-xxl max-xl:container-xxl max-xxl:container-xxl mx-auto px-4 md:px-20">
                <div className="flex justify-between items-center text-md">
                    <a
                        href="/contact"
                        className="hover:scale-95 duration-700 text-white hover:text-white rounded-md transition-all p-2"
                    >
                        Contact
                    </a>
                    <div className="flex gap-4 items-center">
                        <ul className="hidden gap-4 lg:flex xl:flex 2xl:flex">
                            {links.map((item, index) => (
                                <li key={index}>
                                    <a
                                        className="hover:scale-95 duration-700 text-white hover:bg-slate-200 hover:text-black rounded-md transition-all p-2"
                                        href={item.href}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex gap-4 items-center">
                            <button
                                onClick={handleClick}
                                className="text-white p-2 rounded-md hover:bg-slate-200 hover:text-black transition-all"
                            >
                                {click ? <Moon /> : <Sun />}
                            </button>
                            <div className="relative inline-block text-left">
                                <button
                                    onClick={toggleDropdown}
                                    className="text-white p-2 rounded-md hover:bg-slate-200 hover:text-black transition-all flex items-center"
                                >
                                    {selectedLanguage.icon}
                                    <span className="ml-2">
                                        {selectedLanguage.name}
                                    </span>
                                    <svg
                                        className="ml-2 h-5 w-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.707a1 1 0 011.414 0L10 11l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>

                                {isOpen && (
                                    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                        <div className="py-1">
                                            {languages.map(
                                                (language, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() =>
                                                            selectLanguage(
                                                                language
                                                            )
                                                        }
                                                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                                                    >
                                                        {language.icon}
                                                        <span className="ml-2">
                                                            {language.name}
                                                        </span>
                                                    </button>
                                                )
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubNav;
