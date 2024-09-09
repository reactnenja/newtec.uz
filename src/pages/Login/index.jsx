import { motion } from "framer-motion";
import { LucideLock, LucideUser } from "lucide-react";
import { useState } from "react";

const Login = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate login process
        setTimeout(() => {
            setIsSubmitting(false);
            alert("Logged in successfully!");
        }, 2000);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-slate-900 to-slate-700">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-xl shadow-lg w-96"
            >
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
                    Welcome to Newtec
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Username"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <LucideUser className="absolute top-2 right-3 text-gray-400" />
                    </div>

                    <div className="relative">
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <LucideLock className="absolute top-2 right-3 text-gray-400" />
                    </div>

                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold focus:outline-none focus:ring-4 focus:ring-blue-400"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Logging in..." : "Login"}
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
};
export default Login;
