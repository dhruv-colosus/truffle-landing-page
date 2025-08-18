"use client"
import { ArrowRightIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

type Blog = {
    id: number,
    title: string,
    slug: string;
    imgSrc: string,
    blogLink: string
}

type BlogCardProps = {
    data: Blog
}

export default function BlogCard({ data }: BlogCardProps) {
    return (
        <Link href={`/blog/${data.slug}`} className="w-80 max-md:w-[90%] max-w-[400px] h-[420px] border-2 border-truffle-green-dark rounded-lg overflow-hidden bg-white shadow flex flex-col">
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
                        Read More
                        
                        <ArrowRightIcon
                            className="p-1.5 bg-truffle-mint border border-truffle-green rounded-full"
                            size={28}
                            stroke="black"
                            strokeWidth={18}
                        />
                </div>
            </div>
        </Link>
    );
}
