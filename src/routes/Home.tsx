import React from "react";
import styled from "styled-components";
import Calendar from "../components/Calendar";

const Home = () => {
  return (
    <Container>
      <Calendar />
    </Container>
  );
};

const Container = styled.div`
  /* background-color: green; */
  width: 1300px;
  height: 700px;
  margin: 0 auto;
  margin-top: 100px;
`;
export default Home;
