
import type { Metadata } from "next";
import { League_Gothic, Koulen } from "next/font/google";
import "./globals.css";
import Nav from "../components/Nav";

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
    title: "Portfolio",
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
                className={` ${leagueGothic.variable} ${koulen.variable} w-full max-w-[92rem] mx-auto px-5 md:px-10 bg-[#09090B]`}
            >
                <div className="mainContainer border-r h-full border-neutral-800">
                    <Nav />
                    {children}
                </div>
            </body>
        </html>
    );
}
