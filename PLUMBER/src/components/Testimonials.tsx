"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const Testimonials = () => {
    const reviews = [
        {
            name: "Sarah Johnson",
            role: "Homeowner",
            text: "They arrived within 45 minutes for a burst pipe emergency. Professional, clean, and very reasonably priced. Highly recommend!",
            rating: 5,
        },
        {
            name: "Michael Chen",
            role: "Business Owner",
            text: "Best plumbing service I've used. They fixed our commercial water heater issues that two other companies couldn't solve.",
            rating: 5,
        },
        {
            name: "Emily Davis",
            role: "Homeowner",
            text: "The upfront pricing was a breath of fresh air. No surprises, just great work. The plumber even cleaned up everything after!",
            rating: 5,
        },
    ];

    return (
        <section id="testimonials" className="py-24 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">What Our Clients Say</h2>
                    <div className="w-20 h-1.5 bg-accent mx-auto rounded-full mb-6" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative"
                        >
                            <Quote className="absolute top-6 right-8 text-slate-100 w-12 h-12" />
                            <div className="flex gap-1 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={18} className="text-accent fill-accent" />
                                ))}
                            </div>
                            <p className="text-slate-600 mb-6 italic leading-relaxed relative z-10">
                                &quot;{review.text}&quot;
                            </p>
                            <div>
                                <h4 className="font-bold text-primary">{review.name}</h4>
                                <p className="text-slate-400 text-sm">{review.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="inline-flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-sm border border-slate-100">
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Logo.svg" alt="Google" width={60} height={20} className="h-5 w-auto" />
                        <span className="font-bold text-primary">4.9/5 Rating based on 500+ reviews</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
