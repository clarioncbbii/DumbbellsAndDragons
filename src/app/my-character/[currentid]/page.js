import SignUpHeader from "@/components/SignUpHeader/SignUpHeader";
import styles from "./my-character.module.css";
import { classData } from "@/lib/mockData";
import HeroSection from "@/components/ClassDetails/HeroSection";
import StatsAside from "@/components/ClassDetails/StatsAside";
import FormSection from "@/components/ClassDetails/FormSection";
import { currentUser } from "@clerk/nextjs/server";

export default async function MyCharacter({ params }) {
  const { currentid } = await params;
  const user = await currentUser();
  console.log(user);

  // I will need to pull data from the user table
  // I will need to pull data from the
  // classChoice will need to be the user's choice
  const classChoice = null;

  return (
    <>
      <div className={styles.page_wrapper}>
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
              {/* <HeroSection
                user={user}
                classData={classData}
                classChoice={classChoice}
                styles={styles}
              /> */}
              {/* import an aside with the stats data */}
              {/* <StatsAside
                user={user}
                classData={classData}
                classChoice={classChoice}
                styles={styles}
              /> */}
              {/* import a section with a form and class details */}
              {/* <FormSection
                user={user}
                classData={classData}
                classChoice={classChoice}
                styles={styles}
              /> */}
            </section>
          </div>
        </section>
      </div>
    </>
  );
}
