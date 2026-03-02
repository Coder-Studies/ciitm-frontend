import PropTypes from 'prop-types';

const Album_Card = ({ url }) => {
   return (
      <>
         <div className='Image_Container flex flex-col flex-grow w-[30%] min-w-[200px] bg-green-400  z-20 rounded-md hover:shadow-lg transition duration-300 ease-in-out'>
            <img
               src={url}
               alt=''
               className='max-[421px]:object-contain max-[421px]:h-screen w-full h-full object-cover rounded-md hover:saturate-150'
            />
         </div>
      </>
   );
};

Album_Card.propTypes = {
   url: PropTypes.string.isRequired,
};

export default Album_Card;
