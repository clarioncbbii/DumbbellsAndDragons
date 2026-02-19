import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/utils/dbConnection.js";

export async function GET() {
  const clerkUser = await currentUser();

  const userQuery = await db.query(
    `SELECT username, prog_start_date, classes_id_fk FROM dd_users WHERE clerk_id = $1`,
    [clerkUser.id],
  );

  const dbUser = userQuery.rows[0];

  const startDate = new Date(dbUser.prog_start_date);
  const todayDate = new Date();

  const msPerDay = 1000 * 60 * 60 * 24;
  const diffInMs = todayDate - startDate;
  const diffInDays = Math.floor(diffInMs / msPerDay);

  const weekIndex = Math.floor(diffInDays / 7);
  const dayIndex = diffInDays % 7;

  const programQuery = await db.query(
    `SELECT id FROM dd_prog WHERE classes_id_fk = $1`,
    [dbUser.classes_id_fk],
  );

  const programId = programQuery.rows[0].id;

  const weekIdQuery = await db.query(
    `SELECT w.id FROM dd_prog_weeks AS w JOIN jctn_dd_prog_dd_prog_weeks AS j ON j.weeks_id_fk = w.id WHERE j.prog_id_fk = $1 ORDER BY w.week_num LIMIT 1 OFFSET $2`,
    [programId, weekIndex],
  );

  const weekId = weekIdQuery.rows[0].id;

  const workoutQuery = await db.query(
    `SELECT wo.id FROM dd_workouts AS wo JOIN jctn_dd_prog_weeks_dd_workouts AS j ON j.workouts_id_fk = wo.id WHERE j.weeks_id_fk = $1 ORDER BY wo.day_num LIMIT 1 OFFSET $2`,
    [weekId, dayIndex],
  );

  const workoutId = workoutQuery.rows[0].id;

  const exercisesQuery = await db.query(
    `SELECT e.exercise_name, e.sets, e.reps, e.rest_time, e.exercise_xp FROM dd_exercises AS e JOIN jctn_dd_workouts_dd_excercises AS j ON j.exercises_id_fk = e.id WHERE j.workouts_id_fk = $1`,
    [workoutId],
  );

  const exercises = exercisesQuery.rows;

  return Response.json(exercises);
}
