import { motion } from "framer-motion";
import { ArrowRight, Calendar, ChevronDown, User } from "lucide-react";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const blogPosts = [
    {
        id: 1,
        title: "title1",
        excerpt: "excerpt1",
        date: "2024-03-15",
        author: "author1",
        image: "https://picsum.photos/id/1/400/250",
    },
    {
        id: 2,
        title: "title2",
        excerpt: "excerpt2",
        date: "2024-03-20",
        author: "author2",
        image: "https://picsum.photos/id/2/400/250",
    },
    {
        id: 3,
        title: "title3",
        excerpt: "excerpt3",
        date: "2024-03-25",
        author: "author3",
        image: "https://picsum.photos/id/3/400/250",
    },
    {
        id: 4,
        title: "title4",
        excerpt: "excerpt4",
        date: "2024-04-01",
        author: "Davron Umarov",
        image: "https://picsum.photos/id/4/400/250",
    },
    {
        id: 5,
        title: "title5",
        excerpt: "excerpt5",
        date: "2024-04-05",
        author: "author5",
        image: "https://picsum.photos/id/5/400/250",
    },
    {
        id: 6,
        title: "title6",
        excerpt: "excerpt6",
        date: "2024-04-10",
        author: "author6",
        image: "https://picsum.photos/id/6/400/250",
    },
    {
        id: 7,
        title: "title7",
        excerpt: "excerpt7",
        date: "2024-04-15",
        author: "author7",
        image: "https://picsum.photos/id/7/400/250",
    },
    {
        id: 8,
        title: "title8",
        excerpt: "excerpt8",
        date: "2024-04-20",
        author: "author8",
        image: "https://picsum.photos/id/8/400/250",
    },
    {
        id: 9,
        title: "title9",
        excerpt: "excerpt9",
        date: "2024-04-25",
        author: "author9",
        image: "https://picsum.photos/id/9/400/250",
    },
];

const BlogCard = ({ post }) => {
    const { t } = useTranslation();

    return (
        <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <img
                src={post.image}
                alt={t(post.title)}
                className="w-full h-48 object-cover"
            />
            <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">
                    {t(post.title)}
                </h2>
                <p className="text-gray-600 mb-4">{t(post.excerpt)}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                    <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {post.date}
                    </div>
                    <div className="flex items-center">
                        <User size={16} className="mr-1" />
                        {t(post.author)}
                    </div>
                </div>
            </div>
            <div className="px-6 pb-4">
                <button className="text-blue-600 hover:text-blue-800 flex items-center transition-colors duration-300">
                    {t("readmore")}
                    <ArrowRight size={16} className="ml-1" />
                </button>
            </div>
        </motion.div>
    );
};

const Blogs = () => {
    const [visiblePosts, setVisiblePosts] = useState(6);
    const { t } = useTranslation();

    const showMorePosts = () => {
        setVisiblePosts((prevVisible) =>
            Math.min(prevVisible + 3, blogPosts.length)
        );
    };

    return (
        <div className="pt-[50px] pb-[38px] w-full h-full" id="blog">
            <div className="container-xxl max-sm:container-sm max-md:container-md  max-lg:container-xxl max-xl:container-xxl max-xxl:container-xxl mx-auto px-4 md:px-20">
                <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
                    {t("blog1")}
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.slice(0, visiblePosts).map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>
                {visiblePosts < blogPosts.length && (
                    <motion.div
                        className="text-center mt-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <button
                            onClick={showMorePosts}
                            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300 flex items-center mx-auto"
                        >
                            {t("blog2")}
                            <ChevronDown size={20} className="ml-2" />
                        </button>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Blogs;
