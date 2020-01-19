import React, { Component } from 'react';
import  Display from './display'
import './calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: '',
      sum: ''
    };
  }

  handleClickOfNumber = (event)  => {
    if ((this.state.count + event.target.value) === '0') {
      this.setState({
        count: ''
      })
    } else if (event.target.value === '0' && this.state.sum) {
        this.setState({
          count: '',
          sum: ''
        })
    } else if (this.state.sum) {
        this.setState({
          count: event.target.value,
          sum: ''
        })
    } else {
      this.setState({
        count: this.state.count + event.target.value
      })
    }
  }

  handleClickOfDecimal = (event)  => {
    if ((/[.]/.test(this.state.count) && !(/[*]+|[+]+|[-]+|[/]+/.test(this.state.count)))) {
      console.log('Invalid character')
    } else if (/[.]$/.test(this.state.count)) {
        console.log('Invalid character')
    } else {
        this.setState({
          count: this.state.count + event.target.value
        })
    }
  }

  handleClickOfOperations = (event)  => {
    if (/[*]$|[+]$|[-]$|[/]$/.test(this.state.count) && /[*]$|[+]$|[/]$/.test(event.target.value)) {
      this.setState({
        count: this.state.count.replace(/[*]$|[+]$|[-]$|[/]$/, event.target.value)
      })
    } else if ((this.state.count === '' && (event.target.value === '*' || event.target.value === '/')) || (/[-]$/.test(this.state.count) && event.target.value === '-')) {
        console.log('Invalid character');
    } else if (this.state.sum) {
        this.setState({
          count: this.state.sum + event.target.value,
          sum: ''
        })
    } else {
      this.setState({
        count: this.state.count + event.target.value
      })
    }
  }
  
  handleClickOfSum = ()  => {
    if (/[*]$|[+]$|[-]$|[/]$/.test(this.state.count) || /^[*]|^[/]/.test(this.state.count) ) {
      console.log('Invalid character')
    } else {
      this.setState({
        sum: eval(this.state.count)
      })
    }
  }

  handleClickOfClear = ()  => {
    this.setState({
      count: '',
      sum: ''
    })
  }

  render() {
    return (
      <div className="Calculator">
        <div className='calculatorBody'>
          <Display count={this.state.count} sum={this.state.sum} />
          <button id="clear" className='operation' value={'0'} onClick={this.handleClickOfClear} >clear</button> 
          <button id="zero" value={'0'} onClick={this.handleClickOfNumber} >0</button>
          <button id="divide" className='operation' value={'/'} onClick={this.handleClickOfOperations} >/</button>
          <button id="multiply" className='operation' value={'*'} onClick={this.handleClickOfOperations} >&#10005;</button>
          <button id="one" value={'1'} onClick={this.handleClickOfNumber} >1</button>
          <button id="two" value={'2'} onClick={this.handleClickOfNumber} >2</button>
          <button id="three" value={'3'} onClick={this.handleClickOfNumber} >3</button>
          <button id="add" className='operation' value={'+'} onClick={this.handleClickOfOperations} >+</button>
          <button id="four" value={'4'} onClick={this.handleClickOfNumber} >4</button>
          <button id="five" value={'5'} onClick={this.handleClickOfNumber} >5</button>
          <button id="six" value={'6'} onClick={this.handleClickOfNumber} >6</button>
          <button id="subtract" className='operation' value={'-'} onClick={this.handleClickOfOperations} >-</button>
          <button id="seven" value={'7'} onClick={this.handleClickOfNumber} >7</button>
          <button id="eight" value={'8'} onClick={this.handleClickOfNumber} >8</button>
          <button id="nine" value={'9'} onClick={this.handleClickOfNumber} >9</button>
          <button id="equals" className='operation' value={"="} onClick={this.handleClickOfSum} >=</button>
          <button id="decimal" value={'.'} onClick={this.handleClickOfDecimal} >.</button>
        </div>
      </div>
    );
  }
}
  
export default Calculator;