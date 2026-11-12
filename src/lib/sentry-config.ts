/**
 * Sentry settings shared by the build (release name) and the lazy browser client.
 * Pure and dependency-free, so astro.config.mjs and the tests can import it.
 */

/** Public by design: a DSN only lets a client send events to this project. */
export const SENTRY_DSN =
  'https://0a73e3d37224e4320072d4b2abb4f95e@o1065447.ingest.us.sentry.io/4512419786457088'

export const SENTRY_TRACES_SAMPLE_RATE = 0.2

export type SentryEnvironment = 'production' | 'development'

export interface SentryOptionsInput {
  /** Usually `import.meta.env.PUBLIC_SENTRY_DSN`; blank falls back to the default DSN. */
  dsnOverride?: string
  /** Usually `import.meta.env.PROD`. */
  isProduction: boolean
  release: string
}

export interface SentryBaseOptions {
  dsn: string
  environment: SentryEnvironment
  release: string
  tracesSampleRate: number
  sendDefaultPii: false
  ignoreErrors: RegExp[]
}

export function resolveSentryDsn(override?: string): string {
  return override?.trim() || SENTRY_DSN
}

export function resolveSentryEnvironment(isProduction: boolean): SentryEnvironment {
  return isProduction ? 'production' : 'development'
}

/** `links@<version>+<yyyyMMddHHmm in UTC>`, e.g. `links@0.0.1+202611121343`. */
export function buildSentryRelease(version: string, buildTime: Date): string {
  const stamp = buildTime.toISOString().slice(0, 16).replace(/[-T:]/g, '')
  return `links@${version}+${stamp}`
}

/** Everything `Sentry.init` needs except the integrations, which come from the SDK. */
export function getSentryOptions({
  dsnOverride,
  isProduction,
  release,
}: SentryOptionsInput): SentryBaseOptions {
  return {
    dsn: resolveSentryDsn(dsnOverride),
    environment: resolveSentryEnvironment(isProduction),
    release,
    tracesSampleRate: SENTRY_TRACES_SAMPLE_RATE,
    sendDefaultPii: false,
    ignoreErrors: [/ResizeObserver loop/],
  }
}
