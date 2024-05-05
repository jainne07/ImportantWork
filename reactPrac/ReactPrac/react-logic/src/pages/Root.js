import { Outlet } from 'react-router-dom';

import MainNavigation from '../component/advRouter/MainNavigation';

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
