import CourseFeeInfoInputs from '../../../Organisms/Admin/FeeInfoInputs';
import PropTypes from 'prop-types';

const FeeUniversityInfo = ({ data = {} }) => {
   return (
      <div className='flex flex-col w-full gap-4 p-4 rounded-lg'>
         <CourseFeeInfoInputs
            totalAmountDue={data?.TotalAmountDue}
            totalCourseFee={data?.TotalCourseFee}
            totalAmountPaid={data?.TotalAmountPaid}
         />
      </div>
   );
};

FeeUniversityInfo.propTypes = {
   data: PropTypes.shape({
      TotalAmountDue: PropTypes.oneOfType([
         PropTypes.string,
         PropTypes.number,
      ]),
      TotalCourseFee: PropTypes.oneOfType([
         PropTypes.string,
         PropTypes.number,
      ]),
      TotalAmountPaid: PropTypes.oneOfType([
         PropTypes.string,
         PropTypes.number,
      ]),
   }),
};

export default FeeUniversityInfo;
