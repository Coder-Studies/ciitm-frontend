import Contact_view from '../../Molecules/Admin/Contact/Contact_view';
import PropTypes from 'prop-types';

const AdminInputContact_View = ({ data }) => {
   return (
      <div className='flex flex-col w-[95%]  gap-[2vh] mt-[3vh]'>
         <Contact_view data={data} />
      </div>
   );
};

AdminInputContact_View.propTypes = {
   data: PropTypes.shape({
      _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      cName: PropTypes.string,
      cEmail: PropTypes.string,
      cNumber: PropTypes.oneOfType([
         PropTypes.string,
         PropTypes.number,
      ]),
      cMessage: PropTypes.string,
   }),
};

AdminInputContact_View.defaultProps = {
   data: {},
};

export default AdminInputContact_View;
