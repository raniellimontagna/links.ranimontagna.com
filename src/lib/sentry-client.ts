/**
 * The Sentry SDK itself. Only ever reached through the dynamic import in
 * sentry-loader.ts, so it ships as a separate chunk off the critical path.
 */
import { browserTracingIntegration, captureException, init } from '@sentry/browser'
import { getSentryOptions } from './sentry-config'

export function initSentry(): typeof captureException {
  init({
    ...getSentryOptions({
      dsnOverride: import.meta.env.PUBLIC_SENTRY_DSN,
      isProduction: import.meta.env.PROD,
      release: __SENTRY_RELEASE__,
    }),
    // Page load span plus web vitals (LCP, CLS, INP, TTFB). The SDK reads the
    // buffered performance entries, so a late init still reports the page load.
    integrations: [browserTracingIntegration()],
  })

  return captureException
}
