"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { DiceLoader } from "@/components/ui/dice-loader";

export function SplashScreen() {
  // We initialize as visible on the server so it blocks the screen instantly
  const [isFading, setIsFading] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Lock scroll instantly on client mount
    document.body.style.overflow = "hidden";

    let windowLoaded = document.readyState === "complete";
    let minTimePassed = false;

    // The handshake: fade out ONLY when the window is loaded AND 1.5s has passed
    function checkCompletion() {
      if (windowLoaded && minTimePassed) {
        setIsFading(true);
        setTimeout(() => {
          setIsVisible(false);
          document.body.style.overflow = "";
        }, 700); // Matches the CSS duration-700
      }
    }

    // Condition A: Network Load
    function onWindowLoad() {
      windowLoaded = true;
      checkCompletion();
    }

    if (!windowLoaded) {
      window.addEventListener("load", onWindowLoad);
    }

    // Condition B: Minimum Branding Time (1500ms)
    const timer = setTimeout(() => {
      minTimePassed = true;
      checkCompletion();
    }, 1500);

    // Edge case check
    checkCompletion();

    return () => {
      window.removeEventListener("load", onWindowLoad);
      clearTimeout(timer);
      document.body.style.overflow = ""; // Failsafe
    };
  }, []);

  // Only remove from DOM entirely after the fade transition completes
  if (!isVisible) return null;

  // Unconditional render guarantees this is in the initial SSR HTML
  return (
    <div
      className={cn(
        "fixed inset-0 z-[9999] w-screen h-screen bg-[#050505] transition-opacity duration-700",
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
    >
      <DiceLoader />
    </div>
  );
}