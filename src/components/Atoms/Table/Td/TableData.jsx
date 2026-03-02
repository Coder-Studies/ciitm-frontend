import PropTypes from 'prop-types';

const TableData = ({ Tailwind_utility_Class, children }) => {
   return <td className={Tailwind_utility_Class}>{children}</td>;
};

TableData.propTypes = {
   Tailwind_utility_Class: PropTypes.string,
   children: PropTypes.node.isRequired,
};

export default TableData;