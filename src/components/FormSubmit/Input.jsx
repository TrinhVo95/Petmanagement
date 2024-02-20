import React from "react";

const Input = (props) => {
  return (
    <input
      ref={props.refer}
      placeholder={props.placeholder}
      type={props.type}

      //   onChange={(e) => props.setPetId(e.target.value)}
    />
  );
};

export default Input;
