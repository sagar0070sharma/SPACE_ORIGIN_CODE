import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import StarfieldCanvas from "../components/ui/StarfieldCanvas";
import RocketScrollToTop from "../components/ui/RocketScrollToTop";

export const metadata: Metadata = {
  title: "Space Origin — Advanced Space Education & Future Skills",
  description:
    "Inspiring the next generation of scientists, engineers, and space explorers through hands-on astronomy, rocketry, AI, robotics, and STEM curriculum.",
  keywords: [
    "Space Origin",
    "Space Education India",
    "Astronomy Workshops",
    "Rocketry Labs",
    "Robotics STEM School",
    "AI Education",
    "Sarvsrest Belwal",
    "Kashipur Uttarakhand",
    "Stargazing Camp",
  ],
  icons: {
    icon: "/images/About/Space_Origin_LOGO.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#050816] text-slate-100 min-h-screen relative selection:bg-cyan-500/30 selection:text-white flex flex-col justify-between">
        {/* Dynamic Starfield Background Canvas */}
        <StarfieldCanvas />

        {/* Global Floating Header */}
        <Navbar />

        {/* Main Page Content */}
        <main className="relative z-10 flex-grow">{children}</main>

        {/* Rocket Scroll-to-Top with Thruster Fire */}
        <RocketScrollToTop />

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
