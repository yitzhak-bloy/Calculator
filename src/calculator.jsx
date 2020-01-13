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

  handleClick = (event)  => {
    if ((this.state.count + event.target.value) === '0') {
      this.setState({
        count: ''
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

  handleClickOfOperations = (event)  => {
    if (/[*]$|[+]$|[-]$|[/]$/.test(this.state.count) && /[*]$|[+]$|[/]$/.test(event.target.value)) {
      this.setState({
        count: this.state.count.replace(/[*]$|[+]$|[-]$|[/]$/, event.target.value)
      })
    } else if ( this.state.count === '' && (event.target.value === '*' || event.target.value === '/')) {
        console.log('לא חוקי');
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
  
  handleSum = ()  => {
    if (/[*]$|[+]$|[-]$|[/]$/.test(this.state.count) || /^[*]|^[/]/.test(this.state.count) ) {
      console.log('לא חוקי')
    } else {
      this.setState({
        sum: eval(this.state.count)
      })
    }
  }

  handleDecimal = (event)  => {
    if ((/[.]/.test(this.state.count) && !(/[*]+|[+]+|[-]+|[/]+/.test(this.state.count)))) {
      console.log('לא חוקי')
    } else {
      this.setState({
        count: this.state.count + event.target.value
      })
    }
  }

  handleclear = ()  => {
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
          <button id="clear" className='operation' value={'0'} onClick={this.handleclear} >clear</button> 
          <button id="zero" value={'0'} onClick={this.handleClick} >0</button>
          <button id="divide" className='operation' value={'/'} onClick={this.handleClickOfOperations} >/</button>
          <button id="multiply" className='operation' value={'*'} onClick={this.handleClickOfOperations} >&#10005;</button>
          <button id="one" value={'1'} onClick={this.handleClick} >1</button>
          <button id="two" value={'2'} onClick={this.handleClick} >2</button>
          <button id="three" value={'3'} onClick={this.handleClick} >3</button>
          <button id="add" className='operation' value={'+'} onClick={this.handleClickOfOperations} >+</button>
          <button id="four" value={'4'} onClick={this.handleClick} >4</button>
          <button id="five" value={'5'} onClick={this.handleClick} >5</button>
          <button id="six" value={'6'} onClick={this.handleClick} >6</button>
          <button id="subtract" className='operation' value={'-'} onClick={this.handleClickOfOperations} >-</button>
          <button id="seven" value={'7'} onClick={this.handleClick} >7</button>
          <button id="eight" value={'8'} onClick={this.handleClick} >8</button>
          <button id="nine" value={'9'} onClick={this.handleClick} >9</button>
          <button id="equals" className='operation' value={'='} onClick={this.handleSum} >=</button>
          <button id="decimal" value={'.'} onClick={this.handleDecimal } >.</button>
        </div>
      </div>
    );
  }
}
  
export default Calculator;