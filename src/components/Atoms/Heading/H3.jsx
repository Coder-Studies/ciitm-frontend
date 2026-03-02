import PropTypes from 'prop-types';

const H3 = ({ children, className }) => {
   return <h3 className={`heading-3 ${className}`}>{children}</h3>;
};

H3.propTypes = {
   children: PropTypes.string.isRequired,
   className: PropTypes.string,
};

export default H3;
