import React, { useState } from 'react';
import  Display from './display'
import './calculator.css';

const Calculator = () => {
  const [count, setCount] = useState('');
  const [sum, setSum] = useState('');

  const handleClickOfNumber = (event)  => {
    if ((count + event.target.value) === '0') {
      setCount('')
    } else if (event.target.value === '0' && sum) {
      setCount('')
      setSum('')
    } else if (sum) {
        setCount(event.target.value)
        setSum('') 
    } else {
        setCount(count + event.target.value)
    }
  }

  const handleClickOfDecimal = (event)  => {
    if ((/[.]/.test(count) && !(/[*]+|[+]+|[-]+|[/]+/.test(count)))) {
      console.log('Invalid character')
    } else if (/[.]$/.test(count)) {
        console.log('Invalid character')
    } else {
      setCount(count + event.target.value)
    }
  }

  const handleClickOfOperations = (event)  => {
    if (/[*]$|[+]$|[-]$|[/]$/.test(count) && /[*]$|[+]$|[/]$/.test(event.target.value)) {
      setCount(count.replace(/[*]$|[+]$|[-]$|[/]$/, event.target.value))
    } else if ((count === '' && (event.target.value === '*' || event.target.value === '/')) || (/[-]$/.test(count) && event.target.value === '-')) {
        console.log('Invalid character');
    } else if (sum) {
      setCount(sum + event.target.value)
      setSum('')
    } else {
      setCount(count + event.target.value)
    }
  }
  
  const handleClickOfSum = ()  => {
    if (/[*]$|[+]$|[-]$|[/]$/.test(count) || /^[*]|^[/]/.test(count) ) {
      console.log('Invalid character')
    } else {
      setSum(eval(count))
    }
  }

  const handleClickOfClear = ()  => {
    setCount('')
    setSum('')
  }

  return (
    <div className="Calculator">
      <div className='calculatorBody'>
        <Display count={count} sum={sum} />
        <button id="clear" className='operation' value={'0'} onClick={handleClickOfClear} >clear</button> 
        <button id="zero" value={'0'} onClick={handleClickOfNumber} >0</button>
        <button id="divide" className='operation' value={'/'} onClick={handleClickOfOperations} >/</button>
        <button id="multiply" className='operation' value={'*'} onClick={handleClickOfOperations} >&#10005;</button>
        <button id="one" value={'1'} onClick={handleClickOfNumber} >1</button> 
        <button id="two" value={'2'} onClick={handleClickOfNumber} >2</button>
        <button id="three" value={'3'} onClick={handleClickOfNumber} >3</button>
        <button id="add" className='operation' value={'+'} onClick={handleClickOfOperations} >+</button>
        <button id="four" value={'4'} onClick={handleClickOfNumber} >4</button>
        <button id="five" value={'5'} onClick={handleClickOfNumber} >5</button>
        <button id="six" value={'6'} onClick={handleClickOfNumber} >6</button>
        <button id="subtract" className='operation' value={'-'} onClick={handleClickOfOperations} >-</button>
        <button id="seven" value={'7'} onClick={handleClickOfNumber} >7</button>
        <button id="eight" value={'8'} onClick={handleClickOfNumber} >8</button>
        <button id="nine" value={'9'} onClick={handleClickOfNumber} >9</button>
        <button id="equals" className='operation' value={"="} onClick={handleClickOfSum} >=</button>
        <button id="decimal" value={'.'} onClick={handleClickOfDecimal} >.</button>
      </div>
    </div>
  );
}
  
export default Calculator;