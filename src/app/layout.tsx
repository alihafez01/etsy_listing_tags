import type { Metadata } from "next";
import { Header, Footer } from "@/components/site-shell";
import "./globals.css";

export const metadata: Metadata = { title: { default: "Listing Tag Viewer — A personal research project", template: "%s | Listing Tag Viewer" } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a href="#main" className="skip-link">Skip to content</a><Header/>{children}<Footer/></body></html>;
}
