import { useDispatch } from 'react-redux';

import { authActions } from './index';

const Auth = () => {
  const dispatch = useDispatch();

  const loginHandler = (event) => {
    event.preventDefault();

    dispatch(authActions.login());
  };

  return (
    <main>
      <section>
        <form onSubmit={loginHandler}>
          <div className="form-group">
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' className="form-control"/>
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
