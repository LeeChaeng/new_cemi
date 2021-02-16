import React from "react";
import styled from "styled-components";

type TodoProps = {
  text: string;
  deadline: string;
};

const Todo = ({ text, deadline }: TodoProps) => {
  return (
    <Container>
      <Color />
      <div>
        <span>{text}</span>
        <span>{deadline}</span>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 24px;
  border-bottom: 2px solid #f0f1f1;
  & > div {
    display: flex;
    flex-direction: column;
  }
`;

const Color = styled.span`
  display: block;
  background-color: red;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin-right: 10px;
  margin-top: 4px;
`;

export default Todo;
