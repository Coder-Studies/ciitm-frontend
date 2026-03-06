import GradeInputs from '../../../Organisms/Admin/Grade_Inputs';
import PropTypes from 'prop-types';

const StudentGradeInfo = ({ data = {} }) => {
   return (
      <div className='flex flex-col w-full gap-4 p-4 rounded-lg'>
         <GradeInputs
            TenthBoardName={data?.TenthBoardName}
            TenthMarks={data?.TenthMarks}
            TwelfthBoardName={data?.TwelfthBoardName}
            TwelfthMarks={data?.TwelfthMarks}
         />
      </div>
   );
};

StudentGradeInfo.propTypes = {
   data: PropTypes.shape({
      TenthBoardName: PropTypes.string,
      TenthMarks: PropTypes.oneOfType([
         PropTypes.string,
         PropTypes.number,
      ]),
      TwelfthBoardName: PropTypes.string,
      TwelfthMarks: PropTypes.oneOfType([
         PropTypes.string,
         PropTypes.number,
      ]),
   }),
};

export default StudentGradeInfo;
