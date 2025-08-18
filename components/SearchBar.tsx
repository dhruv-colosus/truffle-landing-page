"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
    const router = useRouter();
    const redirectURL = "https://app.truffle.com"


    function handleSearch(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        const inputValue = (e.currentTarget.search as HTMLInputElement).value
        router.push(`${redirectURL}/search?query=${inputValue.trim().toLowerCase()}`)
    }
    return (
        <form onSubmit={handleSearch} className="flex gap-2 w-full max-w-xl max-md:flex-col max-md:gap-3">
            <Input name="search" placeholder="Find a sea facing home with 3 bedroom in Miami" className="bg-white rounded-2xl p-6 border-2 border-truffle-green-dark max-md:text-sm" />
            <Button type="submit" variant="teal" className="font-bold h-[95%] max-md:h-fit"><MagnifyingGlassIcon size={40} stroke="black" strokeWidth={18} /> Search</Button>
        </form>
    );
}
