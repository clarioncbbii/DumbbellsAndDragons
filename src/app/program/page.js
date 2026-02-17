'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@clerk/nextjs';
import ProgramHeader from '@/components/program/ProgramHeader';
import WeekOverview from '@/components/program/WeekOverview';
import DayCard from '@/components/program/DayCard';
import { getWeek } from '@/lib/mockData'; // TODO: -----> remove once db is fully running and move getWeek helper function
import './program.css';

export default function ProgramPage() {
  const { isLoaded, userId } = useAuth();
  const [program, setProgram] = useState(null);
  const [currentWeekNum, setCurrentWeekNum] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProgram() {
      
      if (!isLoaded) return;

      if (!userId) {
        window.location.href = '/sign-in';
        return;
      }

      try {
        const response = await fetch('/api/program');
        const data = await response.json();

        if (data.error) {
          console.error('Error loading program:', data.error);
          setError(data.error);

          // TODO: -----> redirect to /createcharacter once character page is built
          // if (data.error.includes('User not found')) {
          //   window.location.href = '/sign-up';
          // }

          setLoading(false);
          return;
        }

        setProgram(data);
        setCurrentWeekNum(data.currentWeek);
        setLoading(false);
      } catch (error) {
        console.error('Failed to load program:', error);
        setError('Failed to load program. Please try again.');
        setLoading(false);
      }
    }

    loadProgram();
  }, [isLoaded, userId]);


  const goToPrevWeek = () => {
    if (currentWeekNum > 1) setCurrentWeekNum(currentWeekNum - 1);
  };

  const goToNextWeek = () => {
    if (program && currentWeekNum < program.totalWeeks) setCurrentWeekNum(currentWeekNum + 1);
  };

  if (!isLoaded || loading) {
    return (
      <div className="program-page">
        <div style={{ padding: '4rem', textAlign: 'center', color: '#64748b', fontSize: '1.25rem' }}>
          Loading program...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="program-page">
        <div style={{ padding: '4rem', textAlign: 'center', color: '#ef4444', fontSize: '1.25rem' }}>
          {error}
        </div>
      </div>
    );
  }

  if (!program) {
    return (
      <div className="program-page">
        <div style={{ padding: '4rem', textAlign: 'center', color: '#64748b', fontSize: '1.25rem' }}>
          No program found. Please complete onboarding.
        </div>
      </div>
    );
  }

  const currentWeek = getWeek(program, currentWeekNum);

  return (
    <div className="program-page">

      <ProgramHeader
        title="Your Training Program"
        programName={program.name}
        level={program.level}
        currentWeek={currentWeekNum}
        totalWeeks={program.totalWeeks}
        onPrevWeek={goToPrevWeek}
        onNextWeek={goToNextWeek}
      />

      <WeekOverview
        weeklyXpGoal={program.weeklyXpGoal}
        weeklyXpEarned={program.weeklyXpEarned}
        workoutsCompleted={program.workoutsCompleted}
        workoutsTotal={program.workoutsTotal}
        currentStreak={program.currentStreak}
      />

      <div className="days-grid">
        {currentWeek && currentWeek.days.map((day) => (
          <DayCard key={day.id} day={day} />
        ))}
      </div>

    </div>
  );
}