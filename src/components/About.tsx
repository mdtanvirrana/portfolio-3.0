"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import img from "../../public/tanvir.jpg";
import { containerVariants, itemVariants, lineVariants, useScrollReveal } from "@/lib/utils";

const socials = [
    { label: "Facebook", icon: FaFacebookF, href: "#" },
    { label: "Instagram", icon: FaInstagram, href: "#" },
    { label: "LinkedIn", icon: FaLinkedinIn, href: "#" },
    { label: "GitHub", icon: FaGithub, href: "#" },
];

const About = () => {
    const { ref, isInView } = useScrollReveal();

    return (
        <motion.section
            ref={ref}
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
                            Hello, I'm Tanvir Rana, a passionate and dedicated Full-Stack Developer
                            committed to creating scalable, efficient, and user-friendly web
                            applications. I thrive on solving complex challenges and delivering
                            exceptional digital experiences with a focus on innovation and quality.
                        </p>
                        <p className="text-neutral-500 text-sm leading-relaxed">
                            I have completed my Diploma in Computer Science from Kushtia Polytechnic
                            Institute (2020–2024). I am from Mujibnagar, Meherpur, Bangladesh.
                            Outside of work, I am always eager to learn new technologies to stay
                            ahead in the ever-evolving tech world. I also have a deep passion for
                            photography — photoshoots are not just a hobby but a creative outlet
                            that I truly enjoy.
                        </p>
                        <p className="text-neutral-500 text-sm leading-relaxed">
                            With a strong foundation in both front-end and back-end development, I
                            enjoy building solutions that are not only functional but also visually
                            appealing and intuitive for users. My approach is driven by attention to
                            detail, creativity, and a deep commitment to continuous learning.
                        </p>
                        <p className="text-neutral-400 text-sm leading-relaxed">
                            Let's connect to collaborate and create impactful digital solutions
                            together!
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