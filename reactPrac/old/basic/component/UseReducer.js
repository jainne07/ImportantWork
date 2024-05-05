import React,{ useReducer } from 'react'
const initialState = 0
const reducer = (state, action) => {
  switch (action) {
    case 'increment': return state + 1
    case 'decrement': return state - 1
    case 'reset': return 0
    default: throw new Error('Unexpected action')
  }
}
export default function UseReducer() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h2>{count}</h2>
      <div style={{margin:"4px"}}><button onClick={() => dispatch('increment')}>+1</button></div>
      <div style={{margin:"4px"}}><button onClick={() => dispatch('decrement')}>-1</button></div>
      <div><button onClick={() => dispatch('reset')}>reset</button></div>
        </div>
    )
}
