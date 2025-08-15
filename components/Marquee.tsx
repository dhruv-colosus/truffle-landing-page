"use client";

import { motion } from "motion/react";

export default function Marquee() {
    const items = [
        "The Detail Lover",
        "The Lifestyle Seeker",
        "The Renovator",
        "The Remote Relocator",
    ];

    return (
        <div className="text-truffle-green-dark overflow-hidden -mt-4  relative [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <motion.div
                className="whitespace-nowrap flex gap-8"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    repeat: Infinity,
                    duration: 15,
                    ease: "linear",
                }}>
                {[...items, ...items].map((item, idx) => (
                    <span className="text-sm font-medium text-black/50 bg-white border border-truffle-green-light py-1 px-4 rounded-full" key={`${idx}+${item}`}>{item}</span>
                ))}
            </motion.div>
        </div>
    );
}
