import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
} from "mdb-react-ui-kit";

import "./newform.css";

import { Formik, Form, ErrorMessage, Field } from "formik";

import * as Yup from "yup";

interface FormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  termsAndConditions: boolean;
}

export const NewForm: React.FC = () => {
  const initialValues: FormValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsAndConditions: false,
  };

  const validationSchema = Yup.object().shape({ 
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .max(20, "Password exceeded the maximum length")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), undefined], "Password must match")
      .nullable()
      .required("Confirm Password is required"),
  });
  function handleSubmit(values: FormValues) {
    console.log(values);
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <MDBContainer fluid>
          <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
            <MDBCardBody>
              <MDBRow>
                <MDBCol
                  md="10"
                  lg="6"
                  className="order-2 order-lg-1 d-flex flex-column align-items-center"
                >
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Sign up
                  </p>
                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size="lg" />
                    <Field
                      type="text"
                      name="name"
                      className="input-field form2"
                      placeholder="Your Name"
                    />
                  </div>
                  <p>
                    <ErrorMessage name="name" />
                  </p>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="envelope me-3" size="lg" />
                    <Field
                      type="email"
                      name="email"
                      className="input-field form2"
                      placeholder="Your Email"
                    />
                  </div>
                  <p>
                    <ErrorMessage name="email" />
                  </p>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="lock me-3" size="lg" />
                    <Field
                      id="form2"
                      type="password"
                      name="password"
                      className="input-field"
                      placeholder="Your Password"
                    />
                  </div>
                  <p>
                    <ErrorMessage name="password" />
                  </p>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="key me-3" size="lg" />
                    <Field
                      id="form2"
                      type="password"
                      name="confirmPassword"
                      className="input-field"
                      placeholder=" confirmPassword"
                    />
                  </div>
                  <p>
                  <ErrorMessage name="confirmPassword" />
                  </p>
                  <div className="mb-4">
                    <input
                      type="checkbox"
                      name="flexCheck"
                      value=""
                      id="flexCheckDefault"
                      className="checkbox-input"
                    />
                    <span>I accept terms and conditions</span>
                  </div>
                  <MDBBtn className="mb-4" size="lg">
                    Register
                  </MDBBtn>
                </MDBCol>

                <MDBCol
                  md="10"
                  lg="6"
                  className="order-1 order-lg-2 d-flex align-items-center"
                >
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                    fluid
                  />
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      </Form>
    </Formik>
  );
};
