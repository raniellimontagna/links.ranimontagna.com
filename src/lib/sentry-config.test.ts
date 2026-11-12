import { describe, expect, it } from 'vitest'
import {
  SENTRY_DSN,
  buildSentryRelease,
  getSentryOptions,
  resolveSentryDsn,
  resolveSentryEnvironment,
} from './sentry-config'

describe('buildSentryRelease', () => {
  it('joins the package version and the UTC build minute', () => {
    const buildTime = new Date(Date.UTC(2026, 10, 12, 13, 43, 59))
    expect(buildSentryRelease('0.0.1', buildTime)).toBe('links@0.0.1+202611121343')
  })

  it('zero-pads every part and ignores the local time zone', () => {
    const buildTime = new Date('2027-01-02T03:04:05.678-03:00')
    expect(buildSentryRelease('1.2.3', buildTime)).toBe('links@1.2.3+202701020604')
  })
})

describe('resolveSentryEnvironment', () => {
  it('maps production builds to production and everything else to development', () => {
    expect(resolveSentryEnvironment(true)).toBe('production')
    expect(resolveSentryEnvironment(false)).toBe('development')
  })
})

describe('resolveSentryDsn', () => {
  it('uses the project DSN unless an override is set', () => {
    expect(resolveSentryDsn()).toBe(SENTRY_DSN)
    expect(resolveSentryDsn('  ')).toBe(SENTRY_DSN)
    expect(resolveSentryDsn(' https://key@example.ingest.sentry.io/1 ')).toBe(
      'https://key@example.ingest.sentry.io/1',
    )
  })

  it('points at the links-ranimontagna project', () => {
    expect(SENTRY_DSN).toMatch(
      /^https:\/\/[0-9a-f]+@o1065447\.ingest\.us\.sentry\.io\/4512419786457088$/,
    )
  })
})

describe('getSentryOptions', () => {
  const options = getSentryOptions({ isProduction: true, release: 'links@0.0.1+202611121343' })

  it('samples 20% of traces and sends no PII', () => {
    expect(options).toMatchObject({
      dsn: SENTRY_DSN,
      environment: 'production',
      release: 'links@0.0.1+202611121343',
      tracesSampleRate: 0.2,
      sendDefaultPii: false,
    })
  })

  it('drops the benign ResizeObserver loop errors', () => {
    const ignored = (message: string) => options.ignoreErrors.some((pattern) => pattern.test(message))
    expect(ignored('ResizeObserver loop completed with undelivered notifications.')).toBe(true)
    expect(ignored('ResizeObserver loop limit exceeded')).toBe(true)
    expect(ignored('TypeError: x is undefined')).toBe(false)
  })
})
