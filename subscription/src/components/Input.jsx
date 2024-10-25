const Input = (props) => {
  const { label, value, setValue, type = "text", placeholder } = props;

  return (
    <>
      <div className="input-group mb-4">
        {/* <span className="input-group-text">{label}</span> */}
        <input
          type={type}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          className="form-control"
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default Input;
