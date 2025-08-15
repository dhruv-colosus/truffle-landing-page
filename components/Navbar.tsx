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


export default function Navbar() {
    return (
        <nav className="w-full flex items-center justify-between p-4 px-12 text-truffle-green-dark max-lg:px-6 max-md:px-0 max-md:w-[90%]">
            <Link href="/" className="flex items-center gap-4 max-md:gap-2 max-md:flex-1">
                <Image src="/truffle_icon.svg" alt="Truffle Icon" width={38} height={38} />
                <span className="text-xl max-md:text-[16px] font-logo font-semibold ">Truffle Homes</span>
            </Link>

            <div className="max-md:hidden flex items-center gap-12 font-semibold font-display uppercase">
                <Link href="#whyus">Why Us ?</Link>
                <Link href="#pricing">Pricing</Link>
                <Link href="#products">Products</Link>
                <Link href="#blog">Blog</Link>
            </div>

            <Link href="/get-started">
                <Button variant="teal">GET STARTED NOW</Button>
            </Link>

            <div className="md:hidden">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <ListIcon className="ml-4" size={20} stroke="black " strokeWidth={18} />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent sideOffset={12}>
                        <DropdownMenuItem>
                            <Link href="#whyus">Why Us ?</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href="#pricing">Pricing</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href="#products">Products</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href="#blog">Blog</Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    );
}