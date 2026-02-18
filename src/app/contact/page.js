import Link from "next/link";
import "./contact.css";

export default function ContactPage() {
  return (
    <main className="contact-wrapper">
      <div className="contact-card">
        <strong>
          <h1 className="contact-title">CONTACT US</h1>
        </strong>

        <p className="contact-description">
          Need help with your quest?
          <br />
          The Dumbbells & Dragons team is just one spell away!
        </p>

        <div className="contact-details">
          <p>
            <strong>Email:</strong>
            <Link href="mailto:support@dumbbellsanddragon.com">
              support@dumbbellsanddragons.com
            </Link>
          </p>
          <p>
            <strong>Phone:</strong>
            <Link href="tel:+441234567890">+44 1234 567 890</Link>
          </p>
        </div>

        <form className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your name" required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" required />
          </div>

          <div className="form-group">
            <label>Message</label>
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
