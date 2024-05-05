import React from 'react'
import  { useDispatch, useSelector } from 'react-redux';
import {deletepost} from '../action'
import { useHistory,useParams } from 'react-router-dom';
export default function SinglePost() {
  const params = useParams()
  const post = useSelector(state => state.posts.find(post => post.id === Number(params.postId))) 
  const dispatch = useDispatch();
    const history=useHistory();
    //console.log(post)
    return (
        <div className="container">      
         <div key={post.id} className="mt-3">
       <h5>{post.title.toUpperCase()}</h5>
      <small>{post.likes} Likes</small>
      <p>{post.body}</p>
      <button key={post.id} onClick={()=>dispatch(deletepost(post.id), history.push('/'))} className="btn btn-info">Delete</button>
        </div> 
             </div>
    )
}
