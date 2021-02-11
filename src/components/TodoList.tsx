import React from "react";
import styled from "styled-components";

const TodoList = () => {
  return (
    <Container>
      <Title>
        <Info>
          <span className="day">Friday, </span>
          <span className="week"> 4th</span>
        </Info>
        <button className="add">+</button>
      </Title>
      <Button></Button>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  height: 100vh;
  border-left: solid 3px #f0f1f1;
`;

const Title = styled.div`
  display: flex;
  padding: 32px;
  border-bottom: solid #f0f1f1 2px;
  justify-content: space-between;
  align-items: center;
  & > .add {
    background-color: white;
    border-radius: 50%;
    border: 2px solid #f0f1f1;
    font-size: 20px;
    color: gray;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: flex-end;
  & > .day {
    font-size: 23px;
  }
  & > .week {
    font-size: 18px;
    margin-left: 10px;
  }
`;

const Button = styled.div``;

export default TodoList;
