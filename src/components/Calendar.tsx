import format from "date-fns/format";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../store/modules";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calendar = () => {
  const date = [];
  for (let i = 1; i < 36; i++) {
    date.push(i);
  }
  const selectedDate = useSelector((state: RootState) => state.calendar.date);
  return (
    <>
      <Title>
        <div>{format(selectedDate, "MMMM, yyyy")}</div>
      </Title>
      <Weekend>
        {days.map((day, idx) => (
          <div key={idx}>{day}</div>
        ))}
      </Weekend>
      <Container>
        {date.map((item, idx) => (
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
