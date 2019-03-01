import React, { Component } from "react";

class State extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: props.counter || 0 };
    this.handler = this.handler.bind(this);
  }

  handler(toSum) {
    return () => {
      this.setState(state => {
        return { counter: state.counter + toSum };
      });
    };
  }

  render() {
    return (
      <div>
        <h1>State Sample</h1>

        {this.state.counter}

        <button onClick={this.handler(+1)}>+</button>
        <button onClick={this.handler(-1)}>-</button>
      </div>
    );
  }
}

export default State;
