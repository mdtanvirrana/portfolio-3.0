"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";
import { containerVariants, itemVariants, lineVariants, useScrollReveal } from "@/lib/utils";

const education = [
    {
        period: "2021 – 2024",
        degree: "Diploma in Computer Science and Engineering",
        institution: "Kushtia Polytechnic Institute",
        location: "Kushtia, Bangladesh",
        type: "Diploma",
        description:
            "Completed diploma studies with a CGPA of 3.59, building a strong foundation in software development, database systems, networking, and practical engineering fundamentals.",
        highlights: ["CGPA 3.59", "Software Engineering", "Database Management", "Web Development"],
    },
    {
        period: "2019 – 2020",
        degree: "SSC (Electrical)",
        institution: "Dariapur High School",
        location: "Meherpur, Bangladesh",
        type: "Secondary School",
        description:
            "Completed secondary education with a GPA of 4.79, strengthening the academic base that led to pursuing software and engineering studies.",
        highlights: ["GPA 4.79", "Electrical", "Science"],
    },
];

const certifications = [
    {
        title: "PHP with Laravel",
        issuer: "EDGE Bangladesh",
        note: "Arranged by Islamic University of Bangladesh, Kushtia",
    },
];

const EducationSection = () => {
    const { ref, isInView } = useScrollReveal();

    return (
        <motion.section
            ref={ref}
            id="education"
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
                <h2 className="text-4xl md:text-5xl text-white tracking-wide">Education</h2>
            </motion.div>

            <div className="space-y-6">
                {education.map((edu, idx) => (
                    <motion.div
                        key={idx}
                        className="relative border border-neutral-800 p-7 hover:border-neutral-700 transition-colors duration-300 group overflow-hidden"
                        variants={itemVariants}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                    >
                        {/* Ghost number */}
                        <span className="absolute right-6 top-1/2 -translate-y-1/2 text-[7rem] font-bold text-neutral-900 select-none leading-none pointer-events-none group-hover:text-neutral-800/80 transition-colors duration-500">
                            {String(idx + 1).padStart(2, "0")}
                        </span>

                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Left */}
                            <div className="md:col-span-1">
                                <span className="text-xs text-neutral-600 tracking-widest normal-case block mb-2">
                                    {edu.type}
                                </span>
                                <span className="text-neutral-500 text-sm normal-case border border-neutral-800 px-3 py-1 inline-block tracking-widest">
                                    {edu.period}
                                </span>
                                <div className="flex items-center gap-2 mt-4">
                                    <FaMapMarkerAlt className="text-neutral-700 text-xs shrink-0" />
                                    <span className="text-neutral-600 text-xs normal-case tracking-wide">
                                        {edu.location}
                                    </span>
                                </div>
                            </div>

                            {/* Right */}
                            <div className="md:col-span-2">
                                <h3 className="text-xl md:text-2xl text-white leading-tight mb-1">
                                    {edu.degree}
                                </h3>
                                <p className="text-neutral-500 text-sm normal-case tracking-wide mb-4">
                                    {edu.institution}
                                </p>
                                <p className="text-neutral-600 text-sm normal-case leading-relaxed mb-5">
                                    {edu.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {edu.highlights.map((h, hIdx) => (
                                        <motion.span
                                            key={hIdx}
                                            className="text-xs text-neutral-600 border border-neutral-800 px-2.5 py-1 tracking-widest
                                                       group-hover:border-neutral-700 group-hover:text-neutral-400 transition-colors duration-300"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                            transition={{ delay: 0.4 + idx * 0.1 + hIdx * 0.06 }}
                                        >
                                            {h}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Bottom sweep line */}
                        <motion.div
                            className="absolute bottom-0 left-0 h-px bg-neutral-600 origin-left"
                            initial={{ scaleX: 0 }}
                            whileHover={{ scaleX: 1 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        />
                    </motion.div>
                ))}
            </div>

            <motion.div className="mt-12 flex items-center gap-4" variants={itemVariants}>
                <span className="w-10 h-px bg-neutral-800 block" />
                <p className="text-neutral-600 text-xs normal-case tracking-widest">
                    Always learning. Always building.
                </p>
            </motion.div>

            <motion.div className="mt-10 space-y-4" variants={itemVariants}>
                <div className="flex items-center gap-3">
                    <span className="w-px h-4 bg-neutral-600 block" />
                    <h3 className="text-neutral-500 text-xs tracking-widest normal-case">
                        Certification
                    </h3>
                </div>
                {certifications.map((cert, idx) => (
                    <div key={idx} className="border border-neutral-800 p-5">
                        <h4 className="text-white text-lg leading-none">{cert.title}</h4>
                        <p className="text-neutral-500 text-sm normal-case mt-2">{cert.issuer}</p>
                        <p className="text-neutral-600 text-sm normal-case mt-1">{cert.note}</p>
                    </div>
                ))}
            </motion.div>
        </motion.section>
    );
};

export default EducationSection;
