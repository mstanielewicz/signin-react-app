import React from "react";
import { NotificationContext } from "../context/NotificationContext";

export const Notifications = () => {
  const { state } = React.useContext(NotificationContext);

  return (
    <div>
      {state.map(notification => (
        <div key={notification.id}>{notification.message}</div>
      ))}
    </div>
  );
};
