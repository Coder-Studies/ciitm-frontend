import PropTypes from 'prop-types';

const TableRow = ({ children, Tailwind_utility_Class }) => {
   return <tr className={`${Tailwind_utility_Class}`}>{children}</tr>;
};

TableRow.propTypes = {
   children: PropTypes.node.isRequired,
   Tailwind_utility_Class: PropTypes.string,
};

export default TableRow;
