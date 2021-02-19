import { v4 as uuidv4 } from "uuid";
import {
  addLocalStorage,
  deleteLocalStorage,
  toggleChange,
} from "../../static/setLocalStorage";
import { getTodos, TodoType } from "../../static/getTodos";

const ADDTODO = "todo/ADDTODO" as const;
const DELTODO = "todo/DELTODO" as const;
const TOGGLETODO = "todo/TOGGLETODO" as const;

export const addTodo = (dateTime: number, text: string, deadline: string) => ({
  type: ADDTODO,
  dateTime: dateTime,
  text: text,
  deadline: deadline,
});

export const delTodo = (id: string) => ({
  type: DELTODO,
  id: id,
});

export const toggleTodo = (id: string) => ({
  type: TOGGLETODO,
  id: id,
});

type TodoAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof delTodo>;

export const todo = (state = getTodos(), action: TodoAction) => {
  switch (action.type) {
    case ADDTODO:
      addLocalStorage(uuidv4(), action.dateTime, action.text, action.deadline);
      return state.concat({
        id: uuidv4(),
        dateTime: action.dateTime,
        text: action.text,
        deadline: action.deadline,
        done: false,
      });
    case DELTODO:
      deleteLocalStorage(action.id);
      return state.filter((item: TodoType) => item.id !== action.id);
    case TOGGLETODO:
      toggleChange(action.id);
      return state.map((item: TodoType) =>
        item.id === action.id ? { ...item, done: !item.done } : item
      );
    default:
      return state;
  }
};
