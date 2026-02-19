import Link from "next/link";
import SignInBar from "@/components/SignInBar/SignInBar";
import "./terms.css";

export const metadata = {
  title: "Terms of Service | Dumbbells & Dragon",
  description:
    "Read the official Terms of Service for Dumbbells & Dragon, your UK-based gamified fitness RPG. Understand your rights and responsibilities while using the app.",
  keywords: [
    "Dumbbells & Dragon",
    "terms of service",
    "UK fitness app",
    "legal",
    "RPG workouts",
  ],
  authors: [{ name: "Dumbbells & Dragon Team" }],
  creator: "Dumbbells & Dragon",
  publisher: "Dumbbells & Dragon Studios",
  openGraph: {
    type: "website",
    url: "https://dumbbells-and-dragons.vercel.app/terms",
    title: "Terms of Service | Dumbbells & Dragon",
    description:
      "View the official Terms of Service for Dumbbells & Dragon. Ensure you know your responsibilities while completing quests and training.",
    siteName: "Dumbbells & Dragon",
    images: [],
  },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <><SignInBar />
    <main className="legal-wrapper">
      <div className="legal-card">
        <strong>
          <h1>TERMS OF SERVICE</h1>
        </strong>

        <p>
          Dumbbells & Dragon is a gamified fitness application operated in the
          United Kingdom. By using this app, you agree to the following terms.
        </p>
        <strong>
          <h2>FITNESS DISCLAIMER</h2>
        </strong>

        <p>
          Dumbbells & Dragon provides general fitness guidance only. It is not a
          substitute for professional medical advice. You are responsible for
          ensuring you are physically fit to participate.
        </p>
        <strong>
          {" "}
          <h2>USER RESPONSIBILITIES</h2>
        </strong>

        <p>
          You agree to use the app safely, honestly, and in accordance with UK
          law. You must not misuse the platform or submit false information.
        </p>
        <strong>
          {" "}
          <h2>ACCOUNTS & PROGRESS</h2>
        </strong>

        <p>
          Progress tracking and rewards are provided for motivation only and
          have no real-world monetary value.
        </p>
        <strong>
          <h2>LIMITATION OF LIABILITY</h2>
        </strong>

        <p>
          To the fullest extent permitted by UK law, Dumbbells & Dragon shall
          not be liable for injury, loss, or damages arising from use of the
          app.
        </p>
        <strong>
          <h2>CHANGES</h2>
        </strong>

        <p>
          We reserve the right to update these terms without notice. Continued
          use constitutes acceptance of the revised terms.
        </p>
        <br />
        <i>
          <p className="legal-note">
            Last updated: {new Date().toLocaleDateString("en-GB")}
          </p>
        </i>
      </div>
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="footer-logo-icon">⚔️</div>
                <span className="footer-logo-text">Dumbbells & Dragons</span>
              </div>
              <p className="footer-tagline">
                Level up your fitness with RPG mechanics
              </p>
            </div>
            <div className="footer-section">
              <h4 className="footer-heading">Product</h4>
              <ul className="footer-links">
                <li>
                  <Link href="#">Features</Link>
                </li>
                <li>
                  <Link href="#">Classes</Link>
                </li>
                <li>
                  <Link href="#">Pricing</Link>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-links">
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="#">Blog</Link>
                </li>
                <li>
                  <Link href="#">Careers</Link>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="footer-heading">Legal</h4>
              <ul className="footer-links">
                <li>
                  <Link href="/privacy">Privacy</Link>
                </li>
                <li>
                  <Link href="/terms">Terms</Link>
                </li>
                <li>
                  <Link href="/contact-us">Contact us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              &copy; 2026 Dumbbells & Dragons. All rights reserved. Built by
              warriors, for warriors.
            </p>
          </div>
        </div>
      </footer>
    </main></>
  );
}
