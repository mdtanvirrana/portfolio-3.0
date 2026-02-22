'use client'
import { clsx, type ClassValue } from "clsx"
import { useInView } from "framer-motion";
import { useRef } from "react";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function useScrollReveal() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });
    return { ref, isInView };
}

export const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.05,
        },
    },
};

export const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export const lineVariants = {
    hidden: { scaleX: 0 },
    show: { scaleX: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export const skillPillVariants = {
    hidden: { opacity: 0, scale: 0.85 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.35 } },
};