import format from "date-fns/format";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../store/modules";
import { nextMonth, thisMonth, prevMonth } from "../store/modules/calendar";
import { getDays } from "../store/modules/getDays";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calendar = () => {
  const selectedDate = useSelector(
    (state: RootState) => state.calendar.selectedDate
  );
  const dispatch = useDispatch();
  const goPrevMonth = () => {
    dispatch(prevMonth());
  };
  const goToday = () => {
    dispatch(thisMonth());
  };
  const goNextMonth = () => {
    dispatch(nextMonth());
  };
  const days: Array<any> = getDays(selectedDate);
  console.log(selectedDate);
  console.log(days);
  return (
    <>
      <Title>
        <div>{format(selectedDate, "MMMM, yyyy")}</div>
      </Title>
      <button onClick={goPrevMonth}>{"<"}</button>
      <button onClick={goToday}>{"today"}</button>
      <button onClick={goNextMonth}>{">"}</button>
      <Weekend>
        {DAYS.map((day, idx) => (
          <div key={idx}>{day}</div>
        ))}
      </Weekend>
      <Container>
        {days.map((item) => (
          <div className="item" key={item.id}>
            {item.date.getDate()}
          </div>
        ))}
      </Container>
    </>
  );
};

const Title = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(5, minmax(100px, auto));
  & > .item {
    border: solid;
  }
`;

const Weekend = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

export default Calendar;
