import { NextResponse } from 'next/server';

export function middleware(req: any) {
  const url = req.nextUrl.clone();
  const host = req.headers.get('host');

  const { pathname } = req.nextUrl;

  const trimmedHost = host
    .replace(/^www\./, '')
    .replace(`.localhost:3000`, '')
    .replace(`localhost:3000`, '');

  if (!pathname.includes('.') && !pathname.startsWith('/api') && !pathname.includes('/_next/image')) {
    if (trimmedHost.length > 0) {
      url.pathname = `/_sites/${trimmedHost}`;
      return NextResponse.rewrite(url);
    }
  }
}
