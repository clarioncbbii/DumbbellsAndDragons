import "./privacy.css";
import Link from "next/link";

export default function PrivacyPage() {
  return (
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

        <p className="legal-note">
          Last updated: {new Date().toLocaleDateString("en-GB")}
        </p>
      </div>
    </main>
  );
}
