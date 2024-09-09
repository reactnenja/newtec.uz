import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
    FaChevronDown,
    FaChevronUp,
    FaEnvelope,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaMapMarkerAlt,
    FaPhone,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [openFaq, setOpenFaq] = useState(null);

    const handleChange = (e) => {};
    const handleSubmit = (e) => {};
    const faqData = [
        {
            question: t("question1"),
            answer: t("answer1"),
        },
        {
            question: t("question2"),
            answer: t("answer2"),
        },
        {
            question: t("question3"),
            answer: t("answer3"),
        },
    ];

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <section className="py-20 bg-gray-100" id="contact">
            <ToastContainer position="top-right" autoClose={5000} />
            <div className="container-xxl max-sm:container-sm max-md:container-md  max-lg:container-xxl max-xl:container-xxl max-xxl:container-xxl mx-auto px-4 md:px-20">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-16 text-center">
                    {t("contactus1")}
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact ma'lumotlari */}
                    <div className="space-y-10 bg-white p-8 rounded-xl shadow-lg">
                        <div className="flex items-start space-x-4">
                            <span className="text-3xl text-blue-500">
                                <FaMapMarkerAlt />
                            </span>
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                                    {t("addressTitle")}
                                </h2>
                                <p className="text-gray-600">{t("address")}</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <span className="text-3xl text-blue-500">
                                <FaPhone />
                            </span>
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                                    {t("phoneTitle")}
                                </h2>
                                <p className="text-gray-600">
                                    +998 90 123 45 67
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <span className="text-3xl text-blue-500">
                                <FaEnvelope />
                            </span>
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                                    {t("emailsTitle")}
                                </h2>
                                <p className="text-gray-600">
                                    info@example.com
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                {t("titleSocial")}
                            </h2>
                            <div className="flex space-x-4">
                                <a
                                    href="https://www.instagram.com"
                                    className="text-gray-600 hover:text-blue-500 transition duration-300"
                                >
                                    <FaInstagram className="text-2xl" />
                                </a>
                                <a
                                    href="https://www.facebook.com"
                                    className="text-gray-600 hover:text-blue-500 transition duration-300"
                                >
                                    <FaFacebook className="text-2xl" />
                                </a>
                                <a
                                    href="https://www.twitter.com"
                                    className="text-gray-600 hover:text-blue-500 transition duration-300"
                                >
                                    <FaTwitter className="text-2xl" />
                                </a>
                                <a
                                    href="https://www.linkedin.com"
                                    className="text-gray-600 hover:text-blue-500 transition duration-300"
                                >
                                    <FaLinkedin className="text-2xl" />
                                </a>
                                <a
                                    href="https://www.youtube.com"
                                    className="text-gray-600 hover:text-blue-500 transition duration-300"
                                >
                                    <FaYoutube className="text-2xl" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Aloqa formasi */}
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8">
                            {t("formTitle")}
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-gray-700 mb-2 font-medium"
                                >
                                    {t("name")}
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-gray-700 mb-2 font-medium"
                                >
                                    {t("mail")}
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block text-gray-700 mb-2 font-medium"
                                >
                                    {t("subject")}
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-gray-700 mb-2 font-medium"
                                >
                                    {t("message")}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 font-medium text-lg"
                            >
                                {t("send")}
                            </button>
                        </form>
                    </div>
                </div>

                {/* FAQ section */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                        {t("faq1")}
                    </h2>
                    <div className="space-y-4 max-w-3xl mx-auto">
                        {faqData.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-md"
                            >
                                <button
                                    className="flex justify-between items-center w-full p-4 text-left"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <span className="font-semibold">
                                        {t(faq.question)}
                                    </span>
                                    {openFaq === index ? (
                                        <FaChevronUp />
                                    ) : (
                                        <FaChevronDown />
                                    )}
                                </button>
                                {openFaq === index && (
                                    <div className="p-4 pt-0">
                                        <p className="text-gray-600">
                                            {t(faq.answer)}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Google Map */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                        {t("mapsTitle")}
                    </h2>
                    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d67796.68558029651!2d69.14955940926306!3d41.32586168505353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b685b689e13%3A0xaf4cdf526e02f5e7!2sHilton%20Tashkent%20City!5e0!3m2!1sen!2s!4v1725598186516!5m2!1sen!2s"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
