import { Formik, Form, Field, useFormikContext } from "formik";
import React from "react";
import useRouter from "use-react-router";
import * as Yup from "yup";
import { UserContext } from "../context/UserContext";
import { NotificationContext } from "../context/NotificationContext";
import { authenticate } from "../utils/auth";

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
    <>
      <Field name="email" disabled={loading} />
      {errors.email && touched.email ? <div>{errors.email}</div> : null}
      <Field name="password" type="password" disabled={loading} />
      {errors.password && touched.password ? (
        <div>{errors.password}</div>
      ) : null}
      <SubmitButton loading={loading} />
    </>
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
  // conajmniej jedna litera mała, jedna dua, jedna liczba
});
