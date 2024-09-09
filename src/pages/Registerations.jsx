import { motion } from "framer-motion";
import { LucideGlobe, LucideLock, LucideMail, LucideUser } from "lucide-react";
import { useState } from "react";

export default function RegistrationPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [country, setCountry] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate registration process
        setTimeout(() => {
            setIsSubmitting(false);
            alert("Registration Successful!");
        }, 2000);
    };

    const countries = [
        { code: "us", name: "United States" },
        { code: "gb", name: "United Kingdom" },
        { code: "fr", name: "France" },
        { code: "de", name: "Germany" },
        { code: "uz", name: "Uzbekistan" },
    ];

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-slate-900 to-slate-700">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg"
            >
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
                    Register at Newtec
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Ism */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="First Name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <LucideUser className="absolute top-2 right-3 text-gray-400" />
                    </div>

                    {/* Familya */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <LucideUser className="absolute top-2 right-3 text-gray-400" />
                    </div>

                    {/* Email */}
                    <div className="relative">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <LucideMail className="absolute top-2 right-3 text-gray-400" />
                    </div>

                    {/* Parol */}
                    <div className="relative">
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <LucideLock className="absolute top-2 right-3 text-gray-400" />
                    </div>

                    {/* Mamlakat tanlash */}
                    <div className="relative">
                        <select
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 appearance-none"
                        >
                            <option value="" disabled>
                                Choose your country
                            </option>
                            {countries.map((c) => (
                                <option key={c.code} value={c.code}>
                                    {c.name}
                                </option>
                            ))}
                        </select>
                        <LucideGlobe className="absolute top-2 right-3 text-gray-400" />
                    </div>

                    {/* Bayroq ikonkasi */}
                    {country && (
                        <div className="flex items-center space-x-2">
                            <span className={`fi fi-${country}`} />
                            <span className="text-gray-700 font-semibold">
                                {
                                    countries.find((c) => c.code === country)
                                        ?.name
                                }
                            </span>
                        </div>
                    )}

                    {/* Tugma */}
                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold focus:outline-none focus:ring-4 focus:ring-blue-400"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Registering..." : "Register"}
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
}
