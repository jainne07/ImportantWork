import React from 'react'
import { useParams } from 'react-router-dom';


export default function Details(props) {
   const params=useParams()
    const blogDet= props.list.find(blog => blog.id === Number(params.id))
   //console.log(props.list);
    //console.log(blogDet);
    return (
        <>
         <div key={blogDet.id} className="m-2 border rounded py-2 px-4">
                       <h1 className="text-capitalize mb-2">{blogDet.title}</h1>
                       <p>{blogDet.body}</p>
        </div>   
        </>
    )
}
