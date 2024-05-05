export default function Signup() {
  function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const acquisitionChannel = fd.getAll("acquisition");
    const data = Object.fromEntries(fd.entries());
    data.acquisition = acquisitionChannel;
    console.log(data);
    event.target.reset()
  }
 function reset(event){
    return event;
    //console.log(event)
 }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" className="form-control" />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          className="form-control"
        />

        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
            className="form-control"
          />
        </div>
      </div>

      <hr />

      <div className="form-group">
        <label htmlFor="first-name">First Name</label>
        <input
          type="text"
          id="first-name"
          name="first-name"
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="last-name">Last Name</label>
        <input
          type="text"
          id="last-name"
          name="last-name"
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">What best describes your role?</label>
        <select id="role" name="role">
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <div className="form-group">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
          />
          <label htmlFor="google">Google</label>
        </div>

        <div className="form-group">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
          />
          <label htmlFor="friend">Referred by friend</label>
        </div>

        <div className="form-group">
          <input type="checkbox" id="other" name="acquisition" value="other" />
          <label htmlFor="other">Other</label>
        </div>
      </fieldset>
      <hr />
      <div className="form-group">
        <label htmlFor="terms-and-conditions"></label>
        <input type="checkbox" id="terms-and-conditions" name="terms" />I agree
        to the terms and conditions
      </div>

      <p className="form-actions">
        <button className="btn btn-outline-primary mr-3" type="reset" onClick={reset} >
          Reset
        </button>
        <button className="btn btn-primary mr-3" type="submit">
          Sign up
        </button>
      </p>
    </form>
  );
}
