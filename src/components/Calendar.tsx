import React from "react";
import styled from "styled-components";

const Calendar = () => {
  const date = [];
  for (let i = 1; i < 36; i++) {
    date.push(i);
  }
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <>
      <Title>
        <div>December</div>
        <div>, 2020</div>
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
