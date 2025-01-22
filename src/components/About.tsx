import { Tooltip } from "antd";
import React from "react";
import {
    FaFacebookF,
    FaGithub,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";

const About = () => {
    const socials = [
        {
            label: "Facebook",
            icon: FaFacebookF,
        },
        {
            label: "Instagram",
            icon: FaInstagram,
        },
        {
            label: "LinkedIn",
            icon: FaLinkedinIn,
        },
        {
            label: "GitHub",
            icon: FaGithub,
        },
    ];

    const skills = {
        "Front-End Development": [
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Tailwind CSS",
        ],
        "Back-End Development": [
            "PHP",
            "Laravel",
            "Express.js",
            "MongoDB",
            "MySQL",
        ],
        "Tools & Libraries": [
            "Redux",
            "Framer Motion",
            "Ant Design (antd)",
            "ShadCN",
            "GitHub",
        ],
    };

    return (
        <div className="font-koulen w-full max-w-7xl px-5 xl:px-0 mx-auto text-gray-400 grid gap-5 grid-cols-1 md:grid-cols-3">
            <div className="md:col-span-2">
                <span className="text-5xl text-white font-koulen flex items-center gap-2">
                    {" "}
                    <span className="w-20 h-1 bg-neutral-100 block"></span>About myself
                </span>
                <div className="space-y-5">
                    <p>
                        Hello, I’m Tanvir Rana, a passionate and dedicated
                        Full-Stack Developer committed to creating scalable,
                        efficient, and user-friendly web applications. I thrive
                        on solving complex challenges and delivering exceptional
                        digital experiences with a focus on innovation and
                        quality.
                    </p>
                    <p>
                        I have completed my Diploma in Computer Science from
                        Kushtia Polytechnic Institute (2020–2024). I am from
                        Mujibnagar, Meherpur, Bangladesh. Outside of work, I am
                        always eager to learn new technologies to stay ahead in
                        the ever-evolving tech world. I also have a deep passion
                        for photography—photoshoots are not just a hobby but a
                        creative outlet that I truly enjoy.
                    </p>
                    <p>
                        With a strong foundation in both front-end and back-end
                        development, I enjoy building solutions that are not
                        only functional but also visually appealing and
                        intuitive for users. My approach is driven by attention
                        to detail, creativity, and a deep commitment to
                        continuous learning and improvement.
                    </p>

                    <p>
                        Let’s connect to collaborate and create impactful
                        digital solutions together!
                    </p>

                    <div className="flex items-center gap-5 mt-20 pt-8">
                        {socials.map((social, i) => (
                            <div key={i}>
                                <Tooltip
                                    placement="top"
                                    color="#374151"
                                    title={
                                        <span className="!font-koulen font-thin tracking-wide">
                                            {social.label}
                                        </span>
                                    }
                                >
                                    <p className="text-xl bg-white rounded-sm text-black p-2 cursor-pointer hover:bg-gray-800 hover:text-gray-200 duration-300 ease-in-out border border-gray-700">
                                        {<social.icon />}
                                    </p>
                                </Tooltip>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className=" col-span-1">
                <h1 className="text-5xl text-white ">Skills & Expertise</h1>
                {Object.entries(skills).map(([category, skillsList], idx) => (
                    <div key={idx} className="mb-6">
                        <h2 className="mb-3 text-gray-100">{category}</h2>
                        <div className="flex flex-wrap gap-3">
                            {skillsList.map((skill, index) => (
                                <button
                                    key={index}
                                    className="bg-gray-800 border border-gray-700 text-neutral-300 px-3 py-1.5 rounded-[2px] text-sm hover:bg-gray-700 transition"
                                >
                                    {skill}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
