import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  

  function submitHandler(e) {
    e.preventDefault();
    if (input.trim() === "") {
      alert("Please enter a task");
      return;
    }
    setTasks([...tasks, input]);
    setInput("");
  }

  function deleteHandler(index) {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  }

  return (
    <>
      <div className="wrapper">
        <h1>Todo Board</h1>

        <div className="form-container">
          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Add a new task..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button>Add the Task</button>
            
          </form>
      
          
        </div>
        
        {
          tasks.length>3 && (
            <button className="delete-all task-btn" onClick={()=>setTasks([])}>Delete All Tasks</button>
          )
        }

        {tasks.length > 0 ? (
          <div className="tasklist-container">
            {tasks.map((task, index) => (
              <div className="task" key={index}>
                {task}
                <button className="task-btn" onClick={ ()=>deleteHandler(index)}>Delete</button>
              </div>
            ))}
          </div>
        ) : (
          <div>No Tasks yet</div>
        )}
      </div>
    </>
  );
}

export default App;
