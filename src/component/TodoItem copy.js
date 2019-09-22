import React from "react";

const TodoItem = ({ item, handleDelete, handleEdit }) => {
  return (
    <li className="list-group-item mt-2 bg-warning">
      <div className="">
        <div className="float-left">
          <h6>{item}</h6>
        </div>
        <div className="float-right">
          <button
            className="btn btn-sm btn-secondary mr-1"
            onClick={handleEdit}
          >
            Edit
          </button>
          <button
            className="btn btn-sm btn-secondary"
            onClick={id => handleDelete({ id })}
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
