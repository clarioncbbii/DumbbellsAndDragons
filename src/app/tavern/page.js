import styles from "./tavern.module.css";
import { currentUser } from "@clerk/nextjs/server";
import NavBar from "@/components/Navigation/NavBar";
import { db } from "@/utils/dbConnection";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import Link from "next/link";

export const metadata = {
  title: "Tavern | Dumbbells & Dragon",
  description:
    "Channel your inner Wizard, Mage, Barbarian ... you name it, we got it! Dumbbells & Dragon allows you to live your fitness character fantasy. Unique abilities, workout styles, and progression paths await.",
  title: "Tavern | Dumbbells & Dragon",
  description:
    "A fantasy fitness quest inspired by Dungeons & Dragons. Train hard and unlock your true power.",
};

export default async function Tavern({ params }) {
  const { id } = await params;
  console.log(id);
  const user = await currentUser();
  // console.log(user);

  const userQuery = (
    await db.query(
      `SELECT dd_users.*, dd_classes.*, dd_progression.* 
FROM dd_users 
JOIN dd_classes ON dd_users.classes_id_fk = dd_classes.id
JOIN dd_progression ON dd_users.clerk_id = dd_progression.user_id_fk
`,
    )
  ).rows[0];

  //   have a user posts fetch here
  const formatter = new Intl.DateTimeFormat(`en-UK`, {
    hour: `2-digit`,
    minute: `2-digit`,
  });

  return (
    <>
      <div className={styles.page_wrapper}>
        <NavBar />
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.section_header}>
              <h2 className={styles.section_title}> The Tavern</h2>

              <p className={styles.section_description}>
                You are not alone on this journey adventurers!
              </p>
              <p className={styles.section_description}>
                Share tales of your journey here...
              </p>
            </div>

            {/* list posts here with .map and have the names linked to profile */}

            {/* JUST AN EXAMPLE LINK */}
            <Link href={`tavern/user-profile/${user?.username}`}>
              {user?.username}
            </Link>
            {/* JUST AN EXAMPLE LINK */}
            <section className={styles.charSheet}></section>
          </div>
        </section>
      </div>
    </>
  );
}
