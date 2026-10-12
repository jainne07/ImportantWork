import React, {useState, useEffect}from 'react';

export default function UseEx() {
  const [count, setCount] = useState(0);
  const [name, setName]=useState("neha");
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    console.log('called')
    setCalculation(() => count * 2);
  }, [count]); // <- add the count variable here


  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <br/>
      <button onClick={() => setName(prev=> prev === "Guddu"? "Neha": "Guddu")}>{name}</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}
