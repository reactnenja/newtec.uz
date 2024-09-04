import React, { useState } from "react";

const Blogs = () => {
    const [visibleCount, setVisibleCount] = useState(4);

    const blogs = [
        {
            title: "Our Blog",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, neque.",
            img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Our Blog",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, neque.",
            img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Our Blog",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, neque.",
            img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Our Blog",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, neque.",
            img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Our Blog",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, neque.",
            img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Our Blog",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, neque.",
            img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "Our Blog",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, neque.",
            img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];

    const showMore = () => {
        setVisibleCount((prevCount) => prevCount + 3);
    };

    return (
        <div className="py-[60px] w-full h-full">
            <div className="container-xxl max-sm:container-sm max-md:container-md  max-lg:container-xxl max-xl:container-xxl max-xxl:container-xxl mx-auto px-4 md:px-20">
                <h1 className="text-4xl font-bold text-zinc-800 mb-10 text-center">
                    Our Blog
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
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
                            <div className="p-6">
                                <h2 className="text-2xl font-bold text-zinc-800 mb-4">
                                    {blog.title}
                                </h2>
                                <p className="text-zinc-500 text-lg mb-4">
                                    {blog.description}
                                </p>
                                <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors">
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                {visibleCount < blogs.length && (
                    <div className="flex justify-center mt-10">
                        <button
                            onClick={showMore}
                            className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors"
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
