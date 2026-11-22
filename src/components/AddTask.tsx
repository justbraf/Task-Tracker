import { useState } from "react"
import type { TaskType } from "../logic/interfaces"

const AddTask = ({ tasks, setMyTasks }: { tasks: TaskType[] | [], setMyTasks: React.Dispatch<React.SetStateAction<TaskType[]>> }) => {
    const [newTask, setNewTask] = useState<string>("")

    const handleAddTask = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (!newTask.trim()) return

        setMyTasks([
            ...tasks,
            {
                id: crypto.randomUUID(),
                text: newTask,
                completed: false
            }
        ])
        setNewTask("")
        const prev = e.currentTarget.previousElementSibling
        if (prev instanceof HTMLElement) {
            prev.focus();
        }
    }

    return (
        <div className="flex flex-col">
            <input
                value={newTask}
                onChange={e => setNewTask(e.target.value)}
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