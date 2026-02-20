--! COMPILED BY RORY :)

-- we'll need this columns
ALTER TABLE dd_exercises 
ADD COLUMN IF NOT EXISTS weight DECIMAL(10,2);
ALTER TABLE dd_exercises 
ADD COLUMN IF NOT EXISTS weight_unit VARCHAR(10) DEFAULT 'kg';

-- and well need this to track 
CREATE TABLE IF NOT EXISTS dd_user_workout_completion (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  user_id_fk TEXT REFERENCES dd_users(clerk_id) ON DELETE CASCADE,
  workout_id_fk INT REFERENCES dd_workouts(id) ON DELETE CASCADE,
  completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  xp_earned INT,
  notes TEXT
);

-- classes (only barbarian has program for now)
INSERT INTO dd_classes (class_name)
VALUES ('Barbarian'), ('Rogue'), ('Paladin');

-- program (8 weeks just barbarian)
INSERT INTO dd_prog (duration_weeks, classes_id_fk)
VALUES (8, 1);  

-- weeks 1-8
INSERT INTO dd_prog_weeks (week_num)
VALUES (1),(2),(3),(4),(5),(6),(7),(8);

-- link program to weeks
INSERT INTO jctn_dd_prog_dd_prog_weeks (prog_id_fk, weeks_id_fk)
VALUES (1, 1),(1, 2),(1, 3),(1, 4),(1, 5),(1, 6),(1, 7),(1, 8);


--! WEEK 1 - foundation phase (light weights, learn form)
--!======================================================================================================================

-- week 1 workouts
INSERT INTO dd_workouts (workout_type, day_num, is_rest)
VALUES
  ('Chest, Shoulders, Triceps', 1, false),
  ('Back, Biceps', 2, false),
  ('Legs', 3, false),
  ('Rest & Recovery', 4, true),
  ('Chest, Shoulders, Triceps', 5, false),
  ('Back, Biceps', 6, false),
  ('Rest & Recovery', 7, true);

-- link week 1 to workouts
INSERT INTO jctn_dd_prog_weeks_dd_workouts (weeks_id_fk, workouts_id_fk)
SELECT w.id, wo.id
FROM dd_prog_weeks w
JOIN dd_workouts wo ON wo.day_num BETWEEN 1 AND 7
WHERE w.week_num = 1;


-- day 1 exercises (chest, shoulders, triceps)
WITH day1_ex AS (
  INSERT INTO dd_exercises 
    (exercise_name, exercise_xp, is_rest, sets, reps, rest_time, weight, weight_unit)
  VALUES
    ('Bench Press', 400, false, 4, 4, 120, 50, 'kg'),
    ('Seated Military Press', 380, false, 4, 4, 120, 20, 'kg'),
    ('Incline Dumbbell Press', 280, false, 3, 8, 60, 15, 'kg'),
    ('Cable Lateral Raises', 220, false, 3, 12, 60, 5, 'kg'),
    ('Cable Rear Delt Flys', 220, false, 3, 12, 60, 5, 'kg'),
    ('Overhead Cable Triceps Extension', 200, false, 3, 8, 60, 5, 'kg'),
    ('Triceps Pushdowns', 200, false, 3, 8, 60, 10, 'kg'),
    ('Smith Machine Crunch', 150, false, 3, 8, 60, 0, 'kg'),
    ('Hanging Leg Raises', 150, false, 3, 8, 60, 0, 'kg')
  RETURNING id
)
INSERT INTO jctn_dd_workouts_dd_exercises (workouts_id_fk, exercises_id_fk)
SELECT wo.id, ex.id
FROM dd_workouts wo
JOIN day1_ex ex ON TRUE
WHERE wo.day_num = 1;

-- day 2 exercises (back, biceps)
WITH day2_ex AS (
  INSERT INTO dd_exercises 
    (exercise_name, exercise_xp, is_rest, sets, reps, rest_time, weight, weight_unit)
  VALUES
    ('Deadlift', 450, false, 4, 4, 120, 60, 'kg'),
    ('Pull-ups', 360, false, 4, 4, 120, 0, 'kg'),
    ('Barbell Rows', 380, false, 4, 4, 120, 30, 'kg'),
    ('Dumbbell Rows', 280, false, 3, 10, 60, 15, 'kg'),
    ('Chin-Ups', 260, false, 3, 10, 60, 0, 'kg'),
    ('Bayesian Curls', 220, false, 3, 8, 60, 10, 'kg'),
    ('Hammer Curls', 220, false, 3, 8, 60, 10, 'kg'),
    ('Smith Machine Crunch', 150, false, 3, 8, 60, 0, 'kg'),
    ('Hanging Leg Raises', 150, false, 3, 8, 60, 0, 'kg')
  RETURNING id
)
INSERT INTO jctn_dd_workouts_dd_exercises (workouts_id_fk, exercises_id_fk)
SELECT wo.id, ex.id
FROM dd_workouts wo
JOIN day2_ex ex ON TRUE
WHERE wo.day_num = 2;

-- day 3 exercises (legs)
... (67 lines left)

message.txt
7 KB
thats only week 1
i'm happy to work on this tonight it's going to be alot of seed data
clarioncbbii — 15:12
looks great at a glance, I'm just conscious of the amount of time that may take?
Rory — 15:13
not too much.. theres alot of copy and pasting
like once i make day 1 for week one i just copid it changed the exercise namea snd stuff ect ect
i dunno if it will work lol
clarioncbbii — 15:15
oki, if you are happy to it, crack on - please have a look on supabase before you start and maybe sense check my work LOL
i feel a tad nerivous about this db
Rory — 15:15
can you send me a screen shot or link 
clarioncbbii — 15:15
i sent you a collabo invite
by email
Rory — 15:16
thanks
just moved your didit stuff to the right because it was in the way on the dd stuff
are you happy for me to run that sql querry
clarioncbbii — 15:22
Happy is not quite the word LOL - I stand by with baited breath 😄
Annabel — 15:24
brb
Rory — 15:25
failed but i know why .. theres already data in the table and i'm trying to hardcode into id 1
so i'll just start at like id 10 or something
﻿
-- we'll need this columns
ALTER TABLE dd_exercises 
ADD COLUMN IF NOT EXISTS weight DECIMAL(10,2);
ALTER TABLE dd_exercises 
ADD COLUMN IF NOT EXISTS weight_unit VARCHAR(10) DEFAULT 'kg';

-- and well need this to track 
CREATE TABLE IF NOT EXISTS dd_user_workout_completion (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  user_id_fk TEXT REFERENCES dd_users(clerk_id) ON DELETE CASCADE,
  workout_id_fk INT REFERENCES dd_workouts(id) ON DELETE CASCADE,
  completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  xp_earned INT,
  notes TEXT
);

-- classes (only barbarian has program for now)
INSERT INTO dd_classes (class_name)
VALUES ('Barbarian'), ('Rogue'), ('Paladin');

-- program (8 weeks just barbarian)
INSERT INTO dd_prog (duration_weeks, classes_id_fk)
VALUES (8, 1);  

-- weeks 1-8
INSERT INTO dd_prog_weeks (week_num)
VALUES (1),(2),(3),(4),(5),(6),(7),(8);

-- link program to weeks
INSERT INTO jctn_dd_prog_dd_prog_weeks (prog_id_fk, weeks_id_fk)
VALUES (1, 1),(1, 2),(1, 3),(1, 4),(1, 5),(1, 6),(1, 7),(1, 8);


--! WEEK 1 - foundation phase (light weights, learn form)
--!======================================================================================================================

-- week 1 workouts
INSERT INTO dd_workouts (workout_type, day_num, is_rest)
VALUES
  ('Chest, Shoulders, Triceps', 1, false),
  ('Back, Biceps', 2, false),
  ('Legs', 3, false),
  ('Rest & Recovery', 4, true),
  ('Chest, Shoulders, Triceps', 5, false),
  ('Back, Biceps', 6, false),
  ('Rest & Recovery', 7, true);

-- link week 1 to workouts
INSERT INTO jctn_dd_prog_weeks_dd_workouts (weeks_id_fk, workouts_id_fk)
SELECT w.id, wo.id
FROM dd_prog_weeks w
JOIN dd_workouts wo ON wo.day_num BETWEEN 1 AND 7
WHERE w.week_num = 1;


-- day 1 exercises (chest, shoulders, triceps)
WITH day1_ex AS (
  INSERT INTO dd_exercises 
    (exercise_name, exercise_xp, is_rest, sets, reps, rest_time, weight, weight_unit)
  VALUES
    ('Bench Press', 400, false, 4, 4, 120, 50, 'kg'),
    ('Seated Military Press', 380, false, 4, 4, 120, 20, 'kg'),
    ('Incline Dumbbell Press', 280, false, 3, 8, 60, 15, 'kg'),
    ('Cable Lateral Raises', 220, false, 3, 12, 60, 5, 'kg'),
    ('Cable Rear Delt Flys', 220, false, 3, 12, 60, 5, 'kg'),
    ('Overhead Cable Triceps Extension', 200, false, 3, 8, 60, 5, 'kg'),
    ('Triceps Pushdowns', 200, false, 3, 8, 60, 10, 'kg'),
    ('Smith Machine Crunch', 150, false, 3, 8, 60, 0, 'kg'),
    ('Hanging Leg Raises', 150, false, 3, 8, 60, 0, 'kg')
  RETURNING id
)
INSERT INTO jctn_dd_workouts_dd_exercises (workouts_id_fk, exercises_id_fk)
SELECT wo.id, ex.id
FROM dd_workouts wo
JOIN day1_ex ex ON TRUE
WHERE wo.day_num = 1;

-- day 2 exercises (back, biceps)
WITH day2_ex AS (
  INSERT INTO dd_exercises 
    (exercise_name, exercise_xp, is_rest, sets, reps, rest_time, weight, weight_unit)
  VALUES
    ('Deadlift', 450, false, 4, 4, 120, 60, 'kg'),
    ('Pull-ups', 360, false, 4, 4, 120, 0, 'kg'),
    ('Barbell Rows', 380, false, 4, 4, 120, 30, 'kg'),
    ('Dumbbell Rows', 280, false, 3, 10, 60, 15, 'kg'),
    ('Chin-Ups', 260, false, 3, 10, 60, 0, 'kg'),
    ('Bayesian Curls', 220, false, 3, 8, 60, 10, 'kg'),
    ('Hammer Curls', 220, false, 3, 8, 60, 10, 'kg'),
    ('Smith Machine Crunch', 150, false, 3, 8, 60, 0, 'kg'),
    ('Hanging Leg Raises', 150, false, 3, 8, 60, 0, 'kg')
  RETURNING id
)
INSERT INTO jctn_dd_workouts_dd_exercises (workouts_id_fk, exercises_id_fk)
SELECT wo.id, ex.id
FROM dd_workouts wo
JOIN day2_ex ex ON TRUE
WHERE wo.day_num = 2;

-- day 3 exercises (legs)
WITH day3_ex AS (
  INSERT INTO dd_exercises 
    (exercise_name, exercise_xp, is_rest, sets, reps, rest_time, weight, weight_unit)
  VALUES
    ('Back Squats', 420, false, 4, 4, 120, 60, 'kg'),
    ('Romanian Deadlifts', 300, false, 3, 8, 60, 60, 'kg'),
    ('Bulgarian Split Squats', 280, false, 3, 8, 60, 10, 'kg'),
    ('Leg Press', 280, false, 3, 8, 60, 100, 'kg'),
    ('Calf Raises', 180, false, 3, 15, 60, 40, 'kg'),
    ('Smith Machine Crunch', 150, false, 3, 8, 60, 0, 'kg'),
    ('Hanging Leg Raises', 150, false, 3, 8, 60, 0, 'kg')
  RETURNING id
)
INSERT INTO jctn_dd_workouts_dd_exercises (workouts_id_fk, exercises_id_fk)
SELECT wo.id, ex.id
FROM dd_workouts wo
JOIN day3_ex ex ON TRUE
WHERE wo.day_num = 3;

-- day 4 rest day - nothing needed :)!!!!

-- day 5 exercises (push repeat)
WITH day5_ex AS (
  INSERT INTO dd_exercises 
    (exercise_name, exercise_xp, is_rest, sets, reps, rest_time, weight, weight_unit)
  VALUES
    ('Bench Press', 400, false, 4, 4, 120, 35, 'kg'),
    ('Seated Military Press', 380, false, 4, 4, 120, 17, 'kg'),
    ('Incline Dumbbell Press', 280, false, 3, 9, 60, 10, 'kg'),
    ('Cable Lateral Raises', 220, false, 3, 12, 60, 5, 'kg'),
    ('Cable Rear Delt Flys', 220, false, 3, 12, 60, 5, 'kg'),
    ('Overhead Cable Triceps Extension', 200, false, 3, 9, 60, 8, 'kg'),
    ('Triceps Pushdowns', 200, false, 3, 9, 60, 15, 'kg'),
    ('Smith Machine Crunch', 150, false, 3, 9, 60, 0, 'kg'),
    ('Hanging Leg Raises', 150, false, 3, 9, 60, 0, 'kg')
  RETURNING id
)
INSERT INTO jctn_dd_workouts_dd_exercises (workouts_id_fk, exercises_id_fk)
SELECT wo.id, ex.id
FROM dd_workouts wo
JOIN day5_ex ex ON TRUE
WHERE wo.day_num = 5;

-- day 6 exercises (back, biceps)
WITH day6_ex AS (
  INSERT INTO dd_exercises 
    (exercise_name, exercise_xp, is_rest, sets, reps, rest_time, weight, weight_unit)
  VALUES
    ('Deadlift', 450, false, 4, 4, 120, 50, 'kg'),
    ('Pull-ups', 360, false, 4, 4, 120, 0, 'kg'),
    ('Barbell Rows', 380, false, 4, 4, 120, 30, 'kg'),
    ('Dumbbell Rows', 280, false, 3, 10, 60, 18, 'kg'),
    ('Chin-Ups', 260, false, 3, 10, 60, 0, 'kg'),
    ('Bayesian Curls', 220, false, 3, 8, 60, 10, 'kg'),
    ('Hammer Curls', 220, false, 3, 8, 60, 10, 'kg'),
    ('Smith Machine Crunch', 150, false, 3, 8, 60, 0, 'kg'),
    ('Hanging Leg Raises', 150, false, 3, 8, 60, 0, 'kg')
  RETURNING id
)
INSERT INTO jctn_dd_workouts_dd_exercises (workouts_id_fk, exercises_id_fk)
SELECT wo.id, ex.id
FROM dd_workouts wo
JOIN day6_ex ex ON TRUE
WHERE wo.day_num = 6;

-- day 7 rest day - nothing needed :)!!!!
