import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

import { Login_Service } from "../../../services/authServices";
import { Validation } from "../../../constants";
import "./login.css";

const Login = (pops) => {
  const handleSubmit = async (value) => {
    const data = {
      email: value.email,
      password: value.password,
    };

    const response = await Login_Service({ data });
    if (response && response.success) {
      toast.success(response.message);
      pops.history.push("/login");
    } else {
      toast.error(response.message);
    }
  };

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("email is required")
      .email("Invalid email"),
    password: Yup.string()
      .required("Please Enter your password")
      .matches(
        Validation.PASSWORD_REGEX,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
  });

  return (
    <div className="login-body">
      <div className="outer">
        <div className="inner">
          <h3>Log in</h3>

          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={LoginSchema}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="form-group">
                  <label>Email</label>
                  <Field
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Enter email"
                  />
                  <ErrorMessage
                    className="error-class"
                    name="email"
                    component="div"
                  />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <Field
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter password"
                  />
                  <ErrorMessage
                    className="error-class"
                    name="password"
                    component="div"
                  />
                </div>

                <div className="form-group">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck1"
                    >
                      Remember me
                    </label>
                  </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">
                  Submit
                </button>
                <p className="forgot-password text-right">
                  go to{" "}
                  <span
                    className="cursor-pointer"
                    onClick={() => pops.history.push("/sign-up")}
                  >
                    sign up?
                  </span>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
