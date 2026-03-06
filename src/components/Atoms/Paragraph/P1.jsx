import PropTypes from 'prop-types';

const P1 = ({ children, Tailwind_utility_Class }) => {
   const defaultClass =
      'text-[4vw] max-[400px]:text-[4.5vw] md:text-[1.6vw] leading-relaxed';

   return (
      <p className={Tailwind_utility_Class || defaultClass}>
         {children}
      </p>
   );
};

P1.propTypes = {
   children: PropTypes.string.isRequired,
   Tailwind_utility_Class: PropTypes.string,
};

export default P1;
