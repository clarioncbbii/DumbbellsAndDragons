export default function PaladinDetails({ styles }) {
  return (
    <div className={styles.class_details_showcase}>
      <div className={styles.class_showcase_header}>
        <div className={styles.class_showcase_icon}>🗡️🛡️</div>
        <div>
          <h3 className={styles.class_showcase_name}>Paladin</h3>
          <p className={styles.class_showcase_tagline}>Balanced Warrior</p>
        </div>
        <div className={styles.class_showcase_info}>
          <h4 className={styles.showcase_title}>Training Focus:</h4>
          <ul className={styles.showcase_list}>
            <li>
              <span className={styles.showcase_bullet}>▸</span> focus
              placeholder 1
            </li>
            <li>
              <span className={styles.showcase_bullet}>▸</span> focus
              placeholder 2
            </li>
            <li>
              <span className={styles.showcase_bullet}>▸</span> focus
              placeholder 3
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.class_showcase_content}>
        <div className={styles.class_showcase_stats}>
          <h4 className={styles.showcase_title}>Starting Stats:</h4>
          <div className={styles.showcase_stat}>
            <span>stat placeholder</span>
            <div className={styles.showcase_bar_bg}>
              <div
                className={styles.showcase_bar}
                // Paladin-gradient}
                // style={{ width: "95%" }}
              />
            </div>
          </div>
          <div className={styles.showcase_stat}>
            <span>stat placeholder</span>
            <div className={styles.showcase_bar_bg}>
              <div
                className={styles.showcase_bar}
                //  Paladin-gradient
                // style={{ width: "60%" }}
              />
            </div>
          </div>
          <div className={styles.showcase_stat}>
            <span>stat placeholder</span>
            <div className={styles.showcase_bar_bg}>
              <div
                className={styles.showcase_bar}
                // Paladin-gradient
                // style={{ width: "40%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
