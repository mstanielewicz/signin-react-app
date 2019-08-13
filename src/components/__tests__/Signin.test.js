import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  render,
  fireEvent,
  wait,
  waitForElement
} from "@testing-library/react";
import { Signin } from "../Signin";
import { Notifications } from "../Notifications";
import { UserProvider } from "../../context/UserContext";
import { NotificationProvider } from "../../context/NotificationContext";

test("shows the valid error when empty string provided as an email", async () => {
  const { getByLabelText, getByText } = render(<WrappedSignin />);

  fireEvent.change(getByLabelText(/email/i), {
    target: { value: "" }
  });

  fireEvent.blur(getByLabelText(/email/i));

  await wait();

  expect(getByText("Email is required!")).toBeTruthy();
});

test("shows the valid error when random string provided as an email", async () => {
  const { getByLabelText, getByText } = render(<WrappedSignin />);

  fireEvent.change(getByLabelText(/email/i), {
    target: { value: "example text" }
  });

  fireEvent.blur(getByLabelText(/email/i));

  await wait();

  expect(getByText("Email is not valid!")).toBeTruthy();
});

test("shows the valid error when empty string provided as a password", async () => {
  const { getByLabelText, getByText } = render(<WrappedSignin />);

  fireEvent.change(getByLabelText(/password/i), {
    target: { value: "" }
  });

  fireEvent.blur(getByLabelText(/password/i));

  await wait();

  expect(getByText("Password is required!")).toBeTruthy();
});

test("shows the valid error when string with special characters provided as an password", async () => {
  const { getByLabelText, getByText } = render(<WrappedSignin />);

  fireEvent.change(getByLabelText(/password/i), {
    target: { value: "example text!" }
  });

  fireEvent.blur(getByLabelText(/password/i));

  await wait();

  expect(
    getByText("Password can only contain Latin letters and numbers!")
  ).toBeTruthy();
});

test("shows the valid error when too short string provided as an password", async () => {
  const { getByLabelText, getByText } = render(<WrappedSignin />);

  fireEvent.change(getByLabelText(/password/i), {
    target: { value: "test" }
  });

  fireEvent.blur(getByLabelText(/password/i));

  await wait();

  expect(
    getByText("Password has to be longer then 6 characters!")
  ).toBeTruthy();
});

test("shows the valid error when password string didn't contain required chars", async () => {
  const { getByLabelText, getByText } = render(<WrappedSignin />);

  fireEvent.change(getByLabelText(/password/i), {
    target: { value: "myCoolPassword" }
  });

  fireEvent.blur(getByLabelText(/password/i));

  await wait();

  expect(
    getByText(
      "Password has to contain one uppercase, one lowercase and one digit!"
    )
  ).toBeTruthy();
});

test("shows the success notification when valid credentials were provided", async () => {
  const { getByLabelText, getByText, container } = render(<WrappedSignin />);

  fireEvent.change(getByLabelText(/email/i), {
    target: { value: "test@test.pl" }
  });

  fireEvent.change(getByLabelText(/password/i), {
    target: { value: "Password1" }
  });

  fireEvent.click(getByText(/Submit/i));

  await waitForElement(() => container.querySelector(".notification"));

  expect(getByText("Login successful!")).toBeTruthy();
});

test("shows the error notification when invalid credentials were provided", async () => {
  const { getByLabelText, getByText, container } = render(<WrappedSignin />);

  fireEvent.change(getByLabelText(/email/i), {
    target: { value: "test@test.pl" }
  });

  fireEvent.change(getByLabelText(/password/i), {
    target: { value: "Password12" }
  });

  fireEvent.click(getByText(/Submit/i));

  await waitForElement(() => container.querySelector(".notification"));

  expect(getByText("Invalid email or password!")).toBeTruthy();
});

const WrappedSignin = () => (
  <NotificationProvider>
    <UserProvider>
      <Router>
        <Notifications />
        <Signin />
      </Router>
    </UserProvider>
  </NotificationProvider>
);
