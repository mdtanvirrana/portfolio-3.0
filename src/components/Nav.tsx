"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "./buttons/Button";
import { BiSolidDownload } from "react-icons/bi";
import { anim } from "./Animation";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Nav = () => {
    const [activeHash, setActiveHash] = useState(window.location.hash || "/");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        const handleHashChange = () => {
            setActiveHash(window.location.hash || "/");
        };

        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    const sidebarVariants = {
        hidden: { x: "100%" },
        visible: { x: 0 },
    };

    return (
        <div className="flex w-full max-w-7xl py-5 px-5 xl:px-0 mx-auto items-center justify-between">
            {/* Desktop Navigation */}
            <nav className="hidden md:block w-full max-w-fit">
                <ul className="menu font-koulen gap-10 flex justify-between items-center mx-1">
                    {["Home", "About", "Portfolio", "Contact"].map((item) => {
                        const hash = item === "Home" ? "/" : `#${item.toLowerCase()}`;
                        return (
                            <li key={item}>
                                <a
                                    href={hash}
                                    className={
                                        activeHash === hash
                                            ? "ring-2 ring-white !py-[4px] !px-[15px]"
                                            : "navitem !text-gray-400 hover:before:!border-gray-400 hover:after:!border-gray-400"
                                    }
                                >
                                    {item}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>


            <button
                className="block md:hidden text-white text-4xl"
                onClick={toggleSidebar}
            >
                {isSidebarOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>

            {/* Sidebar for Mobile */}
            <motion.div
                className={`fixed top-0 right-0 h-full w-2/3 bg-gray-800 text-white z-50 flex flex-col items-center pt-10 shadow-lg md:hidden ${
                    isSidebarOpen ? "" : "hidden"
                }`}
                initial="hidden"
                animate={isSidebarOpen ? "visible" : "hidden"}
                variants={sidebarVariants}
                transition={{ type: "spring", stiffness: 70 }}
            >
                <ul className="menu font-koulen gap-5 flex flex-col items-center">
                    {["Home", "About", "Portfolio", "Contact"].map((item) => {
                        const hash = `#${item.toLowerCase()}`;
                        return (
                            <li key={item} className="mb-4 px-10">
                                <a
                                    href={hash}
                                    onClick={toggleSidebar}
                                    className={
                                        activeHash === hash
                                            ? "ring-2 ring-white !py-[4px] !px-[15px]"
                                            : "navitem !text-gray-400 hover:before:!border-gray-400 hover:after:!border-gray-400"
                                    }
                                >
                                    {item}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </motion.div>

            {/* Download CV Button */}
            <motion.div
                variants={anim("down", 0.8)}
                whileInView={"show"}
                viewport={{ once: true, amount: 0.5 }}
            >
                <Button mainClass="!py-2.5" RightIcon={BiSolidDownload} iconClass={"text-lg"}>
                    Download cv
                </Button>
            </motion.div>
        </div>
    );
};

export default Nav;
