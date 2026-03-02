import PropTypes from 'prop-types';
import TableRow from '../../Atoms/Table/Tr/TableRow';

const TableRow_Data = ({ TableDataArray, TableRowClassName }) => {
  if (!TableDataArray.length) {
    return <h1 className="text-center text-white">No data Found</h1>;
  }

  return (
    <TableRow Tailwind_utility_Class={TableRowClassName}>
      {TableDataArray.map((node, index) => (
        <span key={index}>{node}</span>
      ))}
    </TableRow>
  );
};

TableRow_Data.propTypes = {
  TableDataArray: PropTypes.arrayOf(PropTypes.node),
  TableRowClassName: PropTypes.string,
};

TableRow_Data.defaultProps = {
  TableDataArray: [],
  TableRowClassName: '',
};

export default TableRow_Data;