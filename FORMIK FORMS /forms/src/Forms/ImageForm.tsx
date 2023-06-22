import React from "react";
import "./imageForm.css";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBRadio,
} from "mdb-react-ui-kit";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

// Creating interface for all the related fields
interface UserRegistration {
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
  email: string;
  file: any;
  mobile: string;
  pincode: number | null;
}

const FILE_SIZE = 160 * 1024;

export const ImageForm: React.FC = () => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    password: Yup.string()
      .required("Required")
      .min(6, "Password must be at least 6 characters")
      .max(20, "Password must be at least 20 characters"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), undefined], "Password must match")
      .nullable()
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    pincode: Yup.number()
      .required("Required")
      .test("validPincode", "Invalid pin code", (value) => {
        if (!value) return true;
        return value >= 100000 && value <= 999999;
      }),
    mobile: Yup.string()
      .matches(/^[0-9]{10}$/, "Invalid mobile Number")
      .required("Required")
      .min(10, "Invalid Mobile No")
      .max(10, "Invalid Mobile No"),
    file: Yup.mixed<File>()
      .required("File Is Required")
      .test(
        "fileSize",
        "File too large",
        (value) => value && value.size <= FILE_SIZE
      ),
  });

  const initialValues: UserRegistration = {
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    email: "",
    file: "",
    pincode: null,
    mobile: "",
  };

  function handleSubmit(values: UserRegistration) {
    console.log("values :", values);
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue, errors, touched }) => {
        console.log({ values });
        return (
          <Form className="height">
            <MDBContainer fluid className="h-140">
              <MDBRow className="d-flex justify-content-center align-items-center h-100">
                <MDBCol>
                  <MDBCard className="my-4">
                    <MDBRow className="g-0">
                      <MDBCol md="6" className="d-none d-md-block">
                        <MDBCardImage
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                          alt="Sample photo"
                          className="rounded-start"
                          fluid
                        />
                      </MDBCol>

                      <MDBCol md="6">
                        <MDBCardBody className="text-black d-flex flex-column justify-content-center">
                          <h3 className="mb-5 fw-bold">Sign Up</h3>
                          <MDBRow>
                            <MDBCol md="6">
                              <Field
                                className="form-control form-control-lg"
                                id="firstName"
                                type="text"
                                name="firstName"
                                placeholder="Name"
                              />
                              <p className="error">
                                <ErrorMessage name="firstName" />
                              </p>
                            </MDBCol>
                            <MDBCol md="6">
                              <Field
                                className="form-control form-control-lg"
                                id="lastName"
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                              />
                              <p className="error">
                                <ErrorMessage name="lastName" />
                              </p>
                            </MDBCol>
                          </MDBRow>
                          <MDBRow>
                            <MDBCol md="6">
                              <Field
                                className="form-control form-control-lg"
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Enter Password"
                              />
                              <p className="error">
                                <ErrorMessage name="password" />
                              </p>
                            </MDBCol>
                            <MDBCol md="6">
                              <Field
                                className="form-control form-control-lg"
                                id="confirmPassword"
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                              />
                              <p className="error">
                                <ErrorMessage name="confirmPassword" />
                              </p>
                            </MDBCol>
                          </MDBRow>
                          <Field
                            className="form-control form-control-lg"
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Email ID"
                          />
                          <p className="error">
                            <ErrorMessage name="email" />
                          </p>
                          <Field
                            className="form-control form-control-lg"
                            id="pincode"
                            type="pincode"
                            name="pincode"
                            placeholder="Pincode"
                          />
                          <p className="error">
                            <ErrorMessage name="pincode" />
                          </p>
                          <Field
                            className="form-control form-control-lg"
                            id="mobile"
                            type="mobile"
                            name="mobile"
                            placeholder="Mobile No"
                          />
                          <p className="error">
                            <ErrorMessage name="mobile" />
                          </p>
                          <div className="d-md-flex ustify-content-start align-items-center mb-4">
                            <h6 className="fw-bold mb-0 me-4">Gender: </h6>
                            <MDBRadio
                              name="inlineRadio"
                              id="inlineRadio1"
                              value="option1"
                              label="Female"
                              inline
                            />
                            <MDBRadio
                              name="inlineRadio"
                              id="inlineRadio2"
                              value="option2"
                              label="Male"
                              inline
                            />
                            <MDBRadio
                              name="inlineRadio"
                              id="inlineRadio3"
                              value="option3"
                              label="Other"
                              inline
                            />
                          </div>
                          <input
                            className="form-control form-control-lg"
                            type="file"
                            onChange={(event: any) => {
                              setFieldValue("file", event.target.files[0]);
                            }}
                          />
                          <p className="error">
                            <ErrorMessage name="file" />
                          </p>
                          <div className="d-flex justify-content-end pt-3">
                            <MDBBtn color="primary" size="lg" type="reset">
                              Reset all
                            </MDBBtn>
                            <MDBBtn
                              className="ms-2"
                              color="warning"
                              size="lg"
                              type="submit"
                              disabled={Object.keys(errors).length > 0 && Object.keys(touched).length > 0}
                            >
                              Submit form
                            </MDBBtn>
                          </div>
                        </MDBCardBody>
                      </MDBCol>
                    </MDBRow>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ImageForm;
