"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./LuxuryHero.module.css";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const LuxuryHero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const leftPanelRef = useRef<HTMLDivElement>(null);
    const rightPanelRef = useRef<HTMLDivElement>(null);
    const leftImageRef = useRef<HTMLDivElement>(null);
    const rightImageRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=120%", // Pin for 1.2 screen heights
                    pin: true,
                    scrub: 1, // Smooth scrubbing
                    // markers: true, // Uncomment for debugging
                },
            });

            // Split Curtain Animation
            tl.to(leftPanelRef.current, { xPercent: -100, ease: "none" }, 0)
                .to(rightPanelRef.current, { xPercent: 100, ease: "none" }, 0)

                // Inverse Parallax (The "Masking" Effect)
                // As panel moves left (-100%), image moves right (to stay effectively static or parallax)
                .to(leftImageRef.current, { xPercent: 50, ease: "none" }, 0)
                .to(rightImageRef.current, { xPercent: -50, ease: "none" }, 0)

                // Typography Expansion
                .to(titleRef.current, { scale: 1.5, opacity: 0, ease: "power1.inOut" }, 0);

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className={styles.heroContainer}>
            {/* Background Layer (Revealed after curtains open) */}
            <div className={styles.backgroundLayer}>
                <div className="text-center text-white">
                    <h2 className="text-4xl font-bold mb-4">The Reveal</h2>
                    <p className="text-xl text-slate-300">Experience the depth of luxury.</p>
                    {/* You can place a 3D scene or video here */}
                    <div className="absolute inset-0 opacity-30">
                        <Image
                            src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop"
                            alt="Interior Background"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Left Curtain Panel */}
            <div ref={leftPanelRef} className={`${styles.curtain} ${styles.leftPanel}`}>
                <div ref={leftImageRef} className={styles.imageWrapper}>
                    <Image
                        src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop"
                        alt="Luxury Bath Left"
                        fill
                        priority
                        className={styles.curtainImage}
                    />
                </div>
            </div>

            {/* Right Curtain Panel */}
            <div ref={rightPanelRef} className={`${styles.curtain} ${styles.rightPanel}`}>
                <div ref={rightImageRef} className={styles.imageWrapper}>
                    <Image
                        src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop"
                        alt="Luxury Bath Right"
                        fill
                        priority
                        className={styles.curtainImage}
                    />
                </div>
            </div>

            {/* Center Title */}
            <h1 ref={titleRef} className={styles.title}>
                PLUMBPRO
            </h1>
        </div>
    );
};

export default LuxuryHero;
