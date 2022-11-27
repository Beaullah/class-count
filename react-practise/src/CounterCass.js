import React, { Component } from 'react'

export default class CounterClass extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
      

    }
    this.handleIncreaseCount= this.handleIncreaseCount.bind(this)

  }
  handleIncreaseCount= (e) =>{
    e.preventDefault();
    this.setState({count: this.state.count +1})
  }
  handleDecreaseCount= (e) =>{
    e.preventDefault();
    this.setState({count: this.state.count -1})
  }
  render() {
    return (
      <div>
        <h1> Counter:  {this.state.count}</h1>
          <hr/>
            <button onClick={this.handleIncreaseCount}>Increase</button>
            <button onClick={this.handleDecreaseCount}>Decrease</button>
          
      </div>
    )
  }
}
