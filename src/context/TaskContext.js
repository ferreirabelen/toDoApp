import { useEffect, useState, createContext} from "react";
import {tasks as data} from "../data/Task"

export const TaskContext = createContext()


export function TaskContextProvider(props){
    const [tasks, setTasks] = useState([]);

    function CreateTask(task){         //guardo en settasks, todo lo que tiene mi array por default y le sumo TASK, paso la function como parametro en el form y ahi sigue.
        setTasks([...tasks,{
            title : task.title,
            id : tasks.length,
            description: task.description
        }])
    }

    function DeleteTask(taskID){
        setTasks(tasks.filter(task => task.id !== taskID));
    }

    useEffect(() => {
        setTasks(data)
    },[])

    return(
        <TaskContext.Provider value={{
            tasks,
            CreateTask,
            DeleteTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )



}