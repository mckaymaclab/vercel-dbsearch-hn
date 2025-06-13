"use client";

import type React from "react";

import { useState } from "react";
import { Loader2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { indexNewResource } from "@/lib/resource-ai";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import type { LibraryResource } from "@/lib/resource-database";

export function ResourceIndexer() {
    const [resourceData, setResourceData] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [indexedResource, setIndexedResource] =
        useState<LibraryResource | null>(null);

    const handleIndex = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!resourceData.trim()) return;

        setLoading(true);
        setError("");
        setIndexedResource(null);

        try {
            const result = await indexNewResource(resourceData);
            setIndexedResource(result);
            setResourceData("");
        } catch (err) {
            setError("Failed to index the resource. Please try again.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Index New Resource</CardTitle>
                    <CardDescription>
                        Paste resource information from the library catalog or
                        database provider to index it.
                    </CardDescription>
                </CardHeader>
                <form onSubmit={handleIndex}>
                    <CardContent>
                        <Textarea
                            placeholder="Paste resource information here (name, description, subjects, content types, etc.)"
                            value={resourceData}
                            onChange={(e) => setResourceData(e.target.value)}
                            rows={8}
                            className="resize-none"
                        />
                    </CardContent>
                    <CardFooter className="flex justify-end">
                        <Button
                            type="submit"
                            disabled={loading || !resourceData.trim()}
                        >
                            {loading ? (
                                <Loader2 className="h-4 w-4 animate-spin mr-2" />
                            ) : (
                                <Plus className="h-4 w-4 mr-2" />
                            )}
                            {loading ? "Indexing..." : "Index Resource"}
                        </Button>
                    </CardFooter>
                </form>
            </Card>

            {error && (
                <Alert variant="destructive">
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}

            {indexedResource && (
                <Card className="bg-green-50 border-green-200">
                    <CardHeader>
                        <CardTitle className="text-green-800">
                            Resource Indexed Successfully
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            <p>
                                <strong>Name:</strong> {indexedResource.name}
                            </p>
                            <p>
                                <strong>Description:</strong>{" "}
                                {indexedResource.description}
                            </p>
                            <p>
                                <strong>Type:</strong>
                            </p>
                            <p>
                                <strong>Subjects:</strong>{" "}
                                {indexedResource.subjects.join(", ")}
                            </p>
                            <p>
                                <strong>Content Types:</strong>{" "}
                                {indexedResource.contentTypes.join(", ")}
                            </p>
                            {indexedResource.accessNote && (
                                <p>
                                    <strong>Access Note:</strong>{" "}
                                    {indexedResource.accessNote}
                                </p>
                            )}
                        </div>
                    </CardContent>
                    <CardFooter>
                        <p className="text-sm text-green-700">
                            This resource has been indexed and can now be found
                            through the resource finder.
                        </p>
                    </CardFooter>
                </Card>
            )}
        </div>
    );
}
