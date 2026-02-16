export const mockProgram = {
  name: "Barbarian  Powerbuilding", //----> we haven't included this in our database but i think it will look more professional
  level: "Intermediate", //--------> also not included but we could...
  currentWeek: 1,
  totalWeeks: 8, // --------> could make this 4 for ease ...
  weeklyXpGoal: 5000,
  weeklyXpEarned: 3250,
  workoutsCompleted: 3,
  workoutsTotal: 5,
  currentStreak: 7,

  weeks: [
    {
      weekNumber: 1,
      days: [
        {
          id: 1,
          dayName: "1",
          workoutName: "Heavy Squat Day",
          subtitle: "Lower Body • Power",
          status: "completed", //--------------------- "completed", "rest", "today", "upcoming", "locked"...ect ect
          exercises: [
            {
              name: "Squat",
              sets: 5,
              reps: 5,
              weight: 315,
              unit: "lbs",
              xp: 450,
              icon: "🦵",
            },
            {
              name: "Romanian Deadlift",
              sets: 3,
              reps: 8,
              weight: 225,
              unit: "lbs",
              xp: 320,
              icon: "🦵",
            },
            {
              name: "Leg Extention",
              sets: 3,
              reps: 12,
              weight: 450,
              unit: "lbs",
              xp: 280,
              icon: "🦵",
            },
          ],
          totalXp: 1250,
        },
        {
          id: 2,
          dayName: "2",
          workoutName: "Rest & Recovery",
          subtitle: "Active Recovery Day",
          status: "rest",
          exercises: [],
          totalXp: 0,
          restMessage: "Light stretching, walking, or yoga recommended",
        },
        // ... more days
      ],
    },
    {
      weekNumber: 2,
      days: [
        // Current week data
      ],
    },
  ],
};

// ----------------------------------------------------------------------Helper function to get current week*********
export function getCurrentWeek(programData) {
  return programData.weeks.find(
    (week) => week.weekNumber === programData.currentWeek,
  );
}
// Helper function to get a specific week by number
export function getWeek(programData, weekNumber) {
  return programData.weeks.find((week) => week.weekNumber === weekNumber);
}

// ------------------------------------------------------------Helper to get day status
export function getDayStatus(day, currentDate) {
  // sudo logic... real logic needed
  return day.status;
}

export const classData = {
  1: {
    imageSrc: "/barbarian.png",
    imageAlt: "Barbarian",
    name: "Barbarian",
    details: {
      title: "Barbarian Master of Raw Strength",
      tag1: "Dominate with heavy compound lifts and progressive overload",
      tag2: "Perfect for power-building and strength gains!",
    },
    profs: { p1: "Heavy Squats", p2: "Deadlifts", p3: "Bench Press" },
    stats: { Strength: 84, Stamina: 60, Vitality: 70 },
  },
  2: {
    imageSrc: "/rogue.gif",
    imageAlt: "Rogue",
    name: "Rogue",
    details: { title: "", tag1: "", tag2: "" },
    profs: { p1: "y", p2: "y", p3: "y" },
    stats: { Strength: 1, Stamina: 1, Vitality: 1 },
  },
  3: {
    imageSrc: "/knight_type_a.png",
    imageAlt: "Paladin",
    name: "Paladin",
    details: { title: "", tag1: "", tag2: "" },
    profs: { p1: "x", p2: "x", p3: "x" },
    stats: { Strength: 2, Stamina: 2, Vitality: 2 },
  },
};
