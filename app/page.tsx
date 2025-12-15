"use client";
import { ResourceFinder } from "@/components/resource-finder";
import { LibraryHeader } from "@/components/library-header";

export default function Home() {
    // Force rebuild - Dec 15, 2025
    return (
        <div className="min-h-screen bg-white">
            <LibraryHeader />
            <main className="container mx-auto px-4">
                <div className="mx-auto max-w-4xl">
                    <div className="mb-8 text-center">
                        <div
                            className="relative flex flex-column items-center justify-center rounded-lg overflow-hidden mb-8 w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]"
                            style={{
                                backgroundImage: "url('/bg-image.png')",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                minHeight: "220px",
                            }}
                        >
                            <div className="relative z-10 py-10 px-16 max-w-4xl mx-auto bg-white/60 backdrop-blur-sm rounded-lg shadow-2xl text-center">
                                <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                                    BYU-Idaho Library Resource Finder
                                </h1>
                                <p className="mt-3 text-lg text-slate-800">
                                    Find the best resources for your research
                                    using natural language.
                                </p>
                            </div>
                        </div>
                        <ResourceFinder />
                    </div>
                </div>
            </main>
        </div>
    );
}
