import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Preloader from "@/components/ui/Preloader";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "Reliable Plumbing Services | 24/7 Emergency Plumber",
    description: "Professional plumbing services available 24/7. Licensed experts arriving in 60 minutes or less. Get a free quote today!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.variable} font-sans antialiased`}>
                <Preloader />
                <SmoothScroll>{children}</SmoothScroll>
            </body>
        </html>
    );
}
