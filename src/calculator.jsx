import React, { useState } from 'react';

function Calculator() {

  const [sumInDisplay, setsumInDisplay] = useState('0');

  return (
    <div className="Calculator">
      <h1>מחשבון</h1>
      <button id="equals">=</button>
      <button id="zero" onClick={() => setsumInDisplay(sumInDisplay + '0')} >0</button>
      <button id="one" onClick={() => setsumInDisplay(sumInDisplay + '1')} >1</button>
      <button id="two" onClick={() => setsumInDisplay(sumInDisplay + '2')} >2</button>
      <button id="three" onClick={() => setsumInDisplay(sumInDisplay + '3')} >3</button>
      <button id="four" onClick={() => setsumInDisplay(sumInDisplay + '4')} >4</button>
      <button id="five" onClick={() => setsumInDisplay(sumInDisplay + '5')} >5</button>
      <button id="six" onClick={() => setsumInDisplay(sumInDisplay + '6')} >6</button>
      <button id="seven" onClick={() => setsumInDisplay(sumInDisplay + '7')} >7</button>
      <button id="eight" onClick={() => setsumInDisplay(sumInDisplay + '8')} >8</button>
      <button id="nine" onClick={() => setsumInDisplay(sumInDisplay + '9')} >9</button>
      <button id="add" onClick={() => setsumInDisplay(sumInDisplay + '+')} >+</button>
      <button id="subtract" onClick={() => setsumInDisplay(sumInDisplay + '-')} >-</button>
      <button id="multiply" onClick={() => setsumInDisplay(sumInDisplay + '*')} >*</button>
      <button id="divide" onClick={() => setsumInDisplay(sumInDisplay + '/')} >/</button>
      <button id="decimal" onClick={() => setsumInDisplay(sumInDisplay + '.')} >.</button>
      <button id="clear" onClick={() => setsumInDisplay('0')} >clear</button>
      <div id='display'>{sumInDisplay}</div>
{      console.log(sumInDisplay)
}    </div>
  );
}
  
export default Calculator;