import { useContext } from "react";
import  { ProjectContext } from "./store/project";
import React, {useRef} from 'react'
export default function NewTask({addTask}){
    const {createTask} =useContext(ProjectContext)
    let name=useRef();
    function handleTask(){
        createTask({name:name.current.value})
        name.current.value=''
    }
    return(
        <div>
            <input type="text" ref={name} />
            <button className="btn btn-secondary" onClick={handleTask}>Add</button>
        </div>
    )
}