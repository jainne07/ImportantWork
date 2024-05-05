import { useState } from "react";
export default function Login() {
  const [enterData, setEnterData] = useState({
    email: "",
    password: "",
  });
  const [valid, setValid] = useState({
    email: false,
    password: false,
  });
  const emailIsInvalid = valid.email && !enterData.email.includes('@');
  const pswdIsInvalid = valid.password && enterData.password.length < 6;
  console.log(pswdIsInvalid)
  const changeHandler = (identifier, value) => {
    setEnterData((prevState) => ({ ...prevState, [identifier]: value }));
    setValid((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));
  };
  const blurState=(identifier)=>{
    setValid((prevEdit) => ({
        ...prevEdit,
        [identifier]: true,
      }));
      console.log(valid)
  }
 
  const submithandle = (e) => {
    e.preventDefault();
    console.log(enterData);
  };
  const resetHandler = () => {
    setEnterData({
      email: "",
      password: "",
    });
    setValid({
      email: false,
      password: false,
    })
  };
  return (
    <>
      <form onSubmit={submithandle}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            onBlur={() => blurState("email")}
            onChange={(event) => changeHandler("email", event.target.value)}
          />
        </div>
        <div className="text-danger mb-3">
          {emailIsInvalid && <small>Enter valid Email</small>}
        </div>
        <div className="form-group">
          <label htmlFor="newPassword">Password</label>
          <input
            type="password"
            className="form-control"
            id="newPassword"
            onBlur={() => blurState("password")}
            onChange={(event) =>
              changeHandler("password", event.target.value)
            }
            autoComplete="off"
          />
        </div>
        <div className="text-danger mb-3">
          {pswdIsInvalid && (
            <small>Enter valid password which minium length is 6</small>
          )}
        </div>

        <button
          type="reset"
          onClick={resetHandler}
          className="btn btn-outline-secondary mr-3"
        >
          Reset
        </button>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
