function GoalList({ goalList, onToggleGoal, deleteGoal }) {

  return (
    <>
      <ul>
        {goalList.map(goal => (
          <li key={goal.id}>
            <label>

              <input
                type="checkbox"
                checked={goal.done}
                onChange={() => onToggleGoal(goal.id)}
              />

              {goal.name}

              <button onClick={() => deleteGoal(goal.id)}>
                Delete
              </button>

            </label>
          </li>
        ))}
      </ul>
    </>
  )
}
export default GoalList