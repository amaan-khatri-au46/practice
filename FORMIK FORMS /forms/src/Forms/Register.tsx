import { Field, Form, Formik, ErrorMessage } from "formik";
import React from "react";
import "./register.css";
import * as Yup from "yup";

// Here We Had Define The Type InterFace
interface FormValues {
  name: string;
  email: string;
  password: string;
  gender: string;
  termsAndConditions: boolean;
}

const Register: React.FC = () => {
  const initialValues: FormValues = {
    name: "",
    email: "",
    password: "",
    gender: "",
    termsAndConditions: false,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .max(20, "Password exceeded the maximum length")
      .required("Password is required"),
    gender: Yup.string().required("Field is required"),
    termsAndConditions: Yup.boolean().oneOf([true], "Terms and conditions must be accepted"),
  });

  function handleSubmit(values: FormValues) {
    console.log(values);
  }

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className="registerForm">
          <label>Username</label>
          <Field
            className="registerInput"
            type="text"
            name="name"
            placeholder="Enter your name..."
          />
          <p className="color">
            <ErrorMessage name="name" />
          </p>
          <label>Email</label>
          <Field
            className="registerInput"
            type="email"
            name="email"
            placeholder="Enter your email..."
          />
          <p className="color">
            <ErrorMessage name="email" />
          </p>
          <label>Password</label>
          <Field
            className="registerInput"
            type="password"
            name="password"
            placeholder="Enter your password..."
          />
          <p className="color" style={{ fontSize: 15 }}>
            <ErrorMessage name="password" />
          </p>
          <Field component="select" className="" name="gender">
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Field>
          <p className="color" style={{ fontSize: 15 }}>
            <ErrorMessage name="gender" />
          </p>
          <div>
            <label>
              <Field
                type="checkbox"
                name="termsAndConditions"
                className="registerCheckbox"
              />
              I Accept Terms And Conditions
            </label>
            <p className="color" style={{ fontSize: 15 }}>
              <ErrorMessage name="termsAndConditions" />
            </p>
          </div>
          <button className="registerButton" type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;