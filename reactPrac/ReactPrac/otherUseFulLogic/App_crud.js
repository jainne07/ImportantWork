import React, { useState, useRef} from "react";
function App() {
  const [data, setData] = useState([]);
  const [editmode, setEditMode] = useState(false);
  const [index, setIndex] = useState();
  const name = useRef();
  const age = useRef();
  const date = useRef();
  
  const submitData = (e) => {
    e.preventDefault();
    if(editmode){
      dataChange(index)
      setEditMode(false)
    }else{
      add()
    }
    //console.log("sdas", nameVal, ageVal, dateVal);
    name.current.value = "";
    age.current.value = "";
    date.current.value = "";
  };
  const deleteData = (i) => {
    setData(data.filter((v) => v.id !== i));
  };
  const editData = (i) => {
    //console.log(data[i], i);
    const index=data.findIndex(
      (item) => item.id === i
    )
    setIndex(index)
    setEditMode(true)
    name.current.value=data[index].name
    age.current.value=data[index].age;
    date.current.value=data[index].date
  };
  const dataChange=(index)=>{
    const dataEdit = {
      id: data[index].id,
      name: name.current.value,
      age: age.current.value,
      date:  date.current.value
    }; 
    const newState = [...data];
    newState[index] = dataEdit; 
    setData(newState);
    console.log('sda',data)
  }
  const add=()=>{
    const nameVal = name.current.value;
    const ageVal = age.current.value;
    const dateVal = date.current.value;
    const data = {
      id: Math.random(),
      name: nameVal,
      age: ageVal,
      date: dateVal,
    };
    setData((prevState) => [...prevState, data]);
  }
  const sortByage=()=>{
   const newData=[...data]
   newData.sort((a,b) => +a.age < +b.age ? -1: 1)
   setData(newData)
  }
  return (
    <>
      <h1>React Form</h1>
      <form>
        <div>
          <label htmlFor="">Name</label>
          <input type="text" ref={name} />
        </div>
        <div>
          <label htmlFor="">Age</label>
          <input type="number" ref={age}/>
        </div>
        <div>
          <label htmlFor="">date</label>
          <input type="date" ref={date}/>
        </div>
        <button onClick={submitData}>{editmode? 'Update':'Submit' }</button>
      </form>

      <h1>SortBy</h1>
      <button onClick={sortByage}>Sort by age</button>
      <br /><br />
      <table border="2" cellPadding="2" cellSpacing="5" style={{tableLayout:'fixed', width:"1000px"}}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.date}</td>
              <td>
                <button onClick={() => deleteData(item.id)}>Delete</button> 
                <br />
                <button onClick={() => editData(item.id)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
