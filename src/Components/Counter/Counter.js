import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    //binding
    this.increment = this.increment.bind(this);
  }
  increment() {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count + 1);
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Counter</h1>
        <h3>The count is {count}</h3>
        <button onClick={this.increment}>Add One to Count</button>
      </div>
    );
  }
}
