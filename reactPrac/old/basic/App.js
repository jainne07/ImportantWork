//import logo from './logo.svg';
import './App.css';
import LifeCycle from './component/LifeCycle';
import PureComp from './component/PureComp';
import ClickExample from './component/ClickExample';
import HoverState from './component/HoverState'; 
import Form from './component/Form';
import Navbar from './component/Navbar';
import React, {useState,Suspense,lazy, createContext} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CreateRef from './component/CreateRef';
import ContextEx from './component/ContextEx';
import RefExFn from './component/RefExFn.js';
import UseReducer from './component/UseReducer';
const User =lazy(()=>import('./component/User'));
const Counter =lazy(()=>import('./component/Counter')); 
export const SamText=createContext();
function App() {
   const [count, setCount] = useState(1)
  const [show, setShow] = useState(true);
  const showHoc=()=>{
    setShow(!show)
  }
const increment=()=>{
  setCount(count+1)
} 
const box = {
  color: "black",
  fontSize: '23px'
}

const shadow = {
  background: "honeydew",
  boxShadow: "1px 1px 5px -1px #cccd"
}
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Switch>
          <Route path="/" exact><h3>{count}</h3>
       <div><button onClick={increment}>Increment</button></div>
       <div style={{...box, ...shadow}}>
         <h1>Hello React</h1>
      </div>
       </Route>
          <Route path="/user" ><Suspense fallback={<div>Loading User...</div>}>
    
       <div>
         <p>High order example</p>
         <div style={{width:"465px",overflow:"hidden",margin:"0px auto"}}>
           <User cmp={Counter} color="lightYellow" name="Sam"/>
            <User cmp={Counter} color="linen" name="Mary"/>
         </div>
       </div>
   
     </Suspense></Route>
     <Route path="/purecomp"  component={PureComp}></Route>
         <Route path="/lifecycle" >{show && <LifeCycle />}
      <button onClick={showHoc} style={{margin:"10px auto"}}>Show Hoc</button></Route>
         <Route path="/clickable" component={ClickExample}></Route>
         <Route path="/hoverable" component={HoverState}></Route>
         <Route path="/form" component={Form}></Route>
         <Route path="/refex" component={CreateRef}></Route>
         <Route path="/useref" component={RefExFn}></Route>
         <Route path="/usereducer" component={UseReducer}></Route>
         <Route path="/useContext">
           <SamText.Provider value={{childColor:"red",valueFetch:"This is value fetch from parent"}}>
             <ContextEx />
           </SamText.Provider>

           </Route>
         <Route path="*"><h3 style={{color:"red",fontSize:"22px"}}>Not found</h3></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
