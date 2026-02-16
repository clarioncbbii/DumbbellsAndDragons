--TODO: Create SQL queries to ... 
-- (1) create all tables
-- (2) insert seed data
-- (3) manipulate data 

--* (1) CREATE ALL TABLES
 
-- Create tables without fk's:
CREATE TABLE IF NOT EXISTS dd_classes (
id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
class_name VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS dd_prog_weeks(
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  week_num INT
);

CREATE TABLE IF NOT EXISTS dd_workouts(
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  workout_type VARCHAR(255),
  day_num INT,
  is_rest BOOLEAN
);

CREATE TABLE IF NOT EXISTS dd_exercises(
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  exercise_name VARCHAR(255),
  exercise_xp INT,
  is_rest BOOLEAN,
  sets INT, 
  reps INT, 
  rest_time INT 
);

-- Create tables with fk's:
CREATE TABLE IF NOT EXISTS dd_users (
  clerk_id TEXT PRIMARY KEY,
  username VARCHAR(255),
  gender VARCHAR(255),
  age INT,
  weight INT,
  bio TEXT,
  prog_start_date DATE,
  classes_id_fk INT REFERENCES dd_classes(id) --foreign key
);

CREATE TABLE IF NOT EXISTS dd_prog (
  id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  duration_weeks INT,
  classes_id_fk INT REFERENCES dd_classes(id) --foreign key
);

CREATE TABLE IF NOT EXISTS dd_progression (
   id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
   total_xp INT,
   level INT,
  user_id_fk TEXT REFERENCES dd_users(clerk_id) --foreign key
);

-- Create junction tables:
CREATE TABLE IF NOT EXISTS jctn_dd_prog_dd_prog_weeks (
 weeks_id_fk INT REFERENCES dd_prog_weeks(id), --foreign key
 prog_id_fk INT REFERENCES dd_prog(id), --foreign key
 PRIMARY KEY (weeks_id_fk, prog_id_fk)
);

CREATE TABLE IF NOT EXISTS jctn_dd_prog_weeks_dd_workoutss (
 workouts_id_fk INT REFERENCES dd_workouts(id), --foreign key
 weeks_id_fk INT REFERENCES dd_prog_weeks(id), --foreign key
 PRIMARY KEY (workouts_id_fk, weeks_id_fk)
);

CREATE TABLE IF NOT EXISTS jctn_dd_workouts_dd_excercises (
 workouts_id_fk INT REFERENCES dd_workouts(id), --foreign key
 exercises_id_fk INT REFERENCES dd_exercises(id), --foreign key
 PRIMARY KEY (workouts_id_fk, exercises_id_fk)
);

--! ----------------------------------------------------------------

--* (2) INSERT SEED DATA
