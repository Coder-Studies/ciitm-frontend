import axios from 'axios';
import {
   useEffect,
   useState,
   Suspense,
   lazy,
   useCallback,
} from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { set_Image } from '../../../store/ImageSlice';

const Album_Card = lazy(() => import('./Album_Card'));

const Album_Image = () => {
   const Image_Slice = useSelector(state => state.image.Image);
   const [Image, setImage] = useState([]);

   const dispatch = useDispatch();
   const params = useParams();
   const name = params.name;

   const Find_Image = useCallback(async () => {
      try {
         const find_index = Image_Slice.findIndex(
            item => item.name === name,
         );

         if (find_index !== -1) {
            setImage([...Image_Slice[find_index].Images]);
         } else {
            const res = await axios.get(
               `/api/v1/user/get/Album/Image/${name}`,
            );

            const data = {
               name,
               Images: [...res.data.data],
            };

            dispatch(set_Image(data));
            setImage([...res.data.data]);
         }
      } catch (error) {
         Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error?.response?.data || 'Something went wrong',
         });
      }
   }, [Image_Slice, name, dispatch]);

   useEffect(() => {
      Find_Image();
   }, [Find_Image]);

   return (
      <div className='max-w-screen h-full flex flex-wrap items-center justify-center bg-[#f5f1f1] gap-[2vw] max-[421px]:gap-[4vw] py-[15vh] px-[2vw] max-[421px]:px-[4vw] shrink'>
         <Suspense fallback={<div>Loading...</div>}>
            {Image.map((item, index) => (
               <Album_Card key={index} url={item.url} />
            ))}
         </Suspense>
      </div>
   );
};

export default Album_Image;
