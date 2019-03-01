import React, { Component } from "react";

function Counter({ counter, handler }) {
  return (
    <div>
      <h1>Counter</h1>
      <p>The current counter is: {counter}</p>

      <button onClick={handler(+1)}>+</button>
      <button onClick={handler(-1)}>-</button>
    </div>
  );
}

class ComposeWithState extends Component {
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
        <h1>ComposeWithState Sample</h1>

        <Counter counter={this.state.counter} handler={this.handler} />
      </div>
    );
  }
}

export default ComposeWithState;
