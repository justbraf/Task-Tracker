import { useState } from "react"

const AddTask = ({tasks, setMyTasks}) => {
    const [newTask, setNewTask] = useState("")

    const handleAddTask = () => {
        if (!newTask.trim()) return
        
        setMyTasks([
            ...tasks,
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