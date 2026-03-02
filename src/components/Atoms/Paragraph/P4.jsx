import PropTypes from 'prop-types';

const P4 = ({ children, Tailwind_utility_Class }) => {
   const defaultClass =
      'text-[1.5vw] max-[400px]:text-[3vw] md:text-[1vw] leading-relaxed';

   return (
      <p className={Tailwind_utility_Class || defaultClass}>
         {children}
      </p>
   );
};

P4.propTypes = {
   children: PropTypes.string.isRequired,
   Tailwind_utility_Class: PropTypes.string,
};

export default P4;
