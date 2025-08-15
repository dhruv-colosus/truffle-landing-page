"use client";

import LinkButton from "@/components/ui/LinkButton";
import { ArrowRightIcon } from "@phosphor-icons/react";
import Image from "next/image";

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

export default function ProductShowcase({ className = "", data }: ProductShowcaseProps) {
    return (
        <div className={`${className} max-md:px-6 flex items-center justify-between max-md:flex-col-reverse gap-12 max-md:gap-8 h-[500px] max-md:h-fit w-full max-w-[1400px]`}>
            <div className="flex flex-col items-start justify-evenly h-full max-md:gap-6">
                <div className="flex items-center gap-4">
                    <div className="p-2 px-2.5 bg-truffle-teal rounded-2xl border-2 border-truffle-green-dark shadow-[0_4px_0px_0px] shadow-truffle-green-dark">
                        <Image src={data.info.iconSrc} alt="Truffle Search Icon" width={44} height={44} />
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2 className="text-2xl font-display font-semibold text-truffle-green-dark">{data.info.tagline}</h2>
                        <p className="text-md text-truffle-green-light/80">{data.info.description}</p>
                    </div>
                </div>

                <div className="flex flex-col items-start gap-4">
                    <div className="bg-truffle-red/10 rounded-lg px-4 py-5 border-l-5 border-truffle-red max-w-[500px]">
                        <h4 className="font-display mb-1 text-truffle-red font-semibold text-xl">{data.cards[0].title}</h4>
                        <p className="text-md text-truffle-red/80">{data.cards[0].description}</p>
                    </div>
                    <div className=" bg-truffle-green-light/10 rounded-lg px-4 py-5 border-l-5 border-truffle-green-light max-w-[500px]">
                        <h4 className="font-display mb-1 text-truffle-green-light font-semibold text-xl">{data.cards[1].title}</h4>
                        <p className="text-md text-truffle-green-light/80">{data.cards[1].description}.</p>
                    </div>
                </div>

                <LinkButton href={data.href} variant="teal">{data.buttonText}<ArrowRightIcon size={18} strokeWidth={12} stroke="black" /></LinkButton>
            </div>

            <div className="">
                <Image
                    src={data.imageSrc}
                    alt="Feature Showcase Image"
                    width={650}
                    height={450}
                    className="rounded-2xl object-cover shadow-xl border-2 border-black"
                />
            </div>
        </div>
    )
}