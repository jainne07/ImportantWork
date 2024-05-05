import { useSelector, useDispatch } from 'react-redux';

import { authActions } from './index';

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <header className="border text-primary p-2 m-2">
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler} className="btn btn-primary">Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
