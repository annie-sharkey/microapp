import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Typing from "react-typing-animation";

class App extends Component {
  render() {
    return (
      <div className="Microjoy">
        <div class="microText">
          <Typing speed={100}>
            <h1>
              {" "}
              Micro<span class="joyText">Joy.</span>
            </h1>
            <Typing.Delay ms={2000} />
            <div>
              Definition: <Typing.Delay ms={2000} /> type type type
            </div>
          </Typing>
        </div>
      </div>
    );
  }
}

export default App;
