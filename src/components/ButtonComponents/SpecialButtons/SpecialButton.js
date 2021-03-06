import React from "react";

const SpecialButton = (props) => {
  // console.log('SpecialButton', props)

  return (
    <button onClick={props.updateValue} className="special-button">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    {props.text}
    </button>
  );
};

export default SpecialButton;