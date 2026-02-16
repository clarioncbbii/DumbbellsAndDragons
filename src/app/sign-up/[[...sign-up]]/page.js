import { SignUp } from "@clerk/nextjs";
import styles from "./sign-up.module.css";
import SignUpHeader from "@/components/SignUpHeader/SignUpHeader";

export default async function signUpPage() {
  return (
    <>
      <section className={styles.page_wrapper}>
        <SignUpHeader />
        <section className={styles.hero_section}>
          <div className={styles.hero_background}>
            <div className={`${styles.gradient_blob} mt-2 ml-2 bg-black`} />
            <div className={`${styles.gradient_blob} mb-2 mr-2 bg-black`} />
          </div>

          <div className={styles.hero_container}>
            <div className={styles.hero_content}>
              <h1 className={styles.hero_title}>
                <span className={styles.hero_title_gradient}>
                  {" "}
                  Level Up <br />
                  Your Fitness
                </span>
              </h1>
              <p className={styles.hero_description}>
                Transform your workouts into an epic RPG adventure. Choose your
                class, earn XP, and watch your character grow stronger with
                every rep.
              </p>
              <div className={styles.hero_description}>Start Your Quest!</div>
            </div>

            <SignUp
              appearance={{
                elements: { formButtonPrimary: styles.btn_primary },
              }}
            />
          </div>
        </section>
      </section>
    </>
  );
}
