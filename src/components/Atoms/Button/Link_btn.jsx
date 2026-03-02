import { Link } from 'react-router-dom';

const Link_btn = ({ link, buttonText, className }) => {
   return (
      <Link to={link}>
         <button className={className}>{buttonText}</button>
      </Link>
   );
};

export default Link_btn;
