import GoalForm from "./GoalForm";
import GoalList from "./GoalList";
import { useEffect, useState, useRef } from "react";



function Goals() {
  const [goalList, setGoalList] = useState([]);

const Id = useRef(1); 
  function addGoal(goalName) {

    const goal = {
      id: Id.current++,
      name: goalName,
      done: false,
    }

    setGoalList([...goalList, goal]);
  }

  function toggleGoalDone(goalId) {

    const updatedList = goalList.map(goal =>
      goal.id === goalId ? { ...goal, done: !goal.done } : goal
    );

    setGoalList(updatedList);
  }

  function deleteGoal(goalId) {

    const updatedList = goalList.filter(goal => 
      goal.id !== goalId);

    setGoalList(updatedList);
  }

  useEffect(() => {

    const storedGoals = localStorage.getItem('goalList');
    const storedId = localStorage.getItem('Id')

    if (storedGoals) {
      setGoalList(JSON.parse(storedGoals));
    }
    if (storedId) {
          Id.current = parseInt(storedId);
        }
      }, []);

  useEffect(() => {

    localStorage.setItem('goalList', JSON.stringify(goalList));

  }, [goalList]);

  return (
    <>
      <GoalList 
        goalList={goalList} 
        onToggleGoal={toggleGoalDone} 
        deleteGoal={deleteGoal} 
      />

      <GoalForm 
        onSubmit={
        (goalName) => addGoal(goalName)
        } 
      />
    </>
  )
}

export default Goals
