import Link from "next/link";
import PostForm from "./PostForm";
import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function UserPosts({
  userPostQuery,
  styles,
  currentUsername,
}) {
  const formatter = new Intl.DateTimeFormat(`en-UK`, {
    hour: `2-digit`,
    minute: `2-digit`,
  });
  console.log(currentUsername);

  async function handleEdit(formData) {
    "use server";

    const { title, content, post_id } = Object.fromEntries(formData);
    console.log(title, content, post_id);

    db.query(
      `UPDATE dd_post SET post_title =$1, post_content=$2 WHERE post_id = $3`,
      [title, content, post_id],
    );

    revalidatePath(`/tavern`);
    redirect(`/tavern`);
  }

  return (
    <>
      {userPostQuery?.map((post) => (
        <div className={styles.user_form} key={post.post_id}>
          <section className={styles.char_section}>
            {" "}
            <Link
              className={styles.user_profile}
              href={`tavern/user-profile/${post.username}`}
            >
              {post.username}
            </Link>
            <p>Class: {post.class_name}</p> <p>Level: {post.level}</p>
            <p className="justify-self-end">
              Posted at {post.post_created.toISOString().split("T")[0]}{" "}
              {formatter.format(post.post_created)}
            </p>
          </section>
          <section className={styles.post_content}>
            <p
              className={
                "decoration-1 underline font-bold text-lg place-self-start"
              }
            >
              {post.post_title}
            </p>

            <p>&quot;{post.post_content}&quot;</p>
          </section>
          {currentUsername === post.username ? (
            <PostForm
              handle={handleEdit}
              styles={styles}
              prefill={post}
              trigger={"Your journey has changed? Please tell us how..."}
              description={
                "Your journey interests those around you, share with your fellow adventurers!"
              }
            />
          ) : null}
        </div>
      ))}
    </>
  );
}
