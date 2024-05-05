const form=document.getElementsByTagName('form')[0];
window.addEventListener('submit',async(e)=>{
    const usrData={
        title:form.title.value,
        body:form.body.value,
        likes:0,
    }
    e.preventDefault();
    await fetch('http://localhost:3000/posts',{
        method:'POST',
        body: JSON.stringify(usrData),
        headers: {'Content-Type': 'application/json'}
    })
window.location.replace('index.html')
}) 