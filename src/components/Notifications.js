import React from "react";
import { NotificationContext } from "../context/NotificationContext";

import styled from "styled-components";

export const Notifications = () => {
  const { state } = React.useContext(NotificationContext);

  if (state.length === 0) {
    return null;
  }

  return (
    <NotificationsWrapper>
      {state.map(notification => (
        <NotificationWrapper
          key={notification.id}
          status={notification.status}
          className="notification"
        >
          {notification.message}
        </NotificationWrapper>
      ))}
    </NotificationsWrapper>
  );
};

const NotificationsWrapper = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
`;

const NotificationWrapper = styled.div`
  height: 2.5rem;
  font-size: 1.5rem;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  border: ${props => (props.status === "success" ? "#155724" : "#721c24")} solid
    1px;
  color: ${props => (props.status === "success" ? "#155724" : "#721c24")};
  background-color: ${props =>
    props.status === "success" ? "#d4edda" : "#f8d7da"};
`;
