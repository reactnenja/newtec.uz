import { motion } from "framer-motion";
import React, { useState } from "react";
import {
    FaCode,
    FaDesktop,
    FaMobileAlt,
    FaServer,
    FaTools,
    FaUsers,
} from "react-icons/fa";

const Teams = () => {
    const [active, setActive] = useState("All");

    const handleClick = (role) => {
        setActive(role);
    };

    const teams = [
        {
            name: "John Doe",
            role: "Frontend Developer",
            image: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
        },
        {
            name: "Jane Smith",
            role: "Frontend Developer",
            image: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
        },
        {
            name: "Alice Johnson",
            role: "Backend Developer",
            image: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
        },
        {
            name: "Bob Brown",
            role: "Backend Developer",
            image: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
        },
        {
            name: "Charlie White",
            role: "Mobile Developer",
            image: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
        },
        {
            name: "Eve Davis",
            role: "DevOps Developer",
            image: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
        },
        {
            name: "Frank Miller",
            role: "Frontend Developer",
            image: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
        },
        {
            name: "Grace Lee",
            role: "Backend Developer",
            image: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
        },
        {
            name: "Henry Wilson",
            role: "Mobile Developer",
            image: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
        },
        {
            name: "Ivy Chen",
            role: "DevOps Developer",
            image: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
        },
        {
            name: "Jack Taylor",
            role: "Desktop Developer",
            image: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
        },
        {
            name: "Liam Harris",
            role: "Backend Developer",
            image: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
        },
        {
            name: "Mia Robinson",
            role: "Mobile Developer",
            image: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
        },
        {
            name: "Noah Clark",
            role: "DevOps Developer",
            image: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
        },
        {
            name: "Olivia Lewis",
            role: "Desktop Developer",
            image: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
        },
        {
            name: "Rachel Scott",
            role: "Mobile Developer",
            image: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
        },
        {
            name: "Tina Turner",
            role: "Desktop Developer",
            image: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
        },
        {
            name: "Ulysses Grant",
            role: "Frontend Developer",
            image: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
        },
        {
            name: "Xander Hall",
            role: "DevOps Developer",
            image: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
        },
    ];

    const filteredTeams =
        active === "All"
            ? teams
            : teams.filter((team) =>
                  team.role.toLowerCase().includes(active.toLowerCase())
              );

    return (
        <div
            className="pt-[140px] pb-[88px] bg-gradient-to-b from-gray-100 to-gray-50 w-full h-auto"
            id="teams"
        >
            <div className="container-xxl max-sm:container-sm max-md:container-md  max-lg:container-xxl max-xl:container-xxl max-xxl:container-xxl mx-auto px-4 md:px-20">
                <div className="flex flex-col md:flex-row justify-between items-center mb-10">
                    <h1 className="text-4xl font-extrabold mb-4 md:mb-0 text-center md:text-left text-gray-800">
                        Our Amazing Team
                    </h1>
                    <div className="flex flex-wrap justify-center">
                        <button
                            onClick={() => handleClick("Frontend")}
                            className={`flex items-center gap-2 px-4 py-2 m-1 text-white ${
                                active === "Frontend"
                                    ? "bg-blue-600"
                                    : "bg-gray-700"
                            } rounded-lg hover:bg-blue-500 transition`}
                        >
                            <FaCode /> Frontend
                        </button>
                        <button
                            onClick={() => handleClick("Backend")}
                            className={`flex items-center gap-2 px-4 py-2 m-1 text-white ${
                                active === "Backend"
                                    ? "bg-blue-600"
                                    : "bg-gray-700"
                            } rounded-lg hover:bg-blue-500 transition`}
                        >
                            <FaServer /> Backend
                        </button>
                        <button
                            onClick={() => handleClick("DevOps")}
                            className={`flex items-center gap-2 px-4 py-2 m-1 text-white ${
                                active === "DevOps"
                                    ? "bg-blue-600"
                                    : "bg-gray-700"
                            } rounded-lg hover:bg-blue-500 transition`}
                        >
                            <FaTools /> DevOps
                        </button>
                        <button
                            onClick={() => handleClick("Mobile")}
                            className={`flex items-center gap-2 px-4 py-2 m-1 text-white ${
                                active === "Mobile"
                                    ? "bg-blue-600"
                                    : "bg-gray-700"
                            } rounded-lg hover:bg-blue-500 transition`}
                        >
                            <FaMobileAlt /> Mobile
                        </button>
                        <button
                            onClick={() => handleClick("Desktop")}
                            className={`flex items-center gap-2 px-4 py-2 m-1 text-white ${
                                active === "Desktop"
                                    ? "bg-blue-600"
                                    : "bg-gray-700"
                            } rounded-lg hover:bg-blue-500 transition`}
                        >
                            <FaDesktop /> Desktop
                        </button>
                        <button
                            onClick={() => handleClick("All")}
                            className={`flex items-center gap-2 px-4 py-2 m-1 text-white ${
                                active === "All" ? "bg-blue-600" : "bg-gray-700"
                            } rounded-lg hover:bg-blue-500 transition`}
                        >
                            <FaUsers /> All Teams
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {filteredTeams.map((team, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition duration-300"
                        >
                            <img
                                src={team.image}
                                className="rounded-full w-24 h-24 mx-auto mb-4 border-4 border-gray-300"
                                alt={team.name}
                            />
                            <h3 className="text-xl font-semibold">
                                {team.name}
                            </h3>
                            <p className="text-gray-500">{team.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Teams;
