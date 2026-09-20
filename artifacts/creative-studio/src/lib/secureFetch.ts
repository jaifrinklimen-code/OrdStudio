import { supabase } from './supabase';

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
  let authToken = '';
  try {
    const { data } = await supabase.auth.getSession();
    authToken = data?.session?.access_token || '';
  } catch {
    // No session available — proceed without auth
  }

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
