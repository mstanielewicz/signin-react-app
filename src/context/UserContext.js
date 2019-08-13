import React from "react";

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(userStateReducer, {
    user: null,
    isAuthenticated: false
  });

  const signin = user => dispatch({ type: SIGNIN, payload: { user } });
  const signout = () => dispatch({ type: SIGNOUT });

  return (
    <UserContext.Provider value={{ ...state, signin, signout }}>
      {children}
    </UserContext.Provider>
  );
};

const userStateReducer = (state, { type, payload }) => {
  switch (type) {
    case SIGNIN:
      return { ...state, user: payload.user, isAuthenticated: true };
    case SIGNOUT:
      return { ...state, user: null, isAuthenticated: false };
    default:
      return state;
  }
};

const SIGNIN = "SIGNIN";
const SIGNOUT = "SIGNOUT";
