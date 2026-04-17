import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion.create(Link);

const Button = ({
    mainClass,
    iconClass,
    LeftIcon,
    RightIcon,
    children,
    href = "#",
    target,
    rel,
}: {
    mainClass?: string;
    iconClass?: string;
    LeftIcon?: React.ElementType;
    RightIcon?: React.ElementType;
    children: React.ReactNode;
    href?: string;
    target?: string;
    rel?: string;
}) => {
    return (
        <MotionLink
            className={`fancy ${mainClass} !flex w-fit !items-center gap-2 py-2.5`}
            href={href}
            target={target}
            rel={rel}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
        >
            <span className="top-key"></span>
            {LeftIcon && (
                <span className={`icon-class text-white ${iconClass}`}>
                    {<LeftIcon />}
                </span>
            )}
            <span className="text font-koulen font-normal">{children}</span>
            {RightIcon && (
                <span className={`icon-class text-white ${iconClass}`}>
                    {<RightIcon />}
                </span>
            )}
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
        </MotionLink>
    );
};

export default Button;
