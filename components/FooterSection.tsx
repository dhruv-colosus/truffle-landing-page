"use client"

import { InstagramLogoIcon, XLogoIcon, YoutubeLogoIcon } from "@phosphor-icons/react"
import Image from "next/image"
import Link from "next/link"
import ContactForm from "./ContactForm"

export default function FooterSection() {
    return (
        <div className="flex flex-col gap-12 max-md:gap-16">
            <div className="flex items-center justify-between gap-4">
                <Link href="/">
                    <Image src="/truffle_icon.svg" alt="Truffle Icon" width={44} height={44} />
                </Link>

                <div className="flex items-center gap-4">
                    <Link href="https://instagram.com/trufflehomes" target="_blank" className="p-2 text-black rounded-full bg-truffle-teal border-2 border-truffle-green-dark shadow-[0_4px_0px_0px] shadow-truffle-green-dark">
                        <InstagramLogoIcon size={22} />
                    </Link>

                    <Link href="https://x.com/trufflehomes" target="_blank" className="p-2 text-black rounded-full bg-truffle-teal border-2 border-truffle-green-dark shadow-[0_4px_0px_0px] shadow-truffle-green-dark">
                        <XLogoIcon size={22} />
                    </Link>

                    <Link href="https://x.com/trufflehomes" target="_blank" className="p-2 text-black rounded-full bg-truffle-teal border-2 border-truffle-green-dark shadow-[0_4px_0px_0px] shadow-truffle-green-dark">
                        <YoutubeLogoIcon size={22} />
                    </Link>
                </div>
            </div>

            <div className="flex flex-row items-start w-full justify-between max-md:flex-col max-md:gap-8">
                <div className="">
                    <h1 className="font-display text-lg font-bold text-white">CONTACT US</h1>
                    <p className="text-white/80 mt-2 max-w-xs">
                        Our support team is always ready to assist you. Don’t hesitate to reach out via phone or email—we’ll respond as promptly as possible.
                    </p>
                </div>

                <ContactForm />
            </div>

            <div className="mt-10 flex flex-col items-start w-full">
                <p className="text-md m-0">© 2025 Truffle homes | All rights reserved</p>
                <h1 className="text-[15vw] leading-40 max-lg:leading-24 max-lg:text-[7rem] max-md:text-[6.5rem] text-shadow-black text-shadow-[0px_10px] m-0 font-display font-bold tracking-tighter">TRUFFLE HOMES</h1>
            </div>
        </div>
    )
}