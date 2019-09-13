import React from "react";

const OperatorButton = (props) => {
  return (
    <button onClick={() => props.opIt
      (props.ops)}>
       {props.ops.char}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default OperatorButton; 