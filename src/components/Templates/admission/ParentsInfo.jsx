import PropTypes from 'prop-types';
import InputField from './InputField';
import Dropdown from './DropDown';

const ParentsInfo = ({ handleInputChange }) => {
   return (
      <div className='sm:grid flex flex-col w-full 2xl:grid-cols-5 sm:grid-cols-2 md:grid-cols-4 sm:gap-x-4 gap-y-10'>
         <InputField
            placeholder="Guardian's Name"
            required={true}
            type='text'
            name='Gname'
            onChange={handleInputChange}
         />
         <Dropdown
            placeholder="Guardian's Relation"
            name='Grelation'
            required={true}
            options={['Father', 'Mother', 'Other']}
            onChange={handleInputChange}
         />
         <InputField
            placeholder="Guardian's Contact Number"
            required={true}
            type='number'
            name='GcontactNumber'
            onChange={handleInputChange}
         />
      </div>
   );
};

ParentsInfo.propTypes = {
   handleInputChange: PropTypes.func.isRequired,
};

export default ParentsInfo;
