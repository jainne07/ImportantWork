import "./App.css";
import React, { useRef, useState } from "react";
import CoreConcept from "./component/CoreConcept";
import Modal from "./component/Modal";
import Form from "./component/Form";
import Input from './component/Input'
export const userData = {
  name: '',
  email: '',
};
function App() {
  const tabName = ["Components", "JSX", "State"];
  const [showMod,setShowMod] =useState(false)
  const dialog = useRef();
  const form = useRef();
  function handleRestart() {
    form.current.clear();
  }
  const handleClick = () => {
   setShowMod(true)
    dialog.current.showModal();
  };
  const closeClick = () => {
    setShowMod(false)
    dialog.current.close();
  };
  const name = useRef();
  const email = useRef();
 
  function handleSaveData() {
    userData.name = name.current.value;
    userData.email = email.current.value;
    alert(Object.values(userData))
    console.log(userData);
  }
  
  return (
    <div className="App">
      <h2>Learn times </h2>
      <CoreConcept concept={tabName}></CoreConcept>
      <button onClick={handleClick}>open modal</button>
      <Modal ref={dialog} onSelect={closeClick} show={showMod}/>
      <hr />
      
      <Form ref={form} />
      <button onClick={handleRestart}>Restart</button>
      <hr />
      <Input type="text" label="Your Name" ref={name}/>
      <Input type="email" label="Your E-Mail" ref={email} />
      <p id="actions">
        <button onClick={handleSaveData}>Save Data</button>
      </p>  
    </div>
  );
}

export default App;
