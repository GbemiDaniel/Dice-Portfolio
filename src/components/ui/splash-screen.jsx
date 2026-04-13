"use client";

import { useEffect, useState } from "react";
import styles from "@/app/loader.module.css";
import { cn } from "@/lib/utils";

const Dot = ({ className = "" }) => (
  <div
    className={cn(
      "w-[22px] h-[22px] rounded-full relative z-10 flex items-center justify-center",
      "bg-gradient-to-br from-[#c8cbcf] via-[#5b5d61] to-[#1c1c1c]",
      "shadow-[0_3px_5px_rgba(0,0,0,0.9),_inset_0_1px_1px_rgba(255,255,255,0.7),_inset_0_-1px_2px_rgba(0,0,0,0.9)]",
      className
    )}
  >
    <div className="w-[13px] h-[13px] rounded-full bg-[#050505] flex items-center justify-center shadow-[inset_0_3px_5px_rgba(0,0,0,1),_0_1px_1px_rgba(255,255,255,0.3)]">
      <div className="w-[7px] h-[7px] rounded-full bg-[#ffffff] shadow-[0_0_8px_rgba(255,255,255,1),_0_0_15px_rgba(255,255,255,0.6)]" />
    </div>
  </div>
);

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
        "fixed inset-0 z-[9999] w-screen h-screen flex flex-col items-center justify-center bg-[#050505] transition-opacity duration-700",
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      )}
    >
      <div className={styles.scene}>
        <div className={styles.cube}>
          <div className={`${styles.core} ${styles.cfront}`} />
          <div className={`${styles.core} ${styles.cback}`} />
          <div className={`${styles.core} ${styles.cright}`} />
          <div className={`${styles.core} ${styles.cleft}`} />
          <div className={`${styles.core} ${styles.ctop}`} />
          <div className={`${styles.core} ${styles.cbottom}`} />

          <div className={`${styles.face} ${styles.front} flex items-center justify-center`}><Dot /></div>

          <div className={`${styles.face} ${styles.back} flex flex-col justify-between p-5`}>
            <div className="flex justify-between w-full"><Dot /><Dot /></div>
            <div className="flex justify-between w-full"><Dot /><Dot /></div>
            <div className="flex justify-between w-full"><Dot /><Dot /></div>
          </div>

          <div className={`${styles.face} ${styles.right} flex justify-between p-5`}>
            <Dot className="self-start" /><Dot className="self-center" /><Dot className="self-end" />
          </div>

          <div className={`${styles.face} ${styles.left} flex flex-col justify-between p-5`}>
            <div className="flex justify-between w-full"><Dot /><Dot /></div>
            <div className="flex justify-between w-full"><Dot /><Dot /></div>
          </div>

          <div className={`${styles.face} ${styles.top} flex flex-col justify-between p-5`}>
            <div className="flex justify-between w-full"><Dot /><Dot /></div>
            <div className="flex justify-center w-full"><Dot /></div>
            <div className="flex justify-between w-full"><Dot /><Dot /></div>
          </div>

          <div className={`${styles.face} ${styles.bottom} flex justify-between p-5`}>
            <Dot className="self-start" /><Dot className="self-end" />
          </div>
        </div>
      </div>
    </div>
  );
}