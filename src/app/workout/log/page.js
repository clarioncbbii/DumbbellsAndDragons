"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import "./workout.css";
export const dynamic = "force-dynamic";

export default function WorkoutLogPage() {
  const { isLoaded, userId } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const dayId = searchParams.get("day");

  const [workout, setWorkout] = useState(null);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [sets, setSets] = useState([]);
  const [xpEarned, setXpEarned] = useState(0);
  const [restTimer, setRestTimer] = useState(null);
  const [workoutStartTime] = useState(new Date());
  const [notes, setNotes] = useState("");

  const loadWorkout = useCallback(async () => {
    try {
      const response = await fetch("/api/program");
      const data = await response.json();

      if (data.error) {
        console.error("Error loading workout:", data.error);
        return;
      }

      let foundDay = null;
      for (const week of data.weeks) {
        const day = week.days.find((d) => d.id === parseInt(dayId));
        if (day) {
          foundDay = day;
          break;
        }
      }

      if (!foundDay) {
        console.error("Day not found");
        router.push("/program");
        return;
      }

      const allSets = [];
      foundDay.exercises.forEach((exercise, exIdx) => {
        for (let i = 0; i < exercise.sets; i++) {
          allSets.push({
            exerciseIndex: exIdx,
            setNumber: i + 1,
            weight: exercise.weight,
            reps: exercise.reps,
            completed: false,
            xp: 0,
          });
        }
      });

      setWorkout(foundDay);
      setSets(allSets);
    } catch (error) {
      console.error("Failed to load workout:", error);
    }
  }, [dayId, router]);

  useEffect(() => {
    if (isLoaded && !userId) {
      router.push("/sign-in");
    }
  }, [isLoaded, userId, router]);

  useEffect(() => {
    if (!userId || !dayId) return;

    async function fetchWorkout() {
      await loadWorkout();
    }

    fetchWorkout();
  }, [userId, dayId, loadWorkout]);

  useEffect(() => {
    if (restTimer === null || restTimer <= 0) return;

    const interval = setInterval(() => {
      setRestTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [restTimer]);

  // complete a set
  function handleCompleteSet(setIndex) {
    const updatedSets = [...sets];
    const currentSet = updatedSets[setIndex];

    if (currentSet.completed) return;

    currentSet.completed = true;
    const setXp = currentSet.weight * currentSet.reps || 50;
    currentSet.xp = setXp;

    setSets(updatedSets);
    setXpEarned(xpEarned + setXp);
    setRestTimer(180);

    const exerciseIndex = currentSet.exerciseIndex;
    const exerciseSets = updatedSets.filter(
      (s) => s.exerciseIndex === exerciseIndex,
    );
    const allComplete = exerciseSets.every((s) => s.completed);

    if (allComplete && exerciseIndex < workout.exercises.length - 1) {
      setTimeout(() => {
        setCurrentExerciseIndex(exerciseIndex + 1);
      }, 1000);
    }
  }

  function handleUpdateSet(setIndex, field, value) {
    const updatedSets = [...sets];
    updatedSets[setIndex][field] = parseInt(value) || 0;
    setSets(updatedSets);
  }

  async function handleFinishWorkout() {
    const completedSets = sets.filter((s) => s.completed);

    if (completedSets.length === 0) {
      alert("complete at least one set first");
      return;
    }

    try {
      const response = await fetch("/api/workouts/complete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          workout_id: dayId,
          xp_earned: xpEarned,
          notes: notes,
        }),
      });

      const result = await response.json();

      if (result.success) {
        if (result.leveledUp) {
          alert(`Level Up! You're now level ${result.newLevel}! 🎉`);
        }
        router.push("/program");
      } else {
        alert("failed to save workout");
      }
    } catch (error) {
      console.error("Failed to save workout:", error);
      alert("failed to save workout");
    }
  }

  function handleSaveAndExit() {
    console.log(
      "Progress saved:",
      sets.filter((s) => s.completed),
    );
    router.push("/program");
  }

  function formatTime(seconds) {
    if (!seconds) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  }

  if (!workout) {
    return <div className="loading">Loading workout...</div>;
  }

  const currentExercise = workout.exercises[currentExerciseIndex];
  const exerciseSets = sets.filter(
    (s) => s.exerciseIndex === currentExerciseIndex,
  );
  const currentSetIndex = sets.findIndex((s) => !s.completed);
  const totalSets = sets.length;
  const completedSets = sets.filter((s) => s.completed).length;
  const isWorkoutComplete = completedSets === totalSets;

  return (
    <div className="workout-log-page">
      <div className="container">
        <div className="workout-header">
          <a href="/program" className="back-button">
            ← Back to Program
          </a>
          <h1 className="workout-title">{workout.workoutName}</h1>
          <p className="workout-subtitle">
            Day {workout.dayName} • {workout.subtitle}
          </p>

          <div className="progress-tracker">
            <div className="progress-item">
              <div className="progress-label">Exercises</div>
              <div className="progress-value">
                {currentExerciseIndex + 1}/{workout.exercises.length}
              </div>
            </div>
            <div className="progress-item">
              <div className="progress-label">Sets</div>
              <div className="progress-value">
                {completedSets}/{totalSets}
              </div>
            </div>
            <div className="progress-item">
              <div className="progress-label">XP Earned</div>
              <div className="progress-value">{xpEarned}</div>
            </div>
          </div>

          <div className="xp-progress">
            <div className="xp-header">
              <span>Workout Progress</span>
              <span style={{ color: "#10b981", fontWeight: 600 }}>
                {xpEarned} / {workout.totalXp} XP
              </span>
            </div>
            <div className="xp-bar-bg">
              <div
                className="xp-bar-fill"
                style={{
                  width: `${Math.min((xpEarned / workout.totalXp) * 100, 100)}%`,
                }}
              ></div>
            </div>
          </div>
        </div>

        {restTimer !== null && restTimer > 0 && (
          <div className="rest-timer">
            <div className="timer-label">Rest Timer</div>
            <div className="timer-display">{formatTime(restTimer)}</div>
            <div className="timer-buttons">
              <button
                className="timer-button"
                onClick={() => setRestTimer(restTimer - 30)}
              >
                -30s
              </button>
              <button
                className="timer-button"
                onClick={() => setRestTimer(180)}
              >
                Reset
              </button>
              <button
                className="timer-button"
                onClick={() => setRestTimer(restTimer + 30)}
              >
                +30s
              </button>
              <button className="timer-button" onClick={() => setRestTimer(0)}>
                Skip Rest
              </button>
            </div>
          </div>
        )}

        {workout.exercises.map((exercise, exIdx) => {
          const isActive = exIdx === currentExerciseIndex;
          const exSets = sets.filter((s) => s.exerciseIndex === exIdx);
          const isExComplete = exSets.every((s) => s.completed);
          const isUpcoming = exIdx > currentExerciseIndex;

          return (
            <div
              key={exIdx}
              className={`exercise-card ${isActive ? "active" : ""} ${isExComplete ? "completed" : ""}`}
            >
              <div className="exercise-header">
                <h3 className="exercise-name">{exercise.name}</h3>
                <span
                  className={`exercise-badge ${isActive ? "badge-active" : isExComplete ? "badge-completed" : "badge-upcoming"}`}
                >
                  {isActive
                    ? "Current Exercise"
                    : isExComplete
                      ? "✓ Completed"
                      : "Upcoming"}
                </span>
              </div>

              <p className="exercise-target">
                Target: {exercise.sets} sets × {exercise.reps} reps
                {exercise.weight > 0 &&
                  ` @ ${exercise.weight} ${exercise.unit}`}
              </p>

              {isUpcoming && (
                <p
                  style={{
                    color: "#64748b",
                    fontSize: "0.875rem",
                    marginTop: "0.5rem",
                  }}
                >
                  Complete {workout.exercises[exIdx - 1]?.name} to unlock
                </p>
              )}

              {!isUpcoming && (
                <ul className="sets-list">
                  {exSets.map((set, idx) => {
                    const globalSetIndex = sets.findIndex(
                      (s) =>
                        s.exerciseIndex === exIdx &&
                        s.setNumber === set.setNumber,
                    );
                    const isCurrentSet = globalSetIndex === currentSetIndex;

                    return (
                      <li
                        key={idx}
                        className={`set-item ${set.completed ? "completed" : ""}`}
                      >
                        <div className="set-number">{set.setNumber}</div>
                        <div className="set-inputs">
                          <div className="input-group">
                            <div className="input-label">
                              Weight ({exercise.unit || "bodyweight"})
                            </div>
                            <input
                              type="number"
                              className="set-input"
                              value={set.weight}
                              onChange={(e) =>
                                handleUpdateSet(
                                  globalSetIndex,
                                  "weight",
                                  e.target.value,
                                )
                              }
                              disabled={set.completed || !isCurrentSet}
                            />
                          </div>
                          <div className="input-group">
                            <div className="input-label">Reps</div>
                            <input
                              type="number"
                              className="set-input"
                              value={set.reps}
                              onChange={(e) =>
                                handleUpdateSet(
                                  globalSetIndex,
                                  "reps",
                                  e.target.value,
                                )
                              }
                              disabled={set.completed || !isCurrentSet}
                            />
                          </div>
                        </div>
                        <button
                          className={`check-button ${set.completed ? "checked" : ""}`}
                          onClick={() => handleCompleteSet(globalSetIndex)}
                          disabled={set.completed || !isCurrentSet}
                        >
                          {set.completed ? "✓" : "○"}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}

        <div className="notes-section">
          <label className="notes-label">Workout Notes (Optional)</label>
          <textarea
            className="notes-textarea"
            placeholder="How did you feel? Any PRs? Form notes?"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>

        <div className="action-buttons">
          <button className="btn btn-secondary" onClick={handleSaveAndExit}>
            Save & Exit
          </button>
          <button
            className="btn btn-primary"
            onClick={handleFinishWorkout}
            disabled={!isWorkoutComplete}
          >
            {isWorkoutComplete
              ? "Finish Workout"
              : `Complete ${totalSets - completedSets} more sets`}
          </button>
        </div>
      </div>
    </div>
  );
}
