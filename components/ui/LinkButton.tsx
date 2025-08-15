"use client"

import Link from "next/link"
import { Button } from "./button"
import { ReactNode } from "react"


type LinkButtonProps = {
    href: string,
    children?: ReactNode,
    className?: string,
    variant?: 'teal' | 'default' | 'white' | 'light' | null
}


export default function LinkButton({ href = "/", variant = 'default', children, className }: LinkButtonProps) {
    return (
        <Link className={className} href={href}><Button variant={variant}>{children}</Button></Link>
    )
}