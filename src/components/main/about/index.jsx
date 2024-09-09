import React from "react";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";
import { ImageAbout } from "../../../assets";

const About = () => {
    const { t } = useTranslation();
    const ourData = [
        {
            name: t("about1"),
            percent: 100,
        },
        {
            name: t("about2"),
            percent: 20,
        },
        {
            name: t("about3"),
            percent: 40,
        },
        {
            name: t("about4"),
            percent: 50,
        },
    ];

    return (
        <div className="pt-[50px] w-full" id="about">
            <div className="container-xxl max-sm:container-sm max-md:container-md  max-lg:container-xxl max-xl:container-xxl max-xxl:container-xxl mx-auto px-4 md:px-20">
                <h2 className="text-4xl font-bold text-left">
                    {t("aboutus1")}
                </h2>
                <div className="flex flex-col lg:flex-row justify-between gap-10 items-start py-10">
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-2xl md:text-2xl lg:text-5xl xl:text-6xl font-bold text-zinc-800 leading-snug mb-6">
                            {t("aboutus2")}
                        </h2>
                        <p className="text-zinc-500 text-base md:text-lg lg:text-xl leading-relaxed">
                            {t("aboutus3")}
                        </p>
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col items-center">
                        <div className="w-full h-64 md:h-80 lg:h-96 mb-8">
                            <img
                                src={ImageAbout}
                                alt="about images"
                                className="w-full h-full rounded-lg object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                        {ourData.map((item) => (
                            <div
                                key={item.name}
                                className="flex flex-col items-start p-4 bg-white shadow border border-zinc-200 rounded-lg hover:shadow-lg transition-shadow duration-300"
                            >
                                <h1 className="text-xl md:text-2xl font-bold mb-5">
                                    {item.name}
                                </h1>
                                <h3 className="text-lg text-blue-500 md:text-5xl font-bold ">
                                    <CountUp
                                        start={1}
                                        end={item.percent}
                                        duration={4}
                                    />
                                    +
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
