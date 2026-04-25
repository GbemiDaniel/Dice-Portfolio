"use client";

import { motion } from "framer-motion";

export function SpringReveal({ children, delay = 0, className, direction = "up", scale = false }) {
    // 🚀 THE FIX: The "Cinematic Studio" Physics
    const studioSpring = {
        type: "spring",
        mass: 1.2,       // Increased from 1. Adds a slight feeling of "weight" to the elements.
        stiffness: 120,  // Dropped from 260. This is the main fix. It slows down the initial burst.
        damping: 22,     // Dropped from 25. Allows for a beautifully smooth deceleration without bouncing.
    };

    // Increased the travel distance slightly (from 40 to 60) so the slower animation has more room to breathe.
    const yOffset = direction === "up" ? 60 : direction === "down" ? -60 : 0;
    const xOffset = direction === "left" ? 60 : direction === "right" ? -60 : 0;

    return (
        <motion.div
            className={className}
            // 1. Initial hidden state
            initial={{
                opacity: 0,
                y: yOffset,
                x: xOffset,
                scale: scale ? 0.95 : 1
            }}
            // 2. The trigger: Animates ONLY when scrolled into view
            whileInView={{
                opacity: 1,
                y: 0,
                x: 0,
                scale: 1
            }}
            // 3. The rules: Fire once, wait until it's slightly further into the screen
            // Changed margin to -10% so it waits just a fraction of a second longer before revealing
            viewport={{ once: true, margin: "-10%" }}
            transition={{
                ...studioSpring,
                delay: delay,
            }}
            // Hardware acceleration hint
            style={{ willChange: "transform, opacity" }}
        >
            {children}
        </motion.div>
    );
}