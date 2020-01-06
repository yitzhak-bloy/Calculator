import React, { Component } from 'react';

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
    if ((this.state.count + event.target.value) === '0') {
      this.setState({
        count: ''
      })
    } else if (/[.]+/.test(this.state.count)) {
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
        <h1>מחשבון</h1>
        <button id="equals" value={'='} onClick={this.handleSum} >=</button>
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
        <button id="add" value={'+'} onClick={this.handleClickOfOperations} >+</button>
        <button id="subtract" value={'-'} onClick={this.handleClickOfOperations} >-</button>
        <button id="multiply" value={'*'} onClick={this.handleClickOfOperations} >*</button>
        <button id="divide" value={'/'} onClick={this.handleClickOfOperations} >/</button>
        <button id="decimal" value={'.'} onClick={this.handleDecimal } >.</button>
        <button id="clear" value={'0'} onClick={this.handleclear} >clear</button>
        <div id='display'>
          <div id='displayCount'>{this.state.count ? this.state.count : '0'}</div>
          <div id='displaySum'>{this.state.sum}</div>
        </div>
        <div id='display1'></div>
      </div>
    );
  }
}
  
export default Calculator;