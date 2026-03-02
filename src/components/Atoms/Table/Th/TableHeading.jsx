import { memo } from 'react';
import PropTypes from 'prop-types';

const TableHeading = ({ Tailwind_utility_Class, children }) => {
   return <th className={Tailwind_utility_Class}>{children}</th>;
};

TableHeading.propTypes = {
   Tailwind_utility_Class: PropTypes.string,
   children: PropTypes.node.isRequired,
};

export default memo(TableHeading);