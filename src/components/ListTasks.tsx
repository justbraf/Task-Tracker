

const ListTasks = ({ tasks, setMyTasks }) => {
    const handleCompleteTask = (taskId) => {
        // create a new array of tasks with the completed key toggled for the task with the given taskId
        setMyTasks(tasks.map(task => task.id === taskId ?
            // deconstruct the task object and toggle the completed key
            { ...task, completed: !task.completed }
            :
            // else return the task objectas is, if the taskId does not match task.id
            task
        ))
    }

    const handleDeleteTask = (taskId) => {
        // create a new array of tasks without the task the matches the given taskId
        setMyTasks(tasks.filter(task => task.id !== taskId))
    }

    return (
        <ul className={"m-4 flex flex-col gap-2"}>
            {tasks.map(task => (
                <li
                    key={task.id}
                    className={`bg-white rounded shadow-lg p-2 flex gap-2 cursor-pointer ${task.completed ? "line-through text-gray-500" : ""}`}                    
                >
                    {/* check if the task is completed */}
                    {task.completed ?
                    // if completed is true, show a checkmark svg icon
                        <svg
                            className="w-4"
                            onClick={() => handleCompleteTask(task.id)}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 640">
                            {/* <!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--> */}
                            <path d="M480 96C515.3 96 544 124.7 544 160L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 160C96 124.7 124.7 96 160 96L480 96zM160 144C151.2 144 144 151.2 144 160L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 160C496 151.2 488.8 144 480 144L160 144zM390.7 233.9C398.5 223.2 413.5 220.8 424.2 228.6C434.9 236.4 437.3 251.4 429.5 262.1L307.4 430.1C303.3 435.8 296.9 439.4 289.9 439.9C282.9 440.4 276 437.9 271.1 433L215.2 377.1C205.8 367.7 205.8 352.5 215.2 343.2C224.6 333.9 239.8 333.8 249.1 343.2L285.1 379.2L390.7 234z" />
                        </svg>
                        :
                        // else if completed is false, show a svg square icon
                        <svg
                            className="w-4"
                            onClick={() => handleCompleteTask(task.id)}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 640">
                            {/* <!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--> */}
                            <path d="M480 144C488.8 144 496 151.2 496 160L496 480C496 488.8 488.8 496 480 496L160 496C151.2 496 144 488.8 144 480L144 160C144 151.2 151.2 144 160 144L480 144zM160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96z" />
                        </svg>
                    }
                    {task.text}
                    {/* svg trash can icon */}
                    <svg
                        className="w-4 ml-auto cursor-pointer" 
                        onClick={()=> handleDeleteTask(task.id)}
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 640 640">
                        {/* <!--!Font Awesome Free v7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--> */}
                        <path d="M232.7 69.9L224 96L128 96C110.3 96 96 110.3 96 128C96 145.7 110.3 160 128 160L512 160C529.7 160 544 145.7 544 128C544 110.3 529.7 96 512 96L416 96L407.3 69.9C402.9 56.8 390.7 48 376.9 48L263.1 48C249.3 48 237.1 56.8 232.7 69.9zM512 208L128 208L149.1 531.1C150.7 556.4 171.7 576 197 576L443 576C468.3 576 489.3 556.4 490.9 531.1L512 208z"/>
                    </svg>
                </li>
            ))}
        </ul>
    )
}

export default ListTasks