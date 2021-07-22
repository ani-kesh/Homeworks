import React from "react";
import Input from "../Input/Inputs";

let classNames = require("classnames");
let inputNumber = classNames([
  "w-1/3",
  "shadow",
  "appearance-none",
  "border",
  "rounded",
  "py-2",
  "px-3",
  "m-2",
  "text-gray-700",
  "leading-tight",
  "focus:outline-none",
  "focus:shadow-outline",
]);
export default class Temperature extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperatureFahrenheit: "",
      temperatureCelsius: "",
      scale: "",
    };
  }

  handleToFahrenheit = (ev) => {
    this.setState({
      temperatureCelsius: ev.target.value,
      temperatureFahrenheit:
        ev.target.value.trim() === ""
          ? ""
          : ((ev.target.value * 9) / 5 + 32).toFixed(2),
    });
  };

  handleToCelsius = (ev) => {
    this.setState({
      temperatureFahrenheit: ev.target.value,
      temperatureCelsius:
        ev.target.value.trim() === ""
          ? ""
          : (((ev.target.value - 32) * 5) / 9).toFixed(2),
    });
  };

  render() {
    return (
      <>
        <p>Enter temperature in Celsius:</p>
        <Input
          type="number"
          className={inputNumber}
          onChange={this.handleToFahrenheit}
          value={this.state.temperatureCelsius}
        />
        <p>Enter temperature in Fahrenheit:</p>
        <Input
          type="number"
          className={inputNumber}
          onChange={this.handleToCelsius}
          value={this.state.temperatureFahrenheit}
        />
      </>
    );
  }
}
