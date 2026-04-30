'use client';

import { useEffect } from 'react';

/**
 * Agentation annotation toolbar — auto-mounted on staging only.
 *
 * Staging = any *.vercel.app hostname. The production custom domain
 * (e.g. docs.buzzabout.ai) skips this entirely so end users never see
 * the design-feedback toolbar.
 *
 * The Agentation client and its React peer deps are loaded from esm.sh
 * via a runtime <script type="module"> rather than `import()` so Next.js
 * doesn't try to bundle remote URLs at build time. The toolbar runs in
 * its own React root (separate from the Next.js / Fumadocs tree) and
 * posts session events to a local Agentation listener at
 * http://localhost:4747 — same endpoint the landing-page repo uses.
 */
export function AgentationStaging() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!window.location.hostname.endsWith('.vercel.app')) return;
    if (document.getElementById('__agentation_loader')) return;

    const s = document.createElement('script');
    s.id = '__agentation_loader';
    s.type = 'module';
    s.textContent = `
      (async () => {
        const [reactMod, { createRoot }, { Agentation }] = await Promise.all([
          import('https://esm.sh/react@18.3.1'),
          import('https://esm.sh/react-dom@18.3.1/client'),
          import('https://esm.sh/agentation@3?deps=react@18.3.1,react-dom@18.3.1&bundle'),
        ]);
        const React = reactMod.default || reactMod;
        const mount = document.createElement('div');
        mount.id = '__agentation_root__';
        document.body.appendChild(mount);
        createRoot(mount).render(
          React.createElement(Agentation, {
            endpoint: 'http://localhost:4747',
            onSessionCreated: (id) => console.log('[agentation] session:', id),
          }),
        );
      })().catch((err) => console.error('[agentation] failed to mount:', err));
    `;
    document.body.appendChild(s);
  }, []);

  return null;
}
