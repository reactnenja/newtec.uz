import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
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
    const form = useRef();
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
            toast.error("Iltimos, barcha maydonlarni to'ldiring");
            return;
        }

        try {
            const result = await emailjs.sendForm(
                "service_no2jvv7",
                "template_z4am2kl",
                form.current,
                "XEB9PPgwmar-JlTCs"
            );

            if (result.text === "OK") {
                toast.success("Xabar muvaffaqiyatli yuborildi!");
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                toast.error(
                    "Xabar yuborishda xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring."
                );
            }
        } catch (error) {
            console.error("Error sending email:", error);
            toast.error(
                "Xabar yuborishda xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring."
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
        <section className="pt-20 pb-16 bg-gray-100" id="contact">
            <ToastContainer position="top-right" autoClose={5000} />
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center">
                    Biz bilan bog'laning
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Contact ma'lumotlari */}
                    <div className="space-y-8 bg-white p-6 md:p-8 rounded-lg shadow-lg">
                        <div className="flex items-start space-x-4">
                            <FaMapMarkerAlt className="text-2xl text-zinc-800 mt-1" />
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                                    Manzil
                                </h2>
                                <p className="text-gray-600">
                                    Navoiy ko'chasi, 22-uy, Toshkent,
                                    O'zbekiston
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <FaPhone className="text-2xl text-zinc-800 mt-1" />
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                                    Telefon
                                </h2>
                                <p className="text-gray-600">
                                    +998 90 123 45 67
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <FaEnvelope className="text-2xl text-zinc-800 mt-1" />
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                                    Email
                                </h2>
                                <p className="text-gray-600">
                                    info@example.com
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                Ijtimoiy tarmoqlar
                            </h2>
                            <div className="flex space-x-4">
                                <a
                                    href="https://www.instagram.com"
                                    className="text-zinc-800 hover:text-blue-800 text-2xl"
                                >
                                    <FaInstagram />
                                </a>
                                <a
                                    href="https://www.facebook.com"
                                    className="text-zinc-800 hover:text-blue-800 text-2xl"
                                >
                                    <FaFacebook />
                                </a>
                                <a
                                    href="https://www.twitter.com"
                                    className="text-zinc-800 hover:text-blue-800 text-2xl"
                                >
                                    <FaTwitter />
                                </a>
                                <a
                                    href="https://www.linkedin.com"
                                    className="text-zinc-800 hover:text-blue-800 text-2xl"
                                >
                                    <FaLinkedin />
                                </a>
                                <a
                                    href="https://www.youtube.com"
                                    className="text-zinc-800 hover:text-blue-800 text-2xl"
                                >
                                    <FaYoutube />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Aloqa formasi */}
                    <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">
                            Xabar yuborish
                        </h2>
                        <form ref={form} onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label
                                    htmlFor="name"
                                    className="block text-gray-700 mb-2"
                                >
                                    Ism
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-800"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="email"
                                    className="block text-gray-700 mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-800"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="subject"
                                    className="block text-gray-700 mb-2"
                                >
                                    Mavzu
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-800"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    htmlFor="message"
                                    className="block text-gray-700 mb-2"
                                >
                                    Xabar
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-800"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-zinc-800 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
                            >
                                Yuborish
                            </button>
                        </form>
                    </div>
                </div>

                {/* FAQ section */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        Ko'p so'raladigan savollar
                    </h2>
                    <div className="space-y-4">
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
                                        {faq.question}
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
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Google xarita */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        Bizning joylashuv
                    </h2>
                    <div className="w-full h-[300px] md:h-[400px] lg:h-[465px] rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d67796.68558029651!2d69.14955940926306!3d41.32586168505353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b685b689e13%3A0xaf4cdf526e02f5e7!2sHilton%20Tashkent%20City!5e0!3m2!1sen!2s!4v1725598186516!5m2!1sen!2s"
                            width="100%"
                            height="100%"
                            style={{
                                border: 0,
                                borderRadius: "0.5rem",
                            }}
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
