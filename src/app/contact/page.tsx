"use client";

import React, { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { useSearchParams } from "next/navigation";

const ContactForm = () => {
    const searchParams = useSearchParams();

    return (
        <main className="min-h-screen flex flex-col">
            <Header />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                            Contact <span className="text-accent">Us</span>
                        </h1>
                        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
                            Have a plumbing emergency or planning a renovation? We&apos;re here to help 24/7. Reach out to our licensed experts today.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* Left Side: Contact Info */}
                        <div className="flex-1">
                            <motion.h2
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl font-bold text-primary mb-8"
                            >
                                Get in Touch
                            </motion.h2>
                            <div className="space-y-8">
                                {[
                                    { icon: Phone, title: "Call Us 24/7", sub: "For immediate emergency service:", content: "1-800-PLUMBER", href: "tel:1-800-PLUMBER", isLarge: true },
                                    { icon: Mail, title: "Email Us", sub: "For non-emergency inquiries:", content: "info@plumbpro.com", href: "mailto:info@plumbpro.com" },
                                    { icon: MapPin, title: "Our Location", sub: "", content: "123 Plumbing Way, City, ST 12345" },
                                    { icon: Clock, title: "Working Hours", sub: "Emergency Service: 24/7/365", content: "Office Hours: Mon-Fri, 8am - 6pm" },
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-accent/20 transition-all group"
                                    >
                                        <div className="bg-white p-4 rounded-xl shadow-sm group-hover:bg-accent transition-colors">
                                            <item.icon className="text-accent group-hover:text-white transition-colors" size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xl text-primary mb-1">{item.title}</h4>
                                            {item.sub && <p className="text-slate-500 mb-2">{item.sub}</p>}
                                            {item.href ? (
                                                <a href={item.href} className={item.isLarge ? "text-2xl font-extrabold text-accent hover:underline" : "text-lg font-bold text-primary hover:text-accent transition-colors"}>
                                                    {item.content}
                                                </a>
                                            ) : (
                                                <p className={item.isLarge ? "text-2xl font-extrabold text-accent" : "text-slate-500"}>
                                                    {item.content}
                                                </p>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Right Side: Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex-1"
                        >
                            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-100">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="bg-accent/10 p-3 rounded-lg">
                                        <MessageSquare className="text-accent" size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-primary">Send a Message</h3>
                                </div>

                                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
                                            <input
                                                type="text"
                                                placeholder="John"
                                                className="w-full px-4 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-slate-50/50"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
                                            <input
                                                type="text"
                                                placeholder="Doe"
                                                className="w-full px-4 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-slate-50/50"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="john@example.com"
                                            className="w-full px-4 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-slate-50/50"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Service Needed</label>
                                        <select
                                            name="service"
                                            defaultValue={searchParams.get("service") || "Other Inquiry"}
                                            className="w-full px-4 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-slate-50/50 appearance-none"
                                        >
                                            <option value="Emergency Repair">Emergency Repair</option>
                                            <option value="Leak Detection">Leak Detection</option>
                                            <option value="Drain Cleaning">Drain Cleaning</option>
                                            <option value="Water Heater Repair">Water Heater Repair</option>
                                            <option value="Bathroom Renovation">Bathroom Renovation</option>
                                            <option value="Other Inquiry">Other Inquiry</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">Your Message</label>
                                        <textarea
                                            rows={4}
                                            placeholder="How can we help you?"
                                            className="w-full px-4 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all bg-slate-50/50 resize-none"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-5 rounded-xl transition-all transform hover:scale-[1.02] shadow-xl shadow-accent/20 flex items-center justify-center gap-3 text-lg"
                                    >
                                        <Send size={20} />
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="h-[400px] bg-slate-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
                    <div className="text-center">
                        <MapPin className="text-slate-300 mx-auto mb-4" size={48} />
                        <p className="text-slate-400 font-medium">Interactive Map Integration Placeholder</p>
                        <p className="text-slate-400 text-sm">123 Plumbing Way, City, ST 12345</p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

const ContactPage = () => {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <ContactForm />
        </Suspense>
    );
};

export default ContactPage;
