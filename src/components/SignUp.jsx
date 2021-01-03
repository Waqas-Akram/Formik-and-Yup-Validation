import React from "react";
import { Col, Button, Form, Jumbotron } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      address: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Email is Required"),
      password: Yup.string()
        .max(10).min(6)
        .required("Password is Required"),
      address: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Address is Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div
      className="my-3 py-3"
    >
      <Jumbotron className="py-2 bg-info m-3">
        <h1 className="display-4 my-2 text-center text-light">Sign Up</h1>
      </Jumbotron>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridFirstName" className="m-2">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              name="firstName"
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div style={{color: 'red'}}>{formik.errors.firstName}</div>
            ) : null}
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLastName" className="m-2">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Last Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              name="lastName"
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div style={{color: 'red'}}>{formik.errors.lastName}</div>
            ) : null}
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail" className="m-2">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              name="email"
            />
            {formik.touched.email && formik.errors.email ? (
              <div style={{color: 'red'}}>{formik.errors.email}</div>
            ) : null}
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword" className="m-2">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            name="password" 
            />
            {formik.touched.password && formik.errors.password ? (
              <div style={{color: 'red'}}>{formik.errors.password}</div>
            ) : null}
          </Form.Group>
        </Form.Row>

        <Form.Group
          controlId="formGridAddress1"
          className="m-2"
        >
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="Add your Address" 
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.address}
          name="address"/>
          {formik.touched.address && formik.errors.address ? (
              <div style={{color: 'red'}}>{formik.errors.address}</div>): null}
        </Form.Group>

        <Form.Group id="formGridCheckbox" className="ml-2">
          <Form.Check
            type="checkbox"
            label="Accept Privacy Terms & Conditions"
          />
        </Form.Group>

        <Button variant="info" type="submit" className="ml-2">
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;
