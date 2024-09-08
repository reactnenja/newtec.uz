// import React, { useState } from "react";
// import { useTranslation } from "react-i18next";
// const Blogs = () => {
//     const [visibleCount, setVisibleCount] = useState(4);
//     const { t } = useTranslation();
//     const blogs = [
//         {
//             title: "Our Blog",
//             category: "UX/UI Designer",
//             tools: "Figma, Photoshop, Illustrator",
//             date: "2024-01-01",
//             description:
//                 "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, neque.",
//             img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         },
//         {
//             title: "Our Blog",
//             date: "2024-01-31",
//             category: "Mobile Developer",
//             tools: "React Native, Flutter, Swift",
//             description:
//                 "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, neque.",
//             img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         },
//         {
//             title: "Our Blog",
//             date: "2024-02-11",
//             category: "Full Stack Developer",
//             tools: "React, Node.js, MongoDB",
//             description:
//                 "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, neque.",
//             img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         },
//         {
//             title: "Our Blog",
//             date: "2024-12-11",
//             category: "DevOps Developer",
//             tools: "Docker, Kubernetes, Jenkins",
//             description:
//                 "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, neque.",
//             img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         },
//         {
//             title: "Our Blog",
//             date: "2024-08-09",
//             category: "Backend Developer",
//             tools: "Python, Django, Flask",
//             description:
//                 "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, neque.",
//             img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         },
//         {
//             title: "Our Blog",
//             date: "2024-08-09",
//             category: "Frontend Developer",
//             tools: "HTML, CSS, JavaScript",
//             description:
//                 "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, neque.",
//             img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         },
//         {
//             title: "Our Blog",
//             date: "2024-08-09",
//             category: "Mobile Developer",
//             tools: "React Native, Flutter, Swift",
//             description:
//                 "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, neque.",
//             img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         },
//     ];

//     const showMore = () => {
//         setVisibleCount((prevCount) => prevCount + 3);
//     };

//     return (
//         <div className="pt-[130px] pb-[88px] w-full h-full" id="blog">
//             <div className="container-xxl max-sm:container-sm max-md:container-md  max-lg:container-xxl max-xl:container-xxl max-xxl:container-xxl mx-auto px-4 md:px-20">
//                 <h1 className="text-4xl font-bold text-zinc-800 mb-10 text-center">
//                     {t("title")}
//                 </h1>
//                 <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-10">
//                     {blogs.slice(0, visibleCount).map((blog, index) => (
//                         <div
//                             key={index}
//                             className="shadow-lg bg-white rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
//                         >
//                             <img
//                                 src={blog.img}
//                                 alt="Blog"
//                                 className="w-full h-48 object-cover"
//                             />
//                             <div className="p-3">
//                                 <div className="flex justify-between items-center">
//                                     <span className=" py-2 px-4 text-sm font-semibold bg-slate-100 rounded-full mb-3 inline-block">
//                                         {blog.category}
//                                     </span>
//                                     <span className="text-sm text-zinc-500 bg-slate-100 rounded-full px-4 font-semibold inline-block py-2">
//                                         {blog.date}
//                                     </span>
//                                 </div>
//                                 <h2 className="text-2xl font-bold text-zinc-800 mb-4">
//                                     {blog.title}
//                                 </h2>
//                                 <p className="text-zinc-500 text-lg mb-4">
//                                     {blog.description}
//                                 </p>
//                                 <div className="flex justify-between">
//                                     <button className="bg-zinc-900 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors">
//                                         {t("readmore")}
//                                     </button>
//                                     <span className="text-sm text-zinc-500 font-bold inline-block p-2">
//                                         {blog.tools}
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 {visibleCount < blogs.length && (
//                     <div className="flex justify-center mt-10">
//                         <button
//                             onClick={showMore}
//                             className="bg-black text-white px-6 py-3 rounded-md hover:bg-zinc-800 transition-colors"
//                         >
//                             {t("showmore")}
//                         </button>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Blogs;
import { motion } from "framer-motion";
import { ArrowRight, Calendar, ChevronDown, User } from "lucide-react";
import React, { useState } from "react";

const blogPosts = [
    {
        id: 1,
        title: "Web Dizayn Trendlari 2024",
        excerpt:
            "2024-yilning eng so'nggi web dizayn trendlari haqida batafsil ma'lumot.",
        date: "2024-03-15",
        author: "Aziza Karimova",
        image: "https://picsum.photos/id/1/400/250",
    },
    {
        id: 2,
        title: "React Hooks: Chuqur Tahlil",
        excerpt:
            "React Hooks-ning barcha jihatlari va ulardan samarali foydalanish usullari.",
        date: "2024-03-20",
        author: "Bobur Aliyev",
        image: "https://picsum.photos/id/2/400/250",
    },
    {
        id: 3,
        title: "SEO Strategiyalari",
        excerpt:
            "Saytingizni qidiruv tizimlarida yuqori o'rinlarga chiqarish uchun eng yaxshi SEO usullari.",
        date: "2024-03-25",
        author: "Gulnora Rashidova",
        image: "https://picsum.photos/id/3/400/250",
    },
    {
        id: 4,
        title: "Mobil Ilovalar Yaratish",
        excerpt:
            "Mobil ilovalar yaratishning eng yaxshi amaliyotlari va yangi texnologiyalar.",
        date: "2024-04-01",
        author: "Davron Umarov",
        image: "https://picsum.photos/id/4/400/250",
    },
    {
        id: 5,
        title: "UI/UX Dizayn Prinsiplari",
        excerpt:
            "Foydalanuvchilar uchun qulay va jozibali interfeyslar yaratish sirlari.",
        date: "2024-04-05",
        author: "Nilufar Akbarova",
        image: "https://picsum.photos/id/5/400/250",
    },
    {
        id: 6,
        title: "Backend Arxitekturasi",
        excerpt:
            "Kuchli va masshtablanadigan backend tizimlarini loyihalash usullari.",
        date: "2024-04-10",
        author: "Tohir Zokirov",
        image: "https://picsum.photos/id/6/400/250",
    },
    {
        id: 7,
        title: "Machine Learning Asoslari",
        excerpt:
            "Machine Learning-ning asosiy tushunchalari va ularning amaliy qo'llanilishi.",
        date: "2024-04-15",
        author: "Malika Rahimova",
        image: "https://picsum.photos/id/7/400/250",
    },
    {
        id: 8,
        title: "Kiberhavfsizlik: Zamonaviy Yondashuvlar",
        excerpt:
            "Raqamli dunyo xavfsizligini ta'minlashning eng yangi usullari.",
        date: "2024-04-20",
        author: "Jahongir Tursunov",
        image: "https://picsum.photos/id/8/400/250",
    },
    {
        id: 9,
        title: "Blockchain Texnologiyasi",
        excerpt:
            "Blockchain texnologiyasining ishlash prinsipi va uning kelajakdagi roli.",
        date: "2024-04-25",
        author: "Sarvinoz Qodirova",
        image: "https://picsum.photos/id/9/400/250",
    },
];

const BlogCard = ({ post }) => (
    <motion.div
        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
        whileHover={{ y: -5 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
        <img
            src={post.image}
            alt={post.title}
            className="w-full h-48 object-cover"
        />
        <div className="p-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {post.title}
            </h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <div className="flex justify-between items-center text-sm text-gray-500">
                <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    {post.date}
                </div>
                <div className="flex items-center">
                    <User size={16} className="mr-1" />
                    {post.author}
                </div>
            </div>
        </div>
        <div className="px-6 pb-4">
            <button className="text-blue-600 hover:text-blue-800 flex items-center transition-colors duration-300">
                Batafsil o'qish
                <ArrowRight size={16} className="ml-1" />
            </button>
        </div>
    </motion.div>
);

const Blogs = () => {
    const [visiblePosts, setVisiblePosts] = useState(6);

    const showMorePosts = () => {
        setVisiblePosts((prevVisible) =>
            Math.min(prevVisible + 3, blogPosts.length)
        );
    };

    return (
        <div className="pt-[130px] pb-[88px] w-full h-full" id="blog">
            <div className="container mx-auto px-4 py-12">
                <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
                    Bizning Blog
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
                            Yana ko'rsatish
                            <ChevronDown size={20} className="ml-2" />
                        </button>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default Blogs;
