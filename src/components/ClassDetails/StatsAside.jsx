export default function StatsAside({ styles, classChoice, classData }) {
  return (
    <div className={styles.class_showcase_stats}>
      <div className={styles.showcase_stat}>
        <span>stat placeholder</span>
        <div className={styles.showcase_bar_bg}>
          <div
            className={styles.showcase_bar}
            // barbarian-gradient}
            // style={{ width: "95%" }}
          />
        </div>
      </div>
      <div className={styles.showcase_stat}>
        <span>stat placeholder</span>
        <div className={styles.showcase_bar_bg}>
          <div
            className={styles.showcase_bar}
            //  barbarian-gradient
            // style={{ width: "60%" }}
          />
        </div>
      </div>
      <div className={styles.showcase_stat}>
        <span>stat placeholder</span>
        <div className={styles.showcase_bar_bg}>
          <div
            className={styles.showcase_bar}
            // styles.barbarian-gradient
            // style={{ width: "40%" }}
          />
        </div>
      </div>
    </div>
  );
}
