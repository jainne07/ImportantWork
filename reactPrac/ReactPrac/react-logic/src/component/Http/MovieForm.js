import {useRef} from 'react'
export default function MovieForm(props) {
  const inputRef=useRef()
  const descriptionRef=useRef()
  const submithandle=(e)=>{
    e.preventDefault()
    const titleData=inputRef.current.value
    const openText=descriptionRef.current.value
    const data={
        title: titleData,
        opening_crawl: openText
    }

    if((titleData.length && openText.length) === 0){
        return;
    }
    props.addData(data)
    inputRef.current.value='';
    descriptionRef.current.value='';
  }
  return (
    <form onSubmit={submithandle}>
  <div className="form-group" >
    <label htmlFor="title">Title</label>
    <input type="text" className="form-control" id="title" ref={inputRef}/>
  </div>
  <div className="form-group">
    <label htmlFor="description">Description</label>
    <textarea className="form-control" id="description" ref={descriptionRef} />
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  );
}