import Navbar from './components/Organisms/NavBar/User/Navbar.jsx';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './components/Organisms/Footer/Footer.jsx';
import { useEffect } from 'react';
import socket from './config/socket.mjs';

const Body = () => {
   const location = useLocation();

   useEffect(() => {
      if (!socket.connected) {
         socket.connect();
      }
   }, [location.pathname]);

   return (
      <>
         <Navbar />
         <Outlet />
         <Footer />
      </>
   );
};

export default Body;