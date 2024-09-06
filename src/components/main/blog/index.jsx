import React, { useState } from "react";

const Blogs = () => {
    const [visibleCount, setVisibleCount] = useState(4);

    const blogs = [
        {
            title: "Our Blog",
            category: "UX/UI Designer",
            tools: "Figma, Photoshop, Illustrator",
            date: "2024-01-01",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, neque.",
            img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Our Blog",
            date: "2024-01-31",
            category: "Mobile Developer",
            tools: "React Native, Flutter, Swift",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, neque.",
            img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Our Blog",
            date: "2024-02-11",
            category: "Full Stack Developer",
            tools: "React, Node.js, MongoDB",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, neque.",
            img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Our Blog",
            date: "2024-12-11",
            category: "DevOps Developer",
            tools: "Docker, Kubernetes, Jenkins",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, neque.",
            img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Our Blog",
            date: "2024-08-09",
            category: "Backend Developer",
            tools: "Python, Django, Flask",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, neque.",
            img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Our Blog",
            date: "2024-08-09",
            category: "Frontend Developer",
            tools: "HTML, CSS, JavaScript",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, neque.",
            img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Our Blog",
            date: "2024-08-09",
            category: "Mobile Developer",
            tools: "React Native, Flutter, Swift",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, neque.",
            img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];

    const showMore = () => {
        setVisibleCount((prevCount) => prevCount + 3);
    };

    return (
        <div className="pt-[130px] pb-[88px] w-full h-full" id="blog">
            <div className="container-xxl max-sm:container-sm max-md:container-md  max-lg:container-xxl max-xl:container-xxl max-xxl:container-xxl mx-auto px-4 md:px-20">
                <h1 className="text-4xl font-bold text-zinc-800 mb-10 text-center">
                    Our Blog
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-10">
                    {blogs.slice(0, visibleCount).map((blog, index) => (
                        <div
                            key={index}
                            className="shadow-lg bg-white rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
                        >
                            <img
                                src={blog.img}
                                alt="Blog"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-3">
                                <div className="flex justify-between items-center">
                                    <span className=" py-2 px-4 text-sm font-semibold bg-slate-100 rounded-full mb-3 inline-block">
                                        {blog.category}
                                    </span>
                                    <span className="text-sm text-zinc-500 bg-slate-100 rounded-full px-4 font-semibold inline-block py-2">
                                        {blog.date}
                                    </span>
                                </div>
                                <h2 className="text-2xl font-bold text-zinc-800 mb-4">
                                    {blog.title}
                                </h2>
                                <p className="text-zinc-500 text-lg mb-4">
                                    {blog.description}
                                </p>
                                <div className="flex justify-between">
                                    <button className="bg-zinc-900 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors">
                                        Read More
                                    </button>
                                    <span className="text-sm text-zinc-500 font-bold inline-block p-2">
                                        {blog.tools}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {visibleCount < blogs.length && (
                    <div className="flex justify-center mt-10">
                        <button
                            onClick={showMore}
                            className="bg-black text-white px-6 py-3 rounded-md hover:bg-zinc-800 transition-colors"
                        >
                            Show More
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Blogs;
