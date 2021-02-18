import { TodoType } from "./getTodos";

export const addLocalStorage = (
  id: string,
  dateTime: number,
  text: string,
  deadline: string
) => {
  let todoStorage = localStorage.getItem("new_cemi");
  if (todoStorage === null || todoStorage === "") {
    const item = [{ id, dateTime, text, deadline, done: false }];
    localStorage.setItem("new_cemi", JSON.stringify(item));
  } else {
    const item = { id, dateTime, text, deadline, done: false };
    let current = JSON.parse(localStorage.getItem("new_cemi") || "");
    current.push(item);
    localStorage.setItem("new_cemi", JSON.stringify(current));
  }
};

export const toggleChange = (id: string) => {
  const item = JSON.parse(localStorage.getItem("new_cemi") || "");
  let finalValue = item.map((value: TodoType) =>
    value.id === id ? { ...value, done: !value.done } : value
  );
  localStorage.setItem("new_cemi", JSON.stringify(finalValue));
};
