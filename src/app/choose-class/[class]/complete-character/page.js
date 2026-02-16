import SignUpHeader from "@/components/SignUpHeader/SignUpHeader";
import styles from "./complete-character.module.css";
import { classData } from "@/lib/mockData";
import HeroSection from "@/components/ClassDetails/HeroSection";
import StatsAside from "@/components/ClassDetails/StatsAside";
import FormSection from "@/components/ClassDetails/FormSection";

export default async function CompleteCharacter({ params }) {
  const classChoice = await params;

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

            {/* Import a Div with props signifying the classChoice.class option to ensure correct data is pulled*/}
            <HeroSection
              classData={classData}
              classChoice={classChoice}
              styles={styles}
            />
            {/* import an aside with the stats data */}
            <StatsAside
              classData={classData}
              classChoice={classChoice}
              styles={styles}
            />
            {/* import a section with a form and class details */}
            <FormSection
              classData={classData}
              classChoice={classChoice}
              styles={styles}
            />
          </div>
        </section>
      </div>
    </>
  );
}
