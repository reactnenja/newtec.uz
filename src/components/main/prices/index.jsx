import { CheckCircle, DollarSign, Server } from "lucide-react";
import React, { useState } from "react";
import { BsTools } from "react-icons/bs";

const Prices = () => {
    const [billingCycle, setBillingCycle] = useState("monthly");
    const [selectedCategory, setSelectedCategory] = useState("WPS Hosting");

    const pricingPlans = {
        "WPS Hosting": [
            {
                name: "Basic Plan",
                price: { monthly: 19, yearly: 199 },
                features: [
                    "10GB of Storage",
                    "24/7 Support",
                    "Free SSL Certificate",
                    "1 Domain Included",
                    "100 Email Accounts",
                    "Daily Backups",
                ],
                buttonText: "Get Started",
            },
            {
                name: "Pro Plan",
                price: { monthly: 29, yearly: 299 },
                features: [
                    "50GB of Storage",
                    "Priority Support",
                    "Free SSL Certificate",
                    "5 Domains Included",
                    "500 Email Accounts",
                    "Weekly Backups",
                    "Advanced Security",
                ],
                buttonText: "Get Started",
            },
            {
                name: "Business Plan",
                price: { monthly: 49, yearly: 499 },
                features: [
                    "Unlimited Storage",
                    "24/7 VIP Support",
                    "Free SSL Certificates",
                    "Unlimited Domains",
                    "Unlimited Email Accounts",
                    "Daily Backups",
                    "Enterprise Security",
                    "Dedicated Server",
                ],
                buttonText: "Get Started",
            },
        ],
        "Domain Search": [
            {
                name: "Starter Plan",
                price: { monthly: 9, yearly: 99 },
                features: [
                    "Domain Availability Check",
                    "Multiple TLDs Supported",
                    "Free WHOIS Privacy",
                    "Bulk Domain Purchase",
                    "Custom Domain Suggestions",
                ],
                buttonText: "Search Now",
            },
            {
                name: "Advanced Plan",
                price: { monthly: 19, yearly: 199 },
                features: [
                    "Instant Domain Registration",
                    "Priority Domain Support",
                    "Premium Domain Market Access",
                    "Advanced WHOIS Protection",
                    "Domain Transfer Assistance",
                ],
                buttonText: "Search Now",
            },
            {
                name: "Enterprise Plan",
                price: { monthly: 29, yearly: 299 },
                features: [
                    "Unlimited Domain Searches",
                    "Dedicated Domain Advisor",
                    "Enterprise-Level Support",
                    "Domain Auction Participation",
                    "Exclusive Domain Deals",
                ],
                buttonText: "Search Now",
            },
        ],
        "SSL Certificates": [
            {
                name: "Basic SSL",
                price: { monthly: 5, yearly: 50 },
                features: [
                    "Single Domain SSL",
                    "256-bit Encryption",
                    "Free Reissues",
                    "Trusted by All Browsers",
                    "30-Day Money-Back Guarantee",
                ],
                buttonText: "Get SSL",
            },
            {
                name: "Wildcard SSL",
                price: { monthly: 15, yearly: 150 },
                features: [
                    "Unlimited Subdomains",
                    "256-bit Encryption",
                    "Free Reissues",
                    "Trusted by All Browsers",
                    "Free Site Seal",
                ],
                buttonText: "Get SSL",
            },
            {
                name: "EV SSL",
                price: { monthly: 29, yearly: 290 },
                features: [
                    "Green Address Bar",
                    "256-bit Encryption",
                    "High Assurance",
                    "Trusted by All Browsers",
                    "Up to $1.5M Warranty",
                ],
                buttonText: "Get SSL",
            },
        ],
        "Website Builder": [
            {
                name: "Starter Builder",
                price: { monthly: 12, yearly: 120 },
                features: [
                    "Drag-and-Drop Builder",
                    "10 Free Templates",
                    "Mobile-Responsive Design",
                    "Built-In SEO Tools",
                    "Free Domain for 1 Year",
                ],
                buttonText: "Start Building",
            },
            {
                name: "Professional Builder",
                price: { monthly: 22, yearly: 220 },
                features: [
                    "Advanced Design Options",
                    "E-Commerce Functionality",
                    "Custom Code Integration",
                    "Premium Templates",
                    "Priority Support",
                ],
                buttonText: "Start Building",
            },
            {
                name: "Enterprise Builder",
                price: { monthly: 45, yearly: 450 },
                features: [
                    "Unlimited Pages",
                    "Advanced Analytics",
                    "Enterprise-Level E-Commerce",
                    "Custom API Integration",
                    "Dedicated Account Manager",
                ],
                buttonText: "Start Building",
            },
        ],
    };

    const additionalFeatures = [
        {
            icon: <Server size={48} className="text-blue-500 mb-2" />,
            title: "High-Performance Servers",
            description:
                "Optimized for speed and reliability, ensuring your site is always up and running.",
        },
        {
            icon: <DollarSign size={48} className="text-blue-500 mb-2" />,
            title: "Affordable Pricing",
            description:
                "Choose from a variety of plans that fit your needs and budget, with no hidden fees.",
        },
        {
            icon: <CheckCircle size={48} className="text-blue-500 mb-2" />,
            title: "Guaranteed Uptime",
            description:
                "We guarantee 99.9% uptime with our robust and secure infrastructure.",
        },
        {
            icon: <BsTools size={48} className="text-blue-500 mb-2" />,
            title: "Easy-to-Use Tools",
            description:
                "Our intuitive control panel and tools make managing your services a breeze.",
        },
    ];

    return (
        <div className="bg-gray-50 py-12">
            <div className="container mx-auto px-6">
                {/* Button Group */}
                <div className="mb-8 flex justify-center gap-4 xs:flex-row sm:flex-row md:flex-row lg:flex-row xl:flex-row flex-col ">
                    {Object.keys(pricingPlans).map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 sm:px-4 sm:py-2 md:px-4 md:py-2 lg:px-4 lg:py-2 xl:px-4 xl:py-2 ${
                                selectedCategory === category
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-200 text-gray-700"
                            } rounded transition `}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Billing Cycle Toggle */}
                <div className="text-center mb-10">
                    <button
                        onClick={() => setBillingCycle("monthly")}
                        className={`px-4 py-2 ${
                            billingCycle === "monthly"
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200"
                        } rounded-l transition`}
                    >
                        Monthly
                    </button>
                    <button
                        onClick={() => setBillingCycle("yearly")}
                        className={`px-4 py-2 ${
                            billingCycle === "yearly"
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200"
                        } rounded-r transition`}
                    >
                        Yearly
                    </button>
                </div>

                {/* Pricing Plans */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricingPlans[selectedCategory].map((plan) => (
                        <div
                            key={plan.name}
                            className="bg-white shadow-lg rounded-lg p-6 transition transform hover:scale-105 hover:shadow-2xl"
                        >
                            <h2 className="text-xl font-semibold mb-4">
                                {plan.name}
                            </h2>
                            <p className="text-2xl font-bold text-gray-800">
                                $
                                {billingCycle === "monthly"
                                    ? plan.price.monthly
                                    : plan.price.yearly}{" "}
                                <span className="text-sm font-normal">
                                    / {billingCycle}
                                </span>
                            </p>
                            <ul className="mt-4 mb-6 space-y-2">
                                {plan.features.map((feature, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center space-x-2"
                                    >
                                        <span className="text-green-500">
                                            ✔
                                        </span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
                                {plan.buttonText}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Additional Features */}
                <div className="mt-12 text-center">
                    <h3 className="text-2xl font-semibold mb-4">
                        Why Choose Us?
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {additionalFeatures.map((feature, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md transition transform hover:scale-105"
                            >
                                {feature.icon}
                                <h4 className="text-lg font-semibold mt-2">
                                    {feature.title}
                                </h4>
                                <p className="text-gray-600 text-center">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Prices;
