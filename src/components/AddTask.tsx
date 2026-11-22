import { useState } from "react"

const AddTask = ({tasks, setMyTasks}) => {
    // state variable to hold the new task text from the controlled input field
    const [newTask, setNewTask] = useState("")

    const handleAddTask = () => {
        // check if the new task is empty
        if (!newTask.trim()) return
        
        setMyTasks([
            // spread the existing tasks
            ...tasks,
            // create a new task object with a unique id, the new task text, and completed set to false
            {
                id:crypto.randomUUID(),
                text: newTask,
                completed:false
            }
        ])
    }

  return (
    <div className="flex flex-col">
        <input 
            value={newTask}
            // pass the text the user types in the input field to the newTask state variable
            onChange={e=>setNewTask(e.target.value)}
            className="border-2 rounded p-1 border-gray-300" 
            type="text" 
            placeholder="Add a task..." 
        />
        <button 
            className="bg-teal-500 px-2 py-1 rounded cursor-pointer"
            onClick={handleAddTask}
        >Add New Task</button>
    </div>
  )
}

export default AddTask