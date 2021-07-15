import React from "react";
import Input from "../Input/Inputs";
import Button from "../Button/Button";
import {
  SetLocalStorageItem,
  GetLocalStorageItem,
} from "../../helpers/localStorage";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: 0,
      max:
        typeof GetLocalStorageItem("maxValue") !== "undefined"
          ? Number(GetLocalStorageItem("maxValue"))
          : 0,
      min:
        typeof GetLocalStorageItem("minValue") !== "undefined"
          ? Number(GetLocalStorageItem("minValue"))
          : 0,
      step:
        typeof GetLocalStorageItem("step") !== "undefined"
          ? Number(GetLocalStorageItem("step"))
          : 0,
      disabledDecrease: false,
      disabledIncrease: false,
    };
    this.handleInc = this.handleInc.bind(this);
    this.handleDec = this.handleDec.bind(this);
    this.handleRes = this.handleRes.bind(this);
    this.SetMaximumValue = this.SetMaximumValue.bind(this);
    this.SetMinimumValue = this.SetMinimumValue.bind(this);
    this.SetStep = this.SetStep.bind(this);
  }

  handleInc() {
    const currentValue1 =
      Number(this.state.currentValue) + Number(this.state.step);
    this.setState({ currentValue: currentValue1 });
  }

  handleDec() {
    const currentValue1 =
      Number(this.state.currentValue) - Number(this.state.step);
    if (
      currentValue1 >= 0 &&
      currentValue1 >= Number(GetLocalStorageItem("minValue"))
    )
      this.setState({ currentValue: currentValue1 });
  }
  handleRes() {
    SetLocalStorageItem("maxValue", 0);
    SetLocalStorageItem("minValue", 0);
    SetLocalStorageItem("step", 0);
    this.setState({
      currentValue: 0,
      max: 0,
      min: 0,
      step: 0,
    });
  }

  SetMaximumValue(ev) {
    SetLocalStorageItem("maxValue", ev.target.value);
    this.setState({ max: ev.target.value });
  }

  SetMinimumValue(ev) {
    SetLocalStorageItem("minValue", ev.target.value);
    this.setState({ min: ev.target.value });
  }

  SetStep(ev) {
    SetLocalStorageItem("step", ev.target.value);
    this.setState({ step: ev.target.value });
  }
  render() {
    let disableDec =
      this.state.currentValue <= 0 ||
      this.state.currentValue - Number(GetLocalStorageItem("step")) <
        Number(GetLocalStorageItem("minValue"))
        ? true
        : false;
    let disableInc =
      this.state.currentValue + Number(GetLocalStorageItem("step")) >
      Number(GetLocalStorageItem("maxValue"))
        ? true
        : false;

    return (
      <>
        <div>
          Min:
          <Input
            id="minValue"
            onChange={this.SetMinimumValue}
            value={this.state.min}
          />
          Max:
          <Input
            id="maxValue"
            onChange={this.SetMaximumValue}
            value={this.state.max}
          />
          Step:
          <Input id="step" onChange={this.SetStep} value={this.state.step} />
        </div>
        <div>
          <Button
            value="Increase"
            id="increase"
            onClick={this.handleInc}
            disabled={disableInc}
          />
          <Button
            value="Decrease"
            id="decrease"
            onClick={this.handleDec}
            disabled={disableDec}
          />
          <Button value="Reset" id="reset" onClick={this.handleRes} />
        </div>
        <p>{this.state.currentValue}</p>
      </>
    );
  }
}
export default Calculator;
