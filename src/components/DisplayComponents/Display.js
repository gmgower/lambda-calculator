import React from "react";

const Display = (props) => {
  console.log('Display', props)
  return <div className="display">{/* Display any props data here */}
  {props.number}
  </div>;
};

export default Display; 