import GoalForm from "./GoalForm";
import GoalList from "./GoalList";
import { useEffect, useState, useRef } from "react";

function Goals() {
  const [goalList, setGoalList] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loaded, setLoaded] = useState(false);
  const Id = useRef(1); 

  function addGoal(goalName) {

    const goal = {
      id: Id.current++,
      name: goalName,
      completed: false,
    }

    setGoalList([...goalList, goal]);
  }

  function toggleGoalCompleted(goalId) {

    const updatedList = goalList.map(goal =>
      goal.id === goalId ? { ...goal, completed: !goal.completed } : goal
    );

    setGoalList(updatedList);
  }

  function deleteGoal(goalId) {

    const updatedList = goalList.filter(goal => 
      goal.id !== goalId);

    setGoalList(updatedList);
  }

  const filteredGoals = goalList.filter(goal => {
    if (filter === "completed") return goal.completed;
    if (filter === "active") return !goal.completed;
    return true;
  });

  useEffect(() => {

    const storedGoals = localStorage.getItem('goalList');
    const storedId = localStorage.getItem('Id')

    if (storedGoals) {
      try {
        const parsedGoals = JSON.parse(storedGoals).map(goal => ({
          ...goal,
        }));
        setGoalList(parsedGoals);
      } 
      catch (err) {
        console.error("Error parsing localStorage:", err);
      }
    }

    if (storedId) {
      Id.current = parseInt(storedId);
    }
    setLoaded(true);
  }, []);

  useEffect(() => {

  if (!loaded) return;
    localStorage.setItem('goalList', JSON.stringify(goalList));
    localStorage.setItem('Id', Id.current.toString());

  }, [goalList, loaded]);

  return (
    <>
      <GoalForm 
        onSubmit={
        (goalName) => addGoal(goalName)
        } 
      />

      <GoalList 
        goalList={filteredGoals} 
        onToggleGoal={toggleGoalCompleted} 
        deleteGoal={deleteGoal}
        filter={filter}
        setFilter={setFilter}
      />
    </>
  )
}

export default Goals
