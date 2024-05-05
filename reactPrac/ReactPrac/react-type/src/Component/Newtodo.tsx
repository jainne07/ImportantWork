import { FormEvent, useContext, useRef } from "react";
import { TodoContext } from "./store/todoContext";

//const Newtodo: React.FC<{onAdd:(text: string)=>void}>=function Newtodo(props){
  const Newtodo: React.FC=function Newtodo(){
  const todoCtx=useContext(TodoContext);
    const todoTextInputRef=useRef<HTMLInputElement>(null)
    const submitHandler=(event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value;
    
        if (enteredText.trim().length === 0) {
          return;
        }
        console.log(enteredText)
        todoCtx.addTodo(enteredText)
        todoTextInputRef.current!.value=''
    }
    return (
        <form onSubmit={submitHandler}>
        <label htmlFor='text'>Todo text</label>
        <input type='text' id='text' ref={todoTextInputRef} />
        <button>Add Todo</button>
      </form>
      );
}
export default Newtodo