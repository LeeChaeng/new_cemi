import { v4 as uuidv4 } from "uuid";
const ADDTODO = "todo/ADDTODO" as const;

export const addTodo = (dateTime: number, text: string, deadline: string) => ({
  type: ADDTODO,
  dateTime: dateTime,
  text: text,
  deadline: deadline,
});

type TodoAction = ReturnType<typeof addTodo>;

type Todo = {
  id: string;
  dateTime: number;
  text: string;
  deadline: string;
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
      });
    default:
      return state;
  }
};
