import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { set_Gallery } from '../store/GallerySlice';

const useGallery = () => {
   const dispatch = useDispatch();
   const gallery = useSelector(state => state.gallery);

   useEffect(() => {
      const fetchData = async () => {
         try {
            if (!gallery || gallery.length < 1) {
               const res = await axios.get(
                  '/api/v1/user/get/All/Image',
               );
               const data = res.data.data;
               dispatch(set_Gallery(data));
            }
         } catch (error) {
            console.error(error?.message || error);
         }
      };

      fetchData();
   }, [gallery, dispatch]);
};

export default useGallery;
