"use client";
import React, { useState } from "react";
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
    relevanceScore: number;
    matchReason?: string;
    moreInfo?: string;
    contentTypes?: string[];
}

interface ResourceFinderProps {
    initialResults?: ResourceResult[];
}

export function ResourceFinder({ initialResults }: ResourceFinderProps = {}) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<ResourceResult[]>(initialResults || []);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    // Removed subject filtering state
    const [usingFallback, setUsingFallback] = useState(false);
    const [searchType, setSearchType] = useState<"library" | "database">("database");
    // Pagination state
    const [page, setPage] = useState(1);
    const RESULTS_PER_PAGE = 5;
    // Reset page to 1 on new search
    React.useEffect(() => { setPage(1); }, [results]);

    const handleSearch = async (e?: React.MouseEvent | React.KeyboardEvent) => {
        e?.preventDefault();
        if (!query.trim()) return;

        setLoading(true);
        setError("");
        setUsingFallback(false);

        try {
            const response = await fetch('/api/search', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query,
                    searchType
                })
            });

            if (!response.ok) {
                throw new Error(`API call failed: ${response.status}`);
            }

            const data = await response.json();
            const resourceResults = data.results;
            console.log('Resource results received in handleSearch:', resourceResults);

            // Map resourceResults to ResourceResult shape if needed
            setResults(
                resourceResults.map((r: any) => ({
                    id: r.id ?? r.url, // fallback to url if id missing
                    name: r.name,
                    description: r.description,
                    url: r.url,
                    relevanceScore: r.relevanceScore,
                    matchReason: r.matchReason,
                    moreInfo: r.moreInfo,
                    contentTypes: r.contentTypes,
                }))
            );

            if (resourceResults.length === 0 && searchType === "database") {
 setResults([]);
                setError("No results for your search. Please try again.");
 return;
            }

            const hasFallbackResults = resourceResults.some(
                (r: any) =>
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


    // Pagination logic: always show top 5 on first page, paginate the rest
    const totalResults = results.length;
    const totalPages = totalResults <= 5 ? 1 : Math.ceil((totalResults - 5) / RESULTS_PER_PAGE) + 1;

    function getPaginatedResults() {
        if (totalResults <= 5) return results;
        if (page === 1) return results.slice(0, 5);
        const start = 5 + (page - 2) * RESULTS_PER_PAGE;
        const end = start + RESULTS_PER_PAGE;
        return results.slice(start, end);
    }
    const filteredResults = getPaginatedResults();

    // Removed allSubjects and toggleSubject logic

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

            <div className="flex w-full gap-2 items-stretch">
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
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                handleSearch(e);
                            }
                        }}
                        autoFocus
                        className="pl-10 py-3 bg-white text-black text-base h-full"
                    />
                </div>
                <Button
                    onClick={handleSearch}
                    disabled={loading}
                    className="px-6 h-full text-base"
                    style={{ minHeight: "3rem" }}
                >
                    {loading ? (
                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                    ) : null}
                    {loading ? "Searching..." : "Search"}
                </Button>
            </div>

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
                        {/* Removed subject filter dropdown */}
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
                                <>
                                    {filteredResults.map((resource, index) => (
                                        <Card
                                            key={`list-${resource.id}-${index}-${resource.url}`}
                                            className="hover:bg-slate-50 transition-colors"
                                        >
                                            <CardHeader className="py-4">
                                                <div className="flex justify-between items-start">
                                                    <div>
                                                        <CardTitle className="text-lg flex items-center">
                                                            {resource.name}
                                                            <Badge
                                                                variant="outline"
                                                                className="ml-2 bg-green-100 text-green-800"
                                                            >
                                                                {resource.relevanceScore}% match
                                                            </Badge>
                                                        </CardTitle>
                                                    </div>
                                                </div>
                                            </CardHeader>
                                            <CardFooter className="py-3 flex justify-between">
                                                <div className="text-sm text-slate-500 flex items-center"></div>
                                                <Button variant="outline" size="sm" asChild>
                                                    <a href={resource.url} target="_blank" rel="noopener noreferrer">
                                                        Access
                                                    </a>
                                                </Button>
                                            </CardFooter>
                                        </Card>
                                    ))}
                                    {totalPages > 1 && (
                                        <div className="flex justify-center items-center gap-2 mt-4">
                                            {Array.from({ length: totalPages }, (_, i) => (
                                                <Button
                                                    key={i + 1}
                                                    size="sm"
                                                    variant={page === i + 1 ? "default" : "outline"}
                                                    onClick={() => setPage(i + 1)}
                                                >
                                                    {i + 1}
                                                </Button>
                                            ))}
                                            {page < totalPages && (
                                                <Button size="sm" variant="ghost" onClick={() => setPage(page + 1)}>
                                                    Next
                                                </Button>
                                            )}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <p className="text-center py-4 text-slate-500">
                                    No resources match the selected filters.
                                </p>
                            )}
                        </TabsContent>


                        <TabsContent value="detailed" className="space-y-4">
                            {filteredResults.length > 0 ? (
                                <>
                                    {filteredResults.map((resource, index) => (
                                        <ResourceCard
                                            key={`detailed-${resource.id}-${index}-${resource.url}`}
                                            resource={resource}
                                            searchType={searchType}
                                        />
                                    ))}
                                    {totalPages > 1 && (
                                        <div className="flex justify-center items-center gap-2 mt-4">
                                            {Array.from({ length: totalPages }, (_, i) => (
                                                <Button
                                                    key={i + 1}
                                                    size="sm"
                                                    variant={page === i + 1 ? "default" : "outline"}
                                                    onClick={() => setPage(i + 1)}
                                                >
                                                    {i + 1}
                                                </Button>
                                            ))}
                                            {page < totalPages && (
                                                <Button size="sm" variant="ghost" onClick={() => setPage(page + 1)}>
                                                    Next
                                                </Button>
                                            )}
                                        </div>
                                    )}
                                </>
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
    // Parse contact information from moreInfo field
    const parseContactInfo = (moreInfo: string) => {
        if (!moreInfo) return null;
        
        const phoneMatch = moreInfo.match(/Phone:\s*([^,]+)/i);
        const emailMatch = moreInfo.match(/Email:\s*([^,]+)/i);
        const locationMatch = moreInfo.match(/Location:\s*([^,]+)/i);
        
        if (phoneMatch || emailMatch || locationMatch) {
            return {
                phone: phoneMatch?.[1]?.trim(),
                email: emailMatch?.[1]?.trim(),
                location: locationMatch?.[1]?.trim(),
            };
        }
        return null;
    };

    // Check if this is a person/department with contact info
    const isContactInfo = resource.description?.includes("Contact information") || 
                         resource.contentTypes?.includes("Contact Information");
    
    const contactInfo = isContactInfo ? parseContactInfo(resource.moreInfo || "") : null;

    return (
        <Card>
            <CardHeader>
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle className="text-lg flex items-center">
                            {resource.name}
                            {/* Removed featured badge */}
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
                        {/* Removed contentTypes badges */}
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <div className="text-sm text-slate-600 space-y-2">
                    {/* Contact information display */}
                    {contactInfo && (
                        <div className="mt-3 p-3 bg-slate-50 rounded-md border">
                            <h4 className="font-medium text-slate-800 mb-2">Contact Information</h4>
                            <div className="space-y-1">
                                {contactInfo.phone && (
                                    <div className="flex items-center">
                                        <span className="font-medium text-slate-600 w-16">Phone:</span>
                                        <span className="text-slate-800">{contactInfo.phone}</span>
                                    </div>
                                )}
                                {contactInfo.email && (
                                    <div className="flex items-center">
                                        <span className="font-medium text-slate-600 w-16">Email:</span>
                                        <a 
                                            href={`mailto:${contactInfo.email}`}
                                            className="text-blue-600 hover:text-blue-800 underline"
                                        >
                                            {contactInfo.email}
                                        </a>
                                    </div>
                                )}
                                {contactInfo.location && (
                                    <div className="flex items-center">
                                        <span className="font-medium text-slate-600 w-16">Office:</span>
                                        <span className="text-slate-800">{contactInfo.location}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                    
                    {/* Removed Content (contentTypes) display */}
                    {/* Removed subject display */}
                    {resource.matchReason && (
                        <div className="mt-3 p-3 bg-blue-50 rounded-md text-blue-800">
                            <strong>Why this matches your search:</strong>{" "}
                            {resource.matchReason}
                        </div>
                    )}
                    {/* Removed accessNote display */}
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
