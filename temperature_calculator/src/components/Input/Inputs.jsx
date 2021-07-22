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
export default Input;
