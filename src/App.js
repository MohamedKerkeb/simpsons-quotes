import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Lamp from "./Lamp";
import Quote from "./Quote";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false
    };
  }
  handleClick = () => {
    this.setState({ on: !this.state.on });
  };

  render() {
    const worklogo = this.state.on ? "work" : "break";

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={worklogo} alt="logo" />
          <h1 className="App-title">Simpson Quotes</h1>
        </header>
        <Lamp on />
        <Lamp />
        <Quote
          quote="I belive the children are the future... Unless we stop them now!"
          character="Homer Simpson"
          image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
        />

        <button onClick={this.handleClick}>Working</button>
      </div>
    );
  }
}

export default App;
