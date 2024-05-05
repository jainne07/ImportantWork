import { createContext, useState } from "react";
import Todo from "../Todo";
interface Props {
    children: React.ReactNode;
  }
type TodosContextObj = {
    todos: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: number) => void;
  };
export const TodoContext = createContext<TodosContextObj>({
    todos: [],
    addTodo: () => { },
    removeTodo: () => { }
})
const TodoContextProvider: React.FC <Props>= ({children}) => {
    const [todos, setTodos] = useState<Todo[]>([new Todo('Learn React'), new Todo('Learn TypeScript')]);
    const addTodo = (newTodo: string) => {
        const newTo = {
            id: Math.random(),
            text: newTodo
        }
        setTodos((prevState: any) => [...prevState, newTo])
    }
    const removeTodo = (id: number) => {
        setTodos((prevState: any) => todos.filter(v => v.id !== id))
    }
    const data: TodosContextObj={
        todos: todos,
        addTodo: addTodo,
        removeTodo: removeTodo
    }
    return (
        <TodoContext.Provider value={data}>
            {children}
        </TodoContext.Provider>
    )
}
export default TodoContextProvider;