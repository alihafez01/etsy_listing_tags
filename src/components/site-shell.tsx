import Link from "next/link";
import { site } from "@/lib/site";

export function Mark() {
  return <svg aria-hidden="true" viewBox="0 0 32 32" fill="none" className="brand-mark"><rect width="32" height="32" rx="9" fill="currentColor"/><path d="M9 9h9l7 7-9 9-7-7V9Z" stroke="#fffdf7" strokeWidth="1.5" strokeLinejoin="round"/><circle cx="13.5" cy="13.5" r="1.5" fill="#fffdf7"/></svg>;
}
export function Header() {
  return <header className="site-header"><div className="container header-inner"><Link href="/" className="brand" aria-label="Listing Tag Viewer home"><Mark/><span>Listing Tag Viewer<span className="brand-period">.</span></span></Link><nav aria-label="Main navigation"><Link href="/#how-it-works">How it works</Link><Link href="/#scope">Project scope</Link><Link href="/#faq">FAQ</Link><Link href="/#contact">Contact</Link></nav><span className="status-pill"><span className="status-dot"/>In development</span></div></header>;
}
export function ContactLink({ children }: { children?: React.ReactNode }) {
  return <a href={`mailto:${site.email}`} className="email-link">{children || site.email}<span aria-hidden="true">↗</span></a>;
}
export function Footer() {
  return <footer className="site-footer"><div className="container"><div className="footer-top"><Link className="brand" href="/"><Mark/>Listing Tag Viewer</Link><nav aria-label="Footer navigation"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/#contact">Contact</Link></nav><span className="copyright">© {new Date().getFullYear()} Listing Tag Viewer</span></div><div className="footer-bottom"><p>The term &apos;Etsy&apos; is a trademark of Etsy, Inc. This Application uses Etsy&apos;s API, but is not endorsed or certified by Etsy.</p><p>Planned integration; Etsy API access is pending. This website does not currently call the Etsy API.</p></div></div></footer>;
}

