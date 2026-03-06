import UniversityInfoInputs from '../../../Organisms/Admin/UniversityInfoInputs';
import PropTypes from 'prop-types';

const StudentUniversityInfo = ({ data = {} }) => {
   const { UniversityName, CourseName, CourseMode } = data;

   return (
      <div className='flex flex-col w-full gap-4 p-4 rounded-lg'>
         <UniversityInfoInputs
            universityName={UniversityName}
            CourseName={CourseName}
            courseMode={CourseMode}
         />
      </div>
   );
};

StudentUniversityInfo.propTypes = {
   data: PropTypes.shape({
      UniversityName: PropTypes.string,
      CourseName: PropTypes.string,
      CourseMode: PropTypes.string,
   }),
};

export default StudentUniversityInfo;
