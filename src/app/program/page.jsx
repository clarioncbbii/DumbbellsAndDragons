'use client';

import { useState } from 'react';
import { mockProgram, getWeek } from '@/app/lib/mockData';
import ProgramHeader from '@/components/program/ProgramHeader';
import WeekOverview from '@/components/program/WeekOverview';
import DayCard from '@/components/program/DayCard';
import './program.css';

export default function ProgramPage() {
  
  const [currentWeekNum, setCurrentWeekNum] = useState(mockProgram.currentWeek);
  
  // -------------------------Get the data for the current week being viewed
  const currentWeek = getWeek(mockProgram, currentWeekNum);

  // NAVIGATION:---> Functions to change weeks when arrows are clicked
  const goToPrevWeek = () => {
    if (currentWeekNum > 1) {
      setCurrentWeekNum(currentWeekNum - 1);
    }
  };

  const goToNextWeek = () => {
    if (currentWeekNum < mockProgram.totalWeeks) {
      setCurrentWeekNum(currentWeekNum + 1);
    }
  };

  // TODO: Replace mock data with our real database when ready might need to discuss the database or i can chaneg this to match whatever we actaully have ... 
   // const program = await getProgramFromDatabase(userId);
  // const currentWeek = getWeek(program, currentWeekNum);

  return (
    <div className="program-page">
      {/*  Shows title... i know we decided against this but i think its worth revisiting, week navigation, and program info badges */}
      <ProgramHeader 
        title="Your Training Program"
        programName={mockProgram.name}
        level={mockProgram.level}
        currentWeek={currentWeekNum}
        totalWeeks={mockProgram.totalWeeks}
        onPrevWeek={goToPrevWeek}
        onNextWeek={goToNextWeek}
      />

      {/* OVERVIEW: Shows weekly progress stats and XP goal.... */}
      <WeekOverview 
        weeklyXpGoal={mockProgram.weeklyXpGoal}
        weeklyXpEarned={mockProgram.weeklyXpEarned}
        workoutsCompleted={mockProgram.workoutsCompleted}
        workoutsTotal={mockProgram.workoutsTotal}
        currentStreak={mockProgram.currentStreak}
      />

      {/* Loops through each day in the current week and render a card */}
      <div className="days-grid">
        {currentWeek && currentWeek.days.map((day) => (
          <DayCard key={day.id} day={day} />
        ))}
      </div>
    </div>
  );
}