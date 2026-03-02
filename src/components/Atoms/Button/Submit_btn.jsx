import PropTypes from 'prop-types';
import axios from 'axios';
import Swal from 'sweetalert2';

const SubmitButton = ({
   Tailwind_utility_Class,
   children,
   url,
   data,
   method = 'POST',
   onSuccess,
   onError,
}) => {
   const defaultClass = 'bg-[#333] text-white py-2 px-4 rounded-lg';

   const handleSubmit = async () => {
      try {
         const response = await axios({
            method,
            url,
            data,
         });

         if (response.data?.message) {
            Swal.fire({
               icon: 'success',
               title: 'Success',
               text: response.data.message,
            });
         }

         if (onSuccess) onSuccess(response.data);
      } catch (error) {
         Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text:
               error.response?.data?.message ||
               error.message ||
               'Something went wrong!',
         });

         if (onError) onError(error);
      }
   };

   return (
      <button
         className={Tailwind_utility_Class || defaultClass}
         onClick={e => {
            e.preventDefault();
            handleSubmit();
         }}
         type='button'
      >
         {children}
      </button>
   );
};

SubmitButton.propTypes = {
   Tailwind_utility_Class: PropTypes.string,
   children: PropTypes.node.isRequired,
   url: PropTypes.string.isRequired,
   data: PropTypes.object.isRequired,
   method: PropTypes.oneOf(['POST', 'PUT', 'PATCH', 'DELETE']),
   onSuccess: PropTypes.func,
   onError: PropTypes.func,
};

export default SubmitButton;
