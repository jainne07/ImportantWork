import React, { useState, useEffect } from 'react'

export default function Blog() {
    const[blogs, setBlogs]=useState(null);
    const[pending, setPending]=useState(true);
    const[error, setError]=useState();
     useEffect(()=>{
       setTimeout(()=>{  
        fetch('https://my-json-server.typicode.com/NehaJain07/userJson/posts')
       .then(res =>{
         if(!res.ok){
           throw Error('Could not fetch the data for that resource')
         }
         return res.json()
        })
       .then(data =>{
      //console.log(data);
        setBlogs(data)
        setPending(false)
        })
        .catch(err => {
          console.log(err.message)
          setPending(false)
          setError(err.message)
        })
      }, 500)
        /* (async() => {
            const res = await fetch('https://my-json-server.typicode.com/NehaJain07/userJson/posts');
            const data = await res.json();
            setBlogs(data);
        })() */
   },[])
   
    return (
        <div>
          { error && <div style={{textAlign:"center"}}>{ error }</div>}
          { pending && <h2 style={{textAlign:"center", color:"blue"}}>Loading...</h2>}
       { blogs && blogs.map(post =>
            <div className="details" key={post.id}>
            <h1>{post.title}</h1>
            <small>{post.likes} Likes</small>
            <p>{post.body.slice(0,60)}...</p>
             <a href={'/details/'+post.id}>Read More</a>
             <a href={'/edit/'+post.id} className="edit">Edit</a>
        </div>)}
        </div>
    )
}
