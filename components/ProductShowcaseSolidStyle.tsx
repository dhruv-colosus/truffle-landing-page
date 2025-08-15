"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";


type ProductFeatureData = {
    info: {
        iconSrc: string;
        tagline: string;
        description: string;
    };
    cards: {
        title: string;
        description: string;
    }[];
    buttonText: string;
    imageSrc: string;
    href: string;
};

type ProductShowcaseProps = {
    className?: string,
    data: ProductFeatureData
}


export default function ProductShowcaseSolidStyle({ className = "", data }: ProductShowcaseProps) {
    return (
        <div className={`${className} flex items-center justify-between max-md:flex-col-reverse gap-12 max-md:gap-8 h-[550px] max-md:h-fit w-full max-w-[1400px]`}>
            <div className={`flex flex-col items-end justify-evenly h-full text-white max-md:gap-6`}>
                <div className="flex items-center justify-end gap-4 ">
                    <div className="flex flex-col gap-1">
                        <h2 className="text-2xl text-right font-display font-semibold">{data.info.tagline}</h2>
                        <p className="text-md text-right text-white/80">{data.info.description}</p>
                    </div>
                    <div className="p-2 px-2.5 bg-truffle-teal rounded-2xl border-2 border-truffle-green-dark shadow-[0_4px_0px_0px] shadow-truffle-green-dark">
                        <Image src={data.info.iconSrc} alt="Truffle Search Icon" width={44} height={44} />
                    </div>
                </div>

                <div className="flex flex-col items-end gap-4 text-white">
                    <div className="bg-white/10 rounded-lg px-4 py-5 border-r-5 border-truffle-green/50 max-w-[500px]">
                        <h4 className="font-display font-semibold mb-1 text-xl">{data.cards[0].title}</h4>
                        <p className="text-md text-white/50">{data.cards[0].description}</p>
                    </div>
                    <div className=" bg-truffle-green-dark/10 rounded-lg px-4 py-5 border-r-5 border-truffle-green-dark/50 max-w-[500px]">
                        <h4 className="font-display font-semibold mb-1 text-xl">{data.cards[1].title}</h4>
                        <p className="text-md text-white/50">{data.cards[1].description}</p>
                    </div>
                </div>

                <Link href="/search">
                    <Button variant="teal">{data.buttonText} <ArrowRightIcon size={18} strokeWidth={12} stroke="black" /></Button>
                </Link>
            </div>

            <div>
                <Image
                    src={data.imageSrc}
                    alt="Feature Showcase Image"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-xl border-2 border-black"
                />
            </div>
        </div>
    )
}