"use client";
import { ResourceFinder } from "@/components/resource-finder";
import { LibraryHeader } from "@/components/library-header";

export default function Home() {
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
              Find the best resources for your research using natural language.
            </p>
          </div>
          <ResourceFinder />
        </div>
      </main>
    </div>
  );
}
