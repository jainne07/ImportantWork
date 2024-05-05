import { Outlet } from 'react-router-dom';

import EventsNavigation from '../component/advRouter/EventsNavigation';

function EventsRootLayout() {
  return (
    <>
      <EventsNavigation />
      <Outlet />
    </>
  );
}

export default EventsRootLayout;
