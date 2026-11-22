import { useState } from "react"
import AddTask from "./components/AddTask"
import ListTasks from "./components/ListTasks"
import type { TaskType } from "./logic/interfaces"

function App() {
  const [tasks, setTasks] = useState<TaskType[] | []>([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build Task Tracker", completed: false }
  ])
  return (
    <div className="flex flex-col items-center bg-stone-100 p-4 h-screen">
      <h1 className="text-3xl font-bold underline mb-4">Task Tracker</h1>
      <AddTask tasks={tasks} setMyTasks={setTasks} />
      <ListTasks tasks={tasks} setMyTasks={setTasks} />
    </div>
  )
}

export default App