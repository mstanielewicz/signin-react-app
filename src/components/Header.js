import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

import styled from "styled-components";

export const Header = () => {
  const { signout, user, isAuthenticated } = React.useContext(UserContext);

  return (
    <HeaderWrapper>
      <span>{isAuthenticated ? `Hello ${user.name}!` : "Please signin"}</span>
      {isAuthenticated ? <SignoutButton signout={signout} /> : <SigninButton />}
    </HeaderWrapper>
  );
};

const SignoutButton = ({ signout }) => (
  <button onClick={signout}>{"Signout"}</button>
);

const SigninButton = () => (
  <Link to="/signin">
    <button>{"Signin"}</button>
  </Link>
);

const HeaderWrapper = styled.header`
  height: 3rem;
  margin: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 1rem 0;
  border-bottom: 2px #000083 solid;

  span {
    font-size: 1.5rem;
  }
`;
