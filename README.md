# BYU-Idaho Library Resource Finder

_AI-powered academic resource discovery platform_

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/matjmiles-2109s-projects/v0-academic-library-search)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/KFJx5tMnqB3)

## Overview

The BYU-Idaho Library Resource Finder is an intelligent web application that helps students and researchers discover the most relevant academic databases and resources for their research needs using natural language queries. Built with Next.js and powered by Google's Gemini AI, this tool makes academic research more accessible and efficient.

### Key Features

-   **Natural Language Search**: Ask questions in plain English to find relevant academic resources
-   **AI-Powered Recommendations**: Leverages Google Gemini AI to understand query intent and match resources
-   **Comprehensive Database**: Includes access to 200+ academic databases and library resources
-   **Smart Filtering**: Filter results by content type, subject area, and access level
-   **Relevance Scoring**: Results are ranked by relevance with explanations for why resources match your query
-   **Responsive Design**: Optimized for desktop and mobile devices
-   **Real-time Search**: Fast, responsive search experience with loading states

### 🛠️ Tech Stack

-   **Frontend**: Next.js 15.3, React 18, TypeScript
-   **Styling**: Tailwind CSS with custom component library
-   **UI Components**: Radix UI primitives with custom styling
-   **AI Integration**: Google Generative AI (Gemini)
-   **Analytics**: Vercel Analytics
-   **Deployment**: Vercel

## Getting Started

### Prerequisites

Before running this project locally, make sure you have:

-   [Node.js](https://nodejs.org/) (version 18 or higher)
-   [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), or [pnpm](https://pnpm.io/)
-   A Google AI API key (for Gemini integration)

### Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/mckaymaclab/vercel-dbsearch-hn.git
    cd vercel-dbsearch-hn
    ```

2. **Install dependencies**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3. **Set up environment variables**

    Create a `.env` file in the root directory and add your Google AI API key:

    ```env
    GEMINI_API_KEY=your_google_ai_api_key_here
    ```

    To get a Google AI API key:

    - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
    - Sign in with your Google account
    - Create a new API key
    - Copy the key to your `.env` file

4. **Run the development server**

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

5. **Open your browser**

    Navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

### Building for Production

To create a production build:

```bash
npm run build
npm run start
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components (buttons, cards, etc.)
│   ├── library-header.tsx # Header component
│   └── resource-finder.tsx # Main search interface
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and data
│   ├── resource-ai.ts    # AI integration logic
│   ├── resource-database.ts # Resource data management
│   └── utils.ts          # General utilities
├── public/               # Static assets
├── styles/               # Additional stylesheets
└── types/                # TypeScript type definitions
```

## Configuration

### Environment Variables

| Variable         | Description              | Required |
| ---------------- | ------------------------ | -------- |
| `GEMINI_API_KEY` | Google Gemini AI API key | Yes      |

### Customization

To customize the application:

1. **Update the resource database**: Modify `lib/library-resources-database.ts` to add or update library resources
2. **Styling**: Update Tailwind configuration in `tailwind.config.ts`
3. **UI Components**: Customize components in the `components/ui/` directory
4. **AI Prompts**: Modify the AI prompt logic in `lib/resource-ai.ts`

## Available Scripts

-   `npm run dev` - Start development server with Turbopack
-   `npm run build` - Create production build
-   `npm run start` - Start production server
-   `npm run lint` - Run ESLint
-   `npm run check:urls` - Validate that resource URLs in `lib/resource-database.ts` contain no spaced domain segments or malformed host patterns

### URL Integrity Check

Run the automated URL spacing/format validator anytime you modify `lib/resource-database.ts`:

```bash
npm run check:urls
```

It fails (non‑zero exit) if it detects:

- Spaces inside domain segments (e.g. `link. gale. com`)
- Spaced proxy host variants (e.g. `byui . idm` or `oclc . org`)
- `%20` inside the hostname portion
- `http(s)://www.` followed by a space after the dot

All current URLs pass this check. Add new patterns to `scripts/check-resource-urls.cjs` if future anomalies arise.

## Deployment

This project is automatically deployed on Vercel. The live application is available at:

**[mckay-db-search.vercel.app](https://mckay-db-search.vercel.app/)**

### Deploy Your Own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mckaymaclab/vercel-dbsearch-hn)

Make sure to add your `GEMINI_API_KEY` environment variable in the Vercel dashboard.

## License

This project is private and proprietary to BYU-Idaho.
