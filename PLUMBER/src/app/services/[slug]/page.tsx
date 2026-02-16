"use client";

import React from "react";
import { servicesData } from "@/lib/servicesData";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Phone } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Image from "next/image";

const ServiceDetail = () => {
    const params = useParams();
    const slug = params.slug as string;
    const service = servicesData.find((s) => s.id === slug);

    if (!service) {
        notFound();
    }

    return (
        <main className="bg-white min-h-screen pb-20">
            {/* Hero Section */}
            <section className="relative h-[60vh] overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <div className="container mx-auto px-4 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-4xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg"
                        >
                            {service.title}
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            <Link
                                href="/#services"
                                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors border border-white/30 px-6 py-2 rounded-full backdrop-blur-sm hover:bg-white/10"
                            >
                                <ArrowLeft size={18} /> Back to Services
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="container mx-auto px-4 -mt-20 relative z-30">
                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-16 max-w-5xl mx-auto border border-slate-100">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Main Description */}
                        <div className="flex-1">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="bg-accent/10 p-4 rounded-2xl">
                                        <service.icon className="text-accent w-8 h-8" />
                                    </div>
                                    <h2 className="text-3xl font-bold text-primary">Overview</h2>
                                </div>
                                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                    {service.fullDesc}
                                </p>

                                <h3 className="text-2xl font-bold text-primary mb-6">Key Benefits</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {service.benefits.map((benefit, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100"
                                        >
                                            <CheckCircle2 className="text-accent flex-shrink-0" size={20} />
                                            <span className="font-medium text-slate-700">{benefit}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Sidebar / CTA */}
                        <div className="lg:w-1/3">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="bg-primary text-white p-8 rounded-2xl shadow-xl sticky top-24"
                            >
                                <h3 className="text-2xl font-bold mb-4">Need this service?</h3>
                                <p className="text-slate-300 mb-8">
                                    Our expert team is ready to help. Contact us today for a free quote.
                                </p>
                                <div className="space-y-4">
                                    <a
                                        href="tel:1-800-PLUMBER"
                                        className="flex items-center justify-center gap-3 w-full bg-accent hover:bg-accent/90 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-accent/20"
                                    >
                                        <Phone size={20} />
                                        Call Now
                                    </a>
                                    <Link
                                        href={`/contact?service=${encodeURIComponent(service.title)}`}
                                        className="flex items-center justify-center gap-3 w-full bg-white/10 hover:bg-white/20 text-white font-bold py-4 rounded-xl transition-all border border-white/10"
                                    >
                                        Book Online
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ServiceDetail;
