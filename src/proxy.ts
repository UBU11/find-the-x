import { clerkMiddleware } from "@clerk/nextjs/server";

// Next.js 16 expects a named export 'proxy' or default export
export const proxy = clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes and the clerk proxy path
    '/(api|trpc|__clerk)(.*)',
  ],
};
