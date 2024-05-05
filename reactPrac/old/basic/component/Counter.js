import React, { useState }from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
    const incr=()=>{ setCount(count+1)}
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={incr}>Increment</button>   
        </div>
    )
}

