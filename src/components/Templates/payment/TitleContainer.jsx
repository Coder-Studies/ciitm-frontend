import Form from './Form';
import BankAccounts from './BankAccounts';
import Search from './Search';
import Payment from './Payment';
import PropTypes from 'prop-types';

const TitleContainer = ({
   title,
   form,
   amount,
   bank,
   pay,
   width,
   details,
}) => {
   return (
      <div
         className={`container overflow-hidden ${width ? 'w-[40%]' : 'w-full'} ${width ? 'max-[599px]:w-[60%]' : 'max-[599px]:w-full'}`}
      >
         <div className='heading bg-white flex items-center gap-2 border-[1px] rounded-t-2xl p-4 border-[#D7D7D79E]'>
            <span className='inline-block w-2.5 h-2.5 bg-[#C300FF] rounded-full'></span>
            <h2 className='text-[1.25vw] max-[599px]:text-[3.25vw] font-bold text-[#333333]'>
               {title}
            </h2>
         </div>

         {pay && <Search />}
         {form && <Form details={details} />}
         {amount && <Payment />}
         {bank && <BankAccounts />}
      </div>
   );
   
};
   TitleContainer.propTypes = {
   title: PropTypes.string.isRequired,
   form: PropTypes.bool,
   amount: PropTypes.bool,
   bank: PropTypes.bool,
   pay: PropTypes.bool,
   width: PropTypes.bool,
   details: PropTypes.object,
};

export default TitleContainer;
