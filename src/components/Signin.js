import { Formik, Form, Field, useFormikContext } from "formik";
import React from "react";
import useRouter from "use-react-router";
import * as Yup from "yup";
import { UserContext } from "../context/UserContext";
import { NotificationContext } from "../context/NotificationContext";
import { authenticate } from "../utils/auth";

import styled from "styled-components";

export const Signin = () => {
  const { signin } = React.useContext(UserContext);
  const { showNotification, createNotification } = React.useContext(
    NotificationContext
  );
  const { history } = useRouter();
  const [loading, setLoading] = React.useState(false);

  const submit = async values => {
    try {
      setLoading(true);
      const user = await authenticate(values);
      signin(user);
      showNotification(createNotification("Login successful!", "success"));
      history.push("/");
    } catch {
      showNotification(
        createNotification("Invalid email or password!", "error")
      );
      setLoading(false);
    }
  };

  return (
    <div>
      <Formik
        initialErrors={initialState}
        initialValues={initialState}
        onSubmit={submit}
        validationSchema={validationSchema}
      >
        <Form>
          <SigninForm loading={loading} />
        </Form>
      </Formik>
    </div>
  );
};

const SigninForm = ({ loading }) => {
  const { errors, touched } = useFormikContext();

  return (
    <FormWrapper>
      <InputWrapper error={errors.email && touched.email}>
        <label htmlFor="email">Email</label>
        <Field name="email" disabled={loading} />
        {errors.email && touched.email ? <span>{errors.email}</span> : null}
      </InputWrapper>
      <InputWrapper error={errors.password && touched.password}>
        <label htmlFor="password">Password</label>
        <Field name="password" type="password" disabled={loading} />
        {errors.password && touched.password ? (
          <span>{errors.password}</span>
        ) : null}
      </InputWrapper>
      <SubmitButton loading={loading} />
    </FormWrapper>
  );
};

const SubmitButton = ({ loading }) => (
  <button type="submit" disabled={loading}>
    {loading ? "Loading..." : "Submit"}
  </button>
);

const initialState = { email: "", password: "" };

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required!")
    .email("Email is not valid!"),
  password: Yup.string()
    .required("Password is required!")
    .min(6, "Password has to be longer then 6 characters!")
    .matches(
      /^[a-zA-Z0-9]+$/,
      "Password can only contain Latin letters and numbers!"
    )
    .matches(
      /(?=.*?[0-9])(?=.*?[A-Z])(?=.*[a-z])/,
      "Password has to contain one uppercase, one lowercase and one digit!"
    )
});

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem;
  padding: 1rem;
  border: 2px #000083 solid;
  border-radius: 1rem;

  @media screen and (min-width: 900px) {
    margin: 3rem;
    padding: 3rem;
  }

  & > * {
    margin-bottom: 1rem;
  }
`;

const InputWrapper = styled.div`
  padding: 0.2rem;
  height: 5rem;

  label {
    font-size: 1rem;
  }

  span {
    margin-top: 5px;
    font-size: 1rem;
    color: red;
  }

  input {
    width: 100%;
    height: 2.5rem;
    border: none;
    border-bottom: 2px ${props => (props.error ? "red" : "#000083")} solid;
    background-color: #e9edf6;
    font-size: 1.5rem;
  }
`;
