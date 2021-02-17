import { v4 as uuidv4 } from "uuid";

const ADDTODO = "todo/ADDTODO" as const;
const TOGGLETODO = "todo/TOGGLETODO" as const;

export const addTodo = (dateTime: number, text: string, deadline: string) => ({
  type: ADDTODO,
  dateTime: dateTime,
  text: text,
  deadline: deadline,
});

export const toggleTodo = (id: string) => ({
  type: TOGGLETODO,
  id: id,
});

type TodoAction = ReturnType<typeof addTodo> | ReturnType<typeof toggleTodo>;

type Todo = {
  id: string;
  dateTime: number;
  text: string;
  deadline: string;
  done: boolean;
};

type TodoState = Todo[];

const initialState: TodoState = [];

export const todo = (state = initialState, action: TodoAction) => {
  switch (action.type) {
    case ADDTODO:
      console.log("add Todo");
      return state.concat({
        id: uuidv4(),
        dateTime: action.dateTime,
        text: action.text,
        deadline: action.deadline,
        done: false,
      });
    case TOGGLETODO:
      return state.map((item) =>
        item.id === action.id ? { ...item, done: !item.done } : item
      );
    default:
      return state;
  }
};
