import PropTypes from 'prop-types';

const H2 = ({ children, className }) => {
   return <h2 className={`heading-2 ${className}`}>{children}</h2>;
};

H2.propTypes = {
   children: PropTypes.string.isRequired,
   className: PropTypes.string,
};

export default H2;
