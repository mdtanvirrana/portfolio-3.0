"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { containerVariants, itemVariants, lineVariants, useScrollReveal } from "@/lib/utils";

const socials = [
    { label: "LinkedIn", icon: FaLinkedinIn, href: "https://www.linkedin.com/in/mdtanvirrana" },
    { label: "GitHub", icon: FaGithub, href: "https://github.com/mdtanvirrana" },
    { label: "Facebook", icon: FaFacebookF, href: "https://www.facebook.com/mdtanvirrana0/" },
    { label: "Instagram", icon: FaInstagram, href: "https://www.instagram.com/tanvir.rana.soikat" },
    { label: "Email", icon: FaEnvelope, href: "mailto:tanvir.rana.soikat@gmail.com" },
];

const quickFacts = [
    { label: "Location", value: "Mujibnagar, Meherpur, Bangladesh" },
    { label: "Role", value: "Full Stack Developer" },
    { label: "Specialty", value: "ERP, Payments, SaaS Platforms" },
];

const strengths = [
    "Scalable Laravel backend architecture",
    "Responsive frontend implementation",
    "REST API design and integration",
    "Financial data consistency and transaction safety",
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
            <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
                <div className="space-y-6">
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
                                target={social.href.startsWith("http") ? "_blank" : undefined}
                                rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                                className="w-10 h-10 border border-neutral-800 flex items-center justify-center text-neutral-500
                                           hover:border-white hover:text-white"
                                whileHover={{ scale: 1.08, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                title={social.label}
                            >
                                <social.icon className="text-sm" />
                            </motion.a>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    className="space-y-5 [perspective:1400px]"
                    variants={itemVariants}
                >
                    <motion.div
                        className="panel panel-glow p-6 md:p-8"
                        whileHover={{ rotateX: 4, rotateY: -6, y: -4 }}
                        transition={{ duration: 0.35 }}
                    >
                        <p className="text-xs tracking-[0.32em] text-neutral-500 mb-4">QUICK FACTS</p>
                        <div className="space-y-5">
                            {quickFacts.map((fact) => (
                                <div key={fact.label} className="border-b border-neutral-800 pb-4 last:border-b-0 last:pb-0">
                                    <p className="text-xs tracking-[0.26em] text-neutral-600 mb-2">{fact.label}</p>
                                    <p className="text-xl md:text-2xl text-white leading-tight">{fact.value}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div className="panel p-6 md:p-8" whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                        <p className="text-xs tracking-[0.32em] text-neutral-500 mb-4">CORE STRENGTHS</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {strengths.map((strength) => (
                                <div key={strength} className="border border-neutral-800 px-4 py-4 text-sm normal-case text-neutral-300 leading-relaxed">
                                    {strength}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default About;
