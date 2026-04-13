"use client";

import { motion } from "framer-motion";

export function SpringReveal({ children, delay = 0, className, direction = "up", scale = false }) {
    // Apple's signature spring physics: snappy, slight momentum, zero harsh stops
    const appleSpring = {
        type: "spring",
        mass: 1,
        stiffness: 260,
        damping: 25,
    };

    const yOffset = direction === "up" ? 40 : direction === "down" ? -40 : 0;
    const xOffset = direction === "left" ? 40 : direction === "right" ? -40 : 0;

    return (
        <motion.div
            className={className}
            // 1. Initial hidden state
            initial={{
                opacity: 0,
                y: yOffset,
                x: xOffset,
                scale: scale ? 0.95 : 1 // Optional slight shrink for cards
            }}
            // 2. The trigger: Animates ONLY when scrolled into view
            whileInView={{
                opacity: 1,
                y: 0,
                x: 0,
                scale: 1
            }}
            // 3. The rules: Fire once, wait until it's 50px past the bottom edge
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                ...appleSpring,
                delay: delay,
            }}
            // Hardware acceleration hint
            style={{ willChange: "transform, opacity" }}
        >
            {children}
        </motion.div>
    );
}