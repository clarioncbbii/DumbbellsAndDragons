import Image from "next/image";
import Barbarian from "@/../public/barbarian.png";
import Paladin from "@/../public/knight_type_a.png";
import Rogue from "@/../public/rogue.gif";

export default function HeroSection({
  styles,
  userQuery,
  classChoice,
  user,
  classQuery,
}) {
  // console.log(classChoice);
  // console.log(classData[classChoice.class]);
  // console.log(classChoice.class);
  let icon;
  if (
    userQuery?.class_name === "Barbarian" ||
    classChoice?.class === "Barbarian"
  ) {
    icon = Barbarian;
  } else if (
    userQuery?.class_name === "Paladin" ||
    classChoice?.class === "Paladin"
  ) {
    icon = Paladin;
  } else if (
    userQuery?.class_name === "Rogue" ||
    classChoice?.class === "Rogue"
  ) {
    icon = Rogue;
  }

  return (
    <div className={styles.class_details_showcase}>
      <div className={styles.class_icon}>
        {!userQuery?.class_name ? (
          <Image src={icon} alt={classChoice?.class} width={200} height={200} />
        ) : (
          // this needs to have a user.class_id_fk comparison with class_id and a mockdata pull
          <Image
            src={icon}
            alt={userQuery?.class_name}
            width={200}
            height={200}
          />
        )}
      </div>

      <div className={styles.name_block}>
        {!userQuery.username ? (
          <h3 className={styles.character_name}>
            {user?.username.toUpperCase()}
          </h3>
        ) : (
          <h3 className={styles.character_name}>
            {userQuery?.username.toUpperCase()}
          </h3>
        )}

        <p className={styles.tagline}>Character Name</p>
        <hr />
        {!userQuery?.class_name ? (
          <h3 className={styles.class_name}>{classQuery?.class_name}</h3>
        ) : (
          <h3 className={styles.class_name}>{userQuery?.class_name}</h3>
        )}
        <p className={styles.tagline_right}>Class Name</p>
      </div>

      <div className={styles.user_level}>
        <p className="self-center pt-4 text-gray-300">Level</p>
        {userQuery?.level ? (
          <p className="self-center pb-4 decoration-1 underline decoration-gray-300 font-bold text-2xl">
            {userQuery?.level}
          </p>
        ) : (
          <p className="self-center pb-4 decoration-1 underline decoration-gray-300 font-bold text-2xl">
            1
          </p>
        )}
      </div>

      <div className={styles.class_showcase_info}>
        <h4 className={styles.showcase_title}>Training Proficiencies:</h4>
        {!userQuery?.profs ? (
          <ul className={styles.showcase_list}>
            <li>
              <span className={styles.showcase_bullet}>▸</span>{" "}
              {classQuery?.profs[0]}
            </li>
            <li>
              <span className={styles.showcase_bullet}>▸</span>{" "}
              {classQuery?.profs[1]}
            </li>
            <li>
              <span className={styles.showcase_bullet}>▸</span>{" "}
              {classQuery?.profs[2]}
            </li>
          </ul>
        ) : (
          <ul className={styles.showcase_list}>
            <li>
              <span className={styles.showcase_bullet}>▸</span>{" "}
              {userQuery?.profs[0]}
            </li>
            <li>
              <span className={styles.showcase_bullet}>▸</span>{" "}
              {userQuery?.profs[1]}
            </li>
            <li>
              <span className={styles.showcase_bullet}>▸</span>{" "}
              {userQuery?.profs[2]}
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
