import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ResourceFinder } from "../components/resource-finder";

const makeResults = (n: number) =>
  Array.from({ length: n }, (_, i) => ({
    id: `id${i}`,
    name: `Resource ${i}`,
    description: `Description ${i}`,
    url: `https://example.com/${i}`,
    relevanceScore: 100 - i,
    matchReason: "",
  }));

describe("ResourceFinder pagination", () => {
  it("shows only 5 results on first page and paginates the rest", () => {
    const testResults = makeResults(13);
    render(<ResourceFinder initialResults={testResults} />);
    
    // Should show 5 results on first page
    expect(screen.getAllByText(/Resource \d/).length).toBe(5);
    expect(screen.getByText("Resource 0")).toBeInTheDocument();
    expect(screen.getByText("Resource 4")).toBeInTheDocument();
    expect(screen.queryByText("Resource 5")).not.toBeInTheDocument();
    
    // Should show page buttons
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    
    // Click page 2
    fireEvent.click(screen.getByText("2"));
    
    // Should show next 5 results (Resources 5-9)
    expect(screen.getAllByText(/Resource \d/).length).toBe(5);
    expect(screen.getByText("Resource 5")).toBeInTheDocument();
    expect(screen.getByText("Resource 9")).toBeInTheDocument();
    expect(screen.queryByText("Resource 4")).not.toBeInTheDocument();
    expect(screen.queryByText("Resource 10")).not.toBeInTheDocument();
    
    // Click page 3
    fireEvent.click(screen.getByText("3"));
    
    // Should show last 3 results (Resources 10-12)
    expect(screen.getAllByText(/Resource \d/).length).toBe(3);
    expect(screen.getByText("Resource 10")).toBeInTheDocument();
    expect(screen.getByText("Resource 12")).toBeInTheDocument();
    expect(screen.queryByText("Resource 9")).not.toBeInTheDocument();
  });

  it("shows only one page if <= 5 results", () => {
    const testResults = makeResults(4);
    render(<ResourceFinder initialResults={testResults} />);
    
    // Should show all 4 results
    expect(screen.getAllByText(/Resource \d/).length).toBe(4);
    expect(screen.getByText("Resource 0")).toBeInTheDocument();
    expect(screen.getByText("Resource 3")).toBeInTheDocument();
    
    // Should only show page 1, no pagination controls for single page
    expect(screen.queryByText("1")).not.toBeInTheDocument();
    expect(screen.queryByText("2")).not.toBeInTheDocument();
    expect(screen.queryByText("Next")).not.toBeInTheDocument();
  });

  it("shows exactly 5 results with no pagination when total is 5", () => {
    const testResults = makeResults(5);
    render(<ResourceFinder initialResults={testResults} />);
    
    // Should show all 5 results
    expect(screen.getAllByText(/Resource \d/).length).toBe(5);
    expect(screen.getByText("Resource 0")).toBeInTheDocument();
    expect(screen.getByText("Resource 4")).toBeInTheDocument();
    
    // Should not show pagination controls
    expect(screen.queryByText("1")).not.toBeInTheDocument();
    expect(screen.queryByText("2")).not.toBeInTheDocument();
    expect(screen.queryByText("Next")).not.toBeInTheDocument();
  });

  it("shows Next button and handles navigation correctly", () => {
    const testResults = makeResults(8);
    render(<ResourceFinder initialResults={testResults} />);
    
    // Should show Next button on page 1
    expect(screen.getByText("Next")).toBeInTheDocument();
    
    // Click Next
    fireEvent.click(screen.getByText("Next"));
    
    // Should be on page 2 now, showing Resources 5-7
    expect(screen.getAllByText(/Resource \d/).length).toBe(3);
    expect(screen.getByText("Resource 5")).toBeInTheDocument();
    expect(screen.getByText("Resource 7")).toBeInTheDocument();
    
    // Next button should not be visible on last page
    expect(screen.queryByText("Next")).not.toBeInTheDocument();
  });

  it("works in both list and detailed views", () => {
    const testResults = makeResults(8);
    render(<ResourceFinder initialResults={testResults} />);
    
    // Test detailed view (default)
    expect(screen.getAllByText(/Resource \d/).length).toBe(5);
    expect(screen.getByText("Next")).toBeInTheDocument();
    
    // Switch to list view
    fireEvent.click(screen.getByText("List View"));
    
    // Should still show 5 results with pagination
    expect(screen.getAllByText(/Resource \d/).length).toBe(5);
    expect(screen.getByText("Next")).toBeInTheDocument();
    
    // Navigate to page 2 in list view
    fireEvent.click(screen.getByText("Next"));
    
    // Should show remaining 3 results
    expect(screen.getAllByText(/Resource \d/).length).toBe(3);
  });
});
