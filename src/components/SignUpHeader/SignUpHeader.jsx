"use client";

import { usePathname } from "next/navigation";
import styles from "../SignUpHeader/signupheader.module.css";

export default function SignUpHeader({ classChoice }) {
  const pathname = usePathname();
  console.log(pathname);
  console.log(classChoice?.class);

  return (
    <header className={styles.head}>
      {pathname == "/sign-up" ? (
        <>
          <div className={styles.activePage}>
            <p>Sign-Up</p>
          </div>
          <div className={styles.bar}>{/* sign-up line */}</div>
          <div className={styles.page}>
            <p>Choose Class</p>
          </div>
          <div className={styles.bar}>{/* line */}</div>
          <div className={styles.page}>
            <p>Complete Character</p>
          </div>
        </>
      ) : pathname === "/choose-class" ? (
        <>
          <div className={styles.activePage}>
            <p>Sign-Up</p>
          </div>
          <div className={styles.activeBar}>{/* sign-up line */}</div>
          <div className={styles.activePage}>
            <p>Choose Class</p>
          </div>{" "}
          <div className={styles.bar}>{/* line */}</div>
          <div className={styles.page}>
            <p>Complete Character</p>
          </div>
        </>
      ) : pathname ===
        `/choose-class/${classChoice?.class}/complete-character` ? (
        <>
          <div className={styles.activePage}>
            <p>Sign-Up</p>
          </div>
          <div className={styles.activeBar}>{/* sign-up line */}</div>
          <div className={styles.activePage}>
            <p>Choose Class</p>
          </div>
          <div className={styles.activeBar}></div>
          <div className={styles.activePage}>
            <p>Complete Character</p>
          </div>
        </>
      ) : null}
    </header>
  );
}
