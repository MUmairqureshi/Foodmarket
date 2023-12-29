import React , {useState} from "react";
import {signup, verdorsignup} from '../../components/services/catigories'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Button, Container, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router';
export function Signup() {

    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [confirmpassword , setConfirmPassword] = useState("")
    const [name , setName] = useState("")
  
    const navigate = useNavigate();
    const data = {
        name : name,
        email :email,
        password:  password , 
    }
    console.log("datasignup" , data)
  
    // const sign_up = async (e) => {
    //     e.preventDefault();
    
    //     // Check if password and confirm password match
    //     if (password !== confirmpassword) {
    //       toast.error('Password and Confirm Password do not match.', {
    //         position: toast.POSITION.TOP_RIGHT,
    //       });
    //       return;
    //     }
    
    //     try {
    //       const response = await signup(data);
    
    //       if (response && response.success === true) {
    //         // Handle the successful response here
    //         const userToken = response.data.token;
 
    //         localStorage.setItem('userToken', userToken);
    //         console.log('Success ', response.message);
    
    //         toast.success('signup Successfully', {
    //           position: toast.POSITION.TOP_RIGHT,
    //         });
    //       } else {
    //         console.error('Error in signup:', response.statusText);
    
    //         toast.error('Email already exist. Please try again.', {
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











      const [userType, setUserType] = useState('user'); // Default to 'user'

      const handleUserTypeChange = (event) => {
        setUserType(event.target.value);
      };
    
      // const handleSignUp = async (event) => {
      //   event.preventDefault();
    
      //   const formData = new FormData(event.target);
      //   const userData = {
      //     fullName: formData.get('fullName'),
      //     email: formData.get('email'),
      //     password: formData.get('password'),
      //   };
    
      //   // Make different API calls based on userType
      //   try {
      //     if (userType === 'user') {
      //       // API call for user signup
      //       const response = await fetch('userSignupEndpoint', {
      //         method: 'POST',
      //         headers: {
      //           'Content-Type': 'application/json',
      //         },
      //         body: JSON.stringify(userData),
      //       });
    
      //       const result = await response.json();
      //       console.log('User Signup Response:', result);
      //     } else if (userType === 'admin') {
      //       // API call for admin signup
      //       const response = await fetch('adminSignupEndpoint', {
      //         method: 'POST',
      //         headers: {
      //           'Content-Type': 'application/json',
      //         },
      //         body: JSON.stringify({
      //           email: userData.email,
      //           password: userData.password,
      //         }),
      //       });
    
      //       const result = await response.json();
      //       console.log('Admin Signup Response:', result);
      //     }
      //   } catch (error) {
      //     console.error('Signup Error:', error);
      //   }
      // };
    
    












      
  const sign_up = async (event) => {
    event.preventDefault();
    if (password !== confirmpassword) {
      toast.error('Password and Confirm Password do not match.', {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }
    // Add your sign-up logic here, make API call based on userType
    try {
      if (userType === 'user') {
        try {
          const response = await signup(data);
    
          if (response && response.success === true) {
 
            const userToken = response.data.token;
 
            localStorage.setItem('userToken', userToken);
            console.log('Success ', response.message);
            navigate('/')
            toast.success('signup Successfully', {
              position: toast.POSITION.TOP_RIGHT,
            });
          } else {
            console.error('Error in signup:', response.statusText);
    
            toast.error('Email already exist. Please try again.', {
              position: toast.POSITION.TOP_RIGHT,
            });
          }
        } catch (error) {
          console.error('Error in placing order:', error);
    
          toast.error('An error occurred while placing the order.', {
            position: toast.POSITION.TOP_RIGHT,
          });
        }

 
      } else if (userType === 'vendor') {
        try {
          const response = await verdorsignup(data);
    
          if (response && response.success === true) {
 
            const userToken = response.data.token;
 
            localStorage.setItem('userToken', userToken);
            console.log('Success ', response.message);
    
            toast.success('signup Successfully', {
              position: toast.POSITION.TOP_RIGHT,
            });
          } else {
            console.error('Error in signup:', response.statusText);
    
            toast.error('Email already exist. Please try again.', {
              position: toast.POSITION.TOP_RIGHT,
            });
          }
        } catch (error) {
          console.error('Error in placing order:', error);
    
          toast.error('An error occurred while placing the order.', {
            position: toast.POSITION.TOP_RIGHT,
          });
        }


 
      }

      // You can add your API calls here based on the userType
    } catch (error) {
      console.error('Signup Error:', error);
    }
  };

    return (
        <div>






{/* 


<Container>
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

            {userType === 'user' && (
              <Form.Group controlId="formFullName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" name="fullName" placeholder="Enter your full name" />
              </Form.Group>
            )}

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" placeholder="Enter your password" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </Form>
        </Col>
      </Row>
    </Container> */}


            <section class="login_page_section">

                <div class="container">

                    <div class="row">

                        <div class="col-md-5 mx-auto">

                            <div class="login_page">

                                <div class="login_heading">
                                  
                                    <h4>Sign Up</h4>
 
            <Form.Group controlId="formUserType" className="d-flex">
              <p>User Type</p>
              <div className="d-flex">
                <Form.Check
                  type="radio"
                  label="User"
                  value="user"
                  checked={userType === 'user'}
                  onChange={handleUserTypeChange}
                />
                <Form.Check
                  type="radio"
                  label="Vendor"
                  value="verdor"
                  checked={userType === 'verdor'}
                  onChange={handleUserTypeChange}
                />
              </div>
            </Form.Group>
                                </div>

                                <form onSubmit={sign_up}>

                                    <div class="form-group">

                                        <div class="form-item">
                                            <input type="text" id="name" required  onChange={(e) => setName(e.target.value)}/>
                                            <label for="name">Full Name</label>
                                        </div>
                                    </div>


                                    <div class="form-group">
                                        <div class="form-item">
                                            <input  type="email" id="username" required  onChange={(e) => setEmail(e.target.value)}/>
                                            <label for="username">Email Address</label>
                                        </div>
                                    </div>

                                    <div class="form-group">

                                        <div class="form-item">
                                            <input type="password" id="password" required onChange={(e) => setPassword(e.target.value)} />
                                            <label for="password">Password</label>
                                        </div>

                                    </div>

                                    <div class="form-group">

                                        <div class="form-item">
                                            <input type="password" id="confirmpassword" required onChange={(e) => setConfirmPassword(e.target.value)} />
                                            <label for="confirmpassword">Confirm Password</label>
                                        </div>

                                    </div>

                                    <button type="submit" class="btn login_btn">Sign Up</button>
                                </form>


                            </div>

                        </div>

                    </div>

                </div>

            </section>

<ToastContainer/>

        </div>
    )
}



//