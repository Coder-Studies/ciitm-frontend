import PropTypes from 'prop-types';

const H5 = ({ children, Tailwind_utility_Class }) => {
   return (
      <h5 className={`heading-5 ${Tailwind_utility_Class}`}>
         {children}
      </h5>
   );
};

H5.propTypes = {
   children: PropTypes.string.isRequired,
   Tailwind_utility_Class: PropTypes.string,
};

export default H5;
