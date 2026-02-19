import Link from "next/link";

export default async function UserPosts({ userPostQuery, formatter, styles }) {
  return (
    <>
      {userPostQuery?.map((post) => (
        <div className={styles.user_form} key={post.id}>
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
        </div>
      ))}
    </>
  );
}
