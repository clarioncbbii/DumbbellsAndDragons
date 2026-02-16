import SignUpHeader from "@/components/SignUpHeader/SignUpHeader";
import styles from "@/app/choose-class/choose-class.module.css";

import BarbarianChoice from "@/components/ClassDetails/HeroSection";
import RogueChoice from "@/components/ClassDetails/FormSection";
import PaladinChoice from "@/components/ClassDetails/StatsAside";
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
            <HeroSection styles={styles} />
            {/* import an aside with the stats data */}
            <StatsAside styles={styles} />
            {/* import a section with a form and class details */}
            <FormSection styles={styles} />

            {/* Example Class Details mock up  */}
            {classChoice.class === "1" ? (
              <> </>
            ) : classChoice.class === "2" ? (
              <> </>
            ) : classChoice.class === "3" ? (
              <> </>
            ) : null}
          </div>
        </section>
      </div>
    </>
  );
}
