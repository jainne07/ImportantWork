import React, {useRef, useState,useEffect} from "react";
function App() {
  const [data, setData] = useState([]);
  const name=useRef()
  useEffect(() => {
    if(data){
      localStorage.setItem('User', JSON.stringify(data));
    }
  }, [data]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('User'));
    if (items) {
     setData(items);
    }
  }, []);
 
  const submitData=(e)=>{
    e.preventDefault()
    setData((prevState) =>
     [...prevState, name.current.value]) 
   }
   const deleteAll=(e)=>{
    e.preventDefault()
    localStorage.clear();
    setData([])
   }
   const deletePar=(i)=>{
    const dataMain=data.filter((item,index)=> index !== i)
    setData(dataMain)
    console.log(dataMain)
    if(!dataMain){
      console.log('no data')
       localStorage.clear();
    }else{
      console.log('new data')
      localStorage.setItem('User', JSON.stringify(dataMain));
    }
   }
   
   

  return (
    <>
      <h1>React data</h1>
      <div >
        {data && data.map((item,index)=>
        <>
        <li key={index} onClick={()=>deletePar(index)}>{item}</li>
        </>
        )}
        <input type="text" ref={name}/>
        <br />
        <button onClick={submitData}>Add</button>
        <br />
        <button onClick={deleteAll}>DeleteAll</button>
        <br />
      </div>
      </>
  );
}

export default App;
