import Image, { StaticImageData } from "next/image";
import React from "react";
import img from "@/assets/all-devices-black.png";
import Button from "./buttons/Button";
import { ImArrowUpRight2 } from "react-icons/im";
import Link from "next/link";

interface Project {
    id: number;
    title: string;
    description: string;
    techStack: Array<string>;
    imageUrl: StaticImageData;
    live: string;
    type: string;
}

const Portfolio = () => {
    const projects: Project[] = [
        {
            id: 1,
            title: "Giftly | Giftcard Ecommerce",
            description:
                "A feature-rich web application for selling gift cards, built using Laravel, Inertia.js, and React. The application will provide a seamless user experience for customers to browse and purchase gift cards, while administrators will have access to a robust backend to manage users, brands, gift cards, orders, payments, etc.",
            techStack: [
                "React",
                "TypeScript",
                "Laravel",
                "Tailwind CSS",
                "Shadcn UI",
            ],
            imageUrl: img,
            live: "#",
            type: "fullstack",
        },
        {
            id: 2,
            title: "Lead Management Application",
            description:
                "Part of a development team for 'leadcenter.ai,' a lead management software built with Laravel and Vue.js. Responsibilities included adding features, optimizing performance, and improving UI/UX to streamline lead management processes.",
            techStack: ["Laravel", "Vue.js", "Bootstrap", "MySQL"],
            imageUrl: img,
            live: "#",
            type: "fullstack",
        },
        {
            id: 1,
            title: "Giftly | Giftcard Ecommerce",
            description:
                "A feature-rich web application for selling gift cards, built using Laravel, Inertia.js, and React. The application will provide a seamless user experience for customers to browse and purchase gift cards, while administrators will have access to a robust backend to manage users, brands, gift cards, orders, payments, etc.",
            techStack: [
                "React",
                "TypeScript",
                "Laravel",
                "Tailwind CSS",
                "Shadcn UI",
            ],
            imageUrl: img,
            live: "#",
            type: "fullstack",
        },
        {
            id: 2,
            title: "Lead Management Application",
            description:
                "Part of a development team for 'leadcenter.ai,' a lead management software built with Laravel and Vue.js. Responsibilities included adding features, optimizing performance, and improving UI/UX to streamline lead management processes.",
            techStack: ["Laravel", "Vue.js", "Bootstrap", "MySQL"],
            imageUrl: img,
            live: "#",
            type: "fullstack",
        },
    ];
    return (
        <div className="w-full max-w-7xl py-5 px-5 xl:px-0 mx-auto">
            {/* <span className="text-5xl text-white font-koulen flex items-center gap-2 mb-10">
                {" "}
                <span className="w-20 h-1 bg-neutral-100 block"></span>Portfolio
            </span> */}
            <div className="grid">
                <p className="text-5xl text-gray-100 mb-10 flex items-center gap-2 ">
                    <span className="w-20 h-[5px] bg-gray-100 block"></span>
                    I Have Developed{" "}
                </p>
                {projects.map((project, i) => (
                    <div
                        key={i}
                        className="flex odd:flex-row-reverse gap-10 mb-32"
                    >
                        <Link className="flex-1" href={"portfolio"}>
                            <div className="relative ">
                                <Image
                                    quality={100}
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="rounded-lg shadow-lg"
                                    width={1500}
                                    height={1500}
                                />
                            </div>
                        </Link>
                        <div className=" text-neutral-300 space-y-5 flex-1">
                            <div>
                                <p className="text-neutral-400">
                                    {project.type}
                                </p>
                                <h2 className="text-3xl mb-4">
                                    {project.title}
                                </h2>
                                <p className="mb-4 text-neutral-400">
                                    {project.description}
                                </p>
                                <div className="flex gap-2 flex-wrap">
                                    {project.techStack.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="bg-gray-800 border border-gray-700 text-neutral-300 px-3 py-1 rounded-[2px] text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <Button
                                RightIcon={ImArrowUpRight2}
                                mainClass="!py-2"
                                iconClass="text-lg"
                            >
                                Check Live{" "}
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="grid">
                <p className="text-5xl text-gray-100 mb-10 flex items-center gap-2 ">
                    <span className="w-20 h-[5px] bg-gray-100 block"></span>
                    I Have Worked on{" "}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-20">
                    {projects.map((project, i) => (
                        <div key={i} className="">
                            <div className=" text-neutral-300 space-y-5 flex-1 bg-neutral-900 p-5 rounded hover:bg-gray-800 duration-300 border border-neutral-800 cursor-pointer">
                                <div>
                                    <p className="text-neutral-400">
                                        {project.type}
                                    </p>
                                    <h2 className="text-3xl mb-4">
                                        {project.title}
                                    </h2>
                                    <p className="mb-4 text-neutral-400">
                                        {project.description}
                                    </p>
                                    <div className="flex gap-2 flex-wrap">
                                        {project.techStack.map(
                                            (tech, index) => (
                                                <span
                                                    key={index}
                                                    className="bg-gray-800 border border-gray-700 text-neutral-300 px-3 py-1 rounded-[2px] text-sm"
                                                >
                                                    {tech}
                                                </span>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
