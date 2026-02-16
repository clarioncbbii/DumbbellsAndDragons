export default function BarbarianDetails({ styles }) {
  return (
    <div className={styles.class_details_showcase}>
      <div className={styles.class_showcase_header}>
        <div className={styles.class_showcase_icon}>🪓</div>
        <div>
          <h3 className={styles.class_showcase_name}>Barbarian</h3>
          <p className={styles.class_showcase_tagline}>
            Master of Raw Strength
          </p>
        </div>
        <div className={styles.class_showcase_info}>
          <h4 className={styles.showcase_title}>Training Focus:</h4>
          <ul className={styles.showcase_list}>
            <li>
              <span className={styles.showcase_bullet}>▸</span> Heavy Squats
            </li>
            <li>
              <span className={styles.showcase_bullet}>▸</span> Deadlifts
            </li>
            <li>
              <span className={styles.showcase_bullet}>▸</span> Bench Press
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
              <div className={`${styles.barbarian_gradient} w-9/10`} />
            </div>
          </div>
          <div className={styles.showcase_stat}>
            <span>Stamina</span>
            <div className={styles.showcase_bar_bg}>
              <div className={`${styles.barbarian_gradient} w-6/10`} />
            </div>
          </div>
          <div className={styles.showcase_stat}>
            <span>Agility</span>
            <div className={styles.showcase_bar_bg}>
              <div className={`${styles.barbarian_gradient} w-4/10`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
