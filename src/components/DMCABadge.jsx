import { useState } from 'react';
import PropTypes from 'prop-types';

const env = key =>
   import.meta?.env ? import.meta.env[key] : undefined;

const DMCABadge = ({
   size = 'medium',
   position = 'inline',
   theme = 'light',
   showTooltip = true,
   className = '',
   onBadgeClick = null,
}) => {
   const DMCA_CONFIG = {
      badgeUrl:
         env('VITE_DMCA_BADGE_URL') ||
         'https://images.dmca.com/Badges/DMCA_badge_grn_60w.png?ID=638734f7-8b37-47af-b022-7b03a77295f2',
      statusUrl:
         env('VITE_DMCA_STATUS_URL') ||
         'https://www.dmca.com/Protection/Status.aspx?ID=638734f7-8b37-47af-b022-7b03a77295f2',
      alt: 'DMCA.com Protection Status',
      guid: '638734f7-8b37-47af-b022-7b03a77295f2',
   };

   const [isLoaded, setIsLoaded] = useState(false);
   const [hasError, setHasError] = useState(false);

   const sizeClasses = {
      small: 'w-16 h-auto',
      medium: 'w-24 h-auto',
      large: 'w-32 h-auto',
      xlarge: 'w-40 h-auto',
   };

   const positionClasses = {
      inline: '',
      'fixed-bottom-right': 'fixed bottom-4 right-4 z-50',
      'fixed-bottom-left': 'fixed bottom-4 left-4 z-50',
      center: 'mx-auto text-center',
      'float-right': 'float-right ml-4 mb-2',
   };

   const themeClasses = {
      light: 'bg-white border border-gray-200 rounded-lg shadow-sm p-2',
      dark: 'bg-gray-800 border border-gray-600 rounded-lg shadow-sm p-2',
      transparent: 'bg-transparent',
      minimal: '',
   };

   const handleBadgeClick = e => {
      onBadgeClick?.(e);

      if (
         typeof window !== 'undefined' &&
         typeof window.gtag === 'function'
      ) {
         window.gtag('event', 'dmca_badge_click', {
            event_category: 'protection',
            event_label: 'dmca_status_check',
         });
      }
   };

   const handleImageLoad = () => {
      setIsLoaded(true);
      setHasError(false);
   };

   const handleImageError = () => {
      setHasError(true);
      console.warn('DMCA badge image failed to load');
   };

   const isConfigured =
      !!env('VITE_DMCA_BADGE_URL') && !!env('VITE_DMCA_STATUS_URL');

   if (!isConfigured && import.meta.env.PROD) {
      console.warn(
         'DMCA badge not configured. Please add your DMCA.com badge details.',
      );
      return null;
   }

   return (
      <div
         className={`dmca-badge-wrapper ${positionClasses[position] ?? ''} ${className}`}
         role='complementary'
         aria-label='DMCA Protection Status'
      >
         <div
            className={`dmca-badge group relative ${themeClasses[theme] ?? ''} transition-all duration-200 hover:shadow-md`}
         >
            <a
               href={DMCA_CONFIG.statusUrl}
               title={
                  showTooltip
                     ? 'Click to view DMCA.com Protection Status'
                     : ''
               }
               className='dmca-badge-link block'
               target='_blank'
               rel='noopener noreferrer'
               onClick={handleBadgeClick}
               aria-label='View DMCA Protection Certificate'
            >
               {hasError ? (
                  <div className='dmca-fallback text-xs text-center p-2 bg-blue-50 border border-blue-200 rounded'>
                     <div className='font-semibold text-blue-800'>
                        DMCA
                     </div>
                     <div className='text-blue-600'>Protected</div>
                  </div>
               ) : (
                  <img
                     src={DMCA_CONFIG.badgeUrl}
                     alt={DMCA_CONFIG.alt}
                     className={`${sizeClasses[size] ?? sizeClasses.medium} transition-opacity duration-200 opacity-80 hover:opacity-100`}
                     loading='lazy'
                     onLoad={handleImageLoad}
                     onError={handleImageError}
                     style={{
                        maxWidth: '100%',
                        height: 'auto',
                        display: isLoaded ? 'block' : 'none',
                     }}
                  />
               )}
            </a>

            {showTooltip && (
               <div className='dmca-tooltip absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block'>
                  <div className='bg-gray-900 text-white text-xs rounded py-1 px-2 whitespace-nowrap relative'>
                     DMCA Protected Content
                     <div className='absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900' />
                  </div>
               </div>
            )}
         </div>
      </div>
   );
};

DMCABadge.propTypes = {
   size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
   position: PropTypes.oneOf([
      'inline',
      'fixed-bottom-right',
      'fixed-bottom-left',
      'center',
      'float-right',
   ]),
   theme: PropTypes.oneOf([
      'light',
      'dark',
      'transparent',
      'minimal',
   ]),
   showTooltip: PropTypes.bool,
   className: PropTypes.string,
   onBadgeClick: PropTypes.func,
};

DMCABadge.defaultProps = {
   size: 'medium',
   position: 'inline',
   theme: 'light',
   showTooltip: true,
   className: '',
   onBadgeClick: null,
};

export default DMCABadge;
