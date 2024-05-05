import React from 'react'
//import  { useDispatch, useSelector } from 'react-redux';
//import {increment, decrement, signin} from '../action';
import PostList from './PostList'
export default function Home() {
    /* const counter = useSelector(state => state.counter)
    const isLogged = useSelector(state => state.isLogged)
    const dispatch = useDispatch(); */
    return (
    <div className="container">
    {/* <h2>Learn redux</h2>
    <p>counter {counter}</p>
    <div className="m-2"><button onClick={()=>dispatch(increment())} className="btn btn-primary">+</button> <button onClick={()=>dispatch(decrement())} className="btn btn-primary">-</button></div>
    <div className="m-2"><button onClick={()=>dispatch(signin())} className="btn btn-primary">signin</button></div>
    <h4 className="text-dark m-2 py-2">{isLogged && <div className="bg-primary text-white p-2"> Logged </div>}</h4> */}
       <PostList /> 
        </div>
    )
}
