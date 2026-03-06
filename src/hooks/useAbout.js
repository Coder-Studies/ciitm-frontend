import socket from '../config/socket.mjs';
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAboutPage } from '../store/AboutSlice';
import axios from 'axios';
import { frontend_EndPoint } from '../utils/constants';

const useAbout = () => {
   const About = useSelector(state => state.about.aboutPage);
   const dispatch = useDispatch();

   const fetchData = useCallback(async () => {
      try {
         const response = await axios.get(frontend_EndPoint);
         const data = response.data.data;
         dispatch(setAboutPage(data.aboutPage));
      } catch (error) {
         console.error(error);
      }
   }, [dispatch]);

   useEffect(() => {
      let didFallback = false;

      if (!socket.connected) {
         socket.connect();
      }

      const handleFrontendData = data => {
         if (!data || !data.aboutPage) {
            if (!didFallback) {
               didFallback = true;
               fetchData();
            }
         } else {
            dispatch(setAboutPage(data.aboutPage));
         }
      };

      const handleConnectError = () => {
         if (!didFallback) {
            didFallback = true;
            fetchData();
         }
      };

      if (!About) {
         socket.emit('requestFrontend');
         socket.once('frontend', handleFrontendData);
         socket.once('connect_error', handleConnectError);

         const handleDisconnect = () => {
            if (!socket.connected) {
               socket.connect();
            }
         };

         socket.once('disconnect', handleDisconnect);

         return () => {
            socket.off('frontend', handleFrontendData);
            socket.off('connect_error', handleConnectError);
            socket.off('disconnect', handleDisconnect);
         };
      }
   }, [About, dispatch, fetchData]);
};

export default useAbout;
