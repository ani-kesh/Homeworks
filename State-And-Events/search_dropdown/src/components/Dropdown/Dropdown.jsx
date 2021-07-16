import React from "react";
import Input from "../Input/Input";
import styles from "../Dropdown/dropdown.module.css";
import GetCountries from "../../data/countries.data";
import OptionDiv from "../OptionDiv/OptionDiv";

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openClose: false,
      countries: [],
      searchedCountries: [],
    };
  }

  componentDidMount() {
    GetCountries().then((res) => {
      const countries = [];
      res.forEach(({ name, flag }) => {
        countries.push({ name: name.trim(), flag });
      });
      this.setState({ countries: countries, searchedCountries: countries });
    });
  }

  handleShowCountries = () => {
    this.setState({ openClose: this.state.openClose ? false : true });
  };

  handleSearch = (ev) => {
    const searchText = ev.target.value.toLowerCase();
    this.setState({ openClose: searchText.trim() !== "" ? true : false });
    const searchedCountries = this.state.countries.filter(
      ({ name }) => name.toLowerCase().search(searchText) > -1
    );

    searchedCountries.sort((a, b) => {
      return (
        a.name.toLowerCase().search(searchText) -
        b.name.toLowerCase().search(searchText)
      );
    });
    this.setState({ searchedCountries: searchedCountries });
  };

  render() {
    const showHideOptions = this.state.openClose ? "" : "hidden";
    const addContainerClass = this.state.openClose
      ? styles.containerToggle
      : "";
    const arrowIconSide = this.state.openClose ? "down" : "up";
    return (
      <div className={styles.container + " " + addContainerClass}>
        <div className={styles.selectContainer}>
          <Input
            onChange={this.handleSearch}
            placeholder="Tap here to search country..."
          />
          <i
            className={"fas fa-caret-" + arrowIconSide + " " + styles.iconStyle}
            onClick={this.handleShowCountries}
          ></i>
        </div>
        <div
          className={styles.countriesContainer}
          {...{ hidden: showHideOptions }}
        >
          {this.state.searchedCountries.map(({ name, flag }) => {
            return <OptionDiv label={name} url={flag} key={name} />;
          })}
        </div>
      </div>
    );
  }
}
