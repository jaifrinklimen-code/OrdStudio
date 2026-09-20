/**
 * Returns the application base URL for auth redirects.
 *
 * Priority:
 *  1. VITE_APP_URL env var (set in Vercel environment settings)
 *  2. window.location.origin (works correctly at runtime on any host)
 *
 * This ensures production auth emails / OAuth callbacks always point to
 * the deployed Vercel URL rather than localhost.
 */
export function getAppUrl(): string {
  const envUrl = import.meta.env.VITE_APP_URL;
  if (envUrl && typeof envUrl === 'string' && envUrl.startsWith('http')) {
    // Strip trailing slash for consistency
    return envUrl.replace(/\/+$/, '');
  }
  return window.location.origin;
}
