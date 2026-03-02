import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Link_btn = ({ link, buttonText, className }) => {
   return (
      <Link to={link}>
         <button className={className}>{buttonText}</button>
      </Link>
   );
};

Link_btn.propTypes = {
   link: PropTypes.string.isRequired,
   buttonText: PropTypes.string.isRequired,
   className: PropTypes.string,
};

export default Link_btn;