import { db } from '@/utils/dbConnection';
import { auth } from '@clerk/nextjs/server';

export async function POST(request) {
  const { userId } = await auth();
  
  if (!userId) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const { workout_id, xp_earned, notes } = body;

  const client = await db.connect();

  try {
    await client.query('BEGIN');

    const completionResult = await client.query(
      `INSERT INTO dd_user_workout_completion 
        (user_id_fk, workout_id_fk, xp_earned, notes)
       VALUES ($1, $2, $3, $4)
       RETURNING id, completed_at`,
      [userId, workout_id, xp_earned, notes || null]
    );

    const checkResult = await client.query(
      `SELECT id, total_xp, level 
       FROM dd_progression 
       WHERE user_id_fk = $1`,
      [userId]
    );

    let progression;

    if (checkResult.rows.length === 0) {
      const createResult = await client.query(
        `INSERT INTO dd_progression (user_id_fk, total_xp, level)
         VALUES ($1, $2, FLOOR($2 / 1000) + 1)
         RETURNING total_xp, level`,
        [userId, xp_earned]
      );
      progression = createResult.rows[0];
    } else {
      const updateResult = await client.query(
        `UPDATE dd_progression
         SET 
           total_xp = total_xp + $1,
           level = FLOOR((total_xp + $1) / 1000) + 1
         WHERE user_id_fk = $2
         RETURNING total_xp, level`,
        [xp_earned, userId]
      );
      progression = updateResult.rows[0];
    }

    const oldLevel = Math.floor((progression.total_xp - xp_earned) / 1000) + 1;
    const newLevel = progression.level;
    const leveledUp = newLevel > oldLevel;

    await client.query('COMMIT');

    return Response.json({
      success: true,
      completion: completionResult.rows[0],
      progression: progression,
      leveledUp: leveledUp,
      newLevel: newLevel
    });

  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Database error:', error.message);
    console.error('Full error:', error); 
    return Response.json({
      error: 'Failed to complete workout',
      details: error.message
    }, { status: 500 });
  } finally {
    client.release();
  }
}