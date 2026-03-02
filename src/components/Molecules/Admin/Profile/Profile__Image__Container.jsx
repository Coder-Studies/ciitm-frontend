import { useState } from 'react';
import Circle_Image from '../../../Atoms/Image/Circle_Image';
import PropTypes from 'prop-types';

const Profile__Image__Container = ({
   ImageUrl,
   AltImageUrl,
   fileInputRef,
}) => {
   const [Image, setImage] = useState(ImageUrl);

   const HandleError = () => {
      setImage(AltImageUrl);
   };

   const handleClick = () => {
      if (fileInputRef.current) {
         fileInputRef.current.click();
      }
   };

   return (
      <>
         <div className='Profile__Image__Container w-full h-[22vh] flex items-center justify-center mt-[3vh] mb-[3vh]'>
            <div
               className='Profile_Photo w-[15%] h-full bg-red-500 rounded-full relative cursor-pointer '
               onClick={handleClick}
            >
               <Circle_Image src={Image} fn={() => HandleError()} />
               <div className='overLay absolute left-[25%] bottom-[2vh]'>
                  <button
                     className='bg-[#D9D9D9] px-[1w] py-[0.8vh] rounded-lg text-[0.7vw] font-semibold'
                     onClick={handleClick}
                  >
                     Upload image
                  </button>
               </div>
            </div>
         </div>
      </>
   );
};

Profile__Image__Container.propTypes = {
   ImageUrl: PropTypes.string.isRequired,
   AltImageUrl: PropTypes.string.isRequired,
   fileInputRef: PropTypes.shape({
      current: PropTypes.instanceOf(Element),
   }).isRequired,
};

export default Profile__Image__Container;
