"use client"

import { Button } from "@/components/ui/button";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

import { useScrollTo } from "@/lib/useScrollToHook";
import { useState } from "react";


export default function Navbar() {
    const scrollTo = useScrollTo();
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    return (
        <nav className="w-full flex items-center justify-between p-4 px-12 text-truffle-green-dark max-lg:px-6 max-md:px-0 max-md:w-[90%]">
            <Link href="/" className="flex items-center gap-4 max-md:gap-4 max-md:flex-1">
                <Image src="/truffle_icon.svg" alt="Truffle Icon" width={38} height={38} />
                <span className="text-xl max-md:text-[18px] font-logo font-semibold ">Truffle Homes</span>
            </Link>

            <div className="max-md:hidden flex items-center gap-12 font-semibold font-display uppercase [&>a]:hover:opacity-50 [&>a]:transition-all">
                <Link href="/" scroll={false} onClick={() => scrollTo('whyus')}>Why Us ?</Link>
                <Link href="/" scroll={false} onClick={() => scrollTo('pricing')}>Pricing</Link>
                <Link href="/" scroll={false} onClick={() => scrollTo('products')}>Products</Link>
                <Link href="/" scroll={false} onClick={() => scrollTo('blog')}>Blog</Link>
            </div>

            <Link href="/get-started" className="max-md:hidden">
                <Button variant="teal">GET STARTED NOW</Button>
            </Link>

            <div className="md:hidden ml-4">
                <ListIcon onClick={() => setShowMobileMenu(true)} size={20} stroke="black " strokeWidth={18} />

                <div className={`${showMobileMenu || 'h-0 opacity-0 top-[-200px] overflow-hidden p-0'} border-b-4 border-truffle-green-dark shadow-xl animate-in fade-in-50  transition-all duration-500 ease-in-out absolute right-0 top-0 p-10 text-xl w-screen z-10 flex flex-col items-start gap-4 bg-background font-semibold font-display uppercase`}>
                    <XIcon onClick={() => setShowMobileMenu(false)}  className="self-end absolute mt-6 mr-5 top-0 right-0" size={20} stroke="black " strokeWidth={18} />

                    <Link href="/" scroll={false} onClick={() => scrollTo('whyus')}>Why Us ?</Link>
                    <Link href="/" scroll={false} onClick={() => scrollTo('pricing')}>Pricing</Link>
                    <Link href="/" scroll={false} onClick={() => scrollTo('products')}>Products</Link>
                    <Link href="/" scroll={false} onClick={() => scrollTo('blog')}>Blog</Link>
                    <Link href="/get-started" className="mt-2">
                        <Button variant="teal">GET STARTED NOW</Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}