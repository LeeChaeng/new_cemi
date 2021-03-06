import { getDay, getWeekOfMonth, isSameDay } from "date-fns";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { TodoType } from "../static/getTodos";
import { RootState } from "../store/modules";
import { switchModal } from "../store/modules/modal";
import Todo from "./Todo";

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thurseday",
  "Friday",
  "Saturday",
];
const WEEKS = ["1st", "2nd", "3rd", "4th", "5th"];

const TodoList = () => {
  const selectedDate = useSelector(
    (state: RootState) => state.calendar.selectedDate
  );
  const todoState = useSelector(
    (state: RootState) => state.todo
  ).filter((item: TodoType) => isSameDay(item.dateTime, selectedDate));
  const dispatch = useDispatch();
  const showModal = useCallback(() => {
    dispatch(switchModal());
  }, [dispatch]);
  return (
    <Container>
      <Title>
        <Info>
          <span className="day">{DAYS[getDay(selectedDate)]}, </span>
          <span className="week">
            {WEEKS[getWeekOfMonth(selectedDate) - 1]}
          </span>
        </Info>
        <button className="add" onClick={showModal}>
          +
        </button>
      </Title>
      <Content>
        {todoState.map((todo: TodoType) => (
          <Todo
            key={todo.id}
            id={todo.id}
            text={todo.text}
            deadline={todo.deadline}
            done={todo.done}
            dateTime={todo.dateTime}
          ></Todo>
        ))}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
  height: 78vh;
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
    outline: none;
    cursor: pointer;
  }
`;

const Info = styled.div`
  display: flex;
  align-items: flex-end;
  font-family: "SCDream_bold";
  color: #e3535a;
  & > .day {
    font-size: 39.5px;
  }
  & > .week {
    font-size: 23px;
    margin-left: 10px;
  }
`;

const Content = styled.div`
  overflow-y: scroll;
`;

export default TodoList;
