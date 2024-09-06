import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const NavbarScroll = () => {
    const [scrollYProgress, setScrollYProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            setScrollYProgress(scrollPercent);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <motion.div
                style={{
                    background:
                        "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
                    width: `${scrollYProgress}%`,
                }}
                className="fixed top-0 left-0 h-2 rounded-r-full"
                initial={{ width: "0%" }}
                animate={{ width: `${scrollYProgress}%` }}
                transition={{ duration: 0.1 }}
            />
        </>
    );
};

export default NavbarScroll;
