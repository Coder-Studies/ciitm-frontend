import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useGallery } from '../../../hooks/useGallery';
import GalleryCard from './GalleryCard';

const Gallery = () => {
   const gallery = useSelector(state => state.gallery);
   const [images, setImages] = useState([]);

   useGallery();

   useEffect(() => {
      setImages(gallery || []);
   }, [gallery]);

   return (
      <div className='max-w-screen h-full flex flex-wrap items-center justify-center bg-[#f5f1f1] gap-[2vw] max-[421px]:gap-[4vw] py-[15vh] px-[2vw] max-[421px]:px-[4vw] shrink'>
         {images.length > 0 ? (
            images.map((img, index) => (
               <GalleryCard key={index} url={img.url} />
            ))
         ) : (
            <p className='text-center text-gray-500 text-xl'>
               No gallery images available.
            </p>
         )}
      </div>
   );
};

export default Gallery;
