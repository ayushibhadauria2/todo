import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineDelete } from "react-icons/md";
import { AiOutlineEdit, AiOutlineCheck } from "react-icons/ai";

import { completedTodo, removeTodo } from "../../actions";

const DisplayTodo = ({ handleEditClick, editFormVisibility }) => {
  const todos = useSelector((state) => state.todoReducer.todos);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center items-center">
      <div className=" w-96 p-1">
        {todos.map((todo) => {
          return (
            <div key={todo.id} className=" w-full h-10 my-2">
              <div className="flex w-full h-full px-3 justify-between items-center bg-white rounded-lg hover:text-gray-50 hover:bg-slate-950">
                <div className="flex  justify-start gap-3 text-black] ">
                  {todo.isCompleted ? (
                    <h1 className="line-through">{todo.task}</h1>
                  ) : (
                    <h1 className="">{todo.task}</h1>
                  )}
                </div>
                <div className="flex justify-start gap-3 ">
                  {editFormVisibility === false && (
                    <>
                      <button
                        className="hover:scale-110 duration-300"
                        onClick={() => dispatch(completedTodo(todo.id))}
                      >
                        <AiOutlineCheck />
                      </button>
                      <button
                        className="hover:scale-110 duration-300"
                        onClick={() => handleEditClick(todo)}
                      >
                        <AiOutlineEdit />
                      </button>
                      <button
                        className="hover:scale-110 duration-300"
                        onClick={() => dispatch(removeTodo(todo.id))}
                      >
                        <MdOutlineDelete />
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayTodo;
