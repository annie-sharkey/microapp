import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const microjoys = [
  "When worship music (particularly multiplied) makes me run faster when i’m tired but trying to finish hard",
  "Meal prepping ⇒ when there are many containers and they’re all matching",
  "Beautifully decorated/open restaurants"
];

class MicroText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleClick = () => {
    if (this.state.counter === microjoys.length - 1) {
      this.setState({
        counter: 0
      });
    } else {
      this.setState(
        {
          counter: this.state.counter + 1
        },
        function() {
          console.log(this.state.counter);
        }
      );
    }
  };
  render() {
    return (
      <div>
        <div>{microjoys[this.state.counter]}</div>
        <div>
          <Grid container direction="row" justify="center" alignItems="center">
            <Button
              variant="outlined"
              color="primary"
              onClick={console.log("back home clicked")}
            >
              Back Home
            </Button>

            <Button
              variant="outlined"
              color="primary"
              onClick={this.handleClick}
            >
              New Microjoy
            </Button>
          </Grid>
        </div>
      </div>
    );
  }
}

export default MicroText;
