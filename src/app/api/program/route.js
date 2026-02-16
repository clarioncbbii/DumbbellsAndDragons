import db from '@/app/lib/dbConnection';
import { auth } from '@clerk/nextjs/server';

export async function GET(request) {
  const { userId } = await auth();
  
  if (!userId) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const client = await pool.connect();
  
  try {
    const userQuery = `
      SELECT classes_id_fk, prog_start_date 
      FROM dd_users 
      WHERE clerk_id = $1
    `;
    const userResult = await client.query(userQuery, [userId]);
    
    if (userResult.rows.length === 0) {
      return Response.json({ 
        error: 'User not found. Please complete onboarding first.' 
      }, { status: 404 });
    }
    
    const user = userResult.rows[0];

    // calculate current week based on start date
    const startDate = new Date(user.prog_start_date);
    const today = new Date();
    const daysDiff = Math.floor((today - startDate) / (24 * 60 * 60 * 1000));
    const currentWeek = Math.floor(daysDiff / 7) + 1;

    // program info
    const programQuery = `
      SELECT p.id, p.duration_weeks, c.class_name
      FROM dd_prog p
      JOIN dd_classes c ON c.id = p.classes_id_fk
      WHERE p.classes_id_fk = $1
    `;
    const programResult = await client.query(programQuery, [user.classes_id_fk]);
    const program = programResult.rows[0];

    if (!program) {
      return Response.json({ 
        error: 'No program found for this class' 
      }, { status: 404 });
    }

    // get all weeks for this program
    const weeksQuery = `
      SELECT DISTINCT pw.id, pw.week_num
      FROM dd_prog_weeks pw
      JOIN jctn_dd_prog_dd_prog_weeks jpw ON jpw.weeks_id_fk = pw.id
      WHERE jpw.prog_id_fk = $1
      ORDER BY pw.week_num
    `;
    const weeksResult = await client.query(weeksQuery, [program.id]);

    // get workouts for program
    const workoutsQuery = `
      SELECT 
        w.id,
        w.workout_type,
        w.day_num,
        w.is_rest,
        pw.week_num
      FROM dd_workouts w
      JOIN jctn_dd_prog_weeks_dd_workouts jww ON jww.workouts_id_fk = w.id
      JOIN dd_prog_weeks pw ON pw.id = jww.weeks_id_fk
      JOIN jctn_dd_prog_dd_prog_weeks jpw ON jpw.weeks_id_fk = pw.id
      WHERE jpw.prog_id_fk = $1
      ORDER BY pw.week_num, w.day_num
    `;
    const workoutsResult = await client.query(workoutsQuery, [program.id]);

    // get exercises
    const exercisesQuery = `
      SELECT 
        e.*,
        jwe.workouts_id_fk
      FROM dd_exercises e
      JOIN jctn_dd_workouts_dd_exercises jwe ON jwe.exercises_id_fk = e.id
      WHERE jwe.workouts_id_fk = ANY(
        SELECT w.id 
        FROM dd_workouts w
        JOIN jctn_dd_prog_weeks_dd_workouts jww ON jww.workouts_id_fk = w.id
        JOIN dd_prog_weeks pw ON pw.id = jww.weeks_id_fk
        JOIN jctn_dd_prog_dd_prog_weeks jpw ON jpw.weeks_id_fk = pw.id
        WHERE jpw.prog_id_fk = $1
      )
      ORDER BY e.id
    `;
    const exercisesResult = await client.query(exercisesQuery, [program.id]);

    const weeks = weeksResult.rows.map(week => {
      const weekWorkouts = workoutsResult.rows.filter(w => w.week_num === week.week_num);
      
      return {
        weekNumber: week.week_num,
        days: weekWorkouts.map(workout => {
          const workoutExercises = exercisesResult.rows
            .filter(e => e.workouts_id_fk === workout.id)
            .map(e => ({
              name: e.exercise_name,
              sets: e.sets,
              reps: e.reps,
              weight: parseFloat(e.weight) || 0,
              unit: e.weight_unit || '',
              xp: e.exercise_xp,
              restTime: e.rest_time
            }));

          const totalXp = workoutExercises.reduce((sum, ex) => sum + ex.xp, 0);

          return {
            id: workout.id,
            dayName: workout.day_num.toString(),
            workoutName: workout.workout_type,
            subtitle: workout.is_rest ? 'Active Recovery Day' : '',
            status: workout.is_rest ? 'rest' : (workout.day_num === new Date().getDay() && week.week_num === currentWeek ? 'today' : 'upcoming'),
            exercises: workoutExercises,
            totalXp: totalXp,
            restMessage: workout.is_rest ? 'Light stretching, walking, or yoga recommended' : null
          };
        })
      };
    });

    return Response.json({
      name: `${program.class_name} Powerbuilding`,
      level: 'Intermediate',
      currentWeek: Math.min(currentWeek, program.duration_weeks),
      totalWeeks: program.duration_weeks,
      weeklyXpGoal: 5000,
      weeklyXpEarned: 0, // TODO: -----> calculate from user_workout_completion
      workoutsCompleted: 0, // TODO: -----> calculate from user_workout_completion
      workoutsTotal: 5,
      currentStreak: 0, // TODO: ------->calculate
      weeks: weeks
    });

  } catch (error) {
    console.error('Database error:', error);
    return Response.json({ 
      error: 'Failed to fetch program',
      details: error.message 
    }, { status: 500 });
  } finally {
    client.release();
  }
}