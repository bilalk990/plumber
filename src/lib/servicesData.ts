import { Search, Trash2, Thermometer, Bath } from "lucide-react";

export const servicesData = [
    {
        id: "leak-detection",
        title: "Leak Detection",
        icon: Search,
        shortDesc: "Advanced non-invasive technology to find leaks behind walls and under floors.",
        fullDesc: "Hidden leaks can cause significant damage to your home if left undetected. Our advanced electronic leak detection services use state-of-the-art acoustic and thermal imaging technology to pinpoint the exact location of leaks without unnecessary destruction to your property. We save you time, money, and the stress of extensive repairs.",
        benefits: [
            "Non-invasive detection methods",
            "Pinpoint accuracy",
            "Prevents structural damage",
            "Saves on water bills",
            "Comprehensive reporting"
        ],
        image: "/leak-detection.png"
    },
    {
        id: "drain-cleaning",
        title: "Drain Cleaning",
        icon: Trash2,
        shortDesc: "Professional hydro-jetting and snaking to clear even the toughest clogs.",
        fullDesc: "Stubborn clogs require professional solutions. Our drain cleaning services utilize high-pressure hydro-jetting and industrial-grade snaking to remove blockages caused by grease, roots, and debris. We restore your pipes to full flow capacity, ensuring a healthy and efficient plumbing system for your home or business.",
        benefits: [
            "Removes stubborn blockages",
            "Hydro-jetting technology",
            "Prevents future clogs",
            "Odor elimination",
            "Safe for all pipe types"
        ],
        image: "/drain-cleaning.png"
    },
    {
        id: "water-heater-repair",
        title: "Water Heater Repair",
        icon: Thermometer,
        shortDesc: "Expert repair and installation of tankless and traditional water heaters.",
        fullDesc: "Don't let a cold shower ruin your day. Our water heater experts are trained to service, repair, and install all major brands and models of tankless and traditional water heaters. Whether it's a simple element replacement or a complete system upgrade, we ensure you have a reliable supply of hot water when you need it most.",
        benefits: [
            "Fast diagnostics and repair",
            "Tankless system expertise",
            "Energy-efficiency upgrades",
            "Routine maintenance plans",
            "Extended warranty options"
        ],
        image: "/water-heater.png"
    },
    {
        id: "bathroom-renovation",
        title: "Bathroom Renovation",
        icon: Bath,
        shortDesc: "Complete plumbing overhaul for your dream bathroom or kitchen project.",
        fullDesc: "Transform your bathroom into a luxurious sanctuary. Our bathroom renovation plumbing services cover everything from rough-in piping to the installation of high-end fixtures. We work closely with contractors and designers to ensure your vision becomes a reality, delivering flawless functionality and stunning aesthetics.",
        benefits: [
            "Custom fixture installation",
            "Pipe relocation and rough-in",
            "Luxury shower systems",
            "Code compliance guaranteed",
            "Seamless project coordination"
        ],
        image: "/bathroom-renovation.png"
    }
];
