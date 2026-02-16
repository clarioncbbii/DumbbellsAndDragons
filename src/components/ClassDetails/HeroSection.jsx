import Image from "next/image";

export default function HeroSection({ styles, classChoice, classData }) {
  console.log(classData[classChoice.class]);
  console.log(classChoice.class);
  return (
    <div className={styles.class_details_showcase}>
      {/* keep this */}

      <div className={styles.class_icon}>
        <Image
          src={classData[classChoice.class].imageSrc}
          alt={classData[classChoice.class].imageAlt}
          width={200}
          height={200}
        />
      </div>

      <div className={`p-2 border-0 border-amber-100 rounded-2xl`}>
        <h3 className={styles.class_showcase_name}>nameVariable-fromDB</h3>
        <p className={styles.class_showcase_tagline}>Character Name</p>
        <h3 className={styles.class_showcase_name}>
          {classData[classChoice.class].name}
        </h3>
        <p className={styles.class_showcase_tagline}>Character Name</p>
      </div>

      <div className={styles.class_showcase_info}>
        <p>Level</p>
        <p>X</p>
        <p>______</p>
      </div>

      <div className={styles.class_showcase_info}>
        <h4 className={styles.showcase_title}>Training Proficiencies:</h4>
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
      </div>
    </div>
  );
}
