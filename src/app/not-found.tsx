import Link from "next/link";
export default function NotFound() { return <main id="main" className="container legal"><p className="eyebrow">404 / PAGE NOT FOUND</p><h1>A little off course.</h1><p className="legal-intro">This page doesn’t exist. The project overview is a good place to start.</p><Link href="/" className="button-primary">Back to the overview →</Link></main>; }
