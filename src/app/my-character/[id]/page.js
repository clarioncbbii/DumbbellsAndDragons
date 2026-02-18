import styles from "./my-character.module.css";
import { classData } from "@/lib/mockData";
import HeroSection from "@/components/ClassDetails/HeroSection";
import StatsAside from "@/components/ClassDetails/StatsAside";
import FormSection from "@/components/ClassDetails/FormSection";
import { currentUser } from "@clerk/nextjs/server";
import NavBar from "@/components/Navigation/NavBar";
import { db } from "@/utils/dbConnection";
import { redirect } from "next/navigation";

export default async function MyCharacter({ params }) {
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
WHERE clerk_id = $1`,
      [user?.id],
    )
  ).rows[0];

  if (!userQuery) {
    redirect("/choose-class");
  }

  async function handleEditSubmit(formData) {
    "use server";
    console.log("submit");
    const { age, gender, weight, bio } = Object.fromEntries(formData);
    console.log(gender, age, weight, bio);

    // insert user row
    db.query(
      `UPDATE dd_users SET gender = $1, age = $2, weight = $3, bio = $4) VALUES ($1, $2, $3, $4)`,
      [gender, age, weight, bio],
    );

    console.log("Success");

    revalidatePath(`/my-character/${user?.id}`);
    redirect(`/my-character/${user?.id}`);
  }

  return (
    <>
      <div className={styles.page_wrapper}>
        <NavBar />
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.section_header}>
              <h2 className={styles.section_title}> My Character</h2>
              <p className={styles.section_description}>Your story so far...</p>
              <p>Everyone&apos;s story can be retold...</p>
              {/* edit button here */}
            </div>

            <section className={styles.charSheet}>
              {/* Import a Div with props signifying the classChoice.class option to ensure correct data is pulled*/}
              <HeroSection
                user={user}
                classChoice={userQuery}
                classData={classData}
                styles={styles}
              />
              {/* import an aside with the stats data */}
              <StatsAside
                user={user}
                classChoice={userQuery}
                classData={classData}
                styles={styles}
              />
              {/* import a section with a form and class details */}
              <FormSection
                handle={handleEditSubmit}
                user={user.id}
                classChoice={userQuery}
                classData={classData}
                styles={styles}
              />
            </section>
          </div>
        </section>
      </div>
    </>
  );
}
