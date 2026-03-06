import { useDispatch, useSelector } from 'react-redux';
import { setTeacher } from '../store/AboutSlice';
import { Find_Teacher_EndPoint } from '../utils/constants';
import { useEffect } from 'react';
import axios from 'axios';

const useTeacher = () => {
   const teacher = useSelector(state => state.about.teacher);
   const dispatch = useDispatch();

   useEffect(() => {
      const fetchTeacher = async () => {
         try {
            if (!teacher) {
               const response = await axios.get(
                  Find_Teacher_EndPoint,
               );
               dispatch(setTeacher(response.data.data));
            }
         } catch (error) {
            console.error(error);
         }
      };

      fetchTeacher();
   }, [teacher, dispatch]);
};

export default useTeacher;
