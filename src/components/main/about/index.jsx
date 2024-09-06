import React from "react";
import CountUp from "react-countup";
import { ImageAbout } from "../../../assets";

const About = () => {
    const ourData = [
        {
            name: "Portfolio",
            percent: 100,
        },
        {
            name: "Teams",
            percent: 20,
        },
        {
            name: "Clients",
            percent: 40,
        },
        {
            name: "Projects",
            percent: 50,
        },
    ];

    return (
        <div className="py-[130px] w-full" id="about">
            <div className="container-xxl max-sm:container-sm max-md:container-md  max-lg:container-xxl max-xl:container-xxl max-xxl:container-xxl mx-auto px-4 md:px-20">
                <h2 className="text-4xl font-bold text-left">About Us</h2>
                <div className="flex flex-col lg:flex-row justify-between gap-10 items-start py-10">
                    <div className="w-full lg:w-1/2">
                        <span className="text-red-500 mb-4 block">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Vitae, neque.
                        </span>
                        <h2 className="text-6xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-zinc-800 leading-snug mb-6">
                            Empowering Your Digital Presence
                        </h2>
                        <p className="text-zinc-500 text-base md:text-lg lg:text-xl leading-relaxed">
                            At NewTect, we specialize in providing comprehensive
                            services to bring your ideas to life. From web and
                            mobile development to desktop applications, our team
                            of skilled developers is dedicated to creating
                            innovative solutions tailored to your needs. We also
                            offer top-notch DevOps services, ensuring your
                            projects are deployed, monitored, and maintained
                            with the highest level of efficiency and security.
                            With our domain hosting and SSL certificate
                            services, you can trust that your online presence is
                            secure and reliable.
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
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                            {ourData.map((item) => (
                                <div
                                    key={item.name}
                                    className="flex flex-col items-start p-4 bg-white shadow border border-zinc-200 rounded-lg hover:shadow-lg transition-shadow duration-300"
                                >
                                    <h1 className="text-xl md:text-2xl font-bold">
                                        {item.name}
                                    </h1>
                                    <h3 className="text-lg text-blue-500 md:text-xl font-bold ">
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
        </div>
    );
};

export default About;
