import React , {useState} from "react";
import {signup} from '../../components/services/catigories'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export function Signup() {

    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [confirmpassword , setConfirmPassword] = useState("")
    const [name , setName] = useState("")
  

    const data = {
        name : name,
        email :email,
        password:  password , 
    }
    console.log("datasignup" , data)
  
    const sign_up = async (e) => {
        e.preventDefault();
    
        // Check if password and confirm password match
        if (password !== confirmpassword) {
          toast.error('Password and Confirm Password do not match.', {
            position: toast.POSITION.TOP_RIGHT,
          });
          return;
        }
    
        try {
          const response = await signup(data);
    
          if (response && response.success === true) {
            // Handle the successful response here
    
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
      };
    return (
        <div>


            <section class="login_page_section">

                <div class="container">

                    <div class="row">

                        <div class="col-md-5 mx-auto">

                            <div class="login_page">

                                <div class="login_heading">
                                  
                                    <h4>Sign Up</h4>
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
{/* 
                                <div class="different_login">
                                    <p>Or Sign Up With</p>

                                    <div class="social_links_div">
                                        <label class="facebook">facebook</label>
                                        <label for="" class="google">G<label for="" style={{color: "#d55", cursor:"pointer"}}>o</label><label for="" style={{color: "#d2d226", cursor:"pointer"}}>o</label>g<label for="" style={{color: "#15b739", cursor:"pointer"}}>l</label><label for="" style={{color: "#d55", cursor:"pointer"}}>e</label></label>
                                        <label for="" class="apple"><span><i class="fa-brands fa-apple"></i></span> Apple</label>
                                    </div>
                                </div> */}

                            </div>

                        </div>

                    </div>

                </div>

            </section>

<ToastContainer/>

        </div>
    )
}