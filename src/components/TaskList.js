import React, {useState} from "react";
import Task from "./Task";
import { v4 as uuid } from "uuid";



function TaskList({tasks, onDeleteTask}) {
  
  return (
    <div className="tasks">
      <ul>
        {tasks.map((task) => (
            <Task key={uuid()} text={task.text} category={task.category} onDeleteTask={onDeleteTask}/>
        
        ))}

      </ul>
    </div>
  );
}

export default TaskList;
