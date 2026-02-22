"use client";
import React from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import img from "@/assets/all-devices-black.png";
import Button from "./buttons/Button";
import { ImArrowUpRight2 } from "react-icons/im";
import Link from "next/link";
import { containerVariants, itemVariants, lineVariants, useScrollReveal } from "@/lib/utils";

interface Project {
    id: number;
    title: string;
    description: string;
    techStack: string[];
    imageUrl: StaticImageData;
    live: string;
    type: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Giftly | Giftcard Ecommerce",
        description:
            "A feature-rich web application for selling gift cards, built using Laravel, Inertia.js, and React. Provides a seamless experience for customers to browse and purchase gift cards, while administrators manage users, brands, orders, and payments.",
        techStack: ["React", "TypeScript", "Laravel", "Tailwind CSS", "Shadcn UI"],
        imageUrl: img,
        live: "#",
        type: "Fullstack",
    },
    {
        id: 2,
        title: "Lead Management Application",
        description:
            "Part of a development team for 'leadcenter.ai,' a lead management software built with Laravel and Vue.js. Responsibilities included adding features, optimizing performance, and improving UI/UX to streamline lead management processes.",
        techStack: ["Laravel", "Vue.js", "Bootstrap", "MySQL"],
        imageUrl: img,
        live: "#",
        type: "Fullstack",
    },
];

const sideProjects: Project[] = [...projects, ...projects];

const Portfolio = () => {
    const { ref: ref1, isInView: inView1 } = useScrollReveal();
    const { ref: ref2, isInView: inView2 } = useScrollReveal();

    return (
        <div className="w-full max-w-7xl py-5 px-5 xl:px-0 mx-auto space-y-32">
            {/* ── Featured Projects ── */}
            <motion.div
                ref={ref1}
                variants={containerVariants}
                initial="hidden"
                animate={inView1 ? "show" : "hidden"}
            >
                <motion.div className="flex items-center gap-3 mb-16" variants={itemVariants}>
                    <motion.span
                        className="w-10 h-1.5 bg-neutral-100 block origin-left"
                        variants={lineVariants}
                    />
                    <h2 className="text-4xl md:text-5xl text-white font-koulen tracking-wide">
                        I Have Developed
                    </h2>
                </motion.div>

                <div className="space-y-28">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            className={`flex flex-col md:flex-row gap-10 items-center ${
                                i % 2 !== 0 ? "md:flex-row-reverse" : ""
                            }`}
                            variants={itemVariants}
                        >
                            {/* Image */}
                            <motion.div
                                className="flex-1 overflow-hidden border border-neutral-800 group"
                                whileHover={{ scale: 1.01 }}
                                transition={{ duration: 0.4 }}
                            >
                                <Link href="/portfolio">
                                    <Image
                                        quality={100}
                                        src={project.imageUrl}
                                        alt={project.title}
                                        width={1500}
                                        height={1000}
                                        className="w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                    />
                                </Link>
                            </motion.div>

                            {/* Info */}
                            <div className="flex-1 space-y-5 font-koulen">
                                <div>
                                    <span className="text-neutral-500 text-xs tracking-widest uppercase">
                                        {project.type}
                                    </span>
                                    <h3 className="text-3xl text-white mt-1 mb-3">
                                        {project.title}
                                    </h3>
                                    <p className="text-neutral-500 text-sm normal-case leading-relaxed mb-4">
                                        {project.description}
                                    </p>
                                    <div className="flex gap-2 flex-wrap">
                                        {project.techStack.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="border border-neutral-800 text-neutral-500 px-3 py-1 text-xs tracking-widest
                                                           hover:border-neutral-600 hover:text-neutral-300 transition-colors duration-200"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <Button RightIcon={ImArrowUpRight2} mainClass="!py-2" iconClass="text-lg">
                                    Check Live
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* ── Side Projects Grid ── */}
            <motion.div
                ref={ref2}
                variants={containerVariants}
                initial="hidden"
                animate={inView2 ? "show" : "hidden"}
            >
                <motion.div className="flex items-center gap-3 mb-16" variants={itemVariants}>
                    <motion.span
                        className="w-10 h-1.5 bg-neutral-100 block origin-left"
                        variants={lineVariants}
                    />
                    <h2 className="text-4xl md:text-5xl text-white font-koulen tracking-wide">
                        I Have Worked On
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {sideProjects.map((project, i) => (
                        <motion.div
                            key={i}
                            className="border border-neutral-800 p-5 group hover:border-neutral-600 transition-colors duration-300 cursor-pointer"
                            variants={itemVariants}
                            whileHover={{ y: -4 }}
                            transition={{ duration: 0.25 }}
                        >
                            <span className="text-neutral-600 text-xs tracking-widest font-koulen">
                                {project.type}
                            </span>
                            <h3 className="text-xl text-white font-koulen mt-1 mb-3">
                                {project.title}
                            </h3>
                            <p className="text-neutral-500 text-xs normal-case leading-relaxed mb-4 line-clamp-3">
                                {project.description}
                            </p>
                            <div className="flex gap-2 flex-wrap">
                                {project.techStack.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="border border-neutral-800 text-neutral-600 px-2.5 py-0.5 text-xs tracking-widest font-koulen
                                                   group-hover:border-neutral-700 group-hover:text-neutral-400 transition-colors duration-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Portfolio;