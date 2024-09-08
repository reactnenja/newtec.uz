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
import { toast, ToastContainer } from "react-toastify";
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

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            !formData.name ||
            !formData.email ||
            !formData.subject ||
            !formData.message
        ) {
            toast.error(t("Iltimos, barcha maydonlarni to'ldiring"));
            return;
        }

        const apiFormData = new FormData();
        apiFormData.append(
            "service_id",
            process.env.REACT_APP_EMAILJS_SERVICE_ID
        );
        apiFormData.append(
            "template_id",
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID
        );
        apiFormData.append("user_id", process.env.REACT_APP_EMAILJS_USER_ID);

        Object.keys(formData).forEach((key) => {
            apiFormData.append(key, formData[key]);
        });

        try {
            const response = await fetch(
                "https://api.emailjs.com/api/v1.0/email/send-form",
                { method: "POST", body: apiFormData }
            );

            if (response.ok) {
                toast.success(t("Xabar muvaffaqiyatli yuborildi!"));
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                throw new Error("Xabar yuborishda xatolik yuz berdi");
            }
        } catch (error) {
            console.error("Error sending email:", error);
            toast.error(
                t(
                    "Xabar yuborishda xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring."
                )
            );
        }
    };

    const faqData = [
        {
            question: "Sizning xizmatlaringiz qanday?",
            answer: "Biz turli sohalarda professional xizmatlar ko'rsatamiz. Bu xizmatlar orasida veb-dizayn, dasturlash, marketing va boshqalar mavjud.",
        },
        {
            question: "Narxlar qanday?",
            answer: "Narxlar loyihaning murakkabligi va hajmiga qarab o'zgaradi. Aniq narxlarni bilish uchun biz bilan bog'laning.",
        },
        {
            question: "Loyiha muddatlari qanday?",
            answer: "Loyiha muddatlari ham loyihaning murakkabligi va hajmiga bog'liq. Odatda, kichik loyihalar 2-4 hafta, o'rta loyihalar 1-3 oy, katta loyihalar 3-6 oy davom etadi.",
        },
    ];

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <section className="py-20 bg-gray-100" id="contact">
            <ToastContainer position="top-right" autoClose={5000} />
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-16 text-center">
                    {t("Biz bilan bog'laning")}
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
                                    {t("Manzil")}
                                </h2>
                                <p className="text-gray-600">
                                    Navoiy ko'chasi, 22-uy, Toshkent,
                                    O'zbekiston
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <span className="text-3xl text-blue-500">
                                <FaPhone />
                            </span>
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                                    {t("Telefon")}
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
                                    {t("Email")}
                                </h2>
                                <p className="text-gray-600">
                                    info@example.com
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                {t("Ijtimoiy tarmoqlar")}
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
                            {t("Xabar yuborish")}
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-gray-700 mb-2 font-medium"
                                >
                                    {t("Ism")}
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
                                    {t("Email")}
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
                                    {t("Mavzu")}
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
                                    {t("Xabar")}
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
                                {t("Yuborish")}
                            </button>
                        </form>
                    </div>
                </div>

                {/* FAQ section */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                        {t("Ko'p so'raladigan savollar")}
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
                        {t("Bizning joylashuv")}
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
