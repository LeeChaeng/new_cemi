import React from "react";
import styled from "styled-components";
import Calendar from "../components/Calendar";
import TodoList from "../components/TodoList";

const Home = () => {
  return (
    <Container>
      <Calendar />
      <TodoList />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;
export default Home;
