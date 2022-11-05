import React, {useState} from "react";

function NewTaskForm({category,onTaskFormSubmit}) {
  const [text, setText] = useState("")
  const [cat, setCat] = useState("code")

  function handleText(e){
    setText(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    const newTask = {
      text:text,
      category:cat
    }
    onTaskFormSubmit(newTask)
    setText("")
    setCat("code")
  }


  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={handleText}/>
      </label>
      <label>
        Category
        <select name="category">
          {category.map((categories)=>(
          <option key={categories}>{categories}</option>
          ))}

        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
