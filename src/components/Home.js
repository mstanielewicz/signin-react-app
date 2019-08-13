import React from "react";
import { UserContext } from "../context/UserContext";

export const Home = () => {
  const { user, isAuthenticated } = React.useContext(UserContext);

  return (
    <div>
      <h1>
        {isAuthenticated
          ? `Now you can use the app ${user.name}!`
          : "In order to use the app, you have to signin!"}
      </h1>
    </div>
  );
};
