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
        <div className="pt-[140px] pb-[88px] bg-white w-full h-auto" id="teams">
            <div className="container-xxl max-sm:container-sm max-md:container-md  max-lg:container-xxl max-xl:container-xxl max-xxl:container-xxl mx-auto px-4 md:px-20">
                <div className="flex flex-col md:flex-row justify-between items-center mb-20">
                    <div className="mb-4 md:mb-0">
                        <h1 className="text-3xl md:text-4xl font-bold">
                            Teams
                        </h1>
                    </div>
                    <div className="w-full sm:w-full md:w-full lg:w-[800px]">
                        <div className=" w-full border-2 rounded-lg flex items-center flex-col sm:flex-row  md:flex-row lg:flex-row justify-between">
                            <button
                                onClick={() => handleClick("Frontend")}
                                className={`px-3 py-2 ${
                                    active === "Frontend"
                                        ? "bg-zinc-700"
                                        : "bg-zinc-900"
                                } text-white  hover:bg-zinc-800 rounded-md m-1 w-full `}
                            >
                                Frontend
                            </button>
                            <button
                                onClick={() => handleClick("Backend")}
                                className={`px-3 py-2 ${
                                    active === "Backend"
                                        ? "bg-zinc-700"
                                        : "bg-zinc-900"
                                } text-white  hover:bg-zinc-800 rounded-md  m-1 w-full `}
                            >
                                Backend
                            </button>
                            <button
                                onClick={() => handleClick("DevOps")}
                                className={`px-3 py-2 ${
                                    active === "DevOps"
                                        ? "bg-zinc-700"
                                        : "bg-zinc-900"
                                } text-white  hover:bg-zinc-800 rounded-md m-1 w-full `}
                            >
                                DevOps
                            </button>
                            <button
                                onClick={() => handleClick("Mobile")}
                                className={`px-3 py-2 ${
                                    active === "Mobile"
                                        ? "bg-zinc-700"
                                        : "bg-zinc-900"
                                } text-white hover:bg-zinc-800 rounded-md m-1 w-full `}
                            >
                                Mobile
                            </button>
                            <button
                                onClick={() => handleClick("Desktop")}
                                className={`px-3 py-2 ${
                                    active === "Desktop"
                                        ? "bg-zinc-700"
                                        : "bg-zinc-900"
                                } text-white  hover:bg-zinc-800 rounded-md m-1 w-full `}
                            >
                                Desktop
                            </button>
                            <button
                                onClick={() => handleClick("All")}
                                className={`px-3 py-2 ${
                                    active === "All"
                                        ? "bg-zinc-700"
                                        : "bg-zinc-900"
                                } text-white rounded-md hover:bg-zinc-800 m-1 w-full `}
                            >
                                Teams
                            </button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
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
