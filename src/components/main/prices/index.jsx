import { CheckCircle, Search } from "lucide-react";
import React, { useState } from "react";

const Prices = () => {
    const [billingCycle, setBillingCycle] = useState("monthly");
    const [selectedSection, setSelectedSection] = useState("Web Hosting");
    const [isSearchVisible, setSearchVisible] = useState(false);

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
        "Business Email": [
            {
                name: "Enterprise Email",
                price: { monthly: 1.49, yearly: 17.88, bonus: 1.34 },
                features: [
                    "10 GB Storage",
                    "50 Email Aliases",
                    "Custom Domain",
                    "Webmail Access",
                    "IMAP/POP3/SMTP",
                    "24/7 Support",
                ],
                buttonText: "Select",
            },
            {
                name: "Enterprise Email Plus",
                price: { monthly: 2.99, yearly: 35.88, bonus: 2.69 },
                features: [
                    "30 GB Storage",
                    "Unlimited Email Aliases",
                    "Custom Domain",
                    "Webmail Access",
                    "IMAP/POP3/SMTP",
                    "Advanced Spam Filter",
                    "24/7 Support",
                ],
                buttonText: "Select",
            },
        ],
        "Website Builder": [
            {
                name: "Starter",
                price: { monthly: 7.99, yearly: 95.88, bonus: 7.19 },
                features: [
                    "Free Domain",
                    "Free SSL Certificate",
                    "30+ Templates",
                    "Mobile-Optimized",
                    "E-Commerce Features",
                    "24/7 Customer Support",
                ],
                buttonText: "Start Building",
            },
            {
                name: "Business",
                price: { monthly: 11.99, yearly: 143.88, bonus: 10.79 },
                features: [
                    "Free Domain",
                    "Free SSL Certificate",
                    "100+ Templates",
                    "Mobile-Optimized",
                    "Advanced E-Commerce",
                    "SEO Tools",
                    "Priority Support",
                ],
                buttonText: "Start Building",
            },
        ],
    };

    const calculatePrice = (prices) => {
        const price = prices[billingCycle];
        if (typeof price !== "number") {
            console.error("Invalid price");
            return "N/A";
        }
        return price.toFixed(2);
    };

    return (
        <div className="bg-gray-50 pt-[138px] pb-[88px]" id="prices">
            <div className="container-xxl max-sm:container-sm max-md:container-md  max-lg:container-xxl max-xl:container-xxl max-xxl:container-xxl mx-auto px-4 md:px-20">
                <h2 className="text-5xl font-bold text-left mb-10">Pricing</h2>
                {/* Domain Search */}
                <div className="text-center mb-8">
                    <button
                        aria-label="Toggle Domain Search"
                        className="bg-zinc-800 duration-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
                        onClick={() => setSearchVisible(!isSearchVisible)}
                    >
                        Search Domain <Search className="inline w-5 h-5 ml-2" />
                    </button>
                    {isSearchVisible && (
                        <div className="mt-4 flex justify-center">
                            <input
                                type="text"
                                placeholder="Enter domain name"
                                className="px-4 py-2 w-full max-w-sm border rounded-l-md rounded-r-none outline-none"
                                aria-label="Domain Name Input "
                            />
                            <button className="bg-zinc-800 text-white px-4 rounded-r-md hover:bg-zinc-900">
                                Search{" "}
                                <Search className="inline w-5 h-5 ml-2" />
                            </button>
                        </div>
                    )}
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
                                        ? "bg-zinc-800 duration-500 text-white"
                                        : "bg-gray-200"
                                } transition`}
                                aria-label={`Select ${section} Section`}
                            >
                                {section}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Billing Cycle Toggle */}
                <div className="text-center mb-10">
                    <div className="inline-flex border rounded-lg overflow-hidden">
                        {["monthly", "yearly", "bonus"].map((cycle) => (
                            <button
                                key={cycle}
                                onClick={() => setBillingCycle(cycle)}
                                className={`px-4 py-2 ${
                                    billingCycle === cycle
                                        ? "bg-zinc-800 duration-500 text-white"
                                        : "bg-gray-200"
                                } transition`}
                                aria-label={`Select ${cycle} Billing Cycle`}
                            >
                                {cycle.charAt(0).toUpperCase() + cycle.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Pricing Plans */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pricingPlans[selectedSection]?.map((plan) => (
                        <div
                            key={plan.name}
                            className="bg-white shadow-lg rounded-lg duration-700 cursor-pointer p-6 transition transform hover:scale-105 md:hover:scale-90 sm:hover:scale-90  max-sm:hover:scale-90 hover:shadow-2xl"
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
                            <button className="bg-zinc-800 duration-500 text-white py-2 px-4 rounded-full w-full hover:bg-blue-600 transition">
                                {plan.buttonText}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Prices;
