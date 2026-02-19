import Link from "next/link";
import "./contact.css";

export const metadata = {
  title: "Contact Us | Dumbbells & Dragon",
  description:
    "Reach out to the Dumbbells & Dragon team. Ask questions, report issues, or get help with your fitness quests and RPG adventures.",
  keywords: [
    "Dumbbells & Dragon",
    "contact",
    "help",
    "assistance",
    "aid",
    "support",
    "fitness RPG",
    "D&D workouts",
  ],
  authors: [{ name: "Dumbbells & Dragon Team" }],
  creator: "Dumbbells & Dragon",
  publisher: "Dumbbells & Dragon Studios",
  openGraph: {
    type: "website",
    url: "https://dumbbells-and-dragons.vercel.app/contact",
    title: "Contact Us | Dumbbells & Dragon",
    description:
      "Need help with your fitness quests? Contact the Dumbbells & Dragon team for support or guidance.",
    siteName: "Dumbbells & Dragon",
    images: [],
  },
  robots: { index: true, follow: true },
};

export default function ContactPage() {
  return (
    <main className="contact-wrapper">
      <div className="contact-card">
        <strong>
          <h1 className="contact-title">CONTACT THE GUILD ⚔️</h1>
        </strong>

        <p className="contact-description">
          Need help with your quest?
          <br />
          The Dumbbells & Dragons team is just one spell away!
        </p>

        <div className="contact-details">
          <p>
            <strong>📧 Email: </strong>
            <Link href="mailto:dumbbells_and_dragons@protonmail.com">
              dumbbells_and_dragons@protonmail.com
            </Link>
          </p>
          <p>
            <strong>📞 Phone: </strong>
            <Link href="tel:+441234567890">+44 1234 567 890</Link>
          </p>
        </div>

        <form className="contact-form">
          <div className="form-group">
            <label>Your name</label>
            <input type="text" placeholder="Your name" required />
          </div>

          <div className="form-group">
            <label>Your email</label>
            <input type="email" placeholder="you@example.com" required />
          </div>

          <div className="form-group">
            <label>Your message</label>
            <textarea
              placeholder="Tell us what's going on…"
              rows="5"
              required
            />
          </div>

          <button type="submit" className="contact-button primary">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </main>
  );
}
