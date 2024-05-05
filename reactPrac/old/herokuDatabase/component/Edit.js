import React, { useState, useEffect } from 'react'
 import { useHistory } from 'react-router-dom';
 
export default function Edit(props) {
    //const[info, setinfo]=useState(null);
    const[info, setInfo]=useState({title:'', body:'', likes:''});
    const history=useHistory();
     useEffect(()=>{
       fetch('https://my-react-json.herokuapp.com/posts/'+props.match.params.id)
       .then(res =>{
         return res.json()
        })
       .then(data =>{
      console.log(data);        
      setInfo(data)
        }); 
        /* (async() => {
            const res = await fetch('https://my-react-json.herokuapp.com/posts'+props.match.params.id);
            const data = await res.json();
            setinfo(data);
        })() */
   },[props.match.params.id])
   const changeData = (e) =>{
       setInfo({...info, [e.target.name]: e.target.value
       })
   }
   const handleUpdate=(e)=>{
       e.preventDefault();
       console.log(info);
    fetch('https://my-react-json.herokuapp.com/posts/'+props.match.params.id,{
        method:'PUT',
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
                <div><input type="text" name="id" id=""  disabled value={info.id} /></div>
                <div><input type="text" name="title" id="" value={info.title} onChange={changeData}/></div>
                <div><textarea name="body" id="" cols="30" rows="10" value={info.body} onChange={changeData}>{info.body}</textarea></div>
                <div><input type="text" name="likes" id="" value={info.likes} onChange={changeData}/></div>
            <button className="delete" onClick={handleUpdate}>Update </button>
            </div>}
            
        </div>
    )
}
