import { Button, Checkbox, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
function GoalList({ goalList, onToggleGoal, deleteGoal, setFilter }) {

  return (
    <>
      <div style={{ marginBottom: "1rem" }}>

        <Button onClick={() => setFilter("all")}
          color="secondary">
          All
        </Button>

        <Button onClick={() => setFilter("active")}
          color="secondary">
          Active
        </Button>
        
        <Button onClick={() => setFilter("completed")}
          color="secondary">
          Completed
        </Button>

      </div>
      <div>
        {goalList.map(goal => (
          <li key={goal.id}>
            <label>
              <Checkbox
                type="checkbox"
                checked={goal.completed}
                onChange={() => onToggleGoal(goal.id)}
                defaultChecked 
                color="success"
              />

              {goal.name}

              <IconButton
                onClick={() => deleteGoal(goal.id)}
                aria-label="delete">
                <DeleteIcon />
              </IconButton>

            </label>
          </li>
        ))}
      </div>
    </>
  )
}
export default GoalList