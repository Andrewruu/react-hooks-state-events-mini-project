import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTask] = useState(TASKS)
  const [category, setCat] = useState("All")

  function handleNewTask(task){
    setTask([...tasks, task])
  }

  function handleDeleteTask(deletedTaskText) {
    setTask(tasks.filter((task) => task.text !== deletedTaskText));
  }

  const taskToDisplay = tasks.filter((tasks) => {
    if (category === "All") return true;

    return tasks.category === category;
  })
 
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter category={CATEGORIES} selectedCat={category} onSelectCat={setCat}/>
      <NewTaskForm category={(CATEGORIES.filter((cat)=> cat !== "All"))} onTaskFormSubmit={handleNewTask} />
      <TaskList tasks={taskToDisplay} onDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
