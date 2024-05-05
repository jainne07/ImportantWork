import { useContext } from "react";
import { CounterContext } from "./CounterContext";

export default function Counter() {
  const ctx = useContext(CounterContext);
  return (
    <div style={{ margin: "14px" }}>
      <h1>{ctx.counter}</h1>
      <div>
        <button onClick={ctx.incr}>Increment</button> 
        <button onClick={ctx.decr}>Decrement</button>
      </div>
    </div>
  );
}
