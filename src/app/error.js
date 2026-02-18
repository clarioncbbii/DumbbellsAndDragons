"use client";

import Link from "next/link";
import { useEffect } from "react";
import "./error.css";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="error-wrapper">
      <div className="error-card">
        <div className="error-icon">🐉</div>

        <h1 className="error-title">OH NO...THE DUNGEON HAS COLLAPSED! </h1>

        <p className="error-description">
          A wild error appeared while forging your legend.
          <br />
          Even heroes must sometimes retreat and try again.
        </p>

        <div className="error-actions">
          <button className="error-button primary" onClick={() => reset()}>
            RETRY QUEST
          </button>

          <Link href={"/"} className="error-button secondary">
            RETURN TO TAVERN
          </Link>
        </div>
      </div>
    </main>
  );
}
