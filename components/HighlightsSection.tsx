"use client";
import React from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants, lineVariants, useScrollReveal } from "@/lib/utils";

const blocks = [
    {
        title: "Languages",
        items: ["Bangla — Native", "Hindi — Fluent", "English — Conversational"],
    },
    {
        title: "Interests",
        items: ["Photography", "UI Motion", "Scalable Product Architecture"],
    },
];

const HighlightsSection = () => {
    const { ref, isInView } = useScrollReveal();

    return (
        <motion.section
            ref={ref}
            id="highlights"
            className="font-koulen capitalize w-full max-w-7xl mx-auto px-5 xl:px-0"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
        >
            <motion.div className="flex items-center gap-3 mb-16" variants={itemVariants}>
                <motion.span
                    className="w-10 h-1.5 bg-neutral-100 block origin-left"
                    variants={lineVariants}
                />
                <h2 className="text-4xl md:text-5xl text-white tracking-wide">Snapshot</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blocks.map((block, idx) => (
                    <motion.div
                        key={block.title}
                        className="panel panel-glow p-6 md:p-7"
                        variants={itemVariants}
                        whileHover={{ y: -4, rotateX: 2, rotateY: idx % 2 === 0 ? -2 : 2 }}
                        transition={{ duration: 0.3 }}
                    >
                        <p className="text-xs tracking-[0.32em] text-neutral-500 mb-5">{block.title}</p>
                        <div className="space-y-3">
                            {block.items.map((item) => (
                                <div
                                    key={item}
                                    className="border border-neutral-800 px-4 py-3 text-sm normal-case text-neutral-300 leading-relaxed"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default HighlightsSection;
