import { Plus_Jakarta_Sans, Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SplashScreen } from "@/components/ui/splash-screen";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});


// 1. Configure Plus Jakarta Sans (Main UI Font)
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

// 2. Configure Instrument Serif (The "Timeless" Accent Font)
const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400", // Instrument Serif only needs 400 weight
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata = {
  title: "Daniel | Web & Brand Designer",
  description: "Obsessed with creating timeless digital experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      // Inject the generated font variables into the root HTML
      className={cn("dark", "h-full", "antialiased", jakarta.variable, instrument.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <SplashScreen />
      </body>
    </html>
  );
}