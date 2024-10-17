import React from "react";

const Button = (props) => {
  const { type = "primary", size = "md", text = "Submit", handleClick } = props;

  return (
    <>
      <button className={`btn btn-${type} btn-${size}`} onClick={handleClick}>
        {text}
      </button>
    </>
  );
};

export default Button;
