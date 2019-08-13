import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export const Header = () => {
  const { signout, user, isAuthenticated } = React.useContext(UserContext);

  return (
    <header>
      <span>{isAuthenticated ? `Hello ${user.name}!` : "Please signin"}</span>
      {isAuthenticated ? <SignoutButton signout={signout} /> : <SigninButton />}
    </header>
  );
};

const SignoutButton = ({ signout }) => (
  <button onClick={signout}>{"Signout"}</button>
);

const SigninButton = () => (
  <Link to="/signin">
    <button>{"Signin"}</button>;
  </Link>
);
