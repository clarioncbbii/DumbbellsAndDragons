import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/utils/dbConnection.js";

export async function GET() {
  const clerkUser = await currentUser();

  const userQuery = await db.query(
    `SELECT username, prog_start_date, classes_id_fk FROM dd_users WHERE clerk_id = $1`,
    [clerkUser.id],
  );

  const dbUser = userQuery.rows[0];

  const progressionQuery = await db.query(
    `SELECT total_xp, level FROM dd_progression WHERE user_id_fk = $1`,
    [clerkUser.id],
  );

  const progressionRows = progressionQuery.rows[0];

  const classQuery = await db.query(
    `SELECT details_title, stat_one, stat_two, stat_three FROM dd_classes WHERE id = $1`,
    [dbUser.classes_id_fk],
  );

  const classRow = classQuery.rows[0];

  const detailsTitle = classRow.details_title;

  const statOneName = classRow.stat_one[0];
  const statOneValue = classRow.stat_one[1];

  const statTwoName = classRow.stat_two[0];
  const statTwoValue = classRow.stat_two[1];

  const statThreeName = classRow.stat_three[0];
  const statThreeValue = classRow.stat_three[1];

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

  const weekStatsQuery = await db.query(
    `SELECT w.week_num, SUM(e.exercise_xp) AS total_xp, COALESCE(SUM(c.xp_earned), 0) AS earned_xp
    
    FROM dd_prog_weeks AS w

    JOIN jctn_dd_prog_dd_prog_weeks AS jp ON jp.weeks_id_fk = w.id
    
    JOIN jctn_dd_prog_weeks_dd_workouts AS jw ON jw.weeks_id_fk = w.id
    
    JOIN dd_workouts AS wo ON wo.id = jw.workouts_id_fk
    
    JOIN jctn_dd_workouts_dd_excercises AS je ON je.workouts_id_fk = wo.id
    
    JOIN dd_exercises AS e ON e.id = je.exercises_id_fk
    
    LEFT JOIN dd_user_workout_completion AS c ON c.workout_id_fk = wo.id AND c.user_id_fk = $2
    
    WHERE jp.prog_id_fk = $1
    
    GROUP BY w.week_num ORDER BY w.week_num`,
    [programId, clerkUser.id],
  );

  const weekStats = weekStatsQuery.rows;

  const weekQuery = await db.query(
    `SELECT w.id, w.week_num FROM dd_prog_weeks AS w JOIN jctn_dd_prog_dd_prog_weeks AS j ON j.weeks_id_fk = w.id WHERE j.prog_id_fk = $1 ORDER BY w.week_num LIMIT 1 OFFSET $2`,
    [programId, weekIndex],
  );

  const weekId = weekQuery.rows[0].id;
  const weekNum = weekQuery.rows[0].week_num;

  const workoutQuery = await db.query(
    `SELECT wo.id, wo.day_num, wo.workout_type FROM dd_workouts AS wo JOIN jctn_dd_prog_weeks_dd_workouts AS j ON j.workouts_id_fk = wo.id WHERE j.weeks_id_fk = $1 ORDER BY wo.day_num LIMIT 1 OFFSET $2`,
    [weekId, dayIndex],
  );

  const workoutRow = workoutQuery.rows[0];

  const workoutId = workoutRow.id;
  const dayNum = workoutRow.day_num;
  const workoutType = workoutRow.workout_type;

  const exercisesQuery = await db.query(
    `SELECT e.exercise_name, e.sets, e.reps, e.rest_time, e.weight, e.weight_unit, e.exercise_xp FROM dd_exercises AS e JOIN jctn_dd_workouts_dd_excercises AS j ON j.exercises_id_fk = e.id WHERE j.workouts_id_fk = $1 ORDER BY j.exercise_order`,
    [workoutId],
  );

  const exerciseRows = exercisesQuery.rows;

  return Response.json({
    username: dbUser.username,
    progression: progressionRows,
    classInfo: detailsTitle,
    stats: [
      { name: statOneName, value: statOneValue },
      { name: statTwoName, value: statTwoValue },
      { name: statThreeName, value: statThreeValue },
    ],
    week: weekNum,
    day: dayNum,
    workOutType: workoutType,
    exercises: exerciseRows,
    progWeekStats: weekStats,
  });
}
