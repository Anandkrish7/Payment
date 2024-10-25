import React from "react";
import "../App.css";

const Button = (props) => {
  const { type = "primary", size = "md", text = "Submit", handleClick } = props;

  return (
    <>
      <button className="button-custom" onClick={handleClick}>
        {text}
      </button>
    </>
  );
};

export default Button;
