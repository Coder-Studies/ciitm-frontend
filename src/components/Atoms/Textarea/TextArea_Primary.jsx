import PropTypes from 'prop-types';

const TextAreaPrimary = ({
   placeholder,
   value,
   readOnly = false,
   className,
   onInput,
}) => {
   return (
      <textarea
         readOnly={readOnly}
         placeholder={placeholder}
         value={value}
         onInput={onInput}
         className={className}
      />
   );
};

TextAreaPrimary.propTypes = {
   placeholder: PropTypes.string,
   value: PropTypes.string,
   readOnly: PropTypes.bool,
   className: PropTypes.string,
   onInput: PropTypes.func,
};

export default TextAreaPrimary;
