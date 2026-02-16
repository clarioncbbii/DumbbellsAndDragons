import "./dashboard.css";

export default function DashboardPage() {
  return (
    <>
      <section className="dashboard">
        <div className="dashboard-title-div">
          <h2>Welcome back, Bob!</h2>
          <h3>Ready to continue your quest?</h3>
        </div>

        <section className="sections-container">
          <section className="class-stats-section">
            <div className="stats-title">
              <h3>Bob the Barbarian</h3>
              <p>Barbarian - Powerbuilding Path</p>
            </div>

            <div className="xp-div">
              <p>XP Progress</p>
              <p className="xp-number">500/1200</p>
            </div>

            <div className="individual-stats">
              <div className="character-stat">
                <p className="stat-type">Strength</p>
                <p className="stat-value">88</p>
              </div>
              <div className="character-stat">
                <p className="stat-type">Stamina</p>
                <p className="stat-value">18</p>
              </div>
              <div className="character-stat">
                <p className="stat-type">Vitality</p>
                <p className="stat-value">200</p>
              </div>
            </div>
          </section>

          <section className="workout-stats-section">
            <div className="workout-stat">
              <p className="unit">7</p>
              <p className="workout-stat-type">DAY STREAK</p>
            </div>
            <div className="workout-stat">
              <p className="unit">7</p>
              <p className="workout-stat-type">TOTAL WORKOUT(S)</p>
            </div>
            <div className="workout-stat">
              <p className="unit">1</p>
              <p className="workout-stat-type">ACHIEVEMENT(S)</p>
            </div>
            <div className="workout-stat">
              <p className="unit">3</p>
              <p className="workout-stat-type">LEVEL</p>
            </div>
          </section>

          <section className="todays-workout-section">
            <div className="today-title">
              <h3>Today&apos;s workout</h3>
              <h3>Day 1</h3>
            </div>

            <div className="workout-list">
              <ol>
                <li>
                  Bench Press <span>5 sets x 5 reps @ 100kg & 1 min rest</span>
                </li>
                <li>
                  Overhead Press
                  <span>4 sets x 5 reps @ 70kg & 1 min rest</span>
                </li>
                <li>
                  Dips
                  <span>4 sets x 12-20 reps @ bodyweight & 1 min rest</span>
                </li>
                <li>
                  Tricep Extensions
                  <span>3 sets x 12-20 reps @ 65kg & 1 min rest</span>
                </li>
              </ol>
            </div>

            <button>Start Workout</button>
          </section>

          <section className="week-list">
            <div>
              <p>Week: 1</p>
              <p>140 XP</p>
            </div>
            <div>
              <p>Week: 2</p>
              <p>0 XP</p>
            </div>
            <div>
              <p>Week: 3</p>
              <p>0 XP</p>
            </div>
            <div>
              <p>Week: 4</p>
              <p>0 XP</p>
            </div>
            <div>
              <p>Week: 5</p>
              <p>0 XP</p>
            </div>
            <div>
              <p>Week: 6</p>
              <p>0 XP</p>
            </div>
            <div>
              <p>Week: 7</p>
              <p>0 XP</p>
            </div>
            <div>
              <p>Week: 8</p>
              <p>0 XP</p>
            </div>
          </section>
        </section>
      </section>
    </>
  );
}
