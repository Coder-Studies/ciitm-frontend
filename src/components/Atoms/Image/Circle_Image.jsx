import PropTypes from 'prop-types';

const Circle_Image = ({ src, alt, fn }) => {
   return (
      <div className='w-full h-full flex items-center justify-center'>
         <img
            src={src}
            alt={alt}
            onError={fn}
            className='w-full h-full object-cover rounded-full'
         />
      </div>
   );
};

Circle_Image.propTypes = {
   src: PropTypes.string.isRequired,
   alt: PropTypes.string.isRequired,
   fn: PropTypes.func,
};

export default Circle_Image;
