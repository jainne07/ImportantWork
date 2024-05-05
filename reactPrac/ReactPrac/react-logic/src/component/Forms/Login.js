import {useRef, useState } from 'react'
export default function Login() {
  const emailRef=useRef()
  const pswdRef=useRef()
  const [valid, setValid]=useState({
    isEmailValid: false,
    isPswdValid: false
  })
  const submithandle=(e)=>{
    e.preventDefault()
    const email=emailRef.current.value
    const psd=pswdRef.current.value
    const data={
        email: email,
        password: psd
    }
    if(email.trim() ==='' && psd.length <= 6){
        setValid(()=>({isPswdValid: true, isEmailValid: true}))
        //console.log('valid1',valid)
        return;
    }
    else if(email.trim() ==='' || (!email.length === 0 &&  psd.length > 6)){
        setValid(()=>({isPswdValid: false, isEmailValid: true}))
       // console.log('valid2',valid)
        return;
    }
    else if(email.length === 0 || psd.length <= 6){
        setValid(()=>({isPswdValid: true, isEmailValid: false}))
        //console.log('valid 3',valid)
        return;
    }
        console.log(data)
        setValid(()=>({isEmailValid: false,isPswdValid: false }))
        emailRef.current.value='';
        pswdRef.current.value='';

  }
  const resetHandler=()=>{
    emailRef.current.value='';
    pswdRef.current.value='';
    setValid(()=>({isPswdValid: false, isEmailValid: false}))
  }
  return (
    <>
    <form onSubmit={submithandle}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          ref={emailRef}
        />
      </div>
      <div className="text-danger mb-3">{valid.isEmailValid && <small>Enter valid Email</small>}</div>
      <div className="form-group">
        <label htmlFor="newPassword">Password</label>
        <input
          type="password"
          className="form-control"
          id="newPassword"
          ref={pswdRef}
          autoComplete='off'
        />
      </div>
      <div className="text-danger mb-3">{valid.isPswdValid && <small>Enter valid password which minium length is 6</small>}</div>

      <button type="reset" onClick={resetHandler} className="btn btn-outline-secondary mr-3">
        Reset
      </button>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
    </>
  );
}
