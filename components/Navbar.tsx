"use client"

import { Button } from "@/components/ui/button";
import { ListIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useScrollTo } from "@/lib/useScrollToHook";


export default function Navbar() {
    const scrollTo = useScrollTo();

    return (
        <nav className="w-full flex items-center justify-between p-4 px-12 text-truffle-green-dark max-lg:px-6 max-md:px-0 max-md:w-[90%]">
            <Link href="/" className="flex items-center gap-4 max-md:gap-2 max-md:flex-1">
                <Image src="/truffle_icon.svg" alt="Truffle Icon" width={38} height={38} />
                <span className="text-xl max-md:text-[16px] font-logo font-semibold ">Truffle Homes</span>
            </Link>

            <div className="max-md:hidden flex items-center gap-12 font-semibold font-display uppercase">
                <Link href="/" scroll={false} onClick={() => scrollTo('whyus')}>Why Us ?</Link>
                <Link href="/" scroll={false} onClick={() => scrollTo('pricing')}>Pricing</Link>
                <Link href="/" scroll={false} onClick={() => scrollTo('products')}>Products</Link>
                <Link href="/" scroll={false} onClick={() => scrollTo('blog')}>Blog</Link>
            </div>

            <Link href="/get-started">
                <Button variant="teal">GET STARTED NOW</Button>
            </Link>

            <div className="md:hidden ml-4">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <ListIcon className="cursor-pointer" size={20} stroke="black " strokeWidth={18} />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent sideOffset={12}>
                        <DropdownMenuItem>
                            <Link href="/" scroll={false} onClick={() => scrollTo('whyus')}>Why Us ?</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href="/" scroll={false} onClick={() => scrollTo('pricing')}>Pricing</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href="/" scroll={false} onClick={() => scrollTo('products')}>Products</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href="/" scroll={false} onClick={() => scrollTo('blog')}>Blog</Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    );
}