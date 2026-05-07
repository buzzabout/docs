import { NextRequest, NextResponse } from 'next/server';
import { isMarkdownPreferred, rewritePath } from 'fumadocs-core/negotiation';
import { docsContentRoute, docsRoute } from '@/lib/shared';

const { rewrite: rewriteDocs } = rewritePath(
  `${docsRoute}{/*path}`,
  `${docsContentRoute}{/*path}/content.md`,
);
const { rewrite: rewriteSuffix } = rewritePath(
  `${docsRoute}{/*path}.mdx`,
  `${docsContentRoute}{/*path}/content.md`,
);

// Paths that must never be rewritten as docs content even when the client
// prefers markdown — they are framework / image / llms / API routes.
const NON_DOC_PREFIXES = ['/api/', '/og/', '/llms.txt', '/llms-full.txt', '/llms.mdx/', '/_next/'];

function isNonDocPath(pathname: string): boolean {
  return NON_DOC_PREFIXES.some((p) => pathname === p.replace(/\/$/, '') || pathname.startsWith(p));
}

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (isNonDocPath(pathname)) {
    return NextResponse.next();
  }

  const result = rewriteSuffix(pathname);
  if (result) {
    return NextResponse.rewrite(new URL(result, request.nextUrl));
  }

  if (isMarkdownPreferred(request)) {
    const result = rewriteDocs(pathname);

    if (result) {
      return NextResponse.rewrite(new URL(result, request.nextUrl));
    }
  }

  return NextResponse.next();
}
