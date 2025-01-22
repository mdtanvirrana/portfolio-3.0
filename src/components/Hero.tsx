"use client";
import React from "react";
import { motion } from "framer-motion";
import Button from "./buttons/Button";
import { ImArrowUpRight2 } from "react-icons/im";

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Stagger child animations
                delayChildren: 0.1,  // Initial delay for children
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <motion.div
            className="font-koulen capitalize w-full max-w-7xl mx-auto px-5 xl:px-0 mt-56"
            variants={containerVariants}
            initial="hidden"
            animate="show"
        >
            <motion.span className="flex items-center gap-2" variants={itemVariants}><span className="w-10 h-0.5 bg-neutral-100 block"></span>Hello,</motion.span>
            <motion.div
                variants={itemVariants}
            >
                <h1 className="xl:text-8xl text-5xl md:text-6xl lg:text-7xl duration-300 ease-in-out">I’m <span className="font-medium">Tanvir Rana</span>,{" "}</h1>
            </motion.div>
            <motion.div variants={itemVariants}>
                <p className="text-gray-400 text-sm sm:text-base duration-300">
                    a dedicated Full Stack Developer with a strong focus on
                    crafting scalable and efficient web applications.
                </p>
                <p className="text-gray-400 text-sm sm:text-base duration-300">
                    With expertise in{" "}
                    <span className="text-white text-xl">
                        React, Next, Laravel, MySQL,
                    </span>{" "}
                    and a passion for delivering fully functional and
                    exceptional UI/UX experiences, I thrive in building
                    user-centric solutions.
                </p>
                <p className="text-gray-400 mb-5 text-sm sm:text-base duration-300">
                    Let’s connect to create impactful digital experiences!
                </p>
            </motion.div>
            <motion.div variants={itemVariants}>
                <Button
                    mainClass="!py-2.5"
                    RightIcon={ImArrowUpRight2}
                    iconClass="text-lg"
                >
                    Check Portfolio{" "}
                </Button>
            </motion.div>
        </motion.div>
    );
};

export default Hero;
