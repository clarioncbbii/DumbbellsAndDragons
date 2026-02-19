import { Link } from "lucide-react";
import "./dashboard.css";
import NavBar from "@/components/Navigation/NavBar";
import Link from "next/link";

export const metadata = {
  title: "Dashboard | Dumbbells & Dragon",
  description:
    "Dumbbells & Dragon provides you with curated programs, workouts and exercises, just for you, supporting you in becoming a final boss.",
  openGraph: {
    title: "Dashboard | Dumbbells & Dragon",
    description:
      "A fantasy fitness quest inspired by Dungeons & Dragons. Train hard and unlock your true power.",
  },
};

export default function DashboardPage() {
  return (
    <>
      <section className="dashboard">
        <NavBar />
        <div className="dashboard-title-div">
          <h2>Welcome back, Bob! 💪</h2>
          <h3>Ready to continue your quest?</h3>
        </div>

        <section className="sections-container">
          <section className="class-stats-section">
            <div className="stats-title">
              <h3>🪓 Bob the Barbarian</h3>
              <p>Barbarian - Powerbuilding Path</p>
            </div>

            <div className="xp-div">
              <p>XP Progress</p>
              <p className="xp-number">500/1200</p>
            </div>

            <div className="individual-stats">
              <div className="character-stat">
                <p className="stat-type">💪 Strength</p>
                <p className="stat-value">88</p>
              </div>
              <div className="character-stat">
                <p className="stat-type">🏃 Stamina</p>
                <p className="stat-value">18</p>
              </div>
              <div className="character-stat">
                <p className="stat-type">❤️ Vitality</p>
                <p className="stat-value">200</p>
              </div>
            </div>
          </section>

          <section className="workout-stats-section">
            <div className="workout-stat">
              <p className="unit">7 🔥</p>
              <p className="workout-stat-type">DAY STREAK</p>
            </div>
            <div className="workout-stat">
              <p className="unit">7 💪</p>
              <p className="workout-stat-type">TOTAL WORKOUT(S)</p>
            </div>
            <div className="workout-stat">
              <p className="unit">1 🏆</p>
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
              <p>Day 1</p>
            </div>

            <div className="workout-list">
              <ol className="list-decimal list-outside pl-6 space-y-2">
                <li>
                  <div className="flex flex-col font-semibold">
                    Bench Press
                    <span className="text-sm text-[#cbd5e1]">
                      5 sets x 5 reps @ 100kg & 1 min rest
                    </span>
                  </div>
                </li>
                <li>
                  <div className="flex flex-col font-semibold">
                    Overhead Press
                    <span className="text-sm text-[#cbd5e1]">
                      4 sets x 5 reps @ 70kg & 1 min rest
                    </span>
                  </div>
                </li>
                <li>
                  <div className="flex flex-col font-semibold">
                    Dips
                    <span className="text-sm text-[#cbd5e1]">
                      4 sets x 12-20 reps @ bodyweight & 1 min rest
                    </span>
                  </div>
                </li>
                <li>
                  <div className="flex flex-col font-semibold">
                    Tricep Extensions
                    <span className="text-sm text-[#cbd5e1]">
                      3 sets x 12-20 reps @ 65kg & 1 min rest
                    </span>
                  </div>
                </li>
              </ol>
            </div>
            {/* =======we need to change this for the workout/log page once but this will require fecting the workout id for that specific day from the api like the program page does so thats a post mvp problem======= */}
            <Link href="/program">
              <button className="start-workout-btn">Start Workout</button>
            </Link>
          </section>

          <section className="week-list">
            <div className="week-number">
              <h3>Week: 1</h3>
              <p>140 XP</p>
            </div>
            <div className="week-number">
              <h3>Week: 2</h3>
              <p>0 XP</p>
            </div>
            <div className="week-number">
              <h3>Week: 3</h3>
              <p>0 XP</p>
            </div>
            <div className="week-number">
              <h3>Week: 4</h3>
              <p>0 XP</p>
            </div>
            <div className="week-number">
              <h3>Week: 5</h3>
              <p>0 XP</p>
            </div>
            <div className="week-number">
              <h3>Week: 6</h3>
              <p>0 XP</p>
            </div>
            <div className="week-number">
              <h3>Week: 7</h3>
              <p>0 XP</p>
            </div>
            <div className="week-number">
              <h3>Week: 8</h3>
              <p>0 XP</p>
            </div>
          </section>
        </section>
      </section>
    </>
  );
}
