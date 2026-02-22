"use client";
import React from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants, lineVariants, useScrollReveal } from "@/lib/utils";

const experiences = [
    {
        period: "2023 – Present",
        role: "Full Stack Developer",
        company: "Freelance / Self-Employed",
        type: "Freelance",
        description:
            "Building scalable full-stack web applications for clients worldwide. Delivering end-to-end solutions from UI design to deployment, primarily using React, Next.js, Laravel, and MySQL.",
        tags: ["React", "Next.js", "Laravel", "MySQL", "TailwindCSS"],
    },
    {
        period: "2023",
        role: "Full Stack Developer (Team)",
        company: "LeadCenter.ai",
        type: "Collaboration",
        description:
            "Part of a development team for LeadCenter.ai, a lead management software. Responsibilities included adding features, optimising performance, and improving UI/UX to streamline lead management processes.",
        tags: ["Laravel", "Vue.js", "Bootstrap", "MySQL"],
    },
    {
        period: "2022 – 2023",
        role: "Junior Web Developer",
        company: "Personal Projects & Learning",
        type: "Self-Directed",
        description:
            "Sharpened front-end and back-end fundamentals through intensive project-based learning, building various web applications and exploring modern frameworks and design patterns.",
        tags: ["HTML", "CSS", "JavaScript", "PHP"],
    },
];

const ExperienceSection = () => {
    const { ref, isInView } = useScrollReveal();

    return (
        <motion.section
            ref={ref}
            className="font-koulen capitalize w-full max-w-7xl mx-auto px-5 xl:px-0"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
        >
            <motion.div className="flex items-center gap-3 mb-16" variants={itemVariants}>
                <motion.span
                    className="w-10 h-1.5 bg-neutral-100 block origin-left"
                    variants={lineVariants}
                />
                <h2 className="text-4xl md:text-5xl text-white tracking-wide">Experience</h2>
            </motion.div>

            <div className="relative">
                {/* Vertical line */}
                <motion.div
                    className="absolute left-0 top-2 bottom-2 w-px bg-neutral-800 origin-top"
                    initial={{ scaleY: 0 }}
                    animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                />

                <div className="pl-8 space-y-0">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            className="relative pb-12 last:pb-0"
                            variants={itemVariants}
                        >
                            {/* Dot */}
                            <motion.div
                                className="absolute -left-[37px] top-1.5 w-3 h-3 bg-white rounded-full ring-4 ring-black"
                                initial={{ scale: 0 }}
                                animate={isInView ? { scale: 1 } : { scale: 0 }}
                                transition={{ duration: 0.35, delay: 0.3 + idx * 0.15 }}
                            />

                            {/* Card */}
                            <motion.div
                                className="border border-neutral-800 p-6 hover:border-neutral-700 transition-colors duration-300 group"
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                                    <div>
                                        <span className="text-xs text-neutral-600 tracking-widest normal-case block mb-1">
                                            {exp.type}
                                        </span>
                                        <h3 className="text-xl md:text-2xl text-white leading-none">
                                            {exp.role}
                                        </h3>
                                        <p className="text-neutral-500 text-sm normal-case mt-1 tracking-wide">
                                            {exp.company}
                                        </p>
                                    </div>
                                    <span className="text-neutral-600 text-xs normal-case tracking-widest border border-neutral-800 px-3 py-1 shrink-0">
                                        {exp.period}
                                    </span>
                                </div>

                                <p className="text-neutral-500 text-sm normal-case leading-relaxed mb-5 max-w-2xl">
                                    {exp.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {exp.tags.map((tag, tIdx) => (
                                        <span
                                            key={tIdx}
                                            className="text-xs text-neutral-600 border border-neutral-800 px-2.5 py-1 tracking-widest
                                                       group-hover:border-neutral-700 group-hover:text-neutral-400 transition-colors duration-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default ExperienceSection;