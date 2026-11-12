interface ImportMetaEnv {
  /** Overrides the default DSN in src/lib/sentry-config.ts. */
  readonly PUBLIC_SENTRY_DSN?: string
}

/** `links@<version>+<UTC build time>`, injected by `vite.define` in astro.config.mjs. */
declare const __SENTRY_RELEASE__: string
