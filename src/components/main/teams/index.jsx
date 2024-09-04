import React, { useState } from "react";

const Teams = () => {
    const [active, setActive] = useState("All");

    const handleClick = (role) => {
        setActive(role);
    };

    const teams = [
        {
            name: "John Doe",
            role: "Frontend Developer",
            image: "https://via.placeholder.com/150",
        },
        {
            name: "Jane Smith",
            role: "Frontend Developer",
            image: "https://via.placeholder.com/150",
        },
        {
            name: "Alice Johnson",
            role: "Backend Developer",
            image: "https://via.placeholder.com/150",
        },
        {
            name: "Bob Brown",
            role: "Backend Developer",
            image: "https://via.placeholder.com/150",
        },
        {
            name: "Charlie White",
            role: "Mobile Developer",
            image: "https://via.placeholder.com/150",
        },
        {
            name: "Eve Davis",
            role: "DevOps Developer",
            image: "https://via.placeholder.com/150",
        },
        {
            name: "Frank Miller",
            role: "Frontend Developer",
            image: "https://via.placeholder.com/150",
        },
        {
            name: "Grace Lee",
            role: "Backend Developer",
            image: "https://via.placeholder.com/150",
        },
        {
            name: "Henry Wilson",
            role: "Mobile Developer",
            image: "https://via.placeholder.com/150",
        },
        {
            name: "Ivy Chen",
            role: "DevOps Developer",
            image: "https://via.placeholder.com/150",
        },
        {
            name: "Jack Taylor",
            role: "Desktop Developer",
            image: "https://via.placeholder.com/150",
        },

        {
            name: "Liam Harris",
            role: "Backend Developer",
            image: "https://via.placeholder.com/150",
        },
        {
            name: "Mia Robinson",
            role: "Mobile Developer",
            image: "https://via.placeholder.com/150",
        },
        {
            name: "Noah Clark",
            role: "DevOps Developer",
            image: "https://via.placeholder.com/150",
        },
        {
            name: "Olivia Lewis",
            role: "Desktop Developer",
            image: "https://via.placeholder.com/150",
        },

        {
            name: "Rachel Scott",
            role: "Mobile Developer",
            image: "https://via.placeholder.com/150",
        },

        {
            name: "Tina Turner",
            role: "Desktop Developer",
            image: "https://via.placeholder.com/150",
        },
        {
            name: "Ulysses Grant",
            role: "Frontend Developer",
            image: "https://via.placeholder.com/150",
        },

        {
            name: "Xander Hall",
            role: "DevOps Developer",
            image: "https://via.placeholder.com/150",
        },
    ];

    const filteredTeams =
        active === "All"
            ? teams
            : teams.filter((team) =>
                  team.role.toLowerCase().includes(active.toLowerCase())
              );

    return (
        <div className="py-[60px] bg-white w-full h-auto" id="teams">
            <div className="container-xxl max-sm:container-sm max-md:container-md  max-lg:container-xxl max-xl:container-xxl max-xxl:container-xxl mx-auto px-4 md:px-20">
                <div className="flex flex-col md:flex-row justify-between items-center mb-20">
                    <div className="mb-4 md:mb-0">
                        <h1 className="text-3xl md:text-4xl font-bold">
                            Our Team
                        </h1>
                    </div>
                    <div>
                        <div className="flex flex-wrap items-center sm:justify-start md:justify-start justify-center">
                            <button
                                onClick={() => handleClick("Backend")}
                                className={`px-3 py-2 m-1 ${
                                    active === "Backend"
                                        ? "bg-blue-600"
                                        : "bg-zinc-900"
                                } text-white rounded-md hover:bg-blue-600`}
                            >
                                Backend
                            </button>
                            <button
                                onClick={() => handleClick("Frontend")}
                                className={`px-3 py-2 m-1 ${
                                    active === "Frontend"
                                        ? "bg-blue-600"
                                        : "bg-zinc-900"
                                } text-white rounded-md hover:bg-blue-600`}
                            >
                                Frontend
                            </button>
                            <button
                                onClick={() => handleClick("DevOps")}
                                className={`px-3 py-2 m-1 ${
                                    active === "DevOps"
                                        ? "bg-blue-600"
                                        : "bg-zinc-900"
                                } text-white rounded-md hover:bg-blue-600`}
                            >
                                DevOps
                            </button>
                            <button
                                onClick={() => handleClick("Mobile")}
                                className={`px-3 py-2 m-1 ${
                                    active === "Mobile"
                                        ? "bg-blue-600"
                                        : "bg-zinc-900"
                                } text-white rounded-md hover:bg-blue-600`}
                            >
                                Mobile Dev
                            </button>
                            <button
                                onClick={() => handleClick("Desktop")}
                                className={`px-3 py-2 m-1 ${
                                    active === "Desktop"
                                        ? "bg-blue-600"
                                        : "bg-zinc-900"
                                } text-white rounded-md hover:bg-blue-600`}
                            >
                                Desktop
                            </button>
                            <button
                                onClick={() => handleClick("All")}
                                className={`px-3 py-2 m-1 ${
                                    active === "All"
                                        ? "bg-blue-600"
                                        : "bg-zinc-900"
                                } text-white rounded-md hover:bg-blue-600`}
                            >
                                And More
                            </button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredTeams.map((team, index) => (
                        <div
                            key={index}
                            className="bg-white shadow rounded-md hover:-translate-y-2 transition-transform duration-300 cursor-pointer flex flex-col justify-center items-center p-4"
                        >
                            <img
                                src={team.image}
                                className="rounded-full w-[80px] h-[80px] md:w-[100px] md:h-[100px] mb-3"
                                alt={team.name}
                            />
                            <h3 className="text-lg md:text-xl font-bold text-center">
                                {team.name}
                            </h3>
                            <p className="text-center">{team.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Teams;
