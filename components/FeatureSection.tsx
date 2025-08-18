"use client"

import { motion, useScroll, useSpring, useTransform } from "motion/react"
import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import LinkButton from "@/components/ui/LinkButton"

type FeatureCardData = {
    id: number;
    illustrationSrc: string;
    title: string;
    description: string;
    buttonText: string;
    href: string;
};

// FeatureCard props
type FeatureCardProps = {
    data: FeatureCardData;
};

// FeatureSection props
type FeatureSectionProps = {
    featureSection: FeatureCardData[];
};

function FeatureCard({ data }: FeatureCardProps) {
    return (
        <div className="bg-truffle-green-light rounded-4xl overflow-hidden w-[400px] min-w-[350px] max-md:w-[350px]">
            <div className="flex items-end justify-center h-[280px]">
                <Image className="object-cover w-[100%] h-[100%]" src={data.illustrationSrc} alt={`${data.title} Illustration`} width={400} height={300} />
            </div>
            <div className="flex flex-col gap-6 items-start bg-truffle-green/50 text-white py-8 px-8">
                <div className="flex flex-col gap-2">
                    <h3 className="font-semibold font-body text-2xl">{data.title}</h3>
                    <p className="text-md text-white/50 w-[90%]">{data.description}</p>
                </div>

                <LinkButton href={data.href}>{data.buttonText}</LinkButton>
            </div>
        </div>
    )
}

export default function FeatureSection({ featureSection }: FeatureSectionProps) {
    const sectionRef = useRef(null)
    const [windowWidth, setWindowWidth] = useState(0)

    // Handle window width change
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start 5%", "end 80%"], // start animating when section enters view
    })

    // Calculate the proper scroll range with first card starting 30% from left
    const cardWidth = 400 // width of each card
    const gap = 24 // gap between cards (gap-6 = 24px)
    const padding = 40 // pl-10 pr-10 = 40px each side

    // Calculate starting position (20% from left)
    const startPosition = windowWidth > 0 ? windowWidth * 0.02 : 0

    // Calculate total content width
    const totalContentWidth = windowWidth > 0 ?
        (featureSection.length * cardWidth) + ((featureSection.length - 1) * gap) + (padding * 2) : 0

    // Calculate scroll distance: from start position to when last card just comes into view
    const maxScroll = windowWidth > 0 ? totalContentWidth - windowWidth + startPosition : 0

    const x = useTransform(scrollYProgress, [0, 1], [startPosition, -maxScroll])
    const springX = useSpring(x, {
        stiffness: 110,  // Higher = snappier
        damping: 20,     // Lower = more bounce
        mass: 0.05,       // Lower mass = faster oscillation
        restDelta: 0.001 // How still it needs to be to stop
    })

    return (
        <div className="w-[100%] mx-auto" id="whyus">
            <div className="h-[200vh]" ref={sectionRef}>
                <div className="sticky top-0">
                    <div className="text-center py-8 max-md:w-[90%] mx-auto ">
                        <div className="relative max-w-xl mx-auto">
                            <h2 className="font-display text-truffle-green-dark text-5xl font-bold mb-2">
                                Tired of Zillow? You might be a{" "}
                                <span className="text-truffle-green-light">TRUFFLER</span>.
                            </h2>
                            <Image
                                className="absolute -top-6 -right-8 inline-block max-md:-top-4 max-md:-right-4"
                                src="/LandingPage/tackel_icon.svg"
                                alt="Truffle Tackel Icon"
                                width={44}
                                height={44}
                            />
                        </div>

                        <p className="font-body text-lg tracking-tight text-truffle-green-light/80 max-w-3xl mx-auto">
                            Sound like this is you ? Take a look below.
                        </p>
                    </div>


                    {/* Horizontal motion container */}
                    <div className="flex items-center overflow-hidden">
                        <motion.div
                            style={{ x: springX }}
                            className="flex items-center gap-6 w-fit pl-10 pr-10"
                        >
                            {featureSection.map((card) => (
                                <FeatureCard key={card.id} data={card} />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}