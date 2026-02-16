export default function ProgramHeader({ 
  title, 
  programName, 
  level, 
  currentWeek, 
  totalWeeks,
  onPrevWeek,
  onNextWeek
}) {
  return (
    <div className="page-header">
      <div className="header-top">
        <h1 className="page-title">{title}</h1>
        <div className="week-navigation">
          <button 
            className="nav-button" 
            onClick={onPrevWeek}
            disabled={currentWeek <= 1}
          >
            ←
          </button>
          <div className="week-display">
            Week {currentWeek} of {totalWeeks}
          </div>
          <button 
            className="nav-button" 
            onClick={onNextWeek}
            disabled={currentWeek >= totalWeeks}
          >
            →
          </button>
        </div>
      </div>
      <div className="program-info">
        <span className="info-badge">💪 {programName}</span>
        <span className="info-badge">🔥 {level}</span>
        <span className="info-badge">📅 {totalWeeks}-Week Program</span>
      </div>
    </div>
  );
}