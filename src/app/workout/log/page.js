import WorkoutLogger from "@/components/WorkoutLogger/WorkoutLogger";
import { Suspense } from "react";

export default function WorkoutLogPage() {
  return (
    <Suspense fallback={<div className="loading">Loading workout...</div>}>
      <WorkoutLogger />
    </Suspense>
  );
}
