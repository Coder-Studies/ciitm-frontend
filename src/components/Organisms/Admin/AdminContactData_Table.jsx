import PropTypes from 'prop-types';
import Loader from 'react-spinners/ScaleLoader';
import TableRow from '../../Atoms/Table/Tr/TableRow';
import TableData from '../../Atoms/Table/Td/TableData';
import { Link } from 'react-router-dom';

const override = {
  display: 'block',
  position: 'absolute',
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  margin: '0 auto',
};

const AdminContactData_Table = ({ Data, isLoading, StartIndex }) => {
  if (Data.length <= 0 && isLoading) {
    return (
      <Loader
        color="white"
        loading={isLoading}
        cssOverride={override}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  }

  return (
    <>
      {Data.map((item, index) => (
        <TableRow
          key={item._id ?? index}
          Tailwind_utility_Class="w-full h-[7vh] text-white"
          className=""
        >
          <TableData Tailwind_utility_Class="text-center overflow-hidden border-r-2 border-t-2 border-b-2 border-[#322F2F] max-[348px]:text-[3.5vw] max-[553px]:text-[2.7vw] max-[775px]:text-[2vw] md:text-md">
            {StartIndex + index + 1}
          </TableData>

          <TableData Tailwind_utility_Class="text-center text-sm overflow-hidden border-r-2 border-t-2 border-b-2 max-[348px]:hidden border-[#322F2F] max-[553px]:text-[2.9vw] max-[775px]:text-[2vw] md:text-md">
            {item.cName}
          </TableData>

          <TableData Tailwind_utility_Class="text-center overflow-hidden border-r-2 border-t-2 border-b-2 border-[#322F2F] max-[348px]:text-[3vw] max-[553px]:text-[2.7vw] max-[775px]:text-[2vw] md:text-md">
            {item.cEmail}
          </TableData>

          <TableData Tailwind_utility_Class="text-center text-sm overflow-hidden max-[775px]:hidden border-r-2 border-t-2 border-b-2 border-[#322F2F] max-[553px]:text-[2.7vw] max-[775px]:text-[2vw] md:text-md">
            {item.cNumber}
          </TableData>

          <TableData Tailwind_utility_Class="text-center border-t-2 border-b-2 text-sm max-[348px]:text-[3vw] max-[553px]:text-[2.2vw] border-[#322F2F]">
            <Link
              to={`/admin/contact/${item._id}`}
              className="bg-[#322F2F] text-white px-4 py-2 max-[553px]:px-2 max-[553px]:py-1 rounded inline-flex items-center justify-center"
            >
              View
            </Link>
          </TableData>
        </TableRow>
      ))}
    </>
  );
};

AdminContactData_Table.propTypes = {
  Data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      cName: PropTypes.string,
      cEmail: PropTypes.string,
      cNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
  isLoading: PropTypes.bool,
  StartIndex: PropTypes.number,
};

AdminContactData_Table.defaultProps = {
  Data: [],
  isLoading: false,
  StartIndex: 0,
};

export default AdminContactData_Table;