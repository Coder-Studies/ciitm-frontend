import StudentParent_Inputs from '../../../Organisms/Admin/StudentParent_Inputs';
import PropTypes from 'prop-types';

const StudentParentInfo = ({ data = {} }) => {
   return (
      <div className='flex flex-col w-full gap-4 p-4  rounded-lg'>
         <StudentParent_Inputs
            FatherName={data?.FatherName}
            MotherName={data?.MotherName}
            GuardianNumber={data?.GuardianNumber}
         />
      </div>
   );
};

StudentParentInfo.propTypes = {
   data: PropTypes.shape({
      FatherName: PropTypes.string,
      MotherName: PropTypes.string,
      GuardianNumber: PropTypes.oneOfType([
         PropTypes.string,
         PropTypes.number,
      ]),
   }),
};
export default StudentParentInfo;
