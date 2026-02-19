import SignUpHeader from "@/components/SignUpHeader/SignUpHeader";
import styles from "./complete-character.module.css";

import HeroSection from "@/components/ClassDetails/HeroSection";
import StatsAside from "@/components/ClassDetails/StatsAside";
import FormSection from "@/components/ClassDetails/FormSection";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import { db } from "@/utils/dbConnection";
import { redirect } from "next/navigation";

export default async function CompleteCharacter({ params }) {
  const classChoice = await params;
  const user = await currentUser();
  // console.log(user);
  const userQuery = await db.query(
    `SELECT * FROM dd_users WHERE clerk_id = $1`,
    [user?.id],
  );

  console.log(userQuery);
  if (userQuery.length === 0) {
    redirect(`/my-character/${user?.id}`);
  }
  const classQuery = (
    await db.query(`SELECT * FROM dd_classes WHERE class_name = $1`, [
      classChoice.class,
    ])
  ).rows[0];

  console.log(classQuery);

  async function handleCompleteCharacterForm(formData) {
    "use server";
    console.log("submit");
    const { age, gender, weight, bio } = Object.fromEntries(formData);
    console.log(
      user?.id,
      user?.username,
      gender,
      age,
      weight,
      bio,
      dbClasses[0].id,
    );

    // insert user row
    db.query(
      `INSERT INTO dd_users (clerk_id, username, gender, age, weight, bio, classes_id_fk) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [user?.id, user?.username, gender, age, weight, bio, dbClasses[0].id],
    );

    // insert progression row
    db.query(`INSERT INTO dd_progression (user_id_fk) VALUES ($1)`, [user?.id]);

    console.log("Success");

    revalidatePath(`/dashboard`);
    redirect(`/dashboard`);
  }
  return (
    <>
      <div className={styles.page_wrapper}>
        <SignUpHeader classChoice={classChoice} />

        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.section_header}>
              <h2 className={styles.section_title}>Complete Your Character</h2>
              <p className={styles.section_description}>
                You have chosen your path... now share your backstory
              </p>
            </div>
            <Link href={"/choose-class"} className={styles.btn_secondary}>
              Return
              <svg className="cl-buttonArrowIcon self-center h-2 -scale-x-100">
                <path
                  className="self-center"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="m7.25 5-3.5-2.25v4.5L7.25 5Z"
                ></path>
              </svg>
            </Link>
            <section className={styles.charSheet}>
              {/* Import a Div with props signifying the classChoice.class option to ensure correct data is pulled*/}
              <HeroSection
                user={user}
                classQuery={classQuery}
                classChoice={classChoice}
                styles={styles}
              />
              {/* import an aside with the stats data */}
              <StatsAside
                user={user}
                classQuery={classQuery}
                classChoice={classChoice}
                styles={styles}
              />
              {/* import a section with a form and class details */}
              <FormSection
                handle={handleCompleteCharacterForm}
                user={user}
                classQuery={classQuery}
                classChoice={classChoice}
                styles={styles}
              />
            </section>
          </div>
        </section>
      </div>
    </>
  );
}
