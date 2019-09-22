import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({
  items,
  handleClearList,
  handleEdit,
  handleDelete,
  completed,
  handleCompleted
}) => {
  return (
    <>
      <h3 className="text-center text-capitalize mt-3">ToDo Lists</h3>
      <div className="card my-3 bg-info px-3">
        <ul className="list-group">
          {items.map(item => (
            <TodoItem
              key={item.id}
              id={item.id}
              item={item.item}
              completed={item.completed}
              handleEdit={id => handleEdit(id)}
              handleDelete={id => handleDelete(id)}
              handleCompleted={id => handleCompleted(id)}
            />
          ))}
        </ul>
        <button
          type="submit"
          className="btn btn-danger btn-block my-3"
          onClick={handleClearList}
        >
          Clear List
        </button>
      </div>
    </>
  );
};

export default TodoList;
