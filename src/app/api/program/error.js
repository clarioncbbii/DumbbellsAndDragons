"use client";

import Link from "next/link";
import "./error.css";

export default function ProgramErrorPage({ error }) {
  return (
    <>
      <h1>
        OOOOPPPPPSSSSS, thou hast lost thine way, good traveller. Let us help
        you back on the rocky road.
      </h1>
      {/* the message property in 'error' will show the actual dev error */}
      <p>{error.message}</p>
      <Link href={"/"} className="text-blue-600">
        HOME
      </Link>
    </>
  );
}
