import format from "date-fns/format";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../store/modules";
import {
  nextMonth,
  thisMonth,
  prevMonth,
  changeDate,
} from "../store/modules/calendar";
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

  const onDateClick = (event: any) => {
    let {
      target: { id },
    } = event;
    console.log(id);
    let current = document.getElementById(selectedDate.getTime().toString());
    if (current) {
      current.className = "item";
    }
    dispatch(changeDate(parseInt(id)));
    let select = document.getElementById(id);
    if (select) {
      select.className = "item select";
    }
  };

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
          <div
            className="item"
            key={item.id}
            id={item.id}
            onClick={onDateClick}
          >
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
  & > .select {
    color: red;
  }
`;

const Weekend = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

export default Calendar;
