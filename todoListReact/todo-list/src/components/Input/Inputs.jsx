import PropTypes from "prop-types";
function Input({
  onChange,
  id,
  value,
  type,
  onKeyPress,
  onClick,
  className,
  placeholder,
}) {
  return (
    <>
      <input
        type={type}
        id={id}
        onChange={onChange}
        onClick={onClick}
        onKeyPress={onKeyPress}
        value={value}
        className={className}
        placeholder={placeholder}
      />
    </>
  );
}

Input.propTypes = {
  onChange: PropTypes.func,
  id: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  onKeyPress: PropTypes.func,
  onClick: PropTypes.func,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};
export default Input;
