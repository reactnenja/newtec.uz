import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";
import React, { useState } from "react";

const Prices = () => {
    const [billingCycle, setBillingCycle] = useState("monthly");
    const [selectedSection, setSelectedSection] = useState("Web Hosting");
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const pricingPlans = {
        "Web Hosting": [
            {
                name: "Starter Plan",
                price: { monthly: 2.99, yearly: 35.88, bonus: 2.69 },
                features: [
                    "1 Website",
                    "30 GB SSD Storage",
                    "100 GB Bandwidth",
                    "1 Email Account",
                    "Free SSL Certificate",
                    "24/7 Support",
                ],
                buttonText: "Select",
            },
            {
                name: "Premium Plan",
                price: { monthly: 5.99, yearly: 71.88, bonus: 5.39 },
                features: [
                    "100 Websites",
                    "100 GB SSD Storage",
                    "Unlimited Bandwidth",
                    "Free Email",
                    "Free SSL Certificate",
                    "Free Domain",
                    "24/7 Support",
                ],
                buttonText: "Select",
            },
            {
                name: "Business Plan",
                price: { monthly: 9.99, yearly: 119.88, bonus: 8.99 },
                features: [
                    "100 Websites",
                    "200 GB SSD Storage",
                    "Unlimited Bandwidth",
                    "Free Email",
                    "Free SSL Certificate",
                    "Free Domain",
                    "Daily Backups",
                    "24/7 Support",
                ],
                buttonText: "Select",
            },
        ],
        // Add more categories here...
    };

    const calculatePrice = (prices) => {
        const price = prices[billingCycle];
        return price ? price.toFixed(2) : "N/A";
    };

    const openModal = (plan) => {
        setSelectedPlan(plan);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="bg-gray-50 py-20" id="prices">
            <div className="container mx-auto px-4 md:px-20">
                <h2 className="text-5xl font-bold text-center mb-12">
                    Pricing
                </h2>

                {/* Billing Cycle Toggle */}
                <div className="text-center mb-10">
                    <div className="inline-flex border rounded-lg overflow-hidden">
                        {["monthly", "yearly", "bonus"].map((cycle) => (
                            <button
                                key={cycle}
                                onClick={() => setBillingCycle(cycle)}
                                className={`px-4 py-2 ${
                                    billingCycle === cycle
                                        ? "bg-zinc-800 text-white"
                                        : "bg-gray-200"
                                } transition`}
                            >
                                {cycle.charAt(0).toUpperCase() + cycle.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Section Toggle */}
                <div className="text-center mb-10">
                    <div className="inline-flex flex-wrap justify-center border rounded-lg overflow-hidden">
                        {Object.keys(pricingPlans).map((section) => (
                            <button
                                key={section}
                                onClick={() => setSelectedSection(section)}
                                className={`px-4 py-2 ${
                                    selectedSection === section
                                        ? "bg-zinc-800 text-white"
                                        : "bg-gray-200"
                                } transition`}
                            >
                                {section}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Pricing Plans */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pricingPlans[selectedSection]?.map((plan) => (
                        <motion.div
                            key={plan.name}
                            onClick={() => openModal(plan)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white shadow-lg rounded-lg p-6 cursor-pointer transition"
                        >
                            <h2 className="text-xl font-semibold mb-4 text-center">
                                {plan.name}
                            </h2>
                            <p className="text-center text-gray-600 text-2xl font-bold mb-4">
                                ${calculatePrice(plan.price)}
                                <span className="text-sm text-gray-400">
                                    /{billingCycle === "yearly" ? "year" : "mo"}
                                </span>
                            </p>
                            <ul className="mb-6">
                                {plan.features.map((feature, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center mb-2"
                                    >
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="bg-zinc-800 text-white py-2 px-4 rounded-full w-full hover:bg-blue-600 transition">
                                {plan.buttonText}
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Modal */}
                <AnimatePresence>
                    {isModalOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
                        >
                            <motion.div
                                initial={{ y: -50 }}
                                animate={{ y: 0 }}
                                exit={{ y: 50 }}
                                className="bg-white rounded-lg shadow-xl p-6 w-full max-w-lg"
                            >
                                <button
                                    onClick={closeModal}
                                    className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition"
                                >
                                    <XCircle className="w-6 h-6" />
                                </button>
                                <h2 className="text-xl font-semibold mb-4 text-center">
                                    {selectedPlan?.name}
                                </h2>
                                <p className="text-center text-gray-600 text-2xl font-bold mb-4">
                                    ${calculatePrice(selectedPlan?.price)}
                                    <span className="text-sm text-gray-400">
                                        /
                                        {billingCycle === "yearly"
                                            ? "year"
                                            : "mo"}
                                    </span>
                                </p>
                                <ul className="mb-6">
                                    {selectedPlan?.features.map(
                                        (feature, index) => (
                                            <li
                                                key={index}
                                                className="flex items-center mb-2"
                                            >
                                                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                                <span>{feature}</span>
                                            </li>
                                        )
                                    )}
                                </ul>
                                <button
                                    onClick={closeModal}
                                    className="bg-zinc-800 text-white py-2 px-4 rounded-full w-full hover:bg-blue-600 transition"
                                >
                                    Close
                                </button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Prices;
