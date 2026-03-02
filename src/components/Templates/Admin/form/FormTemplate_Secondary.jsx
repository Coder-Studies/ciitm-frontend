import H4 from '../../../Atoms/Heading/H4';
import PropTypes from 'prop-types';

const FormTemplate_Secondary = ({
   Title,
   TitleClassName,
   HeadingClassName,
   children,
}) => {
   return (
      <div className='Form_Template_Secondary w-[90%] mt-[4vh] flex flex-col items-center  bg-[#1C1C1C]  rounded-xl border-[#322F2F] border-[1px] mb-[18vh] print:mb-0 print:border-2 print:border-[#322F2F]'>
         <div
            className={`Form_Template_Secondary Title_Container print:h-fit flex items-center justify-center rounded-tr-xl rounded-tl-xl  ${TitleClassName}`}
         >
            <H4 Tailwind_utility_Class={HeadingClassName}>{Title}</H4>
         </div>

         {children}
      </div>
   );
};

FormTemplate_Secondary.propTypes = {
   Title: PropTypes.string.isRequired,
   TitleClassName: PropTypes.string,
   HeadingClassName: PropTypes.string,
   children: PropTypes.node.isRequired,
};

export default FormTemplate_Secondary;
