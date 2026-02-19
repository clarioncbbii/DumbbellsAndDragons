import { db } from "@/utils/dbConnection";
import { currentUser } from "@clerk/nextjs/server";
import { notFound, redirect } from "next/navigation";
import styles from "./profile.module.css";
import StatsAside from "@/components/ClassDetails/StatsAside";
import HeroSection from "@/components/ClassDetails/HeroSection";
import NavBar from "@/components/Navigation/NavBar";

export const metadata = {
  title: "User Profile | Dumbbells & Dragon",
  description:
    "Channel your inner Wizard, Mage, Barbarian ... you name it, we got it! Dumbbells & Dragon allows you to live your fitness character fantasy. Unique abilities, workout styles, and progression paths await.",
  title: "User Profile | Dumbbells & Dragon",
  description:
    "A fantasy fitness quest inspired by Dungeons & Dragons. Train hard and unlock your true power.",
};

export default async function Profile({ params }) {
  const { profile } = await params;
  console.log(profile);
  // db query to get data from the tables
  const user = await currentUser();
  console.log(user.username);

  const userQuery = (
    await db.query(
      `SELECT dd_users.*, dd_classes.*, dd_progression.*
  FROM dd_users
  JOIN dd_classes ON dd_users.classes_id_fk = dd_classes.id
  JOIN dd_progression ON dd_users.clerk_id = dd_progression.user_id_fk
  WHERE dd_users.username = $1`,
      [profile],
    )
  ).rows[0];

  if (userQuery.length === 0) {
    notFound();
  }
  // if (profile === user.username) {
  //   redirect(`/my-character/${user.username}`);
  // }

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
              <h2 className={styles.section_title}>
                {" "}
                {profile.toUpperCase()}&apos;s Character
              </h2>
              <p className={styles.section_description}>
                {profile.toUpperCase()}&apos;s story so far...
              </p>
            </div>

            <section className={styles.charSheet}>
              {/* Import a Div with props signifying the classChoice.class option to ensure correct data is pulled*/}
              <HeroSection userQuery={userQuery} styles={styles} />
              {/* import an aside with the stats data */}
              <StatsAside userQuery={userQuery} styles={styles} />
            </section>

            {/* section with user posts */}
          </div>
        </section>
      </div>
    </>
  );
}
