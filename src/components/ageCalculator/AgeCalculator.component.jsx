import { Component } from "react";
// CSS Link
import "./AgeCalculator.styles.css";

// Defining component in the form of class
class AgeCalculator extends Component {
  // constrcutor
  constructor(props) {
    super(props);

    // this is state of cc
    this.state = {
      age: 21,
      theme: "dark",
    };

    console.log("Constructor called!");
  }

  //on click increase age event listener
  incAge = () => {
    this.setState((prevState) => {
      return {
        age: prevState.age + 1,
        theme: prevState.theme === "dark" ? "light" : "dark",
      };
    });
  };

  // lifecycle methods
  componentDidCatch(error, info) {
    console.log(error);
    console.log(info);
  }

  componentDidMount() {
    console.log("Just after mounting..");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Just after updating..");
    console.log(prevProps);
    console.log(prevState);
  }

  componentWillUnmount() {
    console.log("Just befre component removal..");
  }

  render() {
    const { age, theme } = this.state;

    console.log("Render called!");

    return (
      <div id="age_calculator_container">
        Age Calculator.
        <div>
          <button onClick={this.incAge}>Happy Birthday!</button>
          <p>Currently, I am {age} years old!</p>
          <p>Theme: {theme}</p>
        </div>
      </div>
    );
  }
}

export default AgeCalculator;
