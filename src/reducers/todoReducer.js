import {
  ADD_TODO,
  REMOVE_TODO,
  MARK_COMPLETED,
  UPDATE_TODO,
} from "../constants";

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const { id, task } = action.payload;
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: id,
            task: task,
            isCompleted: false,
          },
        ],
      };

    case REMOVE_TODO:
      const newTodoList = state.todos.filter((item) => item.id !== action.id);
      return {
        ...state,
        todos: newTodoList,
      };

    case MARK_COMPLETED:
      const selectedTodo = state.todos.find(
        (todo) => todo?.id === action.payload.id
      );
      selectedTodo.isCompleted = !selectedTodo.isCompleted;
      return {
        ...state,
        todos: [...state.todos],
      };

    case UPDATE_TODO:
      const { editTodoId, editTodo, isCompleted } = action.payload;
      const todos = state.todos.filter((todo) => {
        return todo.id !== editTodoId;
      });

      const todo = state.todos.find((todo) => todo?.id === editTodoId);
      todo.task = editTodo;
      todo.isCompleted = todo?.isCompleted;
      todos.push(todo);

      return {
        ...state,
        todos: [...todos],
      };

    default:
      return state;
  }
};

export default todoReducer;
