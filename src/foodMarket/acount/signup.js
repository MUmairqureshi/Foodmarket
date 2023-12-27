import React from "react";


export function Signup() {
    return (
        <div>


            <section class="login_page_section">

                <div class="container">

                    <div class="row">

                        <div class="col-md-5 mx-auto">

                            <div class="login_page">

                                <div class="login_heading">
                                    <span>
                                        <i class="fa-solid fa-user"></i>
                                    </span>

                                    <h4>Sign Up</h4>
                                </div>

                                <form action="">

                                    <div class="form-group">

                                        <div class="form-item">
                                            <input type="text" id="name" required />
                                            <label for="name">Full Name</label>
                                        </div>
                                    </div>


                                    <div class="form-group">
                                        <div class="form-item">
                                            <input type="email" id="username" required />
                                            <label for="username">Email Address</label>
                                        </div>
                                    </div>

                                    <div class="form-group">

                                        <div class="form-item">
                                            <input type="password" id="password" required />
                                            <label for="password">Password</label>
                                        </div>

                                    </div>

                                    <div class="form-group">

                                        <div class="form-item">
                                            <input type="password" id="confirmpassword" required />
                                            <label for="confirmpassword">Confirm Password</label>
                                        </div>

                                    </div>

                                    <button type="submit" class="btn login_btn">Sign Up</button>
                                </form>

                                <div class="different_login">
                                    <p>Or Sign Up With</p>

                                    <div class="social_links_div">
                                        <label class="facebook">facebook</label>
                                        <label for="" class="google">G<label for="" style="color: #d55; cursor:pointer;">o</label><label for="" style="color: #d2d226; cursor:pointer;">o</label>g<label for="" style="color: #15b739; cursor:pointer;">l</label><label for="" style="color: #d55; cursor:pointer;">e</label></label>
                                        <label for="" class="apple"><span><i class="fa-brands fa-apple"></i></span> Apple</label>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>



        </div>
    )
}