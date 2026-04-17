"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Button from "./buttons/Button";
import { BiSolidDownload } from "react-icons/bi";
import { AiFillStar, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Snapshot", href: "#highlights" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
];

const sectionIds = navItems.map((item) => item.href.slice(1));

const Nav = () => {
    const [activeHash, setActiveHash] = useState("#home");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        const updateActiveSection = () => {
            const viewportMidpoint = window.innerHeight * 0.4;
            let closestSection: string | null = null;
            let closestDistance = Number.POSITIVE_INFINITY;

            for (const sectionId of sectionIds) {
                const section = document.getElementById(sectionId);

                if (!section) {
                    continue;
                }

                const rect = section.getBoundingClientRect();
                const sectionTop = rect.top;
                const sectionBottom = rect.bottom;
                const isSectionInRange = sectionTop <= viewportMidpoint && sectionBottom >= viewportMidpoint;

                if (isSectionInRange) {
                    closestSection = `#${sectionId}`;
                    break;
                }

                const distanceToViewportMidpoint = Math.min(
                    Math.abs(sectionTop - viewportMidpoint),
                    Math.abs(sectionBottom - viewportMidpoint)
                );

                if (distanceToViewportMidpoint < closestDistance) {
                    closestDistance = distanceToViewportMidpoint;
                    closestSection = `#${sectionId}`;
                }
            }

            const firstSection = document.getElementById(sectionIds[0]);
            if (firstSection && window.scrollY < firstSection.offsetTop - 160) {
                setActiveHash("#home");
                return;
            }

            if (closestSection) {
                setActiveHash(closestSection);
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("scroll", updateActiveSection);
        window.addEventListener("resize", updateActiveSection);

        handleScroll();
        updateActiveSection();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("scroll", updateActiveSection);
            window.removeEventListener("resize", updateActiveSection);
        };
    }, []);

    const containerVariants: Variants = {
        hidden: { opacity: 0, y: -20 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    return (
        <>
            <motion.header
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className={`sticky top-0 z-50 w-full ${
                    scrolled ? "bg-black/50 backdrop-blur-xl border-white/6" : "bg-transparent"
                }`}
            >
                <div className="flex w-full max-w-7xl py-4 px-5 xl:px-0 mx-auto items-center justify-between">
                    {/* Logo */}
                    <motion.a
                        href="/"
                        className="inline-flex items-center gap-3 text-white"
                        whileHover={{ opacity: 0.7 }}
                        transition={{ duration: 0.2 }}
                    >
                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-base shadow-[0_0_24px_rgba(255,255,255,0.08)]">
                            <AiFillStar aria-hidden="true" />
                        </span>
                        <span className="font-koulen text-xl tracking-[0.32em]">STAR</span>
                    </motion.a>

                    {/* Desktop nav */}
                    <nav className="hidden lg:block">
                        <ul className="flex items-center gap-6 font-koulen">
                            {navItems.map((item) => {
                                const isActive = activeHash === item.href;
                                return (
                                    <li key={item.label}>
                                        <a
                                            href={item.href}
                                            className={`relative text-sm tracking-widest pb-1 ${
                                                isActive
                                                    ? "text-white"
                                                    : "text-neutral-500 hover:text-neutral-200"
                                            }`}
                                        >
                                            {item.label}
                                            {isActive && (
                                                <motion.span
                                                    layoutId="nav-underline"
                                                    className="absolute bottom-0 left-0 w-full h-0.5 bg-white"
                                                    transition={{
                                                        type: "spring",
                                                        stiffness: 300,
                                                        damping: 30,
                                                    }}
                                                />
                                            )}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {/* Download CV */}
                    <div className="hidden lg:block">
                        <Button
                            mainClass="!py-2"
                            RightIcon={BiSolidDownload}
                            iconClass="text-base"
                            href="/tanvir-rana-resume.pdf"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Download CV
                        </Button>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        className="block lg:hidden text-white text-2xl"
                        onClick={() => setIsSidebarOpen((p) => !p)}
                        aria-label="Toggle menu"
                    >
                        {isSidebarOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                    </button>
                </div>
            </motion.header>

            {/* Mobile sidebar */}
            <AnimatePresence>
                {isSidebarOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsSidebarOpen(false)}
                        />

                        {/* Drawer */}
                        <motion.div
                            className="fixed top-0 right-0 h-full w-72 bg-neutral-950 border-l border-neutral-800 z-50 flex flex-col pt-20 px-8 lg:hidden"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30,
                            }}
                        >
                            <ul className="flex flex-col gap-6 font-koulen">
                                {navItems.map((item, idx) => {
                                    const isActive = activeHash === item.href;
                                    return (
                                        <motion.li
                                            key={item.label}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.07 }}
                                        >
                                            <a
                                                href={item.href}
                                                onClick={() =>
                                                    setIsSidebarOpen(false)
                                                }
                                                className={`text-2xl tracking-widest ${
                                                    isActive
                                                        ? "text-white"
                                                        : "text-neutral-500 hover:text-white"
                                                }`}
                                            >
                                                {item.label}
                                            </a>
                                        </motion.li>
                                    );
                                })}
                            </ul>

                            <div className="mt-10">
                                <Button
                                    mainClass="!py-2 w-full"
                                    RightIcon={BiSolidDownload}
                                    iconClass="text-base"
                                    href="/tanvir-rana-resume.pdf"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Download CV
                                </Button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Nav;
