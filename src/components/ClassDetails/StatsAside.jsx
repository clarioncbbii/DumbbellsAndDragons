export default function StatsAside({
  styles,
  classChoice,
  classQuery,
  user,
  userQuery,
}) {
  return (
    <div className={styles.charSheet_stats}>
      <div className={styles.showcase_stat}>
        {!userQuery?.class_name ? (
          <>
            <span>{classQuery?.stat_one[0]}</span>
            <span>{classQuery?.stat_one[1]}</span>
            <div className={styles.showcase_bar_bg}>
              <div
                className={`${styles.showcase_bar} ${styles.barbarian_gradient} w-${classQuery?.stat_one[1]}/100`}
              />
            </div>
          </>
        ) : (
          <>
            <span>{userQuery?.stat_one[0]}</span>
            <span>{userQuery?.stat_one[1]}</span>
            <div className={styles.showcase_bar_bg}>
              <div
                className={`${styles.showcase_bar} ${styles.barbarian_gradient} w-${userQuery?.stat_one[1]}/100`}
              />
            </div>
          </>
        )}
      </div>

      <div className={styles.showcase_stat}>
        {!userQuery?.class_name ? (
          <>
            <span>{classQuery?.stat_two[0]}</span>
            <span>{classQuery?.stat_two[1]}</span>
            <div className={styles.showcase_bar_bg}>
              <div
                className={`${styles.showcase_bar} ${styles.barbarian_gradient} w-${classQuery?.stat_two[1]}/100`}
              />
            </div>
          </>
        ) : (
          <>
            <span>{userQuery?.stat_two[0]}</span>
            <span>{userQuery?.stat_two[1]}</span>
            <div className={styles.showcase_bar_bg}>
              <div
                className={`${styles.showcase_bar} ${styles.barbarian_gradient} w-${userQuery?.stat_two[1]}/100`}
              />
            </div>{" "}
          </>
        )}
      </div>

      <div className={styles.showcase_stat}>
        {!userQuery?.class_name ? (
          <>
            <span>{classQuery?.stat_three[0]}</span>
            <span>{classQuery?.stat_three[1]}</span>
            <div className={styles.showcase_bar_bg}>
              <div
                className={`${styles.showcase_bar} ${styles.barbarian_gradient} w-${classQuery?.stat_three[1]}/100`}
              />
            </div>
          </>
        ) : (
          <>
            <span>{userQuery?.stat_three[0]}</span>
            <span>{userQuery?.stat_three[1]}</span>
            <div className={styles.showcase_bar_bg}>
              <div
                className={`${styles.showcase_bar} ${styles.barbarian_gradient} w-${userQuery?.stat_three[1]}/100`}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
