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
    Bug,
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
import { findResources, testGeminiConnection } from "@/lib/resource-ai";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuCheckboxItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";

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
    const [showDebug, setShowDebug] = useState(false);
    const [lastQuery, setLastQuery] = useState("");
    const [apiStatus, setApiStatus] = useState<{
        tested: boolean;
        working: boolean;
        message: string;
    }>({
        tested: false,
        working: false,
        message: "",
    });

    const testConnection = async () => {
        setLoading(true);
        try {
            const result = await testGeminiConnection();
            setApiStatus({
                tested: true,
                working: result.success,
                message: result.message,
            });
        } catch (err) {
            setApiStatus({
                tested: true,
                working: false,
                message: "Failed to test API connection",
            });
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!query.trim()) return;

        setLoading(true);
        setError("");
        setUsingFallback(false);
        setLastQuery(query);

        try {
            const resourceResults = await findResources(query);
            setResults(resourceResults);

            // Check if we got fallback results
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
            {apiStatus.tested && (
                <Alert variant={apiStatus.working ? "default" : "destructive"}>
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                        {apiStatus.working ? (
                            <span className="text-green-700">
                                ✅ Google API is working: {apiStatus.message}
                            </span>
                        ) : (
                            <span>⚠️ API Issue: {apiStatus.message}</span>
                        )}
                    </AlertDescription>
                </Alert>
            )}

            {usingFallback && (
                <Alert>
                    <Info className="h-4 w-4" />
                    <AlertDescription>
                        <span className="text-blue-700">
                            ℹ️ Using enhanced smart search. Results are based on
                            keyword matching across all 523 library resources.
                        </span>
                    </AlertDescription>
                </Alert>
            )}

            <form onSubmit={handleSearch} className="flex w-full space-x-2">
                <div className="relative flex-grow">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <Input
                        type="text"
                        placeholder="Try: 'Civil War primary sources', 'chemistry journals', 'business case studies'"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="pl-10 py-6 text-base"
                    />
                </div>
                <Button type="submit" disabled={loading} className="px-6">
                    {loading ? (
                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    ) : null}
                    {loading ? "Searching..." : "Search"}
                </Button>
            </form>

            {/* Debug Information */}
            {results.length > 0 && (
                <Collapsible open={showDebug} onOpenChange={setShowDebug}>
                    <CollapsibleTrigger asChild>
                        <Button variant="outline" size="sm" className="mb-4">
                            <Bug className="h-4 w-4 mr-2" />
                            {showDebug ? "Hide" : "Show"} Search Debug Info
                        </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                        <Card className="bg-slate-50">
                            <CardHeader>
                                <CardTitle className="text-sm">
                                    Search Debug Information
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm space-y-2">
                                <p>
                                    <strong>Query:</strong> "{lastQuery}"
                                </p>
                                <p>
                                    <strong>Results Found:</strong>{" "}
                                    {results.length}
                                </p>
                                <p>
                                    <strong>Using Fallback:</strong>{" "}
                                    {usingFallback ? "Yes" : "No"}
                                </p>
                                <p>
                                    <strong>API Status:</strong>{" "}
                                    {apiStatus.working
                                        ? "Working"
                                        : "Not tested/Error"}
                                </p>
                                <div>
                                    <strong>Resource IDs Returned:</strong>
                                    <ul className="list-disc list-inside ml-4">
                                        {results.map((r) => (
                                            <li key={r.id}>
                                                {r.id} (Score:{" "}
                                                {r.relevanceScore})
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    </CollapsibleContent>
                </Collapsible>
            )}

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
                                <span className="text-sm text-slate-500">
                                    (Smart Search)
                                </span>
                            )}
                            {!usingFallback && (
                                <span className="text-sm text-slate-500">
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
                                    {allSubjects.map((subject) => (
                                        <DropdownMenuCheckboxItem
                                            key={subject}
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

                    <Tabs defaultValue="list" className="w-full">
                        <TabsList className="mb-4">
                            <TabsTrigger value="list">List View</TabsTrigger>
                            <TabsTrigger value="detailed">
                                Detailed View
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="list" className="space-y-2">
                            {filteredResults.length > 0 ? (
                                filteredResults.map((resource) => (
                                    <Card
                                        key={resource.id}
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
                                                        .map((type) => (
                                                            <Badge
                                                                key={type}
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
                                filteredResults.map((resource) => (
                                    <ResourceCard
                                        key={resource.id}
                                        resource={resource}
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
                        best resources from the BYU-Idaho McKay Library's 523
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

function ResourceCard({ resource }: { resource: ResourceResult }) {
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
                        <CardDescription className="mt-1">
                            {resource.description}
                        </CardDescription>
                    </div>
                    <div className="flex space-x-2">
                        {resource.contentTypes.slice(0, 2).map((type) => (
                            <Badge
                                key={type}
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
                        Access Resource
                    </a>
                </Button>
            </CardFooter>
        </Card>
    );
}
