import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({task}){ 

    const {DeleteTask} = useContext(TaskContext); 
   // deletetask desde el taskContext
    
    return (
        <div key={task.id} className="bg-card text-white p-8 rounded-lg">
                <h1 className="text-xl font-bold capitalize">{task.title}</h1>
                <p>{task.description}</p>
                <button className="bg-red-600 px-4 py-2 mt-5 hover:bg-red-500 rounded-lg" 
                onClick={() => DeleteTask(task.id)}>Eliminar</button>
        </div>

    )
}

export default TaskCard;