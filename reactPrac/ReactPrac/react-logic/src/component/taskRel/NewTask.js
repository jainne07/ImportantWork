import React, {useRef} from 'react'
export default function NewTask({addTask}){
    let name=useRef();
    function handleTask(){
        addTask({name:name.current.value})
        name.current.value=''
    }
    return(
        <div>
            <input type="text" ref={name} />
            <button onClick={handleTask}>Add</button>
        </div>
    )
}