import React from "react";

export const NotificationContext = React.createContext();

export const NotificationProvider = ({ children }) => {
  const [state, setState] = React.useState([]);

  const createNotification = (message, status) => ({
    id: Date.now(),
    message,
    status
  });

  const showNotification = notification => {
    setState(previous => [...previous, notification]);
    setTimeout(() => closeNotification(notification.id), 3000);
  };

  const closeNotification = id =>
    setState(previous =>
      previous.filter(notification => notification.id !== id)
    );

  return (
    <NotificationContext.Provider
      value={{ state, showNotification, createNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
