import React from "react";
import Input from "../Input/Inputs";
import ListItem from "../ListItem/ListItem";
import { setItems, getItems } from "../../helpers/localStorage";


const classNames = require("classnames");

const container = classNames([
  "relative",
  "w-full",
  "flex-wrap",
  "flex",
  "justify-center",
  "items-center",
]);

const todoContainer = classNames(["w-2/5"]);

const headerContainer = classNames([
  "flex",
  "justify-end",
  "items-center",
  "w-full",
  "bg-gray-300",
  "mx-auto",
]);

const inputTodo = classNames([
  "w-4/5",
  "px-5",
  "py-2",
  "border-none",
  "text-lg",
  "bg-gray-300",
  "focus:outline-none",
]);

const addTodoBtn = classNames(["px-5", "py-3", "ml-10"]);
const contentContainer = classNames(["w-full"]);
const footerButton = classNames(["mx-1", "px-2", "py-1"]);
const allButton = classNames(["ml-40", "px-2", "py-1"]);

const FilterStatuses = {
  completed: "completed",
  all: "all",
  active: "active",
};

const footerContainer = classNames(["w-full", "bg-gray-300", "p-2"]);
export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: getItems("todo") !== null ? [...getItems("todo")] : [],
      todoInputText: "",
      filterStatus: "all",
    };
  }

  handleAddTodo = () => {
    if (this.state.todoInputText.trim() !== "") {
      this.setState({
        todos: [
          ...this.state.todos,
          {
            text: this.state.todoInputText,
            id: Math.random().toString(),
            isEdit: false,
            draft: this.state.todoInputText,
            isComplete: false,
          },
        ],
        todoInputText: "",
      });
    }
  };

  handleTodoText = (ev) => {
    this.setState({
      todoInputText: ev.target.value,
    });
  };

  handleKeyPress = (ev) => {
    if (ev.key.toLowerCase() === "enter") {
      this.handleTodoText(ev);
      this.handleAddTodo();
    }
  };

  handleDraftChange = (id) => (ev) => {
    this.setState(({ todos }) => ({
      todos: todos.map((todo) =>
        todo.id === id ? { ...todo, draft: ev.target.value } : todo
      ),
    }));
  };

  handleEdit = (id) => (e) => {
    e.stopPropagation();
    this.setState(({ todos }) => ({
      todos: todos.map((todo) =>
        todo.id === id ? { ...todo, isEdit: !todo.isEdit } : todo
      ),
    }));
  };

  handleSave = (id, value) => (e) => {
    e.stopPropagation();
    if (value.trim() !== "") {
      this.setState(({ todos }) => ({
        todos: todos.map((todo) =>
          todo.id === id
            ? { ...todo, text: todo.draft, isEdit: false, isComplete: false }
            : todo
        ),
      }));
    } else {
      this.setState(({ todos }) => ({
        todos: todos.map((todo) =>
          todo.id === id
            ? { ...todo, draft: todo.text, isEdit: false, isComplete: false }
            : todo
        ),
      }));
    }
  };

  handleComplete = (id) => (e) => {
    e.stopPropagation();
    this.setState(({ todos }) => ({
      todos: todos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      ),
    }));
  };

  handleDelete = (id) => (e) => {
    e.stopPropagation();

    this.setState(({ todos }) => ({
      todos: todos.filter((todo) => todo.id !== id),
    }));
  };

  handleCheckAll = () => {
    this.setState(({ todos }) => ({
      todos: todos.every((todo) => todo.isComplete)
        ? todos.map((todo) => {
            return { ...todo, isComplete: false };
          })
        : todos.map((todo) => {
            return { ...todo, isComplete: true };
          }),
    }));
  };

  handleClearCompleteds = () => {
    this.setState(({ todos }) => ({
      todos: todos.filter((todo) => !todo.isComplete),
    }));
  };

  componentDidUpdate = () => {
    setItems("todo", this.state.todos);
  };

  componentDidMount = () => {
    this.setState(({ todos }) => ({
      todos: todos.map((todo) => {
        if (todo.isEdit) {
          return { ...todo, isEdit: !todo.isEdit, draft: todo.text };
        }
        return todo;
      }),
    }));
  };

  selectFilter = (filterStatus) => () => {
    this.setState({
      filterStatus,
    });
  };

  render() {
    const filteredTodos =
      this.state.filterStatus === FilterStatuses.all
        ? this.state.todos
        : this.state.filterStatus === FilterStatuses.active
        ? this.state.todos.filter((t) => !t.isComplete)
        : this.state.todos.filter((t) => t.isComplete);

    return (
      <div className={container}>
        <div className={todoContainer}>
          <div className={headerContainer}>
            <Input
              type="text"
              value={this.state.todoInputText}
              onChange={this.handleTodoText}
              onKeyPress={this.handleKeyPress}
              className={inputTodo}
              placeholder="What needs to be done?"
            />
            <Input
              value="Add"
              type="button"
              onClick={this.handleAddTodo}
              className={addTodoBtn}
            />
          </div>
          <div className={contentContainer}>
            {filteredTodos.map((el) => {
              return (
                <ListItem
                  label={el.text}
                  key={el.id}
                  id={el.id}
                  isEdit={el.isEdit}
                  handleEdit={this.handleEdit(el.id)}
                  handleDraftChange={this.handleDraftChange(el.id)}
                  handleSave={this.handleSave(el.id, el.draft)}
                  handleComplete={this.handleComplete(el.id)}
                  handleDelete={this.handleDelete(el.id)}
                  draft={el.draft}
                  isComplete={el.isComplete}
                />
              );
            })}
          </div>
          <div className={footerContainer}>
            <Input
              type="button"
              className={footerButton}
              value="Check All"
              onClick={this.handleCheckAll}
            />
            <Input
              type="button"
              className={allButton}
              value="All"
              onClick={this.selectFilter("all")}
            />
            <Input
              type="button"
              className={footerButton}
              value="Active"
              onClick={this.selectFilter("active")}
            />
            <Input
              type="button"
              className={footerButton}
              value="Completed"
              onClick={this.selectFilter("completed")}
            />
            <Input
              type="button"
              className={footerButton}
              value="Clear Completed"
              onClick={this.handleClearCompleteds}
            />
          </div>
        </div>
      </div>
    );
  }
}

