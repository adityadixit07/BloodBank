const InputType = ({
  labelFor,
  labelText,
  inpuType,
  placeholder,
  name,
  value,
  onChange,
}) => {
  return (
    <div>
      <div className="form-group">
        <label htmlFor={labelFor}>{labelText}</label>
        <input
          type={inpuType}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default InputType;
