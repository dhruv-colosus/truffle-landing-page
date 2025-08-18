"use client"

import { useRouter } from "next/navigation";
import { motion } from "motion/react";

export default function Marquee() {
    const router = useRouter();
    const redirectURL = "https://app.truffle.com"

    const items = [
        "The Detail Lover",
        "The Lifestyle Seeker",
        "The Renovator",
        "The Remote Relocator",
    ];

    function redirectSearchQuery(text: string) {
        router.push(`${redirectURL}/search?query=${text.toLowerCase()}`)
    }

    return (
        <div className="text-truffle-green-dark overflow-hidden -mt-4 relative [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <motion.div className="flex animate-marquee-scroll2">
                <motion.div 
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 20,
                        ease: "linear",
                    }}
                className="flex shrink-0 gap-8 pl-8">
                    {items.map((item, idx) => (
                        <span onClick={() => redirectSearchQuery(item)} className="cursor-pointer whitespace-nowrap w-fit h-fit py-1 px-4 text-sm font-medium text-black/50 bg-white border border-truffle-green-light rounded-full" key={`${idx}+${item}`}>{item}</span>
                    ))}
                </motion.div>
                <motion.div 
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 20,
                        ease: "linear",
                    }}
                className="flex shrink-0 gap-8 pl-8">
                    {items.map((item, idx) => (
                        <span onClick={() => redirectSearchQuery(item)} aria-hidden={true} className="cursor-pointer whitespace-nowrap w-fit h-fit py-1 px-4 text-sm font-medium text-black/50 bg-white border border-truffle-green-light rounded-full" key={`${idx}+${item}`}>{item}</span>
                    ))}
                </motion.div>
                <motion.div 
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 20,
                        ease: "linear",
                    }}
                className="flex shrink-0 gap-8 pl-8">
                    {items.map((item, idx) => (
                        <span onClick={() => redirectSearchQuery(item)} aria-hidden={true} className="cursor-pointer whitespace-nowrap w-fit h-fit py-1 px-4 text-sm font-medium text-black/50 bg-white border border-truffle-green-light rounded-full" key={`${idx}+${item}`}>{item}</span>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}

