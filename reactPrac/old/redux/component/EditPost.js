import React, { useState } from 'react'
import  { useDispatch, useSelector } from 'react-redux';
import {editPost} from '../action'
import { useHistory, useParams } from 'react-router-dom';
export default function SinglePost() {
     const params = useParams()
    const post = useSelector(state => state.posts.find(post => post.id === Number(params.postId)))
    const[editInfo, setEditInfo]= useState({id:post.id, title:post.title, body:post.body, likes:post.likes});
    
    const changeData = (e) =>{
        setEditInfo({...editInfo, [e.target.name]: e.target.value
       })
    }
    const dispatch = useDispatch();
    const history=useHistory();
    //console.log(editInfo)
    return (
        <div className="container">      
         <div key={editInfo.id} className="mt-3">
         <div className="mb-2"><input type="text" name="id" id="" value={editInfo.id} disabled className="form-control"/></div>
         <div className="mb-2"><input type="text" name="title" id="" value={editInfo.title} className="form-control" onChange={changeData} placeholder="title"/></div>
         <div className="mb-2"><input type="text" name="likes" id="" value={editInfo.likes} className="form-control" onChange={changeData} placeholder="likes"/></div>
        <div className="mb-2"><textarea name="body" id="" cols="30" rows="4" value={editInfo.body} className="form-control" onChange={changeData} placeholder="body"></textarea></div>
      <button key={post.id} onClick={()=>dispatch(editPost(editInfo), history.push('/'))} className="btn btn-info">Update</button>
        </div> 
             </div>
    )
}