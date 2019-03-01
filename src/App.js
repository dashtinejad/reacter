import React, { Component } from "react";
import State from './state/State'
class App extends Component {
  render() {
    return (
      <div>
        <h1>Reacter</h1>

        <State counter={2} />
      </div>
    );
  }
}

export default App;
