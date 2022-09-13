import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const rewrites = [
  {
    source: '/api',
    destination: `${process.env.API_GATEWAY}/gql`,
  },
  {
    source: '/auth/github/callback',
    destination: `${process.env.API_GATEWAY}/auth/github/callback`,
  },
  {
    source: '/auth/github',
    destination: `${process.env.API_GATEWAY}/auth/github`,
  },
] as const


export function middleware(request: NextRequest) {
  const rewrite = rewrites.find(({ source }) =>
    request.nextUrl.pathname.startsWith(source),
  )

  if (rewrite) {
    return NextResponse.rewrite(new URL(rewrite.destination, request.url))
  }

  return NextResponse.next()
}
