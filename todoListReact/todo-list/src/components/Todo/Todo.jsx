import React from "react";
import Input from "../Input/Inputs";
import ListItem from "../ListItem/ListItem";
import { setItems, getItems } from "../../helpers/localStorage";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allTodos: getItems("todo") !== null ? [...getItems("todo")] : [],
      todos: getItems("todo") !== null ? [...getItems("todo")] : [],
      todoInputText: "",
    };
  }

  handleAddTodo = () => {
    if (this.state.todoInputText.trim() !== "") {
      this.setState({
        todos: [
          ...this.state.todos,
          {
            text: this.state.todoInputText,
            id: Math.random(),
            isEdit: false,
            draft: this.state.todoInputText,
            isComplete: false,
          },
        ],
        allTodos: [
          ...this.state.todos,
          {
            text: this.state.todoInputText,
            id: Math.random(),
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
      allTodos: todos.map((todo) =>
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
      allTodos: todos.map((todo) =>
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
        allTodos: todos.map((todo) =>
          todo.id === id
            ? { ...todo, text: todo.draft, isEdit: false, isComplete: false }
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
      allTodos: todos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      ),
    }));
  };

  handleDelete = (id) => (e) => {
    e.stopPropagation();

    this.setState(({ todos }) => ({
      todos: todos.filter((todo) => todo.id !== id),
      allTodos: todos.filter((todo) => todo.id !== id),
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
      allTodos: todos.every((todo) => todo.isComplete)
        ? todos.map((todo) => {
            return { ...todo, isComplete: false };
          })
        : todos.map((todo) => {
            return { ...todo, isComplete: true };
          }),
    }));
  };

  handleShowAll = () => {
    this.setState({
      todos: [...this.state.allTodos],
    });
  };

  handleShowActives = () => {
    console.log("aaa");
    this.setState(({ allTodos }) => ({
      todos: allTodos.filter((todo) => !todo.isComplete),
    }));
  };

  handleShowCompleteds = () => {
    this.setState(({ allTodos }) => ({
      todos: allTodos.filter((todo) => todo.isComplete),
    }));
  };

  handleClearCompleteds = () => {
    this.setState(({ allTodos, todos }) => ({
      allTodos: allTodos.filter((todo) => !todo.isComplete),
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

  render() {
    return (
      <div className="relative w-full flex-wrap flex justify-center items-center ">
        <div className="w-2/5">
          <div className="flex justify-end items-center w-full bg-gray-300 mx-auto">
            <Input
              type="text"
              value={this.state.todoInputText}
              onChange={this.handleTodoText}
              onKeyPress={this.handleKeyPress}
              className="w-4/5 px-5 py-2 border-none text-lg bg-gray-300 focus:outline-none"
              placeholder="What needs to be done?"
            />
            <Input
              value="Add"
              type="button"
              onClick={this.handleAddTodo}
              className="px-5 py-3 ml-10"
            />
          </div>
          <div className="w-full">
            {this.state.todos.map((el) => {
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
          <div className="w-full bg-gray-300 p-2">
            <Input
              type="button"
              className="mx-1 px-2 py-1"
              value="Check All"
              onClick={this.handleCheckAll}
            />
            <Input
              type="button"
              className="ml-40 px-2 py-1"
              value="All"
              onClick={this.handleShowAll}
            />
            <Input
              type="button"
              className="mx-1 px-2 py-1"
              value="Active"
              onClick={this.handleShowActives}
            />
            <Input
              type="button"
              className="mx-1 px-2 py-1"
              value="Completed"
              onClick={this.handleShowCompleteds}
            />
            <Input
              type="button"
              className="mx-1 px-2 py-1"
              value="Clear Completed"
              onClick={this.handleClearCompleteds}
            />
          </div>
        </div>
      </div>
    );
  }
}
