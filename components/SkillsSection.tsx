"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    containerVariants,
    itemVariants,
    lineVariants,
    skillPillVariants,
    useScrollReveal,
} from "@/lib/utils";

const skills: Record<string, string[]> = {
    "Front-End Development": [
        "React", "Next.js", "Remix", "TypeScript", "JavaScript", "Tailwind CSS", "Redux", "Framer Motion",
    ],
    "Back-End Development": [
        "PHP", "Laravel", "REST API Architecture", "MySQL", "SQL Server", "Repository Pattern", "Service Layer",
    ],
    "Architecture & Tools": [
        "DTOs", "Enums", "Action-Based Logic", "Idempotency", "Concurrency Control", "Git", "Linux", "Nginx",
    ],
};

const SkillsSection = () => {
    const { ref, isInView } = useScrollReveal();

    return (
        <motion.section
            ref={ref}
            id="skills"
            className="font-koulen capitalize w-full max-w-7xl mx-auto px-5 xl:px-0"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
        >
            <motion.div className="flex items-center gap-3 mb-14" variants={itemVariants}>
                <motion.span
                    className="w-10 h-1.5 bg-neutral-100 block origin-left"
                    variants={lineVariants}
                />
                <h2 className="text-4xl md:text-5xl text-white tracking-wide">
                    Skills &amp; Expertise
                </h2>
            </motion.div>

            <div className="space-y-10">
                {Object.entries(skills).map(([category, skillsList], idx) => (
                    <motion.div key={idx} variants={itemVariants}>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-px h-4 bg-neutral-600 block" />
                            <h3 className="text-neutral-500 text-xs tracking-widest normal-case">
                                {category}
                            </h3>
                        </div>
                        <motion.div
                            className="flex flex-wrap gap-3"
                            variants={containerVariants}
                            initial="hidden"
                            animate={isInView ? "show" : "hidden"}
                        >
                            {skillsList.map((skill, index) => (
                                <motion.button
                                    key={index}
                                    className="relative border border-neutral-800 text-neutral-500 px-4 py-1.5 text-sm tracking-widest normal-case
                                               overflow-hidden group
                                               before:absolute before:inset-0 before:bg-white before:scale-x-0 before:origin-left
                                               hover:before:scale-x-100 hover:border-white"
                                    variants={skillPillVariants}
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                >
                                    <span className="relative z-10 group-hover:text-black">
                                        {skill}
                                    </span>
                                </motion.button>
                            ))}
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default SkillsSection;
