import React, { useState } from 'react'
import {addpost} from '../action'
import  { useSelector,useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
export default function AddPost() {
    const history=useHistory();
    const posts = useSelector(state => state.posts)
    const idInc =posts[posts.length - 1].id + 1;
    const[info, setInfo]= useState({id:idInc, title:'', body:'', likes:0});
    const changeData = (e) =>{
       setInfo({...info, [e.target.name]: e.target.value
       })
    }
   const dispatch = useDispatch();

    return (
        <div className="my-4 container">
             <div className="mb-2"><input type="text" name="title" id="" className="form-control" onChange={changeData} placeholder="title"/></div>
                <div className="mb-2"><textarea name="body" id="" cols="30" rows="4" className="form-control" onChange={changeData} placeholder="body"></textarea></div>
                <button onClick={()=>dispatch(addpost(info), history.push('/'))} className="btn btn-info">Add Post</button>

        </div>
    )
}
