import React, { useContext } from 'react';
import { TodoContext } from './store/todoContext';
import './Todos.css'
 //const Todos: React.FC<{items: Todo[], onRemove: (id: number)=> void}>=function Todos(props){
  const Todos: React.FC=function Todos(){ 
    const todoCtx=useContext(TodoContext);
    return (
        <ul>
          {todoCtx.todos.map((item) => (
            <li key={item.id} onClick={()=>todoCtx.removeTodo(item.id)}>{item.text}</li>
          ))}
        </ul>
      );
}
export default Todos