import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from "./Header";
import { Home } from "./Home";
import { Notifications } from "./Notifications";
import { Signin } from "./Signin";
import { UserProvider } from "../context/UserContext";
import { NotificationProvider } from "../context/NotificationContext";

import styled, { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <AppWrapper>
        <NotificationProvider>
          <UserProvider>
            <Router basename="/signin-react-app">
              <Header />
              <Notifications />
              <Route exact path="/" component={Home} />
              <Route path="/signin" component={Signin} />
            </Router>
          </UserProvider>
        </NotificationProvider>
      </AppWrapper>
    </>
  );
};

const GlobalStyles = createGlobalStyle`
  ${normalize}

  body {
    background-color: #e9edf6;
    font-family: sans-serif;
    font-size: 10px;
    color: #000083;

    button {
      cursor: pointer;
      text-decoration: none;
      height: 2.5rem;
      padding: 0 2rem;
      font-size: 1.5rem;
      background: white;
      border: 2px #000083 solid;
      
    }
  }
`;

const AppWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
