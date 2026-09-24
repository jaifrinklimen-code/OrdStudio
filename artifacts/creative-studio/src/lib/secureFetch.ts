let cachedAuthToken = '';
let tokenCachedAt = 0;
const TOKEN_CACHE_TTL = 5000; // 5 seconds
let authSubscribed = false;

async function getCachedAuthToken(): Promise<string> {
  const now = Date.now();
  if (cachedAuthToken && (now - tokenCachedAt < TOKEN_CACHE_TTL)) {
    return cachedAuthToken;
  }
  try {
    const { supabase } = await import('./supabase');
    if (!authSubscribed) {
      authSubscribed = true;
      try {
        supabase.auth.onAuthStateChange((_event, session) => {
          cachedAuthToken = session?.access_token || '';
          tokenCachedAt = Date.now();
        });
      } catch {}
    }
    const { data } = await supabase.auth.getSession();
    cachedAuthToken = data?.session?.access_token || '';
    tokenCachedAt = now;
    return cachedAuthToken;
  } catch {
    return '';
  }
}

/**
 * Secure fetch wrapper that automatically includes:
 * - X-Requested-With header (CSRF protection)
 * - Authorization Bearer token from Supabase session
 * - Content-Type for JSON requests
 *
 * Use this instead of raw `fetch()` for all API calls.
 */
export async function secureFetch(
  url: string,
  options: RequestInit = {}
): Promise<Response> {
  // Get the current Supabase session token
  const authToken = await getCachedAuthToken();

  const headers = new Headers(options.headers || {});

  // Always set CSRF protection header
  headers.set('X-Requested-With', 'XMLHttpRequest');

  // Set auth header if we have a token
  if (authToken) {
    headers.set('Authorization', `Bearer ${authToken}`);
  }

  // Set Content-Type for JSON bodies if not already set
  if (options.body && typeof options.body === 'string' && !headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }

  return fetch(url, {
    ...options,
    headers,
    credentials: 'same-origin', // Don't send cookies cross-origin
  });
}

/**
 * Convenience wrapper for GET requests
 */
export function secureGet(url: string): Promise<Response> {
  return secureFetch(url, { method: 'GET' });
}

/**
 * Convenience wrapper for POST requests with JSON body
 */
export function securePost(url: string, body: unknown): Promise<Response> {
  return secureFetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
}
