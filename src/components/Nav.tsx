"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./buttons/Button";
import { BiSolidDownload } from "react-icons/bi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const navItems = ["Home", "About", "Portfolio", "Contact"];

const Nav = () => {
    const [activeHash, setActiveHash] = useState("/");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        setActiveHash(window.location.hash || "/");

        const handleHashChange = () => setActiveHash(window.location.hash || "/");
        const handleScroll = () => setScrolled(window.scrollY > 20);

        window.addEventListener("hashchange", handleHashChange);
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("hashchange", handleHashChange);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const containerVariants = {
        hidden: { opacity: 0, y: -20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    return (
        <>
            <motion.header
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className={`sticky top-0 z-50 w-full transition-all duration-300 ${
                    scrolled
                        ? "bg-black/60 backdrop-blur-md"
                        : "bg-transparent"
                }`}
            >
                <div className="flex w-full max-w-7xl py-4 px-5 xl:px-0 mx-auto items-center justify-between">
                    {/* Logo */}
                    <motion.a
                        href="/"
                        className="font-koulen text-white text-xl tracking-widest"
                        whileHover={{ opacity: 0.7 }}
                        transition={{ duration: 0.2 }}
                    >
                        TR<span className="text-neutral-500">.</span>
                    </motion.a>

                    {/* Desktop nav */}
                    <nav className="hidden md:block">
                        <ul className="flex items-center gap-8 font-koulen">
                            {navItems.map((item) => {
                                const hash = item === "Home" ? "/" : `#${item.toLowerCase()}`;
                                const isActive = activeHash === hash;
                                return (
                                    <li key={item}>
                                        <a
                                            href={hash}
                                            className={`relative text-sm tracking-widest transition-colors duration-200 pb-1 ${
                                                isActive
                                                    ? "text-white"
                                                    : "text-neutral-500 hover:text-neutral-200"
                                            }`}
                                        >
                                            {item}
                                            {isActive && (
                                                <motion.span
                                                    layoutId="nav-underline"
                                                    className="absolute bottom-0 left-0 w-full h-px bg-white"
                                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                />
                                            )}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {/* Download CV */}
                    <div className="hidden md:block">
                        <Button mainClass="!py-2" RightIcon={BiSolidDownload} iconClass="text-base">
                            Download CV
                        </Button>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        className="block md:hidden text-white text-2xl"
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
                            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsSidebarOpen(false)}
                        />

                        {/* Drawer */}
                        <motion.div
                            className="fixed top-0 right-0 h-full w-64 bg-neutral-950 border-l border-neutral-800 z-50 flex flex-col pt-20 px-8 md:hidden"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            <ul className="flex flex-col gap-6 font-koulen">
                                {navItems.map((item, idx) => {
                                    const hash = item === "Home" ? "/" : `#${item.toLowerCase()}`;
                                    const isActive = activeHash === hash;
                                    return (
                                        <motion.li
                                            key={item}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.07 }}
                                        >
                                            <a
                                                href={hash}
                                                onClick={() => setIsSidebarOpen(false)}
                                                className={`text-2xl tracking-widest transition-colors ${
                                                    isActive ? "text-white" : "text-neutral-500 hover:text-white"
                                                }`}
                                            >
                                                {item}
                                            </a>
                                        </motion.li>
                                    );
                                })}
                            </ul>

                            <div className="mt-10">
                                <Button mainClass="!py-2 w-full" RightIcon={BiSolidDownload} iconClass="text-base">
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