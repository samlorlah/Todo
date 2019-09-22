import React from "react";

const AddTodo = ({ item, handleItem, handleSubmit, edit }) => {
  return (
    <div className="my-3">
      <h3 className="text-center text-capitalize">add todo</h3>
      <form onSubmit={handleSubmit}>
        <div className="card">
          <div className="card-body">
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <div className="input-group-text">TODO</div>
              </div>
              <input
                type="text"
                className="form-control"
                id="inlineFormInputGroup"
                placeholder="Add a new Todo"
                value={item}
                onChange={handleItem}
              />
            </div>
            <button
              type="submit"
              className={
                edit
                  ? "btn btn-success btn-block mt-3"
                  : "btn btn-primary btn-block mt-3"
              }
            >
              {edit ? "Update Todo" : "Add Todo"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
