import React, { Component } from "react";

class Media extends Component {
  state = {
    matches: window.matchMedia(this.props.query)
      .matches
  }

  componentDidMount() {
    this.setup()
  }

  setup() {
    let media = window.matchMedia(this.props.query)
    if (media.matches !== this.state.matches)
      this.setState({ matches: media.matches })

    let listener = () =>
      this.setState({ matches: media.matches })

    media.addListener(listener)
    this.removeListener = () =>
      media.removeListener(listener)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.query !== this.props.query) {
      this.removeListener()
      this.setup()
    }
  }

  render() {
    return this.props.children(this.state.matches)
  }
}


class App extends Component {
  render() {
    return (
      <div>
        <h1>React Hooks</h1>
        <Media query="(max-width: 600px)">
          { small => (
            <Media query="(min-width: 800px)">
              { large => (
                <div>
                  <h2>Hello Media component</h2>
                  <h3>SMALL: { small ? "YES" : "NOPE"  }</h3>
                  <h3>LARGE: { large ? "YES" : "NOPE"  }</h3>
                </div>
              ) }
            </Media>
          ) }
        </Media>
      </div>
    );
  }
}

export default App;
