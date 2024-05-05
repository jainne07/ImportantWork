import React, { useState, useEffect } from "react";
import './App.css';
function App() {
  const [dataImage, setDataImage] = useState([]);
  let item=6
  const [currentPage, setCurrentPage] = useState(0);
  const endIndex = currentPage + item;
  const currentItems = dataImage.slice(0, endIndex);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setDataImage(data);
      });
  }, [item]);
 
  const incre=()=>{
    if(dataImage.length){
      setCurrentPage(prev => prev + 6);
    }
  }
 
  return (
    <>
      <h1>CheckReact</h1>
      <div class="box">
        {currentItems.map(item =>
              <span key={item.id}>
                <img
                  src={item.image}
                  alt=""
                  style={{ width: "50px", height: "100%" }}
                />
              </span>
        )}
      </div>
       <button onClick={incre} disabled={currentItems.length === dataImage.length}>Increment</button>
    </>
  );
}

export default App;
