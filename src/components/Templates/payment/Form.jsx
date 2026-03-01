import PropTypes from 'prop-types';
import Input from './Input';

const Form = ({ details }) => {
   return (
      <div className='w-full flex flex-wrap gap-4 font-[Montserrat] bg-[#FAFAFA] border-x-[0.62px] border-b-[0.62px] border-[#D7D7D79E] p-4'>
         {details.map(detail => (
            <Input
               key={detail.Name}
               Name={detail.Name}
               Value={detail?.Value}
               Placeholder={detail?.Placeholder}
               Label={detail.Label}
            />
         ))}
      </div>
   );
};

Form.propTypes = {
   details: PropTypes.arrayOf(
      PropTypes.shape({
         Name: PropTypes.string.isRequired,
         Value: PropTypes.string,
         Placeholder: PropTypes.string,
         Label: PropTypes.string,
      })
   ).isRequired,
};

export default Form;