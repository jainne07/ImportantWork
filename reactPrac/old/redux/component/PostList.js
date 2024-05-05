import React from 'react'
import  { useDispatch, useSelector } from 'react-redux';
import {deletepost} from '../action'
import { Link } from 'react-router-dom'

export default function Home() {
    const posts = useSelector(state => state.posts)
    const dispatch = useDispatch();
    //console.log(posts);
    const renderedPosts = posts.map(item =>
    <div key={item.id} className="mt-3">
       <h5>{item.title.toUpperCase()}</h5>
      <small>{item.likes} Likes</small>
      <p>{item.body.slice(0,150)}...</p>
      <Link to={`/post/${item.id}`} className="btn btn-light mr-2">View Post</Link>
      <Link to={`/edit/${item.id}`} className="btn btn-light mr-2">Edit</Link>
      <button key={item.id} onClick={()=>dispatch(deletepost(item.id))} className="btn btn-info">Delete</button>
        </div>
        )
   /* console.log(Object.keys(posts).length) */
   /* const renderedPosts = Object.keys(posts).map((item, i) => 
      <article className="" key={i}> 
      <h5>{posts[item].title}</h5>
      <small>{posts[item].likes} Likes</small>
      <p>{posts[item].body.slice(0,80)}...</p>
      </article>  
      ) */
    return (
    <div className="container">
    <div className="float-right">
        <Link to="/add" className="btn btn-info btn-lg m-2">Add Post</Link>
    </div>
    <h2>Posts</h2>     
    {renderedPosts}
        </div>
    )
}
