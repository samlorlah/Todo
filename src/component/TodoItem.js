import React from "react";

const TodoItem = ({
  item,
  handleDelete,
  handleEdit,
  id,
  completed,
  handleCompleted
}) => {
  return (
    <li
      className={
        completed
          ? "list-group-item mt-2 bg-secondary text-capitalize d-flex justify-content-between"
          : "list-group-item mt-2 bg-warning text-capitalize d-flex justify-content-between"
      }
    >
      <div>
        <input
          type="checkbox"
          className="form-check-input"
          checked={completed}
          onChange={() => handleCompleted(id)}
        />
        <h6>{item}</h6>
      </div>
      <div>
        <button
          className="badge badge-sm badge-primary mr-1"
          onClick={() => handleEdit(id)}
        >
          Edit
        </button>
        <button
          className="badge badge-sm badge-danger"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
