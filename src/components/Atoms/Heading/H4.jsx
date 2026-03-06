import PropTypes from 'prop-types';

const H4 = ({ children, className }) => {
   return <h4 className={`heading-4 ${className}`}>{children}</h4>;
};

H4.propTypes = {
   children: PropTypes.string.isRequired,
   className: PropTypes.string,
};

export default H4;
