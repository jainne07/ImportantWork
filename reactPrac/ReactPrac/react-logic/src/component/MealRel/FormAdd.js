import {useRef} from 'react'
export default function FormAdd(props){
    const inputRef=useRef()
    const submitHandle=(e)=>{
        e.preventDefault();
        const enterValue=inputRef.current.value;
        const enterValueNum=+enterValue
        console.log(enterValueNum);
        if( enterValueNum.length < 6){
        return;
        }
        props.addCart(enterValueNum)
    }
    return(
        <form onSubmit={submitHandle}>
        <div><input id={props.id} type="number" min="1" max="5" step="1" defaultValue="1" ref={inputRef}/></div>
        <button className="btn btn-primary btn-sm my-2">+Add</button>
        </form>
    )
}