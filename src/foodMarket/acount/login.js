import React, { useState, useEffect } from "react";
import { login } from '../../components/services/catigories'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/style.css'
import { Link } from "react-router-dom"
import { Form, Button, Container, Col, Row } from 'react-bootstrap';


import { useNavigate } from 'react-router';
export function Login() {
  const [userType, setUserType] = useState('user'); // Default to 'user'

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    // Add your signup logic here based on userType (user or admin)
    console.log(`Signing up as ${userType}`);
  };
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();

  const data = {
    email: email,
    password: password
  }

  // const log_in = async (e) => {
  //     e.preventDefault(); // Prevents the default form submission behavior

  //     try {
  //       const response = await login(data);

  //       if (response && response.success === true) {
  //         // Handle the successful response here
  //  response.data.token
  //         toast.success('login Successfull', {
  //           position: toast.POSITION.TOP_RIGHT,
  //         });
  //       } else {
  //         console.error('Error in signin:', response.statusText);

  //         toast.error('User does not exist. Please try again.', {
  //           position: toast.POSITION.TOP_RIGHT,
  //         });
  //       }
  //     } catch (error) {
  //       console.error('Error in placing order:', error);

  //       toast.error('An error occurred while placing the order.', {
  //         position: toast.POSITION.TOP_RIGHT,
  //       });
  //     }
  //   };



  const log_in = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    try {
      const response = await login(data);

      if (response && response.success === true) {

        const userToken = response.data.token;

        localStorage.setItem('userToken', userToken);
        navigate('/')

        toast.success('Login Successful', {
          position: toast.POSITION.TOP_RIGHT,
        });

      } else {
        console.error('Error in signin:', response.statusText);

        toast.error('User does not exist. Please try again.', {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      console.error('Error in logging in:', error);

      toast.error('An error occurred while logging in.', {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  // ... rest of

  return (
    <div>
      <section className="login_page_section">


        <div className="container">


          <div className="row">


            <div className="col-md-5 mx-auto">


              <div className="login_page">


                <div className="login_heading text-center d-block">



                  <h4>Log In</h4>
                </div>


                <form onSubmit={log_in}>




                  <div className="form-group">

                    <div className="form-item">
                      <input onChange={(e) => setEmail(e.target.value)} type="email" id="username" required />
                      <label for="username">Email Address</label>
                    </div>
                  </div>


                  <div className="form-group">

                    <div className="form-item">
                      <input onChange={(e) => setPassword(e.target.value)} type="password" id="password" required />
                      <label for="password">Password</label>
                    </div>



                  </div>
                  <button type="submit" className="btn login_btn mb-3 bg-theme-primary">Log In</button>
                  <p> <span>If you don't have an account? Please </span><Link to="/signup" className="forgot_password"><label for="" className="mt-0"> Sign up</label></Link></p>
                </form>





              </div>


            </div>


          </div>


        </div>


      </section>


      {/* <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md={6}>
          <h2>Sign Up</h2>
          <Form onSubmit={handleSignUp}>
            <Form.Group controlId="formUserType">
              <Form.Label>User Type</Form.Label>
              <div>
                <Form.Check
                  type="radio"
                  label="User"
                  value="user"
                  checked={userType === 'user'}
                  onChange={handleUserTypeChange}
                />
                <Form.Check
                  type="radio"
                  label="Admin"
                  value="admin"
                  checked={userType === 'admin'}
                  onChange={handleUserTypeChange}
                />
              </div>
            </Form.Group>

            <Form.Group controlId="formFullName">
              {userType === 'user' && <Form.Label>Full Name</Form.Label>}
              {userType === 'user' && <Form.Control type="text" placeholder="Enter your full name" />}
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your password" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </Form>
        </Col>
      </Row>
    </Container> */}
      <ToastContainer />

    </div>
  )
}

// 