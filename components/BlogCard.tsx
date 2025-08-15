"use client"
import { ArrowRightIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

type Blog = {
    id: number,
    title: string,
    imgSrc: string,
    blogLink: string
}

type BlogCardProps = {
    data: Blog
}

export default function BlogCard({ data }: BlogCardProps) {
    return (
        <div className="w-80 max-md:w-[90%] max-w-[400px] h-[420px] border rounded-lg overflow-hidden bg-white shadow flex flex-col">
            {/* Image */}
            <div className="h-64 w-full">
                <Image
                    src={data.imgSrc}
                    width={200}
                    height={200}
                    alt={`${data.title} Blog Image`}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between flex-1 py-6 px-6 font-body font-black">
                <h3 className="font-black text-lg leading-5">{data.title}</h3>

                <div className="flex items-center justify-between mt-auto">
                    <Link
                        href={data.blogLink}
                        className="text-sm tracking-tight hover:underline underline-offset-4"
                    >
                        Read More
                    </Link>

                    <Link href={data.blogLink}>
                        <ArrowRightIcon
                            className="p-1.5 bg-truffle-mint border border-truffle-green rounded-full"
                            size={28}
                            stroke="black"
                            strokeWidth={18}
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}
