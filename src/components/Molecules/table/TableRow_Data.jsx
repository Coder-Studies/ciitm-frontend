import TableRow from '../../Atoms/Table/Tr/TableRow';

const TableRow_Data = ({
   TableDataArray = [],
   TableDataClassName = '',
   TableRowClassName = '',
}) => {
   if (TableDataArray.length <= 0) {
      return (
         <h1 className='text-center text-white'>No data Found</h1>
      );
   }

   return (
      <TableRow Tailwind_utility_Class={TableRowClassName}>
         {TableDataArray.map((item, index) => ({ data }))}
      </TableRow>
   );
};

export default TableRow_Data;
