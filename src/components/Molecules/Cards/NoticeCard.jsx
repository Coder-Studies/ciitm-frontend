import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import PropTypes from 'prop-types';

import { IoClose } from 'react-icons/io5';

const NoticeCard = ({ title }) => {
   const box_ref = useRef();

   useGSAP(() => {
      gsap.to('.notice-card', {
         y: -45,
         opacity: 1,
         duration: 1,
         scrub: 5,
      });
   });

   let Handle_Clone_Btn = () => {
      gsap.to(box_ref.current, {
         opacity: 0,
         duration: 0.5,
         display: 'none',
      });
   };

   return (
      <div
         ref={box_ref}
         className='notice-card w-10/12 sm:w-10/12 lg:w-[37vw] 2xl:w-[25vw] md:h-fit md:py-2 text-black bg-white rounded-md px-2 py-1 lg:px-3 lg:py-[1vh] flex items-center justify-between opacity-0'
      >
         <h3 className='w-1/2 text-[1.2vh] sm:text-sm md:text-base'>
            {title}
         </h3>
         <button className='bg-[#FF0000] px-2 lg:px-[1vw] rounded text-white md:h-fit md:py-1 h-[1.5rem] text-[1.2vh] sm:text-[1.5vh] md:text-sm'>
            Explore Now
         </button>
         <IoClose
            fontWeight={900}
            size={20}
            onClick={Handle_Clone_Btn}
            className='cursor-pointer'
         />
      </div>
   );
};

NoticeCard.propTypes = {
   title: PropTypes.string.isRequired,
};

export default NoticeCard;
