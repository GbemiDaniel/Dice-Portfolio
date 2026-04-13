import styles from "./loader.module.css";

const Dot = ({ className = "" }) => (
  <div
    className={`w-[22px] h-[22px] rounded-full relative z-10 flex items-center justify-center bg-gradient-to-br from-[#c8cbcf] via-[#5b5d61] to-[#1c1c1c] shadow-[0_3px_5px_rgba(0,0,0,0.9),_inset_0_1px_1px_rgba(255,255,255,0.7),_inset_0_-1px_2px_rgba(0,0,0,0.9)] ${className}`}
  >
    <div className="w-[13px] h-[13px] rounded-full bg-[#050505] flex items-center justify-center shadow-[inset_0_3px_5px_rgba(0,0,0,1),_0_1px_1px_rgba(255,255,255,0.3)]">
      <div className="w-[7px] h-[7px] rounded-full bg-[#ffffff] shadow-[0_0_8px_rgba(255,255,255,1),_0_0_15px_rgba(255,255,255,0.6)]" />
    </div>
  </div>
);

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] w-screen h-screen flex flex-col items-center justify-center bg-[#050505]">
      {/* Scene wrapper to provide perspective to the 3D cube */}
      <div className={styles.scene}>
        <div className={styles.cube}>
          {/* Inner Solid Core (Plugs pure CSS rounded corner optical gaps) */}
          <div className={`${styles.core} ${styles.cfront}`} />
          <div className={`${styles.core} ${styles.cback}`} />
          <div className={`${styles.core} ${styles.cright}`} />
          <div className={`${styles.core} ${styles.cleft}`} />
          <div className={`${styles.core} ${styles.ctop}`} />
          <div className={`${styles.core} ${styles.cbottom}`} />

          {/* Front Face - 1 */}
          <div
            className={`${styles.face} ${styles.front} flex items-center justify-center`}
          >
            <Dot />
          </div>

          {/* Back Face - 6 */}
          <div
            className={`${styles.face} ${styles.back} flex flex-col justify-between p-5`}
          >
            <div className="flex justify-between w-full">
              <Dot />
              <Dot />
            </div>
            <div className="flex justify-between w-full">
              <Dot />
              <Dot />
            </div>
            <div className="flex justify-between w-full">
              <Dot />
              <Dot />
            </div>
          </div>

          {/* Right Face - 3 */}
          <div
            className={`${styles.face} ${styles.right} flex justify-between p-5`}
          >
            <Dot className="self-start" />
            <Dot className="self-center" />
            <Dot className="self-end" />
          </div>

          {/* Left Face - 4 */}
          <div
            className={`${styles.face} ${styles.left} flex flex-col justify-between p-5`}
          >
            <div className="flex justify-between w-full">
              <Dot />
              <Dot />
            </div>
            <div className="flex justify-between w-full">
              <Dot />
              <Dot />
            </div>
          </div>

          {/* Top Face - 5 */}
          <div
            className={`${styles.face} ${styles.top} flex flex-col justify-between p-5`}
          >
            <div className="flex justify-between w-full">
              <Dot />
              <Dot />
            </div>
            <div className="flex justify-center w-full">
              <Dot />
            </div>
            <div className="flex justify-between w-full">
              <Dot />
              <Dot />
            </div>
          </div>

          {/* Bottom Face - 2 */}
          <div
            className={`${styles.face} ${styles.bottom} flex justify-between p-5`}
          >
            <Dot className="self-start" />
            <Dot className="self-end" />
          </div>
        </div>
      </div>
    </div>
  );
}
