import TableRow_Heading from '../../Molecules/table/TableRow_Heading';
import PropTypes from 'prop-types';

const EarningData_Table = ({ arr }) => {
   return (
      <TableRow_Heading
         TableHeadingArray={arr}
         TableRowClassName='w-full'
      />
   );
};

EarningData_Table.propTypes = {
   arr: PropTypes.array.isRequired,
};

export default EarningData_Table;
