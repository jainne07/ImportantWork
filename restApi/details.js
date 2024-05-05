const usr=document.getElementsByClassName('detailsInfo')[0];
const id= new URLSearchParams(window.location.search).get('id');
//const usr=document.querySelector('.userDetails');
const del=document.querySelector('.delete');
const renderList= async() => {
 const res= await fetch('http://localhost:3000/posts/'+id);
 const data= await res.json();
 console.log(data);
 let dataDet='';
     dataDet+=`
     <h1>${data.title}</h1>
     <small>${data.likes} Likes</small>
     <p>${data.body}</p>
     `
 usr.innerHTML=dataDet;
}
del.addEventListener('click',async(e)=>{
    await fetch('http://localhost:3000/posts/'+id,{
        method:'DELETE'
    })
window.location.replace('index.html')
})
window.addEventListener('DOMContentLoaded', renderList);

