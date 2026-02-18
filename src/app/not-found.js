import Link from "next/link";
import "./not-found.css";

export default function NotFound() {
  return (
    <main className="notfound-wrapper">
      <div className="notfound-card">
        <div className="notfound-icon">🗺️</div>

        <h1 className="notfound-title">UH-OH, LOST IN DUNGEON!</h1>

        <p className="notfound-description">
          Beg pardon dear traveller,
          <br />
          The path thou desirest does not exist.
          <br />
          Perhaps the map was wrong…or the dragon moved it.
          <br />
          Canst thou try another way perhaps?
        </p>

        <div className="notfound-actions">
          <Link href={"/"} className="notfound-button primary">
            RETURN TO TAVERN
          </Link>
        </div>
      </div>
    </main>
  );
}
