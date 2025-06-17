import { useState } from "react";

function GoalForm({ onSubmit }) {

  const [goal, setGoal] = useState('');

  return (
    <>
      <input
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      />
      
      <button onClick={() => {
        onSubmit(goal);
        setGoal("");
      }}>

        Add Goal

      </button>

      
    </>
  )
}

export default GoalForm