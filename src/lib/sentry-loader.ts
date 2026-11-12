/**
 * The only script on the page. It keeps Sentry off the critical path:
 * the SDK is fetched after the page goes idle, or right away if an error
 * happens before that, so the error still gets reported.
 */
type CaptureException = (exception: unknown) => unknown

let sentry: Promise<CaptureException | undefined> | undefined
const earlyErrors = new AbortController()

function loadSentry() {
  sentry ??= import('./sentry-client').then(
    ({ initSentry }) => {
      // Sentry's own global handlers take over from here.
      earlyErrors.abort()
      return initSentry()
    },
    // Chunk blocked or offline: monitoring is best effort, never a page error.
    () => undefined,
  )
  return sentry
}

function captureEarly(exception: unknown) {
  void loadSentry().then((capture) => capture?.(exception))
}

window.addEventListener('error', (event) => captureEarly(event.error ?? event.message), {
  once: true,
  signal: earlyErrors.signal,
})
window.addEventListener('unhandledrejection', (event) => captureEarly(event.reason), {
  once: true,
  signal: earlyErrors.signal,
})

setTimeout(() => {
  const start = () => void loadSentry()

  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(start, { timeout: 5000 })
  } else {
    setTimeout(start, 3000)
  }
}, 2000)
