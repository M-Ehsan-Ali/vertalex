import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/** No external redirects – simple Next.js with local data only. */
export function middleware(_request: NextRequest) {
  return NextResponse.next();
}
