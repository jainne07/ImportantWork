import React,{useRef,useEffect,useState} from 'react'

export default function RefExFn() {
    const funRef = useRef(0);
    const [state, setState] = useState(true)
        useEffect(() => {
        console.log('mount')
        funRef.current.focus()
        return()=>{
            console.log('unmount')
        }
    })
    const inpVal=(e)=>{
        //console.log('update')
        console.log(funRef.current.value);
    }
    const toggle=()=>{
        //console.log('update')
     setState(!state)
    }
    return (
        <div>
            
            <input type="text" ref={funRef} />
                <button onClick={inpVal}>Click Here</button>
                {state && <h1>
               Unmount Example
            </h1>}
            <div style={{margin:"14px 0px"}}><button onClick={toggle}>Show input</button></div>
        </div>
    )
}

