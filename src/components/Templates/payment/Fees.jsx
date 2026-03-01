import PropTypes from 'prop-types';

const Fees = ({ fee }) => {
   return (
      <div className='flex justify-between py-2 px-4 text-[.95vw] max-[599px]:text-[2.95vw] font-medium'>
         <p className='font-semibold'>{fee.name}</p>
         <p className='font-light'>₹ {fee.amount}</p>
      </div>
   );
};

Fees.propTypes = {
   fee: PropTypes.shape({
      name: PropTypes.string.isRequired,
      amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
   }).isRequired,
};

export default Fees;