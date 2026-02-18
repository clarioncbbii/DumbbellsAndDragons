import "./terms.css";

export default function TermsPage() {
  return (
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
    </main>
  );
}
