
import SignInBar from "@/components/SignInBar/SignInBar";
import "./privacy.css";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Dumbbells & Dragon",
  description:
    "Learn how Dumbbells & Dragon collects, stores, and uses your personal data in compliance with UK GDPR. Protect your privacy while training and adventuring.",
  keywords: [
    "Dumbbells & Dragon",
    "privacy policy",
    "data protection",
    "UK GDPR",
    "fitness RPG",
  ],
  authors: [{ name: "Dumbbells & Dragon Team" }],
  creator: "Dumbbells & Dragon",
  publisher: "Dumbbells & Dragon Studios",
  openGraph: {
    type: "website",
    url: "https://dumbbells-and-dragons.vercel.app/privacy",
    title: "Privacy Policy | Dumbbells & Dragon",
    description:
      "Understand how your data is used and protected while using Dumbbells & Dragon's gamified fitness app.",
    siteName: "Dumbbells & Dragon",
    images: [],
  },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <><SignInBar />
    <main className="legal-wrapper">
      <div className="legal-card">
        <strong>
          <h1>PRIVACY POLICY</h1>
        </strong>
        <p>
          Dumbbells & Dragons respects your privacy and complies with the UK
          GDPR.
        </p>
        <strong>
          <h2>INFORMATION WE COLLECT</h2>
        </strong>

        <p>
          We may collect your name, email address, and fitness progress data
          when you use the app.
        </p>
        <strong>
          <h2>HOW WE USE YOUR DATA</h2>
        </strong>
        <p>
          Your data is used to operate the app, track progress, and improve the
          experience. We do not sell your data.
        </p>
        <strong>
          <h2>DATA STORAGE</h2>
        </strong>

        <p>
          Data is stored securely and only retained as long as necessary for
          service provision.
        </p>
        <strong>
          <h2>YOUR RIGHTS</h2>
        </strong>

        <p>
          You have the right to access, correct, or request deletion of your
          personal data under UK GDPR.
        </p>
        <strong>
          <h2>CONTACT</h2>
        </strong>

        <p>
          For privacy questions, contact{" "}
          <Link href="mailto:privacy@dumbbellsanddragons.com">
            privacy@dumbbellsanddragons.com
          </Link>
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
