import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="flex items-center gap-2 font-medium tracking-tight">
          <span
            aria-hidden
            className="inline-flex items-center justify-center w-5 h-5 rounded-[5px] text-white text-[10px] font-semibold"
            style={{ background: 'oklch(0.50 0.20 260)' }}
          >
            b
          </span>
          {appName}
        </span>
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
    links: [
      { text: 'Marketing site', url: 'https://buzzabout.ai/' },
      { text: 'Pricing', url: 'https://buzzabout.ai/Pricing.html' },
    ],
  };
}
