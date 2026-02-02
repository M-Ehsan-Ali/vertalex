import { getContentNodeBySlug } from "@/data";
import { draftMode } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

/** Preview is disabled when using local data. Returns 501. */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const id = searchParams.get("id");

  if (secret !== process.env.HEADLESS_SECRET || !id) {
    return new Response("Invalid token", { status: 401 });
  }

  // Optional: allow “preview” by redirecting to the local content
  const contentNode = getContentNodeBySlug(id, "DATABASE_ID");
  if (contentNode) {
    (await draftMode()).enable();
    const response = NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_BASE_URL}${contentNode.uri}`
    );
    return response;
  }

  return new Response("Preview not available with local data", { status: 501 });
}
