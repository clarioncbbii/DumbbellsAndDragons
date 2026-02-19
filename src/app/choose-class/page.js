import BarbarianDetails from "@/components/ClassDetails/BarbarianDetails";
import SignUpHeader from "@/components/SignUpHeader/SignUpHeader";
import styles from "./choose-class.module.css";
import Link from "next/link";
import RogueDetails from "@/components/ClassDetails/RogueDetails";
import PaladinDetails from "@/components/ClassDetails/PaladinDetails";
import { classData } from "@/lib/mockData";
import Image from "next/image";
import { db } from "@/utils/dbConnection";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function ChooseClass({ params, searchParams }) {
  const classChoice = await searchParams;
  console.log(classChoice);
  const user = await currentUser();
  const userId = user?.id;
  // I need to set a variable which will be used the link for the continue button
  const userQuery = await db.query(
    `SELECT * FROM dd_users WHERE clerk_id = $1`,
    [userId],
  );

  console.log(userQuery);
  if (userQuery.length = 0) {
    redirect(`/my-character/${user?.id}`);
  }

  return (
    <>
      <div className={styles.page_wrapper}>
        <SignUpHeader />

        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.section_header}>
              <h2 className={styles.section_title}>Choose Your Class</h2>
              <p className={styles.section_description}>
                Each class offers unique training programs and progression
              </p>
            </div>

            {/* Class Cards - Static for now we can add modals later or pages /about ... something to discuss */}
            <div className={styles.class_selector}>
              <Link
                href={`/choose-class?class=Barbarian#classDetails`}
                className={styles.class_card}
              >
                <div className={styles.class_icon}>
                  <Image
                    src={"/barbarian.png"}
                    alt={"Barbarian"}
                    width={200}
                    height={200}
                  />
                </div>
                <h3 className={styles.class_name}>Barbarian</h3>
                <p className={styles.class_tagline}>Master of Raw Strength</p>
                <p className={styles.class_description}>
                  Dominate with heavy compound lifts and progressive overload
                </p>
              </Link>

              <Link
                href={`/choose-class?class=Rogue#classDetails`}
                className={styles.class_card}
              >
                <div className={styles.class_icon}>
                  <Image
                    src={"/rogue.gif"}
                    alt={"Rogue"}
                    width={200}
                    height={200}
                  />
                </div>
                <h3 className={styles.class_name}>Rogue</h3>
                <p className={styles.class_tagline}>Agility & Control</p>
                <p className={styles.class_description}>
                  Master bodyweight movements and calisthenics
                </p>
              </Link>

              <Link
                href={`/choose-class?class=Paladin#classDetails`}
                className={styles.class_card}
              >
                <div className={styles.class_icon}>
                  <Image
                    src={"/knight_type_a.png"}
                    alt={"Paladin"}
                    width={200}
                    height={200}
                  />
                </div>
                <h3 className={styles.class_name}>Paladin</h3>
                <p className={styles.class_tagline}>Balanced Warrior</p>
                <p className={styles.class_description}>
                  Combine strength training with endurance work
                </p>
              </Link>
            </div>
            <div id="classDetails"></div>
            {/* Example Class Details mock up  */}
            {classChoice.class === "Barbarian" ? (
              <>
                <BarbarianDetails
                  styles={styles}
                  classData={classData}
                  classChoice={classChoice}
                />
                <Link
                  href={`/choose-class/${classChoice?.class}/complete-character`}
                  className={styles.btn_primary}
                >
                  Continue
                  <svg className="cl-buttonArrowIcon self-center h-2">
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
              </>
            ) : classChoice.class === "Rogue" ? (
              <>
                <RogueDetails
                  styles={styles}
                  classData={classData}
                  classChoice={classChoice}
                />
                <Link
                  href={`/choose-class/${classChoice?.class}/complete-character`}
                  className={styles.btn_primary}
                >
                  Continue
                  <svg className="cl-buttonArrowIcon self-center h-2">
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
              </>
            ) : classChoice.class === "Paladin" ? (
              <>
                <PaladinDetails
                  styles={styles}
                  classData={classData}
                  classChoice={classChoice}
                />
                <Link
                  href={`/choose-class/${classChoice?.class}/complete-character`}
                  className={styles.btn_primary}
                >
                  Continue
                  <svg className="cl-buttonArrowIcon self-center h-2">
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
              </>
            ) : null}
          </div>
        </section>
      </div>
    </>
  );
}
