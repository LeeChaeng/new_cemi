import format from "date-fns/format";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../store/modules";
import { nextMonth, prevMonth } from "../store/modules/calendar";
import { get35day } from "../store/modules/get35Day";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calendar = () => {
  const selectedDate = useSelector(
    (state: RootState) => state.calendar.selectedDate
  );
  const dispatch = useDispatch();
  const goPrevMonth = () => {
    dispatch(prevMonth());
  };
  const goNextMonth = () => {
    dispatch(nextMonth());
  };
  const days = get35day(selectedDate);
  return (
    <>
      <Title>
        <div>{format(selectedDate, "MMMM, yyyy")}</div>
      </Title>
      <button onClick={goPrevMonth}>{"<"}</button>
      <button onClick={goNextMonth}>{">"}</button>
      <Weekend>
        {DAYS.map((day, idx) => (
          <div key={idx}>{day}</div>
        ))}
      </Weekend>
      <Container>
        {days.map((item, idx) => (
          <div className="item" key={idx}>
            {item}
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
