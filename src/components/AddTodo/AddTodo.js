import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import DisplayTodo from "../DisplayTodo/DisplayTodo";
import { addTodo, handleEditSubmit } from "../../actions";

const AddTodo = () => {
  const dispatch = useDispatch();

  const [todoValue, setTodoValue] = useState("");
  const [editValue, setEditValue] = useState("");
  const [editTodo, setEditTodo] = useState("");
  const [editFormVisibility, setEditFormVisibility] = useState(false);

  const todos = useSelector((state) => state.todoReducer);

  useEffect(() => {
    setEditValue(editTodo.todo);
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoValue("");
    dispatch(addTodo(todoValue));
  };
  
  const handleEditClick = (todo) => {
    setEditFormVisibility(true);
    setEditTodo(todo);
  };

  const cancelUpdate = () => {
    setEditFormVisibility(false);
  };

  const editSubmit = (e) => {
    e.preventDefault();
    dispatch(handleEditSubmit(editTodo.id, editValue, false));
    setTodoValue("");
    setEditFormVisibility(false);
  };

  return (
    <div className="h-screen w-screen   bg-gradient-to-r from-slate-200 to-red-200 ">
      <h1 className="text-4xl font-serif font-semibold text-black flex items-center justify-center h-32 ">
        {" "}
        TODO APP{" "}
      </h1>

      <div className="flex justify-center items-center h-20">
        {editFormVisibility === false ? (
          <>
            <form className="form-group custom-form" onSubmit={handleSubmit}>
              <div className="input-and-btn">
                <input
                  type="text"
                  className="text-black w-1/3 bg-white h-10 rounded-lg p-4 shadow-md shadow-zinc-800"
                  required
                  value={todoValue}
                  onChange={(e) => setTodoValue(e.target.value)}
                />
                <button
                  type="submit"
                  className="w-20 bg-gray-950 text-white rounded-lg h-10 mx-2 shadow-md shadow-black hover:text-gray-50 hover:bg-slate-950"
                >
                  ADD
                </button>
              </div>
            </form>

            {todos.length === 0 ? (
              <h1 className="text-3xl font-serif font-normal text-cyan-800 flex justify-center ">
                No todos in your bucket
              </h1>
            ) : (
              <DisplayTodo
                handleEditClick={handleEditClick}
                editFormVisibility={editFormVisibility}
              />
            )}
          </>
        ) : (
          <>
            <form className="form-group custom-form" onSubmit={editSubmit}>
              <div>
                <input
                  type="text"
                  className="text-black w-1/3 bg-white h-10 rounded-lg p-4 shadow-md shadow-zinc-800"
                  required
                  value={editValue || ""}
                  onChange={(e) => setEditValue(e.target.value)}
                />
                <button type="submit" className="btn btn-secondary btn-md">
                  UPDATE
                </button>
              </div>
              <button
                type="button"
                className="w-20 bg-gray-950 text-white rounded-lg h-10 mx-2 shadow-md shadow-black hover:text-gray-50 hover:bg-slate-950"
                onClick={cancelUpdate}
              >
                BACK
              </button>
            </form>
            
          </>
        )}
        {todos.length == 0 ? (
              <h1 className="text-3xl font-serif font-normal text-cyan-800 flex justify-center ">
                No todos in your bucket
              </h1>
            ) : (
              <DisplayTodo
                handleEditClick={handleEditClick}
                editFormVisibility={editFormVisibility}
              />
            )}
      </div>
    </div>
  );
};

export default AddTodo;
