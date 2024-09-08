import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import React, { useEffect, useState } from "react";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Scrollni kuzatish funksiyasi
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Tugmani bosganda yuqoriga qaytish funksiyasi
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Silliq scroll
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <motion.div
                    className="fixed bottom-8 right-8 z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                >
                    <button
                        onClick={scrollToTop}
                        className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
                    >
                        <ChevronUp size={24} />
                    </button>
                </motion.div>
            )}
        </>
    );
};

export default ScrollToTopButton;
