import InputField from './InputField';
import Dropdown from './DropDown';
import PropTypes from 'prop-types';

const Grades = ({ handleInputChange }) => {
   return (
      <div className='sm:grid flex flex-col w-full 2xl:grid-cols-5 sm:grid-cols-2 md:grid-cols-4 sm:gap-x-4 gap-y-10'>
         <InputField
            placeholder='Enter Your 10th Marks'
            type='text'
            name='tenthMarks'
            onChange={handleInputChange}
         />
         <Dropdown
            placeholder='Select Your 10th Board'
            name='tenthBoard'
            required={true}
            options={['CBSE', 'JAC', 'ICSE', 'JAC', 'BSEB']}
            onChange={handleInputChange}
         />

         <Dropdown
            placeholder='Select Your 10th Grade'
            name='tenthGrade'
            required={true}
            options={['A', 'B', 'C', 'D', 'E']}
            onChange={handleInputChange}
         />

         {/* tenthGrade */}

         <InputField
            placeholder='Enter Your 12th Marks'
            type='text'
            name='twelfthMarks'
            required={true}
            onChange={handleInputChange}
         />
         <Dropdown
            placeholder='Select Your 12th Board'
            name='twelfthBoard'
            options={['CBSE', 'JAC', 'ICSE', 'JAC', 'BSEB']}
            onChange={handleInputChange}
         />

         <Dropdown
            placeholder='Select Your 12th Grade'
            name='twelfthGrade'
            required={true}
            options={['A', 'B', 'C', 'D', 'E']}
            onChange={handleInputChange}
         />
      </div>
   );
};

Grades.propTypes = {
   handleInputChange: PropTypes.func.isRequired,
};

export default Grades;
