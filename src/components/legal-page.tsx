import Link from "next/link";
import { ContactLink } from "./site-shell";
export function LegalPage({ title, intro, children }: { title: string; intro: string; children: React.ReactNode }) {
  return <main id="main" className="container legal"><Link href="/" className="text-link">← Back to the project</Link><p className="eyebrow">PROJECT INFORMATION</p><h1>{title}</h1><p className="legal-intro">{intro}</p><div className="legal-content">{children}<section><h2>Contact</h2><p>For questions about this project, email the developer.</p><ContactLink/></section></div><p className="legal-note">Current scope: a public overview. Etsy API access is pending.</p></main>;
}
