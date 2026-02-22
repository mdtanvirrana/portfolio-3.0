"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
    const [isVisible, setIsVisible] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Spring config — adjust stiffness/damping for feel
    const springConfig = { stiffness: 200, damping: 25, mass: 0.5 };
    const springX = useSpring(cursorX, springConfig);
    const springY = useSpring(cursorY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, [cursorX, cursorY, isVisible]);

    return (
        <>
            {/* Outer ring — spring follow (lags slightly behind) */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-white mix-blend-difference"
                style={{
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%",
                    width: 32,
                    height: 32,
                    opacity: isVisible ? 1 : 0,
                }}
                transition={{ opacity: { duration: 0.2 } }}
            />

            {/* Inner dot — follows cursor exactly */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-white mix-blend-difference"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: "-50%",
                    translateY: "-50%",
                    width: 5,
                    height: 5,
                    opacity: isVisible ? 1 : 0,
                }}
            />
        </>
    );
};

export default CustomCursor;