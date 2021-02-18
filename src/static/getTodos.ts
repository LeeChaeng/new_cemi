export type TodoType = {
  id: string;
  dateTime: number;
  text: string;
  deadline: string;
  done: boolean;
};

type TodoState = TodoType[];

const initialState: TodoState = [];

export const getTodos = () => {
  if (localStorage.getItem("new_cemi") === null) {
    localStorage.setItem("new_cemi", initialState.toString());
    return initialState;
  } else {
    return JSON.parse(
      localStorage.getItem("new_cemi") || JSON.stringify(initialState)
    );
  }
};
