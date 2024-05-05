import Todos from './Component/Todos';
//import Todo from './Component/Todo';
import Newtodo from './Component/Newtodo';
import './App.css';
//import { useState } from 'react';
import TodoContextProvider from './Component/store/todoContext';

function App() {
  // const [todos, setTodos] =useState<Todo[]>([new Todo('Learn React'), new Todo('Learn TypeScript')]) ;
  // const addTodo=(newTodo: string)=>{
  //  const newTo={
  //   id: Math.random(),
  //   text: newTodo
  //  }
  //   setTodos((prevState: any)=>[...prevState, newTo])
  // }
  // const removeTodo=(id: number)=>{
  //    setTodos((prevState: any)=>todos.filter(v=>v.id !== id))
  //  }
  return (
    <TodoContextProvider>
      <div className="app">
        <Newtodo />
        <Todos />
      </div>
      {/* <Newtodo onAdd={addTodo}/>
      <Todos items={todos} onRemove={removeTodo}/> */}
    </TodoContextProvider>
  );
}

export default App;