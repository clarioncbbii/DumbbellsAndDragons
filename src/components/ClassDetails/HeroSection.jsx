import Image from "next/image";

export default function HeroSection({ styles, classChoice, classData, user }) {
  // console.log(classData[classChoice.class]);
  // console.log(classChoice.class);
  return (
    <div className={styles.class_details_showcase}>
      <div className={styles.class_icon}>
        {!user ? (
          <Image
            src={classData[classChoice.class].imageSrc}
            alt={classData[classChoice.class].imageAlt}
            width={200}
            height={200}
          />
        ) : (
          // this needs to have a user.class_id_fk comparison with class_id and a mockdata pull
          <Image
            src={classData[classChoice.class_name].imageSrc}
            alt={classData[classChoice.class_name].imageAlt}
            width={200}
            height={200}
          />
        )}
      </div>

      <div className={styles.name_block}>
        <h3 className={styles.character_name}>
          {user?.username.toUpperCase()}
        </h3>

        <p className={styles.tagline}>Character Name</p>
        <hr />
        {!user ? (
          <h3 className={styles.class_name}>
            {classData[classChoice.class].name}
          </h3>
        ) : (
          <h3 className={styles.class_name}>{classChoice.class_name}</h3>
        )}
        <p className={styles.tagline_right}>Class Name</p>
      </div>

      <div className={styles.user_level}>
        <p className="self-center pt-4 text-gray-300">Level</p>
        {classChoice.level ? (
          <p className="self-center pb-4 decoration-1 underline decoration-gray-300 font-bold text-2xl">
            {classChoice?.level}
          </p>
        ) : (
          <p className="self-center pb-4 decoration-1 underline decoration-gray-300 font-bold text-2xl">
            1
          </p>
        )}
      </div>

      <div className={styles.class_showcase_info}>
        <h4 className={styles.showcase_title}>Training Proficiencies:</h4>
        {!user ? (
          <ul className={styles.showcase_list}>
            <li>
              <span className={styles.showcase_bullet}>▸</span>{" "}
              {classData[classChoice.class].profs.p1}
            </li>
            <li>
              <span className={styles.showcase_bullet}>▸</span>{" "}
              {classData[classChoice.class].profs.p2}
            </li>
            <li>
              <span className={styles.showcase_bullet}>▸</span>{" "}
              {classData[classChoice.class].profs.p3}
            </li>
          </ul>
        ) : (
          <ul className={styles.showcase_list}>
            <li>
              <span className={styles.showcase_bullet}>▸</span>{" "}
              {classData[classChoice.class_name].profs.p1}
            </li>
            <li>
              <span className={styles.showcase_bullet}>▸</span>{" "}
              {classData[classChoice.class_name].profs.p2}
            </li>
            <li>
              <span className={styles.showcase_bullet}>▸</span>{" "}
              {classData[classChoice.class_name].profs.p3}
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
