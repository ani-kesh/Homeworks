import React from "react";
import Input from "../../components/Input/Inputs";
import PropTypes from "prop-types";

const classNames = require("classnames");
const itemContainer = classNames(["flex", "w-full", "bg-gray-200", "p-3"]);
const itemName = classNames(["w-4/5"]);
const inputLabel = classNames([
  "w-4/5",
  "px-5",
  "py-2",
  "border-none",
  "text-lg",
  "bg-gray-300",
  "focus:outline-none",
]);
const buttonsContainer = classNames(["w-1/5"]);
const complete = classNames({ "line-through": true });
const icon = classNames(["w-7 mx-1"]);

export default class ListItem extends React.Component {
  render() {
    const {
      label,
      isEdit,
      isComplete,
      handleEdit,
      handleDraftChange,
      draft,
      handleDelete,
      handleSave,
      handleComplete,
    } = {
      ...this.props,
    };

    return (
      <div className={itemContainer}>
        <div className={itemName}>
          {isEdit ? (
            <Input
              value={draft}
              onChange={handleDraftChange}
              className={inputLabel}
            />
          ) : (
            <span className={isComplete ? complete : ""}>{label}</span>
          )}
        </div>
        <div className={buttonsContainer}>
          {isEdit ? (
            <Input
              type="button"
              value="&#128190;"
              className={icon}
              onClick={handleSave}
            />
          ) : (
            <Input
              type="button"
              value="&#9998;"
              className={icon}
              onClick={handleEdit}
            />
          )}
          <Input
            type="button"
            value="&#10003;"
            className={icon}
            onClick={handleComplete}
          />
          <Input
            type="button"
            value="&times;"
            className={icon}
            onClick={handleDelete}
          />
        </div>
      </div>
    );
  }
}

ListItem.protoTypes = {
  label: PropTypes.string,
  isEdit: PropTypes.bool,
  isComplete: PropTypes.bool,
  handleEdit: PropTypes.func,
  handleDraftChange: PropTypes.func,
  draft: PropTypes.string,
  handleDelete: PropTypes.func,
  handleSave: PropTypes.func,
  handleComplete: PropTypes.func,
};
