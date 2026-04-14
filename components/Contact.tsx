"use client";
import React from "react";
import { motion } from "framer-motion";
import { ImArrowUpRight2 } from "react-icons/im";
import {
    FaLinkedinIn, FaGithub,
    FaEnvelope, FaPhoneAlt, FaMapMarkerAlt,
} from "react-icons/fa";
import { containerVariants, itemVariants, lineVariants, useScrollReveal } from "@/lib/utils";
import Button from "./buttons/Button";

const contactInfo = [
    { icon: FaEnvelope, label: "Email", value: "tanvir.rana.soikat@gmail.com", href: "mailto:tanvir.rana.soikat@gmail.com" },
    { icon: FaPhoneAlt, label: "Phone", value: "+8801402434727", href: "tel:+8801402434727" },
    { icon: FaMapMarkerAlt, label: "Location", value: "Mujibnagar, Meherpur, Bangladesh", href: "#" },
];

const socials = [
    { icon: FaLinkedinIn, label: "LinkedIn", href: "https://www.linkedin.com/in/mdtanvirrana" },
    { icon: FaGithub, label: "GitHub", href: "https://github.com/mdtanvirrana" },
];

const ContactSection = () => {
    const { ref, isInView } = useScrollReveal();

    return (
        <motion.section
            ref={ref}
            id="contact"
            className="font-koulen capitalize w-full max-w-7xl mx-auto px-5 xl:px-0 pb-24"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
        >
            <motion.div className="flex items-center gap-3 mb-16" variants={itemVariants}>
                <motion.span
                    className="w-10 h-1.5 bg-neutral-100 block origin-left"
                    variants={lineVariants}
                />
                <h2 className="text-4xl md:text-5xl text-white tracking-wide">Contact</h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Left — Info */}
                <motion.div variants={itemVariants} className="space-y-10">
                    <p className="text-neutral-500 text-sm normal-case leading-relaxed max-w-sm">
                        If you need a full stack developer for ERP, SaaS, or business platform
                        work, reach out. I&apos;m open to discussing product builds, backend-heavy
                        systems, and frontend implementation.
                    </p>

                    <div className="space-y-5">
                        {contactInfo.map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="flex items-start gap-4 group"
                                variants={itemVariants}
                            >
                                <div className="w-9 h-9 border border-neutral-800 flex items-center justify-center shrink-0 group-hover:border-neutral-600 transition-colors duration-300">
                                    <item.icon className="text-neutral-600 text-xs group-hover:text-neutral-400 transition-colors duration-300" />
                                </div>
                                <div>
                                    <span className="text-neutral-700 text-xs tracking-widest block mb-0.5">
                                        {item.label}
                                    </span>
                                    {item.href ? (
                                        <a href={item.href} className="text-neutral-400 text-sm normal-case hover:text-white transition-colors duration-200">
                                            {item.value}
                                        </a>
                                    ) : (
                                        <span className="text-neutral-400 text-sm normal-case">{item.value}</span>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div>
                        <span className="text-neutral-700 text-xs tracking-widest block mb-4">Find me on</span>
                        <div className="flex gap-3">
                            {socials.map((s, idx) => (
                                <motion.a
                                    key={idx}
                                    href={s.href}
                                    aria-label={s.label}
                                    className="w-10 h-10 border border-neutral-800 flex items-center justify-center text-neutral-600
                                               hover:border-neutral-500 hover:text-white transition-all duration-300"
                                    whileHover={{ scale: 1.08, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <s.icon className="text-sm" />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Right — Form */}
                <motion.div variants={itemVariants} className="space-y-4">
                    <div className="border border-neutral-800 p-6 space-y-4">
                        <p className="text-neutral-400 text-sm normal-case leading-relaxed">
                            The fastest way to reach me is by email or LinkedIn. You can also
                            download the latest resume directly from this portfolio.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button
                                mainClass="!py-2.5"
                                RightIcon={ImArrowUpRight2}
                                iconClass="text-lg"
                                href="mailto:tanvir.rana.soikat@gmail.com"
                            >
                                Send Email
                            </Button>
                            <Button
                                mainClass="!py-2.5"
                                RightIcon={ImArrowUpRight2}
                                iconClass="text-lg"
                                href="/tanvir-rana-resume.pdf"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Download Resume
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default ContactSection;
