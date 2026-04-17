"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import Button from "./buttons/Button";
import { ImArrowUpRight2 } from "react-icons/im";
import { BiSolidDownload } from "react-icons/bi";

const stats = [
    { value: "2+", label: "Years Building Products" },
    { value: "5", label: "Highlighted Platforms" },
];

const badges = ["Laravel", "Next.js", "Remix", "Payments", "ERP"];

const containerVariants:Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.18, delayChildren: 0.1 },
    },
};

const itemVariants:Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Hero = () => {
    return (
        <motion.div
            id="home"
            className="font-koulen capitalize relative w-full max-w-7xl mx-auto px-5 xl:px-0 mt-40 md:mt-48"
            variants={containerVariants}
            initial="hidden"
            animate="show"
        >
            <motion.div
                className="absolute -top-14 right-0 hidden xl:block text-[11rem] leading-none outline-title pointer-events-none"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                FULL
                <br />
                STACK
            </motion.div>

            <div className="grid grid-cols-1 xl:grid-cols-[1.4fr_0.8fr] gap-10 items-end">
                <div>
                    <motion.h1
                        className="text-6xl sm:text-7xl lg:text-[6.8rem] text-white leading-[0.95] mb-6"
                        variants={itemVariants}
                    >
                        Tanvir Rana builds
                        <span className="block text-neutral-500">reliable product systems.</span>
                    </motion.h1>

                    <motion.div className="max-w-3xl space-y-3 mb-8" variants={itemVariants}>
                        <p className="text-neutral-300 text-base sm:text-lg leading-relaxed normal-case">
                            Full stack developer focused on multi-tenant ERP, finance workflows,
                            secure APIs, and frontend experiences that stay fast and clear under
                            real product demands.
                        </p>
                        <p className="text-neutral-500 text-sm sm:text-base leading-relaxed normal-case">
                            I work across <span className="text-white">Laravel, React, Next.js, Remix, TypeScript, MySQL, and SQL Server</span>,
                            with attention to architecture, transaction safety, and smooth UI delivery.
                        </p>
                    </motion.div>

                    <motion.div className="flex flex-wrap gap-3 mb-10" variants={itemVariants}>
                        {badges.map((badge, idx) => (
                            <motion.span
                                key={badge}
                                className="panel panel-glow px-4 py-2 text-xs tracking-[0.28em] text-neutral-300"
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.25 + idx * 0.08, duration: 0.45 }}
                                whileHover={{ y: -3 }}
                            >
                                {badge}
                            </motion.span>
                        ))}
                    </motion.div>

                    <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
                        <Button
                            mainClass="!py-2.5"
                            RightIcon={ImArrowUpRight2}
                            iconClass="text-lg"
                            href="#portfolio"
                        >
                            Check Portfolio
                        </Button>
                        <Button
                            mainClass="!py-2.5"
                            RightIcon={BiSolidDownload}
                            iconClass="text-lg"
                            href="/tanvir-rana-resume.pdf"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Download Resume
                        </Button>
                    </motion.div>
                </div>

                <motion.div
                    className="panel panel-glow mesh-grid relative min-h-[22rem] p-6 md:p-8 [perspective:1400px]"
                    variants={itemVariants}
                    whileHover={{ rotateX: 5, rotateY: -8, y: -6 }}
                    transition={{ duration: 0.35 }}
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.18),transparent_32%)]" />
                    <div className="relative z-10 flex h-full flex-col justify-between">
                        <div>
                            <p className="text-xs tracking-[0.35em] text-neutral-500 mb-4">
                                CURRENT FOCUS
                            </p>
                            <div className="space-y-3">
                                <h2 className="text-3xl md:text-4xl text-white leading-none">
                                    Backend architecture
                                    <span className="block text-neutral-500">with strong frontend execution.</span>
                                </h2>
                                <p className="text-sm normal-case text-neutral-400 leading-relaxed max-w-sm">
                                    Clean service layers, modular business logic, secure payment flows,
                                    and interfaces that feel polished without slowing the product down.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            {stats.map((stat) => (
                                <div key={stat.label} className="panel p-4" aria-label={stat.label}>
                                    <p className="text-3xl md:text-4xl text-white leading-none">{stat.value}</p>
                                    <p className="text-[0.65rem] tracking-[0.22em] text-neutral-500 mt-2">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Hero;
