import Personal_Inputs from '../../../Organisms/Admin/Personal_Inputs';
import PropTypes from 'prop-types';

const StudentPersonalInfo = ({ data = {} }) => {
   return (
      <div className='flex flex-col w-full gap-4 p-4  rounded-lg'>
         <Personal_Inputs
            Name={data?.Name}
            Email={data?.Email}
            PhoneNumber={data?.PhoneNumber}
            Gender={data?.Gender}
            DateOfBirth={data?.DateOfBirth}
         />
      </div>
   );
};

StudentPersonalInfo.propTypes = {
   data: PropTypes.shape({
      Name: PropTypes.string,
      Email: PropTypes.string,
      PhoneNumber: PropTypes.oneOfType([
         PropTypes.string,
         PropTypes.number,
      ]),
      Gender: PropTypes.string,
      DateOfBirth: PropTypes.string,
   }),
};
export default StudentPersonalInfo;
