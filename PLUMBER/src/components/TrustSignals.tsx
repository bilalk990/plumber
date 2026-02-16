"use client";

import React from "react";
import { ShieldCheck, Clock, Award, ThumbsUp } from "lucide-react";
import { motion } from "framer-motion";

const TrustSignals = () => {
    const signals = [
        { icon: ShieldCheck, text: "Licensed & Insured" },
        { icon: Clock, text: "24/7 Emergency Service" },
        { icon: Award, text: "Certified Technicians" },
        { icon: ThumbsUp, text: "100% Satisfaction" },
    ];

    return (
        <section className="relative z-30 py-20 px-4 bg-slate-50">
            <div className="container mx-auto">
                <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                        {signals.map((signal, index) => {
                            const Icon = signal.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    whileHover={{ y: -5 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="bg-accent/10 p-4 rounded-2xl group-hover:bg-accent transition-colors duration-300">
                                        <Icon className="text-accent group-hover:text-white transition-colors duration-300 w-6 h-6 md:w-8 md:h-8" />
                                    </div>
                                    <span className="font-bold text-primary text-base md:text-lg leading-tight">{signal.text}</span>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustSignals;
