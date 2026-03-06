import { useState } from 'react';

const AreyouHuman = () => {
   const [isHuman, setIsHuman] = useState(false);

   const handleCheckboxChange = e => {
      setIsHuman(e.target.checked);
   };

   return (
      <div className='p-4 bg-white rounded-lg shadow-md'>
         <h2 className='text-xl font-semibold mb-4'>
            Are You Human?
         </h2>
         <p className='text-gray-600 mb-4'>
            Please confirm that you are not a robot by checking the
            box below.
         </p>
         <div className='flex items-center'>
            <input
               type='checkbox'
               id='humanCheckbox'
               checked={isHuman}
               onChange={handleCheckboxChange}
               className='w-5 h-5 mr-2'
            />
            <label htmlFor='humanCheckbox' className='text-gray-700'>
               I am not a robot
            </label>
         </div>
         {isHuman && (
            <p className='text-green-600 mt-4'>
               Thank you for confirming you are human!
            </p>
         )}
      </div>
   );
};

export default AreyouHuman;
