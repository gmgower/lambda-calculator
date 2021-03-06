import React, {useState} from "react";

//import any components needed
import SpecialButton from "./SpecialButton.js";

//Import your array data to from the provided data file
import { specials } from "../../../data.js";

const Specials = (props) => {
  // console.log('Specials', props)
  // STEP 2 - add the imported data to state
const [specialsState] = useState(specials)

const clickSpecialBtn = btn => {
  if(btn === 'C') {
    props.resetValue()
  } else {
    props.updateValue(btn)
  }
}

  return (
    <div className="specials">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {specialsState.map(special => <SpecialButton key={special} text={special} updateValue={() => clickSpecialBtn(special)} />)}
    </div>
  );
};

export default Specials;