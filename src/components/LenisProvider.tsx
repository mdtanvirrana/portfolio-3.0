"use client";
import { useEffect } from "react";
import Lenis from "lenis";

const LenisProvider = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.8,        // how long the scroll inertia lasts — increase for more "drag"
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo ease-out
            smoothWheel: true,
            wheelMultiplier: 0.8, // lower = slower scroll per wheel tick
            touchMultiplier: 1.5,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
};

export default LenisProvider;