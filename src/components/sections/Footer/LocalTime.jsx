"use client";

import { useState, useEffect } from "react";

export function LocalTime() {
    const [mounted, setMounted] = useState(false);
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        setMounted(true);
        // Update time every minute
        const interval = setInterval(() => {
            setTime(new Date());
        }, 60000);
        return () => clearInterval(interval);
    }, []);

    if (!mounted) {
        // Return skeleton/placeholder to prevent hydration mismatch
        return (
            <div className="flex flex-col items-center justify-center opacity-0 pointer-events-none">
                <p className="text-muted-foreground text-p">
                    Loading time...
                </p>
                <span className="block text-muted-foreground text-p opacity-70 mt-1">
                    Local time in Lagos, Nigeria.
                </span>
            </div>
        );
    }

    const formattedTime = time.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    }) + " - " + time.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    });

    return (
        <div className="flex flex-col items-center justify-center text-center">
            <p className="text-muted-foreground text-p">
                {formattedTime}
            </p>
            <span className="block text-muted-foreground text-p opacity-70 mt-1">
                Local time in Lagos, Nigeria.
            </span>
        </div>
    );
}
