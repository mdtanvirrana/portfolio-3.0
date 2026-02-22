"use client";
import React from "react";
import { motion } from "framer-motion";
import Button from "./buttons/Button";
import { ImArrowUpRight2 } from "react-icons/im";

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.18, delayChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Hero = () => {
    return (
        <motion.div
            className="font-koulen capitalize w-full max-w-7xl mx-auto px-5 xl:px-0 mt-52"
            variants={containerVariants}
            initial="hidden"
            animate="show"
        >
            {/* Hello label */}
            <motion.span
                className="flex items-center gap-3 text-neutral-400 text-sm tracking-widest mb-2"
                variants={itemVariants}
            >
                <span className="w-10 h-px bg-neutral-400 block" />
                Hello,
            </motion.span>

            {/* Name */}
            <motion.h1
                className="xl:text-8xl text-5xl md:text-6xl lg:text-7xl text-white leading-none mb-6"
                variants={itemVariants}
            >
                I'm{" "}
                <span className="font-medium">Tanvir Rana</span>,
            </motion.h1>

            {/* Description */}
            <motion.div className="max-w-2xl space-y-2 mb-8" variants={itemVariants}>
                <p className="text-neutral-500 text-sm sm:text-base leading-relaxed normal-case">
                    A dedicated Full Stack Developer with a strong focus on crafting
                    scalable and efficient web applications.
                </p>
                <p className="text-neutral-500 text-sm sm:text-base leading-relaxed normal-case">
                    With expertise in{" "}
                    <span className="text-white font-medium">
                        React, Next.js, Laravel, MySQL,
                    </span>{" "}
                    and a passion for delivering fully functional and exceptional UI/UX
                    experiences, I thrive in building user-centric solutions.
                </p>
                <p className="text-neutral-500 text-sm sm:text-base leading-relaxed normal-case">
                    Let's connect to create impactful digital experiences!
                </p>
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants}>
                <Button mainClass="!py-2.5" RightIcon={ImArrowUpRight2} iconClass="text-lg">
                    Check Portfolio
                </Button>
            </motion.div>
        </motion.div>
    );
};

export default Hero;