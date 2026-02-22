import type { Metadata } from "next";
import { League_Gothic, Koulen } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav";
import CustomCursor from "@/components/CustomCursor";
import LenisProvider from "@/components/LenisProvider";
import ShootingStarsBackground from "@/components/ShootingStarsBackground";

const leagueGothic = League_Gothic({
    variable: "--font-league-gothic",
    subsets: ["latin"],
});

const koulen = Koulen({
    variable: "--font-koulen",
    subsets: ["latin"],
    weight: ["400"],
});

export const metadata: Metadata = {
    title: "Tanvir Rana",
    description: "Tanvir Rana's Portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${leagueGothic.variable} ${koulen.variable} w-full max-w-[92rem] mx-auto px-5 md:px-10`}
            >
                <ShootingStarsBackground />
                <LenisProvider>
                    <div className=" relative z-10 h-full">
                        <Nav />
                        <CustomCursor />
                        {children}
                    </div>
                </LenisProvider>
            </body>
        </html>
    );
}
