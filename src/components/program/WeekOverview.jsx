export default function WeekOverview({ 
  weeklyXpGoal, 
  weeklyXpEarned, 
  workoutsCompleted, 
  workoutsTotal, 
  currentStreak 
}) {
  const completionPercentage = Math.round((weeklyXpEarned / weeklyXpGoal) * 100);
  const workoutPercentage = Math.round((workoutsCompleted / workoutsTotal) * 100);

  return (
    <div className="week-overview">
      <div className="overview-header">
        <h2 className="overview-title">Week Progress</h2>
        <span className="completion-badge">
          {workoutsCompleted}/{workoutsTotal} Complete
        </span>
      </div>
      
      <div className="progress-section">
        <div className="progress-header">
          <span>Weekly XP Goal</span>
          <span>{weeklyXpEarned.toLocaleString()} / {weeklyXpGoal.toLocaleString()} XP</span>
        </div>
        <div className="progress-bar-bg">
          <div 
            className="progress-bar-fill" 
            style={{ width: `${completionPercentage}%` }}
          />
        </div>
      </div>

      <div className="week-stats">
        <div className="week-stat">
          <div className="stat-icon">💪</div>
          <div className="stat-content">
            <div className="stat-value">{workoutsCompleted}</div>
            <div className="stat-label">Workouts Done</div>
          </div>
        </div>

        <div className="week-stat">
          <div className="stat-icon">⚡</div>
          <div className="stat-content">
            <div className="stat-value">{weeklyXpEarned.toLocaleString()}</div>
            <div className="stat-label">XP Earned</div>
          </div>
        </div>

        <div className="week-stat">
          <div className="stat-icon">🔥</div>
          <div className="stat-content">
            <div className="stat-value">{currentStreak} Day</div>
            <div className="stat-label">Current Streak</div>
          </div>
        </div>

        <div className="week-stat">
          <div className="stat-icon">🎯</div>
          <div className="stat-content">
            <div className="stat-value">{completionPercentage}%</div>
            <div className="stat-label">Weekly Goal</div>
          </div>
        </div>
      </div>
    </div>
  );
}