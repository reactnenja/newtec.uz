import React from "react";
import {
    FaEnvelope,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaMapMarkerAlt,
    FaPhone,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Form yuborish logikasi
    };

    return (
        <section className="py-16 bg-gray-100" id="contact">
            <div className="container-xxl max-sm:container-sm max-md:container-md  max-lg:container-xxl max-xl:container-xxl max-xxl:container-xxl mx-auto px-4 md:px-20">
                <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">
                    {/* Biz bilan bog'laning */} Contact us
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact ma'lumotlari */}
                    <div className="space-y-8 bg-white p-8 rounded-lg shadow-lg">
                        <div className="flex items-start space-x-4">
                            <FaMapMarkerAlt className="text-2xl text-zinc-800 mt-5" />
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
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">
                            Xabar yuborish
                        </h2>
                        <form onSubmit={handleSubmit}>
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
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zintext-zinc-800"
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
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zintext-zinc-800"
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
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zintext-zinc-800"
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
                                    rows="4"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zintext-zinc-800"
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

                {/* Google xarita */}
                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        Bizning joylashuv
                    </h2>
                    <div className="w-full h-[455px] rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d67796.68558029651!2d69.14955940926306!3d41.32586168505353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b685b689e13%3A0xaf4cdf526e02f5e7!2sHilton%20Tashkent%20City!5e0!3m2!1sen!2s!4v1725598186516!5m2!1sen!2s"
                            width="100%"
                            height="450"
                            allowfullscreen=""
                            style={{ border: 0 }}
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
