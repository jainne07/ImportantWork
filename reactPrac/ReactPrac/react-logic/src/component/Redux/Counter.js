import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../Redux/index";
export default function Counter() {
  // const counter = useSelector((state) => state.counter);
  // const show = useSelector((state) => state.showCounter);
   const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();
  // const incr = () => {
  //   dispatch({ type: "increment" });
  // };
  // const decr = () => {
  //   dispatch({ type: "decrement" });
  // };
  // const tog = () => {
  //   dispatch({ type: "toggle" });
  // };
const incr = () => {
    dispatch(counterActions.increment());
  };
  const decr = () => {
    dispatch(counterActions.decrement());
  };
  const tog = () => {
    dispatch(counterActions.toggleCounter());
  };
  return (
    <>
      {show && <h1 className="text-primary">{counter}</h1>}
      <div>
        <button className="btn btn-secondary mr-2" onClick={incr}>
          increment
        </button>
        <button className="btn btn-secondary mr-2" onClick={decr}>
          Decrement
        </button>
        <button className="btn btn-secondary mr-2" onClick={tog}>
          Toggle
        </button>
      </div>
    </>
  );
}
