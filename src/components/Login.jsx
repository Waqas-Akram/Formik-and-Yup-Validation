import React from 'react'
import {Form,Jumbotron ,Button} from 'react-bootstrap';
import { useFormik } from "formik";
import * as Yup from "yup";
const Login = () => {
  const formik = useFormik({
    initialValues: {
      
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
     
      email: Yup.string().email("Invalid email address").required("Email is Required"),
      password: Yup.string()
      .max(10).min(6)
      .required(" Password is Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
    return (

        
        <div className='my-3 py-3 '  >
            <Jumbotron className="py-2 m-3 bg-info">
            <h1 className="display-4 my-2 text-center text-light">Log In</h1>
          </Jumbotron>
          <Form onSubmit={formik.handleSubmit}>

          
<Form.Group  controlId="formGridLoginEmail" className="m-4">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.email}
      name="email" />
       {formik.touched.email && formik.errors.email ? (
         <div style={{color: 'red'}}>{formik.errors.email}</div>
       ) : null}
    </Form.Group>

    <Form.Group a controlId="formGridLoginPassword" className="m-4">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password"
      onBlur={formik.handleBlur}
      value={formik.values.password}
      onChange ={formik.handleChange}
      name="password"  />
      {formik.touched.password && formik.errors.password ? (
         <div style={{color: 'red'}}>{formik.errors.password}</div>
       ) : null}
    </Form.Group>
    <Form.Group id="formGridCheckbox" className="ml-4">
    <Form.Check type="checkbox" label="Remember Me" />
  </Form.Group>

  <Button variant="info" type="submit" className="ml-4">
    Log In 
  </Button>
    </Form>
    </div>
    )
}

export default Login
