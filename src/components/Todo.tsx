import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { delTodo, toggleTodo } from "../store/modules/todo";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type TodoProps = {
  id: string;
  text: string;
  deadline: string;
  done: boolean;
};

const Todo = ({ id, text, deadline, done }: TodoProps) => {
  const dispatch = useDispatch();
  const todoToggle = () => {
    dispatch(toggleTodo(id));
  };
  const deleteTodo = () => {
    dispatch(delTodo(id));
  };
  return (
    <Container>
      {done ? (
        <div onClick={todoToggle}>
          <Color color="#00af91" />
          <div>
            <span className="done">{text}</span>
            <span className="done">{deadline}</span>
          </div>
        </div>
      ) : (
        <div onClick={todoToggle}>
          <Color color="#007965" />
          <div>
            <span>{text}</span>
            <span>{deadline}</span>
          </div>
        </div>
      )}
      <FontAwesomeIcon
        icon={faTrash}
        color="lightgray"
        size="sm"
        onClick={deleteTodo}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px;
  border-bottom: 2px solid #f0f1f1;
  & > div {
    display: flex;
    flex-direction: row;
    cursor: pointer;
  }
  & > div > div > .done {
    font-style: italic;
    text-decoration: line-through;
    color: lightgray;
  }
`;

const Color = styled.span<{ color: string }>`
  display: block;
  background-color: ${(props) => props.color};
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin-right: 10px;
  margin-top: 4px;
`;

export default Todo;
