import styles from "./tavern.module.css";
import { currentUser } from "@clerk/nextjs/server";
import NavBar from "@/components/Navigation/NavBar";
import { db } from "@/utils/dbConnection";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import PostForm from "@/components/SocialPost/PostForm";
import UserPosts from "@/components/SocialPost/UserPosts";

export const metadata = {
  title: "Tavern | Dumbbells & Dragon",
  description:
    "Channel your inner Wizard, Mage, Barbarian ... you name it, we got it! Dumbbells & Dragon allows you to live your fitness character fantasy. Unique abilities, workout styles, and progression paths await.",
  title: "Tavern | Dumbbells & Dragon",
  description:
    "A fantasy fitness quest inspired by Dungeons & Dragons. Train hard and unlock your true power.",
};

export default async function Tavern() {
  const user = await currentUser();
  console.log(user.id);

  // user and post query here
  const userPostQuery = (
    await db.query(
      `SELECT dd_users.*, dd_classes.*, dd_progression.*, dd_post.* 
FROM dd_users 
JOIN dd_classes ON dd_users.classes_id_fk = dd_classes.id
JOIN dd_progression ON dd_users.clerk_id = dd_progression.user_id_fk
JOIN dd_post ON dd_users.clerk_id = dd_post.user_id_fk
`,
    )
  ).rows;
  console.log(userPostQuery);
  // new post
  async function handlePost(formData) {
    "use server";

    const { title, content } = Object.fromEntries(formData);
    console.log(title, content, user?.id);

    db.query(
      `INSERT INTO dd_post (post_title, post_content, user_id_fk) VALUES ($1, $2, $3)`,
      [title, content, user?.id],
    );

    revalidatePath(`/tavern`);
    redirect(`/tavern`);
  }

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
            </div>
            <PostForm
              handle={handlePost}
              styles={styles}
              trigger={"Share tales of your journey..."}
              description={
                "Your journey interests those around you, share with your fellow adventurers!"
              }
            />
            <div className="h-10"></div>
            <UserPosts
              styles={styles}
              userPostQuery={userPostQuery}
              formatter={formatter}
            />

            <section className={styles.charSheet}></section>
          </div>
        </section>
      </div>
    </>
  );
}
