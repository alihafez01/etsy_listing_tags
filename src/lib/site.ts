import type { Metadata } from "next";

const email = process.env.CONTACT_EMAIL?.trim() || "alihafeez146@gmail.com";
const rawUrl = process.env.SITE_URL?.trim();
function productionUrl() {
  if (!rawUrl) return undefined;
  const url = new URL(rawUrl);
  if (url.protocol !== "https:" || url.hostname === "localhost" || !url.hostname.includes(".") || /^(127\.|0\.)/.test(url.hostname) || /(^|\.)example\.(com|org|net)$/.test(url.hostname) || url.username || url.password || url.pathname !== "/" || url.search || url.hash) {
    throw new Error("SITE_URL must be your real HTTPS production origin without a path, query, or credentials.");
  }
  return url.origin;
}
export const site = { name: "Listing Tag Viewer", email, url: productionUrl() };
export function pageMetadata(title: string, description: string, path = "/"): Metadata {
  const url = site.url ? new URL(path, site.url).href : undefined;
  return { title, description, ...(url ? { alternates: { canonical: url } } : {}), openGraph: { title, description, siteName: site.name, type: "website", locale: "en_US", ...(url ? { url } : {}) }, twitter: { card: "summary", title, description } };
}
