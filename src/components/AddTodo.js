import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import DisplayTodo from "./DisplayTodo";
import { addTodo, handleEditSubmit } from "../actions/todoActions";

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
    setEditTodo(todo)
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
    <div className=" w-screen min-h-screen bg-contain  bg-gradient-to-b from-slate-100 to-gray-400 via-sky-200">
      <div className="w-full h-32 items-center flex justify-center">
      <h1 className="text-4xl font-serif font-semibold text-black">
        TODO APP
      </h1>
      </div>

     
        {editFormVisibility === false ? (
          <>
            <form onSubmit={handleSubmit}>
              <div className="h-28 flex justify-center items-center">
                <input
                  type="text"
                  className="text-black w-1/3 bg-white h-10 rounded-lg p-4 shadow-md shadow-zinc-800"
                  required
                  value={todoValue}
                  placeholder="Add a todo..."
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

            {todos.todos.length === 0 ? (
              <h1 className="text-3xl font-serif font-normal text-cyan-900 flex justify-center ">
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
            <form onSubmit={editSubmit}>
            <div className="h-28 flex justify-center mx-3 items-center">
                <input
                  type="text"
                  className="text-black w-1/3 bg-white h-10 rounded-lg p-4 shadow-md shadow-zinc-800"
                  required
                  value={editValue || ""}
                  placeholder="Add a todo..."
                  onChange={(e) => setEditValue(e.target.value)}
                />
                <button type="submit" className="w-20 bg-gray-950 text-white rounded-lg h-10 mx-2 shadow-md shadow-black hover:scale-105 duration-500"
>
                  UPDATE
                </button>
                 <button
                type="button"
                className="w-20 bg-gray-950 text-white rounded-lg h-10 mx-2 shadow-md hover:scale-105 duration-500"
                onClick={cancelUpdate}
              >
                BACK
              </button>
              </div>
             
            </form>
            {todos.todos.length == 0 ? (
              <h1 className="text-3xl font-serif font-normal text-cyan-800 flex justify-center 
              ">
                No todos in your bucket
              </h1>
            ) : (
              <DisplayTodo
                handleEditClick={handleEditClick}
                editFormVisibility={editFormVisibility}
              />
            )}
          </>
          
        )}
        
      </div>
  );
};

export default AddTodo;
