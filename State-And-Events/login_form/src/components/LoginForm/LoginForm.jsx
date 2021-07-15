import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import styles from "./login.module.css";
import { isValidEmail, isValidPassword } from "../../helpers/validations";
import {
  SetLocalStorageItem,
  GetLocalStorageItem,
} from "../../helpers/localStorage";

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isValidEmail: true,
      isValidPassword: true,
      email:
        typeof GetLocalStorageItem("email") !== "undefined"
          ? GetLocalStorageItem("email")
          : "",
      password:
        typeof GetLocalStorageItem("password") !== "undefined"
          ? GetLocalStorageItem("password")
          : "",
    };
  }

  handleEmail = (ev) => {
    this.setState({
      email: ev.target.value,
    });
  };

  handlePassword = (ev) => {
    this.setState({
      password: ev.target.value,
    });
  };

  handleLogin = () => {
    this.setState((prev) => {
      const isValidEmail1 = isValidEmail(prev.email);
      const isValidPassword1 = isValidPassword(prev.password);
      if (isValidEmail1 && isValidPassword1) {
        SetLocalStorageItem("email", prev.email);
        SetLocalStorageItem("password", prev.password);
      }

      return {
        isValidEmail: isValidEmail1,
        isValidPassword: isValidPassword1,
      };
    });
  };

  render() {
    const emailMessage = this.state.isValidEmail ? "" : "Wrong email";
    const hiddenEmail = this.state.isValidEmail ? "hidden" : "";
    const passwordMessage = this.state.isValidPassword ? "" : "Wrong password";
    const hiddenPassword = this.state.isValidPassword ? "hidden" : "";
    const isDisableLoginBtn =
      this.state.email !== "" && this.state.password !== "" ? false : true;
    return (
      <div className={styles.loginForm}>
        <Input
          type="email"
          id="username"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleEmail}
        />
        <p className={styles.errorMessage} {...{ hidden: hiddenEmail }}>
          {emailMessage}
        </p>
        <Input
          type="password"
          id="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handlePassword}
        />
        <p className={styles.errorMessage} {...{ hidden: hiddenPassword }}>
          {passwordMessage}
        </p>
        <Button
          value="Login"
          onClick={this.handleLogin}
          disabled={isDisableLoginBtn}
        />
      </div>
    );
  }
}
