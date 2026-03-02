import Social_Input from '../../Molecules/Admin/Profile/Social_Input';
import H3 from '../../Atoms/Heading/H3';
import PropTypes from 'prop-types';

const Social_Input_Container = ({ Link = [] }) => {
   return (
      <div className='flex flex-col gap-2'>
         <H3 className='w-full text-left text-[1.1vw] font-semibold text-white bg-gradient-to-r from-[#3FEF9D] to-[#244737] bg-clip-text text-transparent ml-[2.5vw]'>
            Social Links
         </H3>

         {Link.map((item, index) => (
            <Social_Input
               Icon={item.Icon}
               LinkUrl={item.LinkUrl}
               PlaceHolder={item.PlaceHolder}
               ReadOnly={item.ReadOnly}
               key={index}
            />
         ))}
      </div>
   );
};

Social_Input_Container.propTypes = {
   Link: PropTypes.arrayOf(
      PropTypes.shape({
         Icon: PropTypes.element.isRequired,
         LinkUrl: PropTypes.string.isRequired,
         PlaceHolder: PropTypes.string,
         ReadOnly: PropTypes.bool,
      }),
   ),
};

export default Social_Input_Container;
