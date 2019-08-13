import React from "react";
import { UserContext } from "../context/UserContext";

import styled from "styled-components";

export const Home = () => {
  const { user, isAuthenticated } = React.useContext(UserContext);

  return (
    <HomeWrapper>
      <h1>
        {isAuthenticated
          ? `Now you can use the app ${user.name}!`
          : "In order to use the app, you have to signin!"}
      </h1>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10rem;
  color: #000083;
  padding: 4rem;

  h1 {
    text-align: center;
    font-size: 4rem;
    font-weight: 600;
  }
`;
