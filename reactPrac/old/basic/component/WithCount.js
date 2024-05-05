import React,{useState} from 'react'
/* const WithCount = NewComponent => {
  return function WithCount() {
    const [count, setCount] = useState(1)
    const increment=()=>{
        setCount(count+1)
      }
    return (
        <div>
             <NewComponent dataCount={count} click={increment}/>
        </div>
    )
}
}
export default WithCount */


export default function WithCount(NewComponent) {
 return function WithCount() {
  const [count, setCount] = useState(1)
  const increment=()=>{
      setCount(count+1)
    }
    return (
      <div>
              <NewComponent dataCount={count} click={increment}/>
      </div>
    )
  }
}
