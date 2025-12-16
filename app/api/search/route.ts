import { NextRequest, NextResponse } from 'next/server';
import { findDatabaseResources } from '@/lib/resource-ai';

export async function POST(request: NextRequest) {
  try {
    const { query, searchType } = await request.json();
    
    if (!query || !query.trim()) {
      return NextResponse.json(
        { error: 'Query is required' },
        { status: 400 }
      );
    }

    const results = await findDatabaseResources(query.trim(), searchType);
    
    return NextResponse.json({ results });
  } catch (error) {
    console.error('Search API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}