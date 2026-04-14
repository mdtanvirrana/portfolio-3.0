"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import img from "../public/tanvir.jpg";
import { containerVariants, itemVariants, lineVariants, useScrollReveal } from "@/lib/utils";

const socials = [
    { label: "LinkedIn", icon: FaLinkedinIn, href: "https://www.linkedin.com/in/mdtanvirrana" },
    { label: "GitHub", icon: FaGithub, href: "https://github.com/mdtanvirrana" },
    { label: "Email", icon: FaEnvelope, href: "mailto:tanvir.rana.soikat@gmail.com" },
];

const About = () => {
    const { ref, isInView } = useScrollReveal();

    return (
        <motion.section
            ref={ref}
            id="about"
            className="font-koulen w-full max-w-7xl px-5 xl:px-0 mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
                {/* Left — Text */}
                <div className="md:col-span-2 space-y-6">
                    {/* Heading */}
                    <motion.div className="flex items-center gap-3 mb-8" variants={itemVariants}>
                        <motion.span
                            className="w-10 h-1.5 bg-neutral-100 block origin-left"
                            variants={lineVariants}
                        />
                        <h2 className="text-4xl md:text-5xl text-white tracking-wide">
                            About Myself
                        </h2>
                    </motion.div>

                    <motion.div className="space-y-4 normal-case" variants={itemVariants}>
                        <p className="text-neutral-500 text-sm leading-relaxed">
                            I&apos;m Tanvir Rana, a full stack developer building secure and scalable
                            web applications with Laravel, React, Next.js, and Remix. My recent
                            work has centered on ERP platforms, financial systems, and
                            multi-role applications that need clean architecture and dependable
                            backend logic.
                        </p>
                        <p className="text-neutral-500 text-sm leading-relaxed">
                            I completed a Diploma in Computer Science and Engineering from
                            Kushtia Polytechnic Institute with a CGPA of 3.59. I&apos;m from
                            Mujibnagar, Meherpur, Bangladesh, and I keep improving through
                            hands-on product development and continuous learning.
                        </p>
                        <p className="text-neutral-500 text-sm leading-relaxed">
                            Alongside backend architecture, I also enjoy frontend work that feels
                            clear and usable. That includes my three-month frontend internship at
                            Bangladeshi Software from July 2024 to September 2024, where I
                            strengthened my UI implementation and component-based workflow.
                        </p>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                            Outside of development, photography remains a strong personal interest.
                        </p>
                    </motion.div>

                    {/* Socials */}
                    <motion.div className="flex items-center gap-3 pt-4" variants={itemVariants}>
                        {socials.map((social, i) => (
                            <motion.a
                                key={i}
                                href={social.href}
                                aria-label={social.label}
                                className="w-10 h-10 border border-neutral-800 flex items-center justify-center text-neutral-500
                                           hover:border-white hover:text-white transition-all duration-300"
                                whileHover={{ scale: 1.08, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                title={social.label}
                            >
                                <social.icon className="text-sm" />
                            </motion.a>
                        ))}
                    </motion.div>
                </div>

                {/* Right — Image */}
                <motion.div
                    className="col-span-1"
                    variants={itemVariants}
                >
                    <motion.div
                        className="relative overflow-hidden border border-neutral-800 group"
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.4 }}
                    >
                        <Image
                            src={img}
                            alt="Tanvir Rana"
                            width={500}
                            height={600}
                            className="w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500" />
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default About;
