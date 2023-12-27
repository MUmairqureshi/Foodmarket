import React, { useState } from "react";
import {login} from '../../components/services/catigories'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../css/style.css'
import { Link } from "react-router-dom";
export function Login() {
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

const data = {
    email : email , 
    password : password
}
    const log_in = async () => {
        try {
          const response = await login(data);
    
          if (response && response.status === true) {
            // Handle the successful response here

            console.log('Success ', response.message);
    
              toast.success('Order placed successfully!', {
              position: toast.POSITION.TOP_RIGHT,
            });
    
          } else {
             console.error('Error in placing order:', response.statusText);
    
              toast.error('Failed to place order. Please try again.', {
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
            <section className="login_page_section">


                <div className="container">


                    <div className="row">


                        <div className="col-md-5 mx-auto">


                            <div className="login_page">


                                <div className="login_heading">
                                 


                                    <h4>Log In</h4>
                                </div>


                                <form action="">


        

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
                                        {/* <a className="forgot_password"><label for="">Forgot your password?</label></a> */}


                                    </div>
                                    <button type="submit" className="btn login_btn">Log In</button>
                                    <Link to="/signup" className="forgot_password"><label for="">signup</label></Link>
                                </form>


                                {/* <div className="different_login">
                                    <p>Or Sign In With</p>


                                    <div className="social_links_div">
                                        <label className="facebook">facebook</label>
                                        <label for="" className="google">G<label for="" style={{color: "#d55", cursor:"pointer"}}>o</label><label for="" style={{color: "#d2d226", cursor:"pointer"}}>o</label>g<label for="" style={{color: "#15b739", cursor:"pointer"}}>l</label><label for="" style={{color: "#d55", cursor:"pointer"}}>e</label></label>
                                        <label for="" className="apple"><span><i className="fa-brands fa-apple"></i></span> Apple</label>
                                    </div>
                                </div> */}


                            </div>


                        </div>


                    </div>


                </div>


            </section>
        </div>
    )
}