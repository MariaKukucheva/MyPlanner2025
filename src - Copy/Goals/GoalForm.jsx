import { useState } from "react";
import { TextField } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';

function GoalForm({ onSubmit}) {

  const [goal, setGoal] = useState('');
  
  const [error, setError] = useState(false);

   const handleSubmit = (e) => {
    e.preventDefault();

    if (goal.trim() === '') {
      setError(true);
      return;
    }

    onSubmit(goal);
    setGoal('');
    setError(false);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField  
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          helperText={error ? 'Please enter a goal' : ''}
          label="Add goal" 
          color="secondary" 
          focused  
          size="small"
          error={error}
        />

        <IconButton
          type="submit"
          aria-label="add"
          color="secondary"
          border="none">
          <AddIcon />
        </IconButton>
      </form>
    </>
  )
}

export default GoalForm