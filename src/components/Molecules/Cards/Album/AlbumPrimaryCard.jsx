import PropTypes from 'prop-types';
import { GoArrowUpRight } from 'react-icons/go';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

const AlbumPrimaryCard = ({
   image,
   title,
   date,
   isAdmin,
   onClickDelete,
   onClickViewUrl,
   containerClass = '',
   imageClass = '',
   titleClass = '',
   dateClass = '',
   dateFormat = 'DD-MM-YYYY',
   separator = '-',
}) => {
   const parsedDate =
      typeof date === 'string' ? date.split('T')[0] : '';
   let formattedDate = '';

   if (parsedDate) {
      const [year, month, day] = parsedDate.split('-');
      switch (dateFormat) {
         case 'DD-MM-YYYY':
            formattedDate = [day, month, year].join(separator);
            break;
         case 'MM-DD-YYYY':
            formattedDate = [month, day, year].join(separator);
            break;
         case 'YYYY-MM-DD':
            formattedDate = [year, month, day].join(separator);
            break;
         default:
            formattedDate = parsedDate;
      }
   }

   return (
      <Link
         to={onClickViewUrl}
         className={`relative rounded-lg overflow-hidden bg-black group cursor-pointer ${containerClass}`}
      >
         <img
            src={image}
            alt={title}
            className={`w-full h-full object-cover object-top transition-opacity duration-200 ${imageClass}`}
         />

         <div
            className='absolute z-10 top-2 right-2 bg-black bg-opacity-70 p-2 rounded-full hover:bg-opacity-100'
            onClick={e => {
               e.preventDefault();
               e.stopPropagation();
               onClickDelete?.(e);
            }}
         >
            {isAdmin ? (
               <MdDelete className='text-white text-lg' />
            ) : (
               <GoArrowUpRight className='text-white text-lg' />
            )}
         </div>

         <div className='absolute bottom-0 w-full px-4 py-2 bg-black bg-opacity-40 z-10 flex justify-between items-center'>
            <p className={`text-white font-semibold ${titleClass}`}>
               {title}
            </p>
            <p className={`text-white text-sm ${dateClass}`}>
               {formattedDate}
            </p>
         </div>
      </Link>
   );
};

AlbumPrimaryCard.propTypes = {
   image: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
   date: PropTypes.string,
   isAdmin: PropTypes.bool,
   onClickDelete: PropTypes.func,
   onClickViewUrl: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
   ]).isRequired,
   containerClass: PropTypes.string,
   imageClass: PropTypes.string,
   titleClass: PropTypes.string,
   dateClass: PropTypes.string,
   dateFormat: PropTypes.oneOf([
      'DD-MM-YYYY',
      'MM-DD-YYYY',
      'YYYY-MM-DD',
   ]),
   separator: PropTypes.string,
};

AlbumPrimaryCard.defaultProps = {
   date: '',
   isAdmin: false,
   onClickDelete: null,
   containerClass: '',
   imageClass: '',
   titleClass: '',
   dateClass: '',
   dateFormat: 'DD-MM-YYYY',
   separator: '-',
};

export default AlbumPrimaryCard;
