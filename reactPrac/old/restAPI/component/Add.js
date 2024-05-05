import React, { useState } from 'react'
 import { useHistory } from 'react-router-dom';
 
export default function Add(props) {
    const[info, setInfo]=useState({title:'', body:'', likes:0});
    const history=useHistory();
   const changeData = (e) =>{
       setInfo({...info, [e.target.name]: e.target.value
       })
   }
   const handleAdd=(e)=>{
       e.preventDefault();
       console.log(info);
    fetch('http://localhost:8080/posts',{
        method:'POST',
        body: JSON.stringify(info),
        headers: {'Content-Type': 'application/json'}
    })
    .then(() =>{
      history.push('/')
     }) 
}
    return (
        <div>
          
       { info && 
            <div className="details" key={info.id}>
               {/*  <div><input type="text" name="id" id=""  disabled value={info.id} /></div> */}
                <div><input type="text" name="title" id="" value={info.title} onChange={changeData} placeholder="title"/></div>
                <div><textarea name="body" id="" cols="30" rows="10" value={info.body} onChange={changeData} placeholder="body">{info.body}</textarea></div>
{/*                 <div><input type="text" name="likes" id="" value={info.likes} onChange={changeData}/></div>
 */}            <button className="delete" onClick={handleAdd}>Add Blog</button>
            </div>}
            
        </div>
    )
}
