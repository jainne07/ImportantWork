const usr=document.getElementsByClassName('editor')[0];
const form=document.getElementsByTagName('form')[0];
const id= new URLSearchParams(window.location.search).get('id');
const upd=document.querySelector('.update');
const renderList= async() => {
 const res= await fetch('http://localhost:3000/posts/'+id);
 const data= await res.json();
 console.log(data);
 let dataDet='';
     dataDet+=`
     <div><input type="text" name="id" disabled value='${data.id}' /></div>
     <div><input type="text"  name="title" value='${data.title}' /></div>
     <div><textarea rows="10" name="body" cols="20">${data.body}</textarea></div>
     <div><input type="text"  name="likes" value='${data.likes}' /></div>
     `
 usr.innerHTML=dataDet;
}
upd.addEventListener('click',async(e)=>{
    const usrData={
        id:id,
        title:form.title.value,
        body:form.body.value,
        likes:form.likes.value,
    }
    e.preventDefault();
    await fetch('http://localhost:3000/posts/'+id,{
        method:'PUT',
        body: JSON.stringify(usrData),
        headers: {'Content-Type': 'application/json'}
    })
window.location.replace('index.html')
}) 
window.addEventListener('DOMContentLoaded', renderList);

