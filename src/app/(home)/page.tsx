import Link from 'next/link';
import { ArrowRightIcon, BookOpenIcon, PlugIcon, TerminalIcon } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-6 py-24">
      {/* Brand-blue dot field — same vibe as the marketing site */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            'radial-gradient(oklch(0.50 0.20 260 / 0.18) 1.4px, transparent 1.6px)',
          backgroundSize: '28px 28px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 45%, black, transparent 80%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 60% at 50% 45%, black, transparent 80%)',
        }}
      />

      <div className="mb-3 inline-flex items-center gap-2 rounded-md border bg-fd-card px-2.5 py-1 font-mono text-xs text-fd-muted-foreground">
        <span className="inline-block size-1.5 rounded-full bg-fd-primary" />
        Documentation
      </div>

      <h1 className="max-w-[20ch] text-center text-4xl font-medium tracking-[-0.04em] sm:text-5xl md:text-6xl">
        Pattern research,
        <br />
        in the open.
      </h1>

      <p className="mt-6 max-w-[60ch] text-center text-base text-fd-muted-foreground sm:text-lg">
        API reference, MCP integrations, and tutorials for buzzabout — pattern
        research across real conversations.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/getting-started/quickstart"
          className="inline-flex h-11 items-center gap-2 rounded-xl bg-fd-primary px-5 text-sm font-medium text-fd-primary-foreground transition hover:opacity-90"
        >
          Quickstart
          <ArrowRightIcon className="size-4" />
        </Link>
        <Link
          href="/getting-started/quickstart"
          className="inline-flex h-11 items-center gap-2 rounded-xl border bg-fd-card px-5 text-sm font-medium hover:bg-fd-accent"
        >
          Browse docs
        </Link>
      </div>

      <div className="mt-16 grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
        <Link
          href="/tutorials/first-analysis"
          className="group flex flex-col gap-2 rounded-2xl border bg-fd-card p-5 transition hover:border-fd-primary/40 hover:shadow-md"
        >
          <BookOpenIcon className="size-5 text-fd-primary" />
          <h3 className="font-medium">Tutorials</h3>
          <p className="text-sm text-fd-muted-foreground">
            Task-shaped walkthroughs from first analysis to daily ops.
          </p>
        </Link>
        <Link
          href="/mcp/overview"
          className="group flex flex-col gap-2 rounded-2xl border bg-fd-card p-5 transition hover:border-fd-primary/40 hover:shadow-md"
        >
          <PlugIcon className="size-5 text-fd-primary" />
          <h3 className="font-medium">MCP</h3>
          <p className="text-sm text-fd-muted-foreground">
            Plug buzzabout into Claude, ChatGPT, and other MCP clients.
          </p>
        </Link>
        <Link
          href="/api/overview"
          className="group flex flex-col gap-2 rounded-2xl border bg-fd-card p-5 transition hover:border-fd-primary/40 hover:shadow-md"
        >
          <TerminalIcon className="size-5 text-fd-primary" />
          <h3 className="font-medium">API reference</h3>
          <p className="text-sm text-fd-muted-foreground">
            REST endpoints, authentication, and rate limits.
          </p>
        </Link>
      </div>
    </main>
  );
}
