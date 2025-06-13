"use client";

import { useState } from "react";
import { ResourceFinder } from "@/components/resource-finder";
import { LibraryHeader } from "@/components/library-header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResourceIndexer } from "@/components/resource-indexer";

export default function Home() {
    const [apiKey, setApiKey] = useState<string | null>(null);

    return (
        <div className="min-h-screen bg-slate-50">
            <LibraryHeader />
            <main className="container mx-auto px-4 py-8">
                <div className="mx-auto max-w-4xl">
                    <div className="mb-8 text-center">
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            BYU-Idaho Library Resource Finder
                        </h1>
                        <p className="mt-3 text-lg text-slate-600">
                            Find the best resources for your research using
                            natural language.
                        </p>
                    </div>
                    <Tabs defaultValue="search" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 mb-8">
                            <TabsTrigger value="search">
                                Search Resources
                            </TabsTrigger>
                            <TabsTrigger value="index">
                                Index New Resources
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="search">
                            <ResourceFinder />
                        </TabsContent>

                        <TabsContent value="index">
                            <ResourceIndexer />
                        </TabsContent>
                    </Tabs>
                </div>
            </main>
        </div>
    );
}
