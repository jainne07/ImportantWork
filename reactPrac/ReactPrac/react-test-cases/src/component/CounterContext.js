import { createContext, useState } from "react";

export const CounterContext=createContext({
    counter:0,
    incr:()=>{},
    decr:()=>{}
})

export default function CounterContextProvider({children}){
const [counter,setCounter]=useState(0)
const increment=()=>{
 setCounter(prevState=> prevState+1)
}
const decrement=()=>{
    setCounter(prevState=> prevState - 1 )
}
const counterVal={
    counter: counter,
    incr: increment,
    decr: decrement
}
return (
    <CounterContext.Provider value={counterVal}>
        {children}
    </CounterContext.Provider>
)
}