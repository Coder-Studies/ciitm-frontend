import PropTypes from 'prop-types';

const H1 = ({ children, Tailwind_utility_Class }) => {
   return (
      <h1 className={`heading-1 ${Tailwind_utility_Class}`}>
         {children}
      </h1>
   );
};

H1.propTypes = {
   children: PropTypes.string.isRequired,
   Tailwind_utility_Class: PropTypes.string,
};

export default H1;
