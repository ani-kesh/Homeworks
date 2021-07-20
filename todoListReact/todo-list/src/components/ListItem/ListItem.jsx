import React from "react";
import Input from "../../components/Input/Inputs";

export default class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      label: "",
    };
  }

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
      <div className="flex w-full bg-gray-200 p-3">
        <div className="w-4/5">
          {isEdit ? (
            <Input
              value={draft}
              onChange={handleDraftChange}
              className="w-4/5 px-5 py-2 border-none text-lg bg-gray-300 focus:outline-none"
            />
          ) : isComplete ? (
            <span className="line-through">{label}</span>
          ) : (
            <span>{label}</span>
          )}
        </div>
        <div className="w-1/5">
          {isEdit ? (
            <Input
              type="button"
              value="&#128190;"
              className="w-7 mx-1"
              onClick={handleSave}
            />
          ) : (
            <Input
              type="button"
              value="&#9998;"
              className="w-7 mx-1"
              onClick={handleEdit}
            />
          )}
          <Input
            type="button"
            value="&#10003;"
            className="w-7 mx-1"
            onClick={handleComplete}
          />
          <Input
            type="button"
            value="&times;"
            className="w-7 mx-1"
            onClick={handleDelete}
          />
        </div>
      </div>
    );
  }
}
