import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { setInput, UpdateInput } from '../../store/AuthSlice';

const Input = ({ type, placeholder, label, id, name }) => {
   const dispatch = useDispatch();
   const [value, setValue] = useState('');

   const { loginCheckbox, signUpCheckbox, findIndex, existingValue } =
      useSelector(state => {
         const arr = state.auth.data || [];
         const login =
            arr.find(i => i.name === 'Login_CheckBox')?.value ??
            false;
         const signup =
            arr.find(i => i.name === 'Sign_UP_CHECK')?.value ?? false;
         const idx = arr.findIndex(i => i.name === name);
         const existing = arr.find(i => i.name === name)?.value;

         return {
            array: arr,
            loginCheckbox: login,
            signUpCheckbox: signup,
            findIndex: idx,
            existingValue:
               typeof existing === 'string' ? existing : '',
         };
      });

   useEffect(() => {
      // opcjonalnie: synchronizacja inputa z reduxem
      if (existingValue !== '') setValue(existingValue);
   }, [existingValue]);

   const inputType =
      type !== 'password'
         ? 'text'
         : loginCheckbox || signUpCheckbox
           ? 'text'
           : 'password';

   const handleInput = e => {
      const nextValue = e.target.value;
      setValue(nextValue);

      const data = { name, value: nextValue };
      if (findIndex !== -1) dispatch(UpdateInput(data));
      else dispatch(setInput(data));
   };

   return (
      <div className='mb-4'>
         {label && (
            <label
               htmlFor={id}
               className='block text-[1vw] my-2 text-[#5F5F5F] max-[999px]:text-[3vw]'
            >
               {label}
            </label>
         )}

         <input
            type={inputType}
            value={value}
            autoComplete='off'
            id={id}
            name={name}
            onInput={handleInput}
            placeholder={placeholder}
            className='border-[0.83px] border-[#A0A0A080]/50 placeholder:text-[#333] rounded-lg p-3 w-full text-[0.8vw] max-[999px]:text-[2.5vw]'
         />
      </div>
   );
};

Input.propTypes = {
   type: PropTypes.string.isRequired,
   placeholder: PropTypes.string,
   label: PropTypes.string,
   id: PropTypes.string,
   name: PropTypes.string.isRequired,
};

Input.defaultProps = {
   placeholder: '',
   label: '',
   id: undefined,
};

export default Input;
