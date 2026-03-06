import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTestimonital } from '../store/homeSlice';
import axios from 'axios';
import { Testimonital_EndPoint } from '../utils/constants';

const useTestimonial = () => {
   const Testimonital = useSelector(state => state.home.Testimonital);
   const dispatch = useDispatch();

   const handleTestimonial = useCallback(async () => {
      try {
         if (!Testimonital) {
            const response = await axios.get(Testimonital_EndPoint);
            dispatch(setTestimonital(response.data.data));
         }
      } catch (error) {
         console.error(error);
      }
   }, [Testimonital, dispatch]);

   useEffect(() => {
      handleTestimonial();
   }, [handleTestimonial]);
};

export default useTestimonial;
