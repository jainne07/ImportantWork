import { Outlet } from 'react-router-dom';

import MainNavigation from './MainNavigation';

function RootLayout() {
  return (
    <div className="container">
      <div className="row">
          <div className="col-12">
              <MainNavigation />
              <main className="my-3">
                <Outlet />
              </main>
          </div>
      </div>
    </div>
  );
}

export default RootLayout;
