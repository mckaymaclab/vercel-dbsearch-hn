"use client";
import type React from "react";
import { useState } from "react";
import {
    Search,
    Loader2,
    BookOpen,
    Filter,
    AlertCircle,
    Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { findDatabaseResources } from "@/lib/resource-ai";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuCheckboxItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ResourceResult {
    id: string;
    name: string;
    description: string;
    url: string;
    contentTypes: string[];
    subjects: string[];
    accessNote?: string;
    relevanceScore: number;
    matchReason?: string;
    featured?: boolean;
    fullText?: boolean;
}

export function ResourceFinder() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<ResourceResult[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
    const [usingFallback, setUsingFallback] = useState(false);
    const [searchType, setSearchType] = useState<"library" | "database">(
        "database"
    );

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!query.trim()) return;

        setLoading(true);
        setError("");
        setUsingFallback(false);

        try {
            const resourceResults = await findDatabaseResources(
                query,
                searchType
            );
            setResults(resourceResults);

            const hasFallbackResults = resourceResults.some(
                (r) =>
                    r.matchReason?.includes("Smart search") ||
                    r.matchReason?.includes("General academic")
            );
            setUsingFallback(hasFallbackResults);
        } catch (err) {
            const errorMessage =
                err instanceof Error
                    ? err.message
                    : "Sorry, we couldn't process your request. Please try again.";
            setError(errorMessage);
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const filteredResults =
        selectedSubjects.length > 0
            ? results.filter((resource) =>
                  resource.subjects.some((subject) =>
                      selectedSubjects.includes(subject)
                  )
              )
            : results;

    const allSubjects = Array.from(
        new Set(results.flatMap((resource) => resource.subjects))
    );

    const toggleSubject = (subject: string) => {
        setSelectedSubjects((prev) =>
            prev.includes(subject)
                ? prev.filter((s) => s !== subject)
                : [...prev, subject]
        );
    };

    return (
        <div className="space-y-6">
            {usingFallback && (
                <Alert>
                    <Info className="h-4 w-4" />
                    <AlertDescription>
                        <span className="text-blue-700">
                            ℹ️ Using enhanced smart search. Results are based on
                            keyword matching across all 500+ library resources.
                        </span>
                    </AlertDescription>
                </Alert>
            )}

            <div className="flex justify-between items-start sm:items-center flex-col sm:flex-row mb-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                    <p className="text-sm font-medium text-slate-700">
                        Search:
                    </p>
                    <div className="flex gap-1 p-1 bg-zinc-300 rounded-lg">
                        <Button
                            variant={
                                searchType === "database" ? "default" : "ghost"
                            }
                            size="sm"
                            onClick={() => setSearchType("database")}
                            className={`transition-all text-black ${
                                searchType === "database"
                                    ? "bg-white shadow-sm hover:bg-white"
                                    : "hover:bg-slate-200"
                            }`}
                        >
                            Find Databases
                        </Button>
                        <Button
                            variant={
                                searchType === "library" ? "default" : "ghost"
                            }
                            size="sm"
                            onClick={() => setSearchType("library")}
                            className={`transition-all text-black ${
                                searchType === "library"
                                    ? "bg-white shadow-sm hover:bg-white"
                                    : "hover:bg-slate-200"
                            }`}
                        >
                            Search Library Website
                        </Button>
                    </div>
                </div>
                <div className="mt-4 sm:mt-0">
                    {searchType === "database" ? (
                        <p className="text-xs text-slate-500">
                            Search across 500+ databases for academic articles,
                            journals, and more.
                        </p>
                    ) : (
                        <p className="text-xs text-slate-500">
                            Search the library website for tools, resources,
                            guides, and more.
                        </p>
                    )}
                </div>
            </div>

            <form
                onSubmit={handleSearch}
                className="flex w-full gap-2 items-stretch"
            >
                <div className="relative flex-grow">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <Input
                        type="text"
                        placeholder={
                            searchType === "database"
                                ? "Try: 'Civil War primary sources', 'chemistry journals', 'business case studies'"
                                : "Try: 'Equipment rentals, textbooks', 'library hours', 'special collections', and more"
                        }
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        autoFocus
                        className="pl-10 py-3 bg-white text-black text-base h-full"
                    />
                </div>
                <Button
                    type="submit"
                    disabled={loading}
                    className="px-6 h-full text-base"
                    style={{ minHeight: "3rem" }}
                >
                    {loading ? (
                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    ) : null}
                    {loading ? "Searching..." : "Search"}
                </Button>
            </form>

            {error && (
                <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}

            {results.length > 0 && (
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold text-slate-800">
                            Recommended Resources
                            {usingFallback && (
                                <span className="ml-1 text-sm text-slate-500">
                                    (Smart Search)
                                </span>
                            )}
                            {!usingFallback && (
                                <span className="ml-1 text-sm text-slate-500">
                                    (AI-Powered)
                                </span>
                            )}
                        </h2>
                        {results.length > 0 && (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" size="sm">
                                        <Filter className="h-4 w-4 mr-2" />
                                        Filter by Subject
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    {allSubjects.map((subject, index) => (
                                        <DropdownMenuCheckboxItem
                                            key={`subject-${subject}-${index}`}
                                            checked={selectedSubjects.includes(
                                                subject
                                            )}
                                            onCheckedChange={() =>
                                                toggleSubject(subject)
                                            }
                                        >
                                            {subject}
                                        </DropdownMenuCheckboxItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        )}
                    </div>

                    <Tabs defaultValue="detailed" className="w-full">
                        <TabsList className="mb-4">
                            <TabsTrigger value="list">List View</TabsTrigger>
                            <TabsTrigger value="detailed">
                                Detailed View
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="list" className="space-y-2">
                            {filteredResults.length > 0 ? (
                                filteredResults.map((resource, index) => (
                                    <Card
                                        key={`list-${resource.id}-${index}-${resource.url}`}
                                        className="hover:bg-slate-50 transition-colors"
                                    >
                                        <CardHeader className="py-4">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <CardTitle className="text-lg flex items-center">
                                                        {resource.name}
                                                        {resource.featured && (
                                                            <Badge
                                                                variant="secondary"
                                                                className="ml-2 bg-blue-100 text-blue-800"
                                                            >
                                                                Featured
                                                            </Badge>
                                                        )}
                                                        {resource.fullText && (
                                                            <Badge
                                                                variant="outline"
                                                                className="ml-2"
                                                            >
                                                                Full Text
                                                            </Badge>
                                                        )}
                                                        <Badge
                                                            variant="outline"
                                                            className="ml-2 bg-green-100 text-green-800"
                                                        >
                                                            {
                                                                resource.relevanceScore
                                                            }
                                                            % match
                                                        </Badge>
                                                    </CardTitle>
                                                </div>
                                                <div className="flex space-x-2">
                                                    {resource.contentTypes
                                                        .slice(0, 2)
                                                        .map((type, index) => (
                                                            <Badge
                                                                key={index}
                                                                variant="outline"
                                                                className="bg-slate-100"
                                                            >
                                                                {type}
                                                            </Badge>
                                                        ))}
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardFooter className="py-3 flex justify-between">
                                            <div className="text-sm text-slate-500 flex items-center">
                                                <BookOpen className="h-4 w-4 mr-1" />
                                                {resource.subjects
                                                    .slice(0, 3)
                                                    .join(", ")}
                                                {resource.subjects.length > 3 &&
                                                    "..."}
                                            </div>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                asChild
                                            >
                                                <a
                                                    href={resource.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Access
                                                </a>
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                ))
                            ) : (
                                <p className="text-center py-4 text-slate-500">
                                    No resources match the selected filters.
                                </p>
                            )}
                        </TabsContent>

                        <TabsContent value="detailed" className="space-y-4">
                            {filteredResults.length > 0 ? (
                                filteredResults.map((resource, index) => (
                                    <ResourceCard
                                        key={`detailed-${resource.id}-${index}-${resource.url}`}
                                        resource={resource}
                                        searchType={searchType}
                                    />
                                ))
                            ) : (
                                <p className="text-center py-4 text-slate-500">
                                    No resources match the selected filters.
                                </p>
                            )}
                        </TabsContent>
                    </Tabs>
                </div>
            )}

            {!results.length && !loading && (
                <div className="text-center py-8">
                    <BookOpen className="h-12 w-12 mx-auto text-slate-300 mb-4" />
                    <h3 className="text-lg font-medium text-slate-700">
                        Search for Library Resources
                    </h3>
                    <p className="text-slate-500 mt-2 max-w-md mx-auto">
                        Describe what you're researching, and we'll suggest the
                        best resources from the BYU-Idaho McKay Library's 500+
                        databases.
                    </p>
                    <div className="mt-4 text-sm text-slate-400">
                        <p>Try searches like:</p>
                        <ul className="mt-2 space-y-1">
                            <li>"Civil War primary sources"</li>
                            <li>"chemistry research journals"</li>
                            <li>"business case studies"</li>
                            <li>"psychology articles"</li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

function ResourceCard({
    resource,
    searchType,
}: {
    resource: ResourceResult;
    searchType: "library" | "database";
}) {
    return (
        <Card>
            <CardHeader>
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle className="text-lg flex items-center">
                            {resource.name}
                            {resource.featured && (
                                <Badge
                                    variant="secondary"
                                    className="ml-2 bg-blue-100 text-blue-800"
                                >
                                    Featured
                                </Badge>
                            )}
                            <Badge
                                variant="outline"
                                className="ml-2 bg-green-100 text-green-800"
                            >
                                {resource.relevanceScore}% match
                            </Badge>
                        </CardTitle>
                        <CardDescription
                            className="mt-1"
                            dangerouslySetInnerHTML={{
                                __html: resource.description,
                            }}
                        />
                    </div>
                    <div className="flex space-x-2">
                        {resource.contentTypes
                            .slice(0, 2)
                            .map((type, index) => (
                                <Badge
                                    key={index}
                                    variant="outline"
                                    className="bg-slate-100"
                                >
                                    {type}
                                </Badge>
                            ))}
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <div className="text-sm text-slate-600 space-y-2">
                    <p>
                        <strong>Content:</strong>{" "}
                        {resource.contentTypes.join(", ")}
                    </p>
                    <p>
                        <strong>Subjects:</strong>{" "}
                        {resource.subjects.join(", ")}
                    </p>
                    {resource.matchReason && (
                        <div className="mt-3 p-3 bg-blue-50 rounded-md text-blue-800">
                            <strong>Why this matches your search:</strong>{" "}
                            {resource.matchReason}
                        </div>
                    )}
                    {resource.accessNote && (
                        <p className="mt-2 italic">{resource.accessNote}</p>
                    )}
                </div>
            </CardContent>
            <CardFooter className="flex justify-end">
                <Button asChild>
                    <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {searchType === "database"
                            ? "Access Resource"
                            : "Access Website"}
                    </a>
                </Button>
            </CardFooter>
        </Card>
    );
}
