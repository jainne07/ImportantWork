export const increment = () =>{
        return{
            type: 'INCREMENT'
        }
}
export const decrement = () =>{
    return{
        type: 'DECREMENT'
    }
}
export const signin = () =>{
    return{
        type: 'SIGN-IN'
    }
}
export const addpost = (post) =>{
    return{
        type: 'ADD_POST',
        payload: post
    }
}
export const deletepost = postId =>{
    return{
        type: 'DELETE_POST',
        payload: postId
    }
}
export const editPost =  post =>{
    return{
        type: 'EDIT_POST',
        payload: post
    }
}
