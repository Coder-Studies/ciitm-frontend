import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setInput, UpdateInput } from '../../store/AuthSlice';

const Checkbox = ({ label, name }) => {
   const [Value, setValue] = useState(null);

   let array = useSelector(state => state.auth.data);
   let find_index = array.findIndex(item => item.name === name);

   let dispatch = useDispatch();

   let HandleCheckbox = e => {
      setValue(e.target.checked);

      let data = {
         name: name,
         value: e.target.checked,
      };

      if (find_index !== -1) {
         dispatch(UpdateInput(data));
      } else {
         dispatch(setInput(data));
      }
   };

   return (
      <>
         <input
            onClick={e => HandleCheckbox(e)}
            value={Value}
            type='checkbox'
            name={name}
            className='mr-2 transform scale-150 accent-[#FF6603]'
         />

         {label && (
            <label
               htmlFor='remember'
               className='text-[1.05vw] text-[#5F5F5F] max-[999px]:text-[3.05vw]'
            >
               {label}
            </label>
         )}
      </>
   );
};

Checkbox.propTypes = {
   label: PropTypes.string,
   name: PropTypes.string.isRequired,
};

export default Checkbox;