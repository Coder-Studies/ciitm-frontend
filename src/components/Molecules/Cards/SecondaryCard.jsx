import H2 from '../../Atoms/Heading/H2';
import P1 from '../../Atoms/Paragraph/P1';

const SecondaryCard = ({
   title,
   subtitle,
   imageSrc,
   containerClass = 'w-[22vw] max-[1300px]:w-[30vw] h-[18vh] bg-[#F9FAFB] rounded-lg flex items-center shadow-md',
   imageClass = 'h-[60%] w-[60%] object-cover',
   textClass = 'text-black',
}) => {
   return (
      <div className={containerClass}>
         <div className='Image_Container h-full w-[25%] flex items-center justify-center'>
            <img src={imageSrc} alt={title} className={imageClass} />
         </div>
         <div className='Text_Container h-full w-[75%] flex flex-col justify-center px-2'>
            <div className={`${textClass} text-[1.3vw]`}>
               <H2 text={title} />
            </div>
            <div className={`${textClass} text-[1vw]`}>
               <P1 text={subtitle} />
            </div>
         </div>
      </div>
   );
};

export default SecondaryCard;
