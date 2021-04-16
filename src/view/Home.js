import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

function Home() {
  return (
    <Container>
      <ul>
        <li><Link to="/case-1-js">Case1 - 자바스크립트</Link></li>
        <li><Link to="/case-1-react">Case1 - 리액트</Link></li>
        <li><Link to="/case-1-reactPortal">Case1 - 리액트포탈</Link></li>
      </ul>
    </Container>
  );
}

const Container = styled.div``;

export default Home;
