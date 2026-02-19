import Link from 'next/link';

export default function DayCard({ day }) {
  //added this to debugg
    console.log('Day:', day.dayName, 'Status:', day.status, 'Total XP:', day.totalXp, 'ID:', day.id);

  const getStatusBadge = () => {
    switch(day.status) {
      case 'completed':
        return <span className="status-badge completed">✓ Completed</span>;
      case 'today':
        return <span className="status-badge today">Today&apos;s Workout</span>;
      case 'rest':
        return <span className="status-badge rest">Rest Day</span>;
      case 'locked':
        return <span className="status-badge locked">🔒 Unlocks Soon</span>;
      default:
        return <span className="status-badge">Upcoming</span>;
    }
  };

  const getActionButton = () => {
    if (day.status === 'completed') {
      return <button className="day-action secondary">View Details</button>;
    }
    if (day.status === 'today') {
      
      return (
        <Link href={`/workout/log?day=${day.id}`}>
          <button className="day-action">Start Workout →</button>
        </Link>
      );
    }
    if (day.status === 'rest') {
      return null;
    }
    if (day.status === 'locked') {
      return null;
    }
    return (
      <Link href={`/workout/log?day=${day.id}`}>
        <button className="day-action secondary">Preview</button>
      </Link>
    );
  };

  return (
    <div className={`day-card ${day.status}`}>
      <div className="day-header">
        <div className="day-title-section">
          <div className="day-date">Day {day.dayName}</div>
          <h3 className="day-name">{day.workoutName}</h3>
          <div className="day-subtitle">{day.subtitle}</div>
        </div>
        <div className="day-status">
          {getStatusBadge()}
        </div>
      </div>

      <div className="day-body">
        {day.status === 'rest' ? (
          <div className="rest-message">
            <p>🧘 {day.restMessage}</p>
          </div>
        ) : (
          <ul className="exercise-list">
            {day.exercises.map((exercise, idx) => (
              <li key={idx} className="exercise-item">
                <div className="exercise-icon">{exercise.icon}</div>
                <div className="exercise-details">
                  <div className="exercise-name">{exercise.name}</div>
                  <div className="exercise-sets">
                    {exercise.sets} sets × {exercise.reps} reps 
                    {exercise.weight ? ` @ ${exercise.weight} ${exercise.unit}` : ''}
                  </div>
                </div>
                <div className="exercise-xp">+{exercise.xp} XP</div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {day.totalXp > 0 && (
        <div className="day-footer">
          <div className="estimated-xp">
            {day.status === 'completed' ? 'Total XP:' : 'Estimated XP:'} 
            <span className="xp-value"> {day.totalXp} XP</span>
          </div>
          {getActionButton()}
        </div>
      )}
    </div>
  );
}