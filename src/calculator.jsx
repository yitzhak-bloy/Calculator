import React, { Component } from 'react';

  class Calculator extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: '',
        sum: undefined
      };
    }

  handleClick = (event)  => {
    this.setState({
      count: this.state.count + event.target.value
    })
  }
  
  handleSum = ()  => {
    this.setState({
      sum: eval(this.state.count)
    })
  }

  handleclear = ()  => {
    this.setState({
      count: '',
      sum: undefined
    })
  }

  render() {
    return (
      <div className="Calculator">
        <h1>מחשבון</h1>
        <button id="equals" value={'='} onClick={this.handleSum}>=</button>
        <button id="zero" value={'0'} onClick={this.handleClick} >0</button>
        <button id="one" value={'1'} onClick={this.handleClick} >1</button>
        <button id="two" value={'2'} onClick={this.handleClick} >2</button>
        <button id="three" value={'3'} onClick={this.handleClick} >3</button>
        <button id="four" value={'4'} onClick={this.handleClick} >4</button>
        <button id="five" value={'5'} onClick={this.handleClick} >5</button>
        <button id="six" value={'6'} onClick={this.handleClick} >6</button>
        <button id="seven" value={'7'} onClick={this.handleClick} >7</button>
        <button id="eight" value={'8'} onClick={this.handleClick} >8</button>
        <button id="nine" value={'9'} onClick={this.handleClick} >9</button>
        <button id="add" value={'+'} onClick={this.handleClick} >+</button>
        <button id="subtract" value={'-'} onClick={this.handleClick} >-</button>
        <button id="multiply" value={'*'} onClick={this.handleClick} >*</button>
        <button id="divide" value={'/'} onClick={this.handleClick} >/</button>
        <button id="decimal" value={'.'} onClick={this.handleClick} >.</button>
        <button id="clear" value={'0'} onClick={this.handleclear} >clear</button>
        <div id='display'>{this.state.count}</div>
        <div id='display1'>{this.state.sum}</div>
      </div>
    );
  }

}
  
export default Calculator;