const usr=document.getElementsByClassName('userDetails')[0];
const form=document.getElementsByTagName('form')[0];
//const usr=document.querySelector('.userDetails');
const renderList= async(term) => {
let uri="http://localhost:3000/posts";
if(term){
    uri+=`?q=${term}`
}
 const res= await fetch(uri);
 const data= await res.json();
 //console.log(data);
 let dataDet='';
 data.forEach(post=>{
     dataDet+=`
     <div class="details">
     <h1>${post.title}</h1>
     <small>${post.likes} Likes</small>
     <p>${post.body.slice(0,100)}...</p>
     <a href="details.html?id=${post.id}">Read more </a> <a href="edit.html?id=${post.id}" class="edit">Edit</a>
     <button onclick="deleteBtn(${post.id})" class="del">Delete</button>
     </div>
     `
 })
 usr.innerHTML=dataDet;
}
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    renderList(form.term.value.trim());
})
const deleteBtn = async(id)=>{
    await fetch('http://localhost:3000/posts/'+id,{
        method:'DELETE'
    })
}
window.addEventListener('DOMContentLoaded', ()=>renderList());
