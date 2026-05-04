// src/components/ui/animated-counter.jsx
"use client";

import React from "react";
import CountUp from "react-countup";

export function AnimatedCounter({ value }) {
    // 🚀 THE FIX: A much smarter Regex parser.
    // Group 1 (.*?): Lazily grabs any prefix (like "+", "$", or nothing)
    // Group 2 (-?[0-9.]+): Grabs the number, including an optional minus sign and decimals
    // Group 3 (.*): Grabs the remaining suffix (like "%", "k+", or "/5")
    const match = value.toString().match(/^(.*?)(-?[0-9.]+)(.*)$/);

    // Failsafe: if no number is found, render statically
    if (!match) return <span>{value}</span>;

    const prefix = match[1] || "";
    const targetNumber = parseFloat(match[2]);
    const suffix = match[3] || "";

    // Auto-detect decimal places based on the captured number string
    const decimals = match[2].includes(".") ? match[2].split(".")[1].length : 0;

    return (
        <CountUp
            end={targetNumber}
            prefix={prefix}
            suffix={suffix}
            decimals={decimals}
            duration={2.5}
            useEasing={true}
            enableScrollSpy={true}
            scrollSpyOnce={true}
        />
    );
}