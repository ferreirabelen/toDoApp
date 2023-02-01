import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm(){

const [title, setTitle] = useState("");
const [description, setDescription] = useState("");

const {CreateTask} = useContext(TaskContext);


function HandleSubmit(e){
    e.preventDefault();
    CreateTask({                       //le paso title y description en un objeto, en context como es un props tengo que usar task.title y task.description
        title,
        description
    })
    setTitle("")
    setDescription("")
}


    return (
    <div className="max-w-md mx-auto">
        <form onSubmit={HandleSubmit} className="bg-form p-4 mb-5 ">
        <h1 className="text-2xl font-bold text-white mx-auto p-5">Añadir Tarea</h1>
            <input type="text" placeholder="Escribe tu Tarea"
            onChange={(e) => {
                setTitle(e.target.value)                                     //me guarda el valor de lo que la persona escribe en setTitle
            }}
            value={title}
            autoFocus
            className="bg-formtext-300 p-3 w-full mb-2"
            />
            <textarea placeholder="Escribir descripcion de la tarea"
            onChange={(e) => {
                setDescription(e.target.value)                              //me guarda el valor de lo que la persona escribe en setdesciption
            }}
            value={description}
            className="bg-formtext-300 p-3 w-full mb-2"

            ></textarea>

            <button className="bg-green-500 mx-auto p-2 hover:bg-green-400 mt-3 text-white"
            >Guardar Tarea</button>
        </form>
    </div>
    )
}

export default TaskForm