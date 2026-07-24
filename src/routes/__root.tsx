import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MouseGradient } from "@/components/MouseGradient";
import { DarkModeToggle } from "@/components/DarkModeToggle";

// JSON-LD Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Ruiqi He",
  "description": "Data Analytics undergraduate at Ohio State, specializing in Biomedical & Public Health Analytics. AI/ML researcher and hackathon winner building predictive models and interactive data visualizations.",
  "jobTitle": "Data Analytics Student",
  "url": "https://rickyhe2006.com",
  "email": "mailto:he.2497@buckeyemail.osu.edu",
  "sameAs": [
    "https://www.linkedin.com/in/rickyhe2006",
    "https://github.com/ricky-he2006",
    "https://devpost.com/rickyhe2006"
  ],
  "education": {
    "@type": "EducationEvent",
    "endDate": "2028-05",
    "name": "The Ohio State University",
    "degree": "B.S. Data Analytics",
    "description": "Biomedical & Public Health Analytics specialization, ASC Honors"
  }
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-gradient">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:opacity-90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            Try again
          </button>
          <a href="/" className="rounded-md border border-border px-4 py-2 text-sm">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Ruiqi He — Data Analytics @ Ohio State" },
      { name: "description", content: "Portfolio of Ruiqi (Ricky) He — data analytics, AI, and award-winning visualization work." },
      { name: "author", content: "Ruiqi He" },
      { property: "og:title", content: "Ruiqi He — Data Analytics @ Ohio State" },
      { property: "og:description", content: "Portfolio of Ruiqi (Ricky) He — data analytics, AI, and award-winning visualization work." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://rickyhe2006.com/og.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body className="min-h-screen bg-background text-foreground">
        <DarkModeToggle />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <MouseGradient />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
