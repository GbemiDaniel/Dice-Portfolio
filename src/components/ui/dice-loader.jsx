import styles from "@/app/loader.module.css";
import { cn } from "@/lib/utils";

const Dot = ({ className = "" }) => (
    <div
        className={cn(
            "w-[22px] h-[22px] rounded-full relative z-10 flex items-center justify-center",
            "bg-linear-to-br from-[#c8cbcf] via-[#5b5d61] to-[#1c1c1c]",
            "shadow-[0_3px_5px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.7),inset_0_-1px_2px_rgba(0,0,0,0.9)]",
            className
        )}
    >
        <div className="w-[13px] h-[13px] rounded-full bg-[#050505] flex items-center justify-center shadow-[inset_0_3px_5px_rgba(0,0,0,1),0_1px_1px_rgba(255,255,255,0.3)]">
            <div className="w-[7px] h-[7px] rounded-full bg-[#ffffff] shadow-[0_0_8px_rgba(255,255,255,1),0_0_15px_rgba(255,255,255,0.6)]" />
        </div>
    </div>
);

export function DiceLoader() {
    return (
        <>
            {/* 🚀 Sibling A: The 3D Scene */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className={styles.scene}>
                    <div className={styles.cube}>
                        {/* Inner Solid Core */}
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

            {/* 🚀 Sibling B: The Safe, Synchronized Text */}
            <div className="absolute top-[65%] left-0 w-full flex justify-center z-50">
                <h2 className={cn(
                    "font-serif italic font-light text-2xl md:text-3xl tracking-normal",
                    styles.diceTextAnimation
                )}>
                    Rolling Dice Studios
                </h2>
            </div>
        </>
    );
}