"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { servicesData } from "@/lib/servicesData";
import { TextReveal } from "@/components/ui/TextReveal";

const ServiceCard = ({ service, index }: { service: any; index: number }) => {
    const Icon = service.icon;
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="relative group h-full"
        >
            <div
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col h-full hover:-translate-y-2"
            >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                    <motion.div
                        className="w-full h-full"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                    <div className="absolute bottom-4 left-4 z-20 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20 shadow-lg">
                        <Icon className="text-white w-6 h-6" />
                    </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow bg-white relative z-20">
                    <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                        {service.title}
                    </h3>
                    <p className="text-slate-500 mb-6 leading-relaxed text-sm flex-grow">
                        {service.shortDesc}
                    </p>
                    <Link href={`/services/${service.id}`}>
                        <button className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all group-hover:text-accent">
                            Learn More <ArrowRight size={16} />
                        </button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

const Services = () => {
    return (
        <section id="services" className="py-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <div className="flex justify-center mb-4">
                        <TextReveal
                            text="Our Professional Services"
                            className="text-3xl md:text-5xl font-extrabold text-primary"
                        />
                    </div>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="w-24 h-1.5 bg-accent mx-auto rounded-full mb-6 origin-left"
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="text-slate-500 max-w-2xl mx-auto text-lg"
                    >
                        We provide a wide range of plumbing solutions tailored to your residential and commercial needs.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {servicesData.map((service, index) => (
                        <ServiceCard key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
