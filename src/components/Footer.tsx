"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Droplets, Facebook, Twitter, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <div className="relative h-auto md:h-[600px]" style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
            <div className="relative md:fixed bottom-0 h-auto md:h-[600px] w-full">
                <footer id="contact" className="bg-primary text-white pt-20 pb-10 md:h-full flex flex-col justify-center">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                            {/* Brand */}
                            <div>
                                <Link href="/" className="flex items-center gap-2 mb-6">
                                    <div className="bg-accent p-2 rounded-lg">
                                        <Droplets className="text-white w-6 h-6" />
                                    </div>
                                    <span className="text-2xl font-bold tracking-tight">
                                        PLUMB<span className="text-accent">PRO</span>
                                    </span>
                                </Link>
                                <p className="text-slate-400 mb-8 leading-relaxed">
                                    Providing professional, reliable, and affordable plumbing services for over 15 years. Available 24/7 for all your emergency needs.
                                </p>
                                <div className="flex gap-4">
                                    {[
                                        { icon: Facebook, href: "#" },
                                        { icon: Twitter, href: "#" },
                                        { icon: Instagram, href: "#" },
                                    ].map((social, i) => (
                                        <motion.a
                                            key={i}
                                            href={social.href}
                                            whileHover={{ scale: 1.1, backgroundColor: "#f97316" }}
                                            whileTap={{ scale: 0.9 }}
                                            className="bg-white/5 p-3 rounded-full transition-colors"
                                        >
                                            <social.icon size={20} />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>

                            {/* Quick Links */}
                            <div>
                                <h4 className="text-xl font-bold mb-6">Quick Links</h4>
                                <ul className="space-y-4">
                                    <li><Link href="/#services" className="text-slate-400 hover:text-accent transition-colors">Our Services</Link></li>
                                    <li><Link href="/#why-us" className="text-slate-400 hover:text-accent transition-colors">Why Choose Us</Link></li>
                                    <li><Link href="/#testimonials" className="text-slate-400 hover:text-accent transition-colors">Testimonials</Link></li>
                                    <li><Link href="/contact" className="text-slate-400 hover:text-accent transition-colors">Contact Us</Link></li>
                                </ul>
                            </div>

                            {/* Contact Info */}
                            <div>
                                <h4 className="text-xl font-bold mb-6">Contact Us</h4>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <Phone className="text-accent mt-1" size={20} />
                                        <div>
                                            <p className="font-bold">Emergency Call</p>
                                            <p className="text-slate-400">1-800-PLUMBER</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Mail className="text-accent mt-1" size={20} />
                                        <div>
                                            <p className="font-bold">Email Us</p>
                                            <p className="text-slate-400">info@plumbpro.com</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <MapPin className="text-accent mt-1" size={20} />
                                        <div>
                                            <p className="font-bold">Our Location</p>
                                            <p className="text-slate-400">123 Plumbing Way, City, ST 12345</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            {/* Service Areas */}
                            <div>
                                <h4 className="text-xl font-bold mb-6">Service Areas</h4>
                                <p className="text-slate-400 mb-4">We proudly serve the following areas:</p>
                                <div className="flex flex-wrap gap-2">
                                    {["Downtown", "North Side", "West End", "Suburbs", "Metro Area"].map((area) => (
                                        <span key={area} className="bg-white/5 px-3 py-1 rounded-full text-sm text-slate-300">
                                            {area}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-8 pt-8 border-t border-white/5">
                                    <p className="text-xs text-slate-500">License #: PL-987654321</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-10 border-t border-white/5 text-center text-slate-500 text-sm">
                            <p>© {new Date().getFullYear()} PlumbPro Services. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;
