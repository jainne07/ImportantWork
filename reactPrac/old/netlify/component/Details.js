import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';

export default function Blog(props) {
    const[blogDet, setBlogDet]=useState(null);
    const history=useHistory();

     useEffect(()=>{
       fetch('https://my-json-server.typicode.com/NehaJain07/userJson/posts/'+props.match.params.id)
       .then(res =>{
         return res.json()
        })
       .then(data =>{
      console.log(data);
      setBlogDet(data)
        }); 
        /* (async() => {
            const res = await fetch('https://github.com/NehaJain07/userJson'+props.match.params.id);
            const data = await res.json();
            setBlogDet(data);
        })() */
   },[props.match.params.id])
   
   const handleDelete=()=>{
    fetch('https://my-json-server.typicode.com/NehaJain07/userJson/posts/'+props.match.params.id,{
        method:'Delete'
    })
    .then(() =>{
      history.push('/')
     })
}
    return (
        <div>
          
       { blogDet && 
            <div className="details" key={blogDet.id}>
            <h1>{blogDet.title}</h1>
            <small>{blogDet.likes} Likes</small>
            <p>{blogDet.body}</p>
            <button className="delete" onClick={handleDelete}>Delete </button>
            </div>}
            
        </div>
    )
}
