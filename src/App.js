import React, { Component } from "react";
import "./App.css";
import Typing from "react-typing-animation";
import Button from "@material-ui/core/Button";
import MicroText from "./MicroText.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  handleClick = () => {
    console.log("before: " + this.state.show);
    this.setState(
      {
        show: true
      },
      function() {
        console.log("after: " + this.state.show);
      }
    );
  };
  render() {
    return (
      <div className="Microjoy">
        {!this.state.show && (
          <div className="microText">
            <Typing speed={100}>
              <h1>
                {" "}
                Micro<span class="joyText">Joy.</span>
              </h1>
              <Typing.Delay ms={2000} />
              {/* <div>
                Definition: <Typing.Delay ms={2000} /> type type type
              </div> */}
            </Typing>
            <Button
              variant="outlined"
              color="primary"
              onClick={this.handleClick}
            >
              Get Random Microjoy
            </Button>
          </div>
        )}
        {this.state.show && <MicroText show={this.state.show}/>}
      </div>
    );
  }
}

export default App;
