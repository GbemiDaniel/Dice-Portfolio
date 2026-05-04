import { MiniDiceLoader } from "@/components/ui/mini-dice-loader";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-9999 w-screen h-screen bg-[#050505] flex items-center justify-center">
      <MiniDiceLoader />
    </div>
  );
}