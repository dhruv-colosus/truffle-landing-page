import type { Metadata } from "next";
import { Phudu, Poppins, League_Spartan } from "next/font/google";
import "./globals.css";

const phudu = Phudu({
  variable: "--font-phudu",
  display: "swap",
  subsets: ['latin']
});
const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400"],
  display: "swap",
  subsets: ['latin']
});
const leagueSpartan = League_Spartan({
  variable: "--font-logo",
  weight: ["600"],
  display: "swap",
  subsets: ['latin']
});


export const metadata: Metadata = {
  title: "Truffle Homes",
  description: "Describe your dream home in plain words. Finding a home should feel like home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${phudu.variable} ${leagueSpartan.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
