"use client";

import React from "react";
import { CheckCircle2, DollarSign, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const WhyChooseUs = () => {
    const features = [
        {
            icon: DollarSign,
            title: "Upfront Pricing",
            desc: "No hidden fees or surprise charges. You'll know the cost before we start.",
        },
        {
            icon: Clock,
            title: "On-Time Guarantee",
            desc: "We value your time. If we're late, you get a discount on your service.",
        },
        {
            icon: Sparkles,
            title: "Clean-up Guarantee",
            desc: "We leave your home as clean as we found it. No mess left behind.",
        },
        {
            icon: CheckCircle2,
            title: "Licensed Experts",
            desc: "All our plumbers are fully licensed, insured, and background-checked.",
        },
    ];

    return (
        <section id="why-us" className="py-24 bg-primary text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 transform translate-x-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex-1"
                    >
                        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
                            Why Thousands of Homeowners <span className="text-accent">Trust Us</span>
                        </h2>
                        <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                            We&apos;ve built our reputation on reliability, transparency, and top-tier craftsmanship. When you call us, you&apos;re getting the best in the business.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {features.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + index * 0.1 }}
                                        className="flex gap-4"
                                    >
                                        <div className="flex-shrink-0">
                                            <div className="bg-accent/10 p-3 rounded-lg">
                                                <Icon className="text-accent w-6 h-6" />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-xl mb-2">{feature.title}</h4>
                                            <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white/5">
                            <Image
                                src="/plumber-working.png"
                                alt="Plumber working"
                                fill
                                className="object-cover"
                            />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, type: "spring" }}
                                className="absolute bottom-8 left-8 bg-white p-6 rounded-2xl shadow-xl max-w-[240px]"
                            >
                                <div className="flex items-center gap-1 text-accent mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Sparkles key={i} size={16} className="fill-accent" />
                                    ))}
                                </div>
                                <p className="text-primary font-bold text-lg mb-1">15+ Years</p>
                                <p className="text-slate-500 text-sm">Of excellence in plumbing services.</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
