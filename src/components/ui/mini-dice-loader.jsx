import styles from "@/app/loader.module.css";
import { cn } from "@/lib/utils";

const MiniDot = ({ className = "" }) => (
    <div
        className={cn(
            "w-[22px] h-[22px] rounded-full relative z-10 flex items-center justify-center",
            "bg-linear-to-br from-[#c8cbcf] via-[#5b5d61] to-[#1c1c1c]",
            className
        )}
        style={{ boxShadow: 'none' }} // Remove heavy inner shadow
    >
        <div className="w-[13px] h-[13px] rounded-full bg-[#050505] flex items-center justify-center">
            <div className="w-[7px] h-[7px] rounded-full bg-[#ffffff]" />
        </div>
    </div>
);

export function MiniDiceLoader() {
    // Override heavy glassmorphism for instant rendering during navigation
    const faceStyle = { 
        backdropFilter: 'none', 
        WebkitBackdropFilter: 'none', 
        boxShadow: 'none', 
        background: 'rgba(25, 25, 25, 1)' 
    };

    return (
        <div className="flex items-center gap-6 z-50">
            {/* The 3D Scene Wrapper - Scaled down to ~40px */}
            <div className="relative w-[40px] h-[40px] flex items-center justify-center">
                <div style={{ transform: 'scale(0.333)', transformOrigin: 'center' }} className="absolute flex items-center justify-center pointer-events-none">
                    <div className={styles.scene}>
                        <div className={styles.cube}>
                            {/* Inner Solid Core */}
                            <div className={`${styles.core} ${styles.cfront}`} />
                            <div className={`${styles.core} ${styles.cback}`} />
                            <div className={`${styles.core} ${styles.cright}`} />
                            <div className={`${styles.core} ${styles.cleft}`} />
                            <div className={`${styles.core} ${styles.ctop}`} />
                            <div className={`${styles.core} ${styles.cbottom}`} />

                            <div style={faceStyle} className={`${styles.face} ${styles.front} flex items-center justify-center`}><MiniDot /></div>

                            <div style={faceStyle} className={`${styles.face} ${styles.back} flex flex-col justify-between p-5`}>
                                <div className="flex justify-between w-full"><MiniDot /><MiniDot /></div>
                                <div className="flex justify-between w-full"><MiniDot /><MiniDot /></div>
                                <div className="flex justify-between w-full"><MiniDot /><MiniDot /></div>
                            </div>

                            <div style={faceStyle} className={`${styles.face} ${styles.right} flex justify-between p-5`}>
                                <MiniDot className="self-start" /><MiniDot className="self-center" /><MiniDot className="self-end" />
                            </div>

                            <div style={faceStyle} className={`${styles.face} ${styles.left} flex flex-col justify-between p-5`}>
                                <div className="flex justify-between w-full"><MiniDot /><MiniDot /></div>
                                <div className="flex justify-between w-full"><MiniDot /><MiniDot /></div>
                            </div>

                            <div style={faceStyle} className={`${styles.face} ${styles.top} flex flex-col justify-between p-5`}>
                                <div className="flex justify-between w-full"><MiniDot /><MiniDot /></div>
                                <div className="flex justify-center w-full"><MiniDot /></div>
                                <div className="flex justify-between w-full"><MiniDot /><MiniDot /></div>
                            </div>

                            <div style={faceStyle} className={`${styles.face} ${styles.bottom} flex justify-between p-5`}>
                                <MiniDot className="self-start" /><MiniDot className="self-end" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* The Simple Text (No complex gradients or masks) */}
            <h2 className="font-serif italic font-light text-xl md:text-2xl tracking-normal text-white/90 translate-y-[2px]">
                Rolling Dice Studios
            </h2>
        </div>
    );
}
