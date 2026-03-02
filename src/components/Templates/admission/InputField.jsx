import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setAdmission, setOneAdmission } from '../../../store/AdmissionSlice';

const InputField = ({ placeholder, type, name, required }) => {
const admission = useSelector(state => state.admission.admission);
   const dispatch = useDispatch();

   const [value, setValue] = useState('');
   const [isError, setIsError] = useState(false);

   const findIndex = admission.findIndex(item => item.name === name);

useEffect(() => {
   const next = admission[findIndex]?.value ?? '';
   setValue(prev => (prev === next ? prev : next));
}, [admission, findIndex]);

   const nameAndId = (placeholder || '').replace(/\s+/g, '').toLowerCase();

   const handleChange = e => {
      setValue(e.target.value);
      if (required) setIsError(e.target.value.trim() === '');
   };

   const handleBlur = e => {
      const nextValue = e.target.value;

      const data = { name, value: nextValue };

      if (findIndex === -1) {
         dispatch(setAdmission(data));
      } else {
         dispatch(setOneAdmission(data));
      }

      if (required && nextValue.trim() === '') {
         setIsError(true);
      } else {
         setIsError(false);
      }
   };

   return (
      <div className='max-[600px]:max-w-[248px] w-full relative'>
         <input
            id={nameAndId}
            name={nameAndId}
            type={type}
            placeholder={placeholder}
            value={value}
            required={required}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`border rounded-[8px] min-[800px]:max-w-[248px] max-w-[100%] w-full px-4 py-3 text-xs text-[#333333] placeholder:text-[#333333] ${
               isError ? 'border-[#FF0000]' : 'border-[#A0A0A080]'
            }`}
         />

         {isError && (
            <p className='text-[#FF0000] absolute -bottom-5 text-xs mt-1'>
               {`${placeholder} is required.`}
            </p>
         )}
      </div>
   );
};

InputField.propTypes = {
   placeholder: PropTypes.string.isRequired,
   type: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   required: PropTypes.bool,
};

InputField.defaultProps = {
   required: false,
};

export default InputField;