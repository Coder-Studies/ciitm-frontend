import { useEffect } from 'react';
import { setAlbum } from '../store/homeSlice';
import { Album_EndPoint } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const useAlbum = () => {
   const Album = useSelector(state => state.home.Album);
   const dispatch = useDispatch();

   useEffect(() => {
      const fetchAlbum = async () => {
         try {
            if (!Album) {
               const response = await axios.get(Album_EndPoint);
               const data = response.data.data;
               dispatch(setAlbum(data));
            }
         } catch (error) {
            console.error(error.message);
         }
      };

      fetchAlbum();
   }, [Album, dispatch]);
};

export default useAlbum;
