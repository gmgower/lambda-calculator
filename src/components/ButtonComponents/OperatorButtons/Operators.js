import React, {useState} from "react";

//import any components needed
import OperatorButton from './OperatorButton.js'

//Import your array data to from the provided data file
import { operators } from '../../../data.js'

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [operatorsState] = useState(operators)

  const clickOperatorBtn = btn => {
    if(btn === '='){
      props.calculateValue()
    } else {
      props.updateValue(btn)
    }
  }

  return (
    <div className="operators">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {operatorsState.map(operator => <OperatorButton key={operator.char} operator={operator} clickOperatorBtn={() => clickOperatorBtn(operator.value)}/>)}
    </div>
  );
};

export default Operators;
