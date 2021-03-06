import { isSameDay } from "date-fns";
import format from "date-fns/format";
import React, { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../store/modules";
import {
  nextMonth,
  thisMonth,
  prevMonth,
  changeDate,
} from "../store/modules/calendar";
import { getDays } from "../static/getDays";
import { TodoType } from "../static/getTodos";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calendar = () => {
  const selectedDate = useSelector(
    (state: RootState) => state.calendar.selectedDate
  );
  const visibleDate = useSelector(
    (state: RootState) => state.calendar.visibleDate
  );
  const todoList = useSelector((state: RootState) => state.todo);

  const dispatch = useDispatch();
  const goPrevMonth = useCallback(() => {
    dispatch(prevMonth());
  }, [dispatch]);
  const goToday = useCallback(() => {
    dispatch(thisMonth());
  }, [dispatch]);
  const goNextMonth = useCallback(() => {
    dispatch(nextMonth());
  }, [dispatch]);

  const days = useMemo(() => getDays(visibleDate), [visibleDate]);

  const onDateClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const {
        currentTarget: { id },
      } = event;
      dispatch(changeDate(parseInt(id)));
    },
    [dispatch]
  );

  return (
    <Box>
      <Title>
        <div className="title">
          <span>{format(visibleDate, "yyyy")}</span>
          <span className="title__month">{format(visibleDate, "MMMM")}</span>
        </div>
        <Button>
          <button onClick={goPrevMonth}>{"<"}</button>
          <button onClick={goToday}>{"TODAY"}</button>
          <button onClick={goNextMonth}>{">"}</button>
        </Button>
      </Title>
      <Weekend>
        {DAYS.map((day, idx) => (
          <div key={idx}>{day}</div>
        ))}
      </Weekend>
      <div className="container">
        <Container>
          {days.map((item) => (
            <Day
              key={item.id}
              id={item.id.toString()}
              onClick={onDateClick}
              selected={isSameDay(selectedDate, item.date)}
            >
              {item.date.getDate()}
              <div className="color_container">
                {todoList.find(
                  (todo: TodoType) =>
                    !todo.done &&
                    isSameDay(new Date(todo.dateTime), new Date(item.id))
                ) ? (
                  <Color color="#e3535a" />
                ) : (
                  ""
                )}
                {todoList.find(
                  (todo: TodoType) =>
                    todo.done &&
                    isSameDay(new Date(todo.dateTime), new Date(item.id))
                ) ? (
                  <Color color="#3e4496" />
                ) : (
                  ""
                )}
              </div>
            </Day>
          ))}
        </Container>
      </div>
    </Box>
  );
};

const Box = styled.div`
  flex: 3;
  text-align: center;
  display: flex;
  flex-direction: column;
  & > .container {
    flex: 1 1 0;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  padding: 32px;
  & > .title {
    font-size: 30px;
    font-family: "SCDream_bold";
    color: #3e4496;
    & > .title__month {
      font-size: 40px;
      font-family: "SCDream_bold";
      margin-left: 10px;
    }
  }
`;
const Button = styled.div`
  font-family: "SCDream_light";
  & > button {
    border-radius: 50px;
    border: none;
    margin-right: 5px;
    cursor: pointer;
    outline: none;
  }
`;

const Container = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: repeat(7, 1fr);
  grid-auto-rows: minmax(80px, auto);
`;

const Day = styled.div<{ selected: boolean }>`
  border: solid 1px #f0f1f1;
  padding-top: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: background-color 0.2s;
  &:hover {
    cursor: pointer;
    background-color: #f0f1f1;
  }
  &:nth-child(7n) {
    border-right: none;
  }
  &:nth-last-child(7) {
    border-bottom-left-radius: 40px;
  }
  &:nth-last-child(n) {
    border-bottom: none;
    border-left: none;
  }

  color: ${(props) => props.selected && "#e3535a"};
  font-family: ${(props) => props.selected && "SCDream_bold"};

  & > .color_container {
    display: flex;
    margin: 10px;
  }
`;

const Color = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 7px;
`;

const Weekend = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  color: #5e647b;
  height: 40px;
  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  border: solid 2px #f0f1f1;
  border-bottom: solid 1px #f0f1f1;
  border-right: none;
`;

export default Calendar;
