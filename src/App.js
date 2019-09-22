import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTodo from "./component/AddTodo";
import TodoList from "./component/TodoList";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: "",
      items: []
    };
  }
  handleItem = e => {
    this.setState({ item: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: this.state.edit ? this.state.id : Date.now(),
      item: this.state.item,
      edit: false,
      completed: false
    };
    this.setState(prevState => ({
      items:
        this.state.item === ""
          ? [...this.state.items]
          : prevState.items.concat(newItem),
      item: "",
      edit: false
    }));
  };
  handleClearList = e => {
    e.preventDefault();
    this.setState({ items: [] });
  };
  handleDelete = itemId => {
    const { items } = this.state;
    const deletedItem = items.filter(item => {
      return item.id !== itemId;
    });
    this.setState({ items: deletedItem });
  };

  handleEdit = itemId => {
    const { items } = this.state;
    const updatedItem = items.filter(item => {
      return item.id !== itemId;
    });
    this.setState({ items: updatedItem });

    const editItem = items.find(item => {
      return item.id === itemId;
    });

    const updateItem = {
      id: editItem.id,
      item: editItem.item,
      edit: true
    };
    this.setState({
      id: updateItem.id,
      item: updateItem.item,
      edit: updateItem.edit
    });
  };

  handleCompleted = itemId => {
    const updatedItem = this.state.items.map(item => {
      if (item.id === itemId) {
        item.completed = !item.completed;
      }
      return item;
    });

    this.setState({
      items: updatedItem
    });
  };

  render() {
    return (
      <>
        <div className="container row">
          <div className="col-12 col-md-8 offset-md-3">
            <AddTodo
              item={this.state.item}
              handleItem={this.handleItem}
              handleSubmit={this.handleSubmit}
              edit={this.state.edit}
            />

            <TodoList
              items={this.state.items}
              completed={this.state.completed}
              handleClearList={this.handleClearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
              handleCompleted={this.handleCompleted}
            />
          </div>
        </div>
      </>
    );
  }
}
