import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { delTodo, toggleTodo } from "../store/modules/todo";

import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { targetTodo } from "../store/modules/modal";

type TodoProps = {
  id: string;
  text: string;
  deadline: string;
  done: boolean;
  dateTime: number;
};

const Todo = ({ id, text, deadline, done, dateTime }: TodoProps) => {
  const dispatch = useDispatch();
  const todoToggle = () => {
    dispatch(toggleTodo(id));
  };
  const deleteTodo = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    event.stopPropagation(); //prevent eventBubbling
    dispatch(delTodo(id));
  };
  const goUpdate = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    event.stopPropagation();
    dispatch(targetTodo(id, dateTime, text, deadline));
  };
  return (
    <Container onClick={todoToggle}>
      {done ? (
        <div>
          <Color color="#3e4496" />
          <div>
            <span className="done">{text}</span>
            <span className="done">{deadline}</span>
          </div>
        </div>
      ) : (
        <div>
          <Color color="#e3535a" />
          <div>
            <span>{text}</span>
            <span>{deadline}</span>
          </div>
        </div>
      )}
      <Button>
        <FontAwesomeIcon
          icon={faPen}
          color="lightgray"
          size="sm"
          onClick={goUpdate}
        />
        <FontAwesomeIcon
          icon={faTrash}
          color="lightgray"
          size="sm"
          onClick={deleteTodo}
        />
      </Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px;
  border-bottom: 2px solid #f0f1f1;
  transition: background-color 0.2s;
  &:hover {
    cursor: pointer;
    background-color: #f0f1f1;
  }
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

const Button = styled.div`
  width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default Todo;
