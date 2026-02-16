"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, Droplets } from "lucide-react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const { scrollY } = useScroll();

    useEffect(() => {
        return scrollY.on("change", (latest) => {
            setScrolled(latest > 20);
        });
    }, [scrollY]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    const navLinks = [
        { name: "Services", href: "/#services" },
        { name: "Why Us", href: "/#why-us" },
        { name: "Testimonials", href: "/#testimonials" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-500",
                scrolled
                    ? "bg-white/80 backdrop-blur-md shadow-sm py-3 border-b border-white/20 supports-[backdrop-filter]:bg-white/60"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-primary p-2 rounded-lg group-hover:bg-accent transition-colors duration-300">
                        <Droplets className="text-white w-6 h-6" />
                    </div>
                    <span className={cn(
                        "text-xl font-bold tracking-tight transition-colors duration-300",
                        scrolled ? "text-primary" : "text-white"
                    )}>
                        PLUMB<span className="text-accent">PRO</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium hover:text-accent transition-colors duration-300 relative group",
                                scrolled ? "text-slate-600" : "text-white/90"
                            )}
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                    <Link
                        href="tel:1-800-PLUMBER"
                        className="bg-accent hover:bg-accent/90 text-white px-5 py-2.5 rounded-full font-bold flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg shadow-accent/20 active:scale-95"
                    >
                        <Phone size={18} />
                        <span className="hidden lg:inline">Emergency Call:</span> 1-800-PLUMBER
                    </Link>
                </nav>

                {/* Mobile Actions */}
                <div className="flex items-center gap-4 md:hidden">
                    <Link
                        href="tel:1-800-PLUMBER"
                        className="bg-accent text-white p-2.5 rounded-full shadow-lg"
                    >
                        <Phone size={20} />
                    </Link>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={cn(
                            "p-2 rounded-lg transition-colors duration-300",
                            scrolled ? "text-primary" : "text-white"
                        )}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-semibold text-slate-800 hover:text-accent transition-colors py-2 border-b border-slate-50 last:border-0"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4">
                                <p className="text-sm text-slate-500 mb-2">Need immediate help?</p>
                                <Link
                                    href="tel:1-800-PLUMBER"
                                    className="bg-accent text-white w-full py-4 rounded-xl font-bold flex items-center justify-center gap-3 text-lg shadow-lg shadow-accent/20"
                                >
                                    <Phone size={22} />
                                    Call 1-800-PLUMBER
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
