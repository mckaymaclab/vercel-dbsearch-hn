import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@/components/google-analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "BYU-Idaho Library Resource Finder",
    description:
        "Find the best academic resources for your research using natural language",
    generator: "v0.dev",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main>{children}</main>
                <Analytics />
                <GoogleAnalytics />
            </body>
        </html>
    );
}
