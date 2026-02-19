import { db } from "@/utils/dbConnection";
import Image from "next/image";
import barbarian from "@/../public/barbarian.png";

export default async function BarbarianDetails({ styles, classChoice }) {
  const classQuery = (
    await db.query(`SELECT * FROM dd_classes WHERE id = $1`, [16])
  ).rows;

  console.log(classQuery[0]);

  return (
    <div className={styles.class_details_showcase}>
      <div className={styles.class_showcase_header}>
        <div className={styles.class_showcase_icon}>
          <Image
            src={barbarian}
            alt={classQuery[0].class_name}
            width={200}
            height={200}
          />
        </div>
        <div>
          <h3 className={styles.class_showcase_name}>
            {classQuery[0].class_name}
          </h3>
          <p className={styles.class_showcase_tagline}>
            Master of Raw Strength
          </p>
        </div>
        <div className={styles.class_showcase_info}>
          <h4 className={styles.showcase_title}>Training Focus:</h4>
          <ul className={styles.showcase_list}>
            <li>
              <span className={styles.showcase_bullet}>▸</span>{" "}
              {classQuery[0].stat_one[0]}
            </li>
            <li>
              <span className={styles.showcase_bullet}>▸</span>{" "}
              {classQuery[0].stat_two[0]}
            </li>
            <li>
              <span className={styles.showcase_bullet}>▸</span>{" "}
              {classQuery[0].stat_three[0]}
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.class_showcase_content}>
        <div className={styles.class_showcase_stats}>
          <h4 className={styles.showcase_title}>Starting Stats:</h4>
          <div className={styles.showcase_stat}>
            <span>Strength</span>
            <div className={styles.showcase_bar_bg}>
              <div className={`${styles.barbarian_gradient} w-84/100`} />
            </div>
          </div>
          <div className={styles.showcase_stat}>
            <span>Stamina</span>
            <div className={styles.showcase_bar_bg}>
              <div className={`${styles.barbarian_gradient} w-60/100`} />
            </div>
          </div>
          <div className={styles.showcase_stat}>
            <span>Agility</span>
            <div className={styles.showcase_bar_bg}>
              <div className={`${styles.barbarian_gradient} w-70/100`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
