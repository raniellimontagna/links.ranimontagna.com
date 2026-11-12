// @ts-check
import { defineConfig } from 'astro/config';
import pkg from './package.json' with { type: 'json' };
import { buildSentryRelease } from './src/lib/sentry-config';

// Computed once per build, e.g. links@0.0.1+202611121343.
const sentryRelease = buildSentryRelease(pkg.version, new Date());

// https://astro.build/config
export default defineConfig({
  vite: {
    define: {
      __SENTRY_RELEASE__: JSON.stringify(sentryRelease),
    },
  },
});
