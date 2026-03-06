import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLandingPage } from '../store/homeSlice';
import axios from 'axios';
import { frontend_EndPoint } from '../utils/constants';
import socket from '../config/socket.mjs';

const useHomeUi = () => {
   const dispatch = useDispatch();
   const landingPage = useSelector(state => state.home.landingPage);

   const fetchData = useCallback(async () => {
      try {
         const response = await axios.get(frontend_EndPoint);
         const data = response.data.data;
         dispatch(setLandingPage(data.landingPage));
      } catch (error) {
         console.error('Error fetching frontend data:', error);
      }
   }, [dispatch]);

   useEffect(() => {
      let didFallback = false;

      if (!socket.connected) {
         socket.connect();
      }

      const handleFrontend = data => {
         if (!data || !data.landingPage) {
            if (!didFallback) {
               didFallback = true;
               fetchData();
            }
         } else {
            dispatch(setLandingPage(data.landingPage));
         }
      };

      const handleConnectError = () => {
         if (!didFallback) {
            didFallback = true;
            fetchData();
         }
      };

      if (!landingPage) {
         socket.emit('requestFrontend');
         socket.once('frontend', handleFrontend);
         socket.once('connect_error', handleConnectError);
      }

      return () => {
         socket.off('frontend', handleFrontend);
         socket.off('connect_error', handleConnectError);
      };
   }, [landingPage, dispatch, fetchData]);
};

export default useHomeUi;
