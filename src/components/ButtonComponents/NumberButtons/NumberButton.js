import React from "react";

const NumberButton = (props) => {
  console.log("NumberButton", props)
  return (
    <button onClick={() => props.addNumber(props.text)} className={`number-button ${props.text == 0 ? 'zero' : ''}`}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    {props.text}
    </button>
  );
};

export default NumberButton;
