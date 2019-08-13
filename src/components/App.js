import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from "./Header";
import { Home } from "./Home";
import { Notifications } from "./Notifications";
import { Signin } from "./Signin";
import { UserProvider } from "../context/UserContext";
import { NotificationProvider } from "../context/NotificationContext";

function App() {
  return (
    <div>
      <NotificationProvider>
        <UserProvider>
          <Router>
            <Header />
            <Notifications />
            <Route exact path="/" component={Home} />
            <Route path="/signin" component={Signin} />
          </Router>
        </UserProvider>
      </NotificationProvider>
    </div>
  );
}

export default App;
