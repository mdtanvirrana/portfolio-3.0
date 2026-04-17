"use client";
import React from "react";
import { motion } from "framer-motion";
import Button from "./buttons/Button";
import { ImArrowUpRight2 } from "react-icons/im";
import Link from "next/link";
import { containerVariants, itemVariants, lineVariants, useScrollReveal } from "@/lib/utils";

interface Project {
    id: number;
    title: string;
    description: string;
    techStack: string[];
    live: string;
    type: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Multi-Tenant ERP Platform",
        description:
            "Designed and developed a scalable ERP platform where multiple companies operate independently on shared infrastructure, covering POS, inventory, HRM, CRM, payroll, hotel management, smart card refill, and accounts.",
        techStack: ["Remix", "Laravel", "MySQL", "REST API", "Multi-Tenancy"],
        live: "#",
        type: "Fullstack",
    },
    {
        id: 2,
        title: "Wallet-Based Payment Application",
        description:
            "Built secure backend workflows for wallet top-up, transfers, PIN authentication, notifications, Stripe integration, and OAuth, with idempotency handling to prevent duplicate financial transactions.",
        techStack: ["Laravel", "MySQL", "React Native", "Stripe", "OAuth"],
        live: "https://play.google.com/store/apps/details?id=com.swanpay",
        type: "Fullstack",
    },
    {
        id: 3,
        title: "Brandzone E-commerce Platform",
        description:
            "Developed a role-based SaaS-style e-commerce system for users, vendors, brands, and super admins with multi-variant inventory, Stripe payments, KYC verification, and secure vendor onboarding.",
        techStack: ["Next.js", "TypeScript", "Laravel", "MySQL", "Stripe"],
        live: "https://brandszoneglobal.com",
        type: "Fullstack",
    },
    {
        id: 4,
        title: "Wayter Order Management System",
        description:
            "Built a real-time hospitality order management system with table-state handling, discount approval workflow, single-device login restriction, and transaction-based concurrency control.",
        techStack: ["Laravel", "Blade", "SQL Server", "Concurrency Control"],
        live: "#",
        type: "Backend Heavy",
    },
    {
        id: 5,
        title: "AllApply Government Service Platform",
        description:
            "Developed a multi-role service platform for overseas jobs, student applications, and visa-related workflows with dedicated dashboards for users, service providers, agencies, and admins.",
        techStack: ["Next.js", "React", "Laravel", "MySQL", "Admin Panel"],
        live: "https://allapply.com.bd",
        type: "Fullstack",
    },
];

const featuredProjects: Project[] = projects.slice(0, 3);
const sideProjects: Project[] = projects.slice(3);

const Portfolio = () => {
    const { ref: ref1, isInView: inView1 } = useScrollReveal();
    const { ref: ref2, isInView: inView2 } = useScrollReveal();

    return (
        <div id="portfolio" className="w-full max-w-7xl py-5 px-5 xl:px-0 mx-auto space-y-32">
            {/* ── Featured Projects ── */}
            <motion.div
                ref={ref1}
                variants={containerVariants}
                initial="hidden"
                animate={inView1 ? "show" : "hidden"}
            >
                <motion.div className="flex items-center gap-3 mb-16" variants={itemVariants}>
                    <motion.span
                        className="w-10 h-1.5 bg-neutral-100 block origin-left"
                        variants={lineVariants}
                    />
                    <h2 className="text-4xl md:text-5xl text-white font-koulen tracking-wide">
                        I Have Developed
                    </h2>
                </motion.div>

                <div className="space-y-28">
                    {featuredProjects.map((project, i) => (
                        <motion.div
                            key={i}
                            className={`grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-6 items-stretch ${
                                i % 2 !== 0 ? "lg:grid-cols-[1.3fr_0.7fr]" : ""
                            }`}
                            variants={itemVariants}
                        >
                            <motion.div
                                className={`panel panel-glow mesh-grid relative min-h-[18rem] overflow-hidden p-6 md:p-8 ${i % 2 !== 0 ? "lg:order-2" : ""}`}
                                whileHover={{ y: -6, rotateX: 4, rotateY: i % 2 === 0 ? -5 : 5 }}
                                transition={{ duration: 0.35 }}
                            >
                                <div className="absolute -right-4 -top-8 text-[7rem] md:text-[9rem] leading-none text-white/8">
                                    0{project.id}
                                </div>
                                <div className="relative z-10 h-full flex flex-col justify-between">
                                    <div>
                                        <span className="text-xs tracking-[0.3em] text-neutral-500 uppercase">
                                            {project.type}
                                        </span>
                                        <h3 className="text-3xl md:text-4xl text-white mt-4 leading-none">
                                            {project.title}
                                        </h3>
                                    </div>
                                    <div className="space-y-3">
                                        <p className="text-xs tracking-[0.28em] text-neutral-500 uppercase">
                                            Product Scope
                                        </p>
                                        <div className="grid grid-cols-2 gap-3">
                                            {project.techStack.slice(0, 4).map((tech) => (
                                                <div key={tech} className="border border-neutral-800 px-3 py-3 text-sm tracking-[0.2em] text-neutral-300">
                                                    {tech}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <div className={`panel p-6 md:p-8 flex flex-col justify-between ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                                <div>
                                    <span className="text-neutral-500 text-xs tracking-widest uppercase">
                                        Case Study
                                    </span>
                                    <p className="text-neutral-300 text-base md:text-lg normal-case leading-relaxed mt-4 mb-6 max-w-2xl">
                                        {project.description}
                                    </p>
                                    <div className="flex gap-2 flex-wrap">
                                        {project.techStack.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="border border-neutral-800 text-neutral-500 px-3 py-1 text-xs tracking-[0.22em]
                                                           hover:border-neutral-600 hover:text-neutral-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <Button
                                    RightIcon={ImArrowUpRight2}
                                    mainClass="!py-2"
                                    iconClass="text-lg"
                                    href={project.live === "#" ? "#contact" : project.live}
                                    target={project.live === "#" ? undefined : "_blank"}
                                    rel={project.live === "#" ? undefined : "noreferrer"}
                                >
                                    {project.live === "#" ? "Ask for Demo" : "Check Live"}
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* ── Side Projects Grid ── */}
            <motion.div
                ref={ref2}
                variants={containerVariants}
                initial="hidden"
                animate={inView2 ? "show" : "hidden"}
            >
                <motion.div className="flex items-center gap-3 mb-16" variants={itemVariants}>
                    <motion.span
                        className="w-10 h-1.5 bg-neutral-100 block origin-left"
                        variants={lineVariants}
                    />
                    <h2 className="text-4xl md:text-5xl text-white font-koulen tracking-wide">
                        I Have Worked On
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {sideProjects.map((project, i) => (
                        <motion.div
                            key={i}
                            className="panel panel-glow p-6 group"
                            variants={itemVariants}
                            whileHover={{ y: -5, rotateX: 2 }}
                            transition={{ duration: 0.25 }}
                        >
                            <div className="relative z-10">
                            <span className="text-neutral-600 text-xs tracking-widest font-koulen">
                                {project.type}
                            </span>
                            <h3 className="text-2xl text-white font-koulen mt-3 mb-3 leading-none">
                                {project.title}
                            </h3>
                            <p className="text-neutral-300 text-sm normal-case leading-relaxed mb-4">
                                {project.description}
                            </p>
                            <div className="flex gap-2 flex-wrap">
                                {project.techStack.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="border border-neutral-800 text-neutral-600 px-2.5 py-0.5 text-xs tracking-widest font-koulen
                                                   group-hover:border-neutral-700 group-hover:text-neutral-400"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            {project.live !== "#" && (
                                <Link
                                    href={project.live}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex mt-4 text-xs tracking-widest text-neutral-400 hover:text-white"
                                >
                                    Visit Project
                                </Link>
                            )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Portfolio;
