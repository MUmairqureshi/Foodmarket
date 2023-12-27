import React, { useState } from "react";

import c1 from '../../assets/images/c1.png'
import phone_icon from '../../assets/images/phone_icon.png'
import message_icon from '../../assets/images/message_icon.png'
import mac from '../../assets/images/mac.png'
import {Contactus} from '../../components/services/catigories'
import { Link } from "react-router-dom";
export function Contact() {
const [name , SetName] = useState("")
const [country , SetCountry] = useState("")
const [lastname , SetLastname] = useState("")
    const data = {
        // sub_total: totalCartPrice,
        //       total: totalCartPrice,
        //       zipcode: zipcode,
        //       message: message,
        //       products: cartItems,
        //       discount: 32,
        //       coupon_code: applycoupon,
    };

    const placeOrder = async () => {
        try {
          const response = await Contactus(data);
    
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

            <section class="store_detail_section contact_us_section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="titleBox text-center">
                                <h1 style={{ backgroundcolor: "#e776a2" }}
                                >Subscription Module for 5-day Meals</h1>
                            </div>
                        </div>
                        <div class="col-md-6 mt-5">
                            <div class="d-flex justify-content-between gap-10">
                                <div class="contact_info">
                                    <div class="img_div">
                                        <img src={phone_icon.png} class="img-fluid" alt="" />
                                    </div>
                                    <div class="titleBox text-center mt-3 mb-0">
                                        <h3>For Booking</h3>
                                    </div>
                                    <p>01 123 456 789</p>
                                </div>
                                <div class="contact_info">
                                    <div class="img_div">
                                        <img src={message_icon} class="img-fluid" alt="" />
                                    </div>
                                    <div class="titleBox text-center mt-3">
                                        <h3>Email Address</h3>
                                    </div>
                                    <p>01 123 456 789</p>
                                </div>
                            </div>


                            <div class="google_map mt-4">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3332292.69331754!2d-122.39252975570714!3d35.350879055529866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f80b6af690d39%3A0x7057232b59a1f803!2sUniversity%20of%20California!5e0!3m2!1sen!2s!4v1698329864184!5m2!1sen!2s"
                                    width="100%" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                            <div class="delivery_details_edit">
                                <div class="detials_edit_top">
                                    <div class="titleBox text-center mt-3 mb-0">
                                        <h3>Delivery Details</h3>
                                    </div>
                                    <div class="actionEdit">
                                        <button type="button" class="btn ">Edit</button>
                                    </div>
                                </div>
                                <p>113000 2nd 64,4774</p>
                                <p>delivery details pa 728328</p>
                                <div class="d-flex justify-content-between">
                                    <h3>Delivery Date </h3>
                                    <p>Tuesday Sep 19,2023</p>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <h3>Estimated Delivery Time </h3>
                                    <p>23 Mins</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 mt-5">
                            <div class="contact_form">
                                <div class="titleBox text-center">
                                    <h2>Have Question?</h2>
                                </div>
                                <div class="content_discription">
                                    <p>For all enquires, please contact us and one of our delightful team will be be happy to help.</p>
                                </div>
                                <form>
                                    <div class="form-row">
                                        <div class="form-group col-md-12">
<input type="text" name="" id=""  placeholder="Full Name" class="form-control"/>
                                            {/* <select id="inputState" class="form-control">
                                                <option selected>Full Name</option>
                                                <option>...</option>
                                            </select> */}
                                        </div>
                                        <div class="form-group col-md-12">
                                            {/* <div class="form-check d-flex">

                    <input class="form-check-input" type="checkbox" id="gridCheck"/>
                    <label class="form-check-label" for="gridCheck">
                    Email me with news and offers
                    </label>
                    </div> */}
                                        </div>
                                    </div>
                                    <div class="titleBox text-center mb-3">
                                        <h3>Shipping Address</h3>
                                    </div>


                                    <div class="form-row">
                                        <div class="form-group col-md-12">
<input type="text" name="" id="" placeholder="Country"  class="form-control"/>
                                            {/* <select id="inputState" class="form-control">
                                                <option selected>Country</option>
                                                <option>...</option>
                                            </select> */}
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="inputEmail4"></label>
                                            <input type="text" class="form-control" id="inputEmail4" placeholder="First Name" />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputPassword4"></label>
                                            <input type="text" class="form-control" id="inputPassword4" placeholder="Last Name" />
                                        </div>
                                    </div>

                            
                                    <div class="form-row">
                                        <div class="form-group col-md-4">
                                            <label for="inputEmail4">First Name</label>
                                            <input type="text" class="form-control" id="inputEmail4" placeholder="City" />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Last Name</label>
                                            <input type="text" class="form-control" id="inputPassword4" placeholder="State" />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Last Name</label>
                                            <input type="text" class="form-control" id="inputPassword4" placeholder="Zip" />
                                        </div>
                                    </div>
                                    <div class="form-row">
                                        <div class="form-group col-md-12">

                                            <textarea name="" class="form-control" id="" cols="30" rows="5">Message</textarea>
                                        </div>
                                        <div class="form-group col-md-12">
                                            {/* <div class="form-check d-flex">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
      Email me with news and offers
      </label>
    </div> */}
                                        </div>

                                    </div>
                                    <div class="form-row align-items-center">
                                        <div class="form-group col-md-6 ">
                                            <div class="actionShipping">
                                                <button type="button" class="btn shippingButton">Continue To shipping</button>
                                            </div>

                                        </div>
                                        <div class="form-group col-md-6 ">
                                            <div class="actionReturn">
                                                <Link to="/" class="btn">Return To Cart</Link>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div class="container">
                    <div class="row">
                        <div class="col mb-3">
                            <div class="categoryCard shadow">
                                <div class="cardHeader">
                                    <div class="topMeta">
                                        <div class="tags">
                                            <span>15%off</span>
                                        </div>
                                        <div class="tags wishList">
                                            <button class="button"><i class="fa fa-heart"></i></button>
                                        </div>
                                    </div>
                                    <div class="cardImage">
                                        <img src={c1} alt="Category Image" class="mw-100" />
                                    </div>

                                    <div class="topMeta">
                                        <div class="companyLogo tags">
                                            <button class="button"><img src={mac} alt="MAc" /></button>
                                        </div>
                                    </div>

                                </div>
                                <div class="cardBody">
                                    <div class="body-upper">
                                        <div class="ratingBox">
                                            <p class="mb-0">Reviews 3.5k</p>
                                            <p class="mb-0">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </p>
                                        </div>
                                        <div class="deliveryInfo">
                                            <div class="meter">
                                                <p class="mb-0"> 30-40 mins</p>
                                                <p class="mb-0 text-success">$0 Delivery</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="cardContent">
                                        <h3>The Classic</h3>
                                        <p>Fire Roasted pepper s, spanach</p>
                                        <h5 class="text-theme-primary font-weight-bold">$99.00</h5>
                                    </div>
                                </div>
                                <div class="cardFooter">
                                    <div class="cardAction">
                                        <div class="counterAction">
                                            <span class="qunatingCount">01</span>
                                            <button class="minus" type="button"><i class="fa fa-minus"></i></button>
                                            |
                                            <button class="plus" type="button"><i class="fa fa-plus"></i></button>
                                        </div>
                                        <div class="addToCart">
                                            <button type="button">Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-3">
                            <div class="categoryCard shadow">
                                <div class="cardHeader">
                                    <div class="topMeta">
                                        <div class="tags">
                                            <span>15%off</span>
                                        </div>
                                        <div class="tags wishList">
                                            <button class="button"><i class="fa fa-heart"></i></button>
                                        </div>
                                    </div>
                                    <div class="cardImage">
                                        <img src={c1} alt="Category Image" class="mw-100" />
                                    </div>

                                    <div class="topMeta">
                                        <div class="companyLogo tags">
                                            <button class="button"><img src={mac} alt="MAc" /></button>
                                        </div>
                                    </div>

                                </div>
                                <div class="cardBody">
                                    <div class="body-upper">
                                        <div class="ratingBox">
                                            <p class="mb-0">Reviews 3.5k</p>
                                            <p class="mb-0">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </p>
                                        </div>
                                        <div class="deliveryInfo">
                                            <div class="meter">
                                                <p class="mb-0"> 30-40 mins</p>
                                                <p class="mb-0 text-success">$0 Delivery</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="cardContent">
                                        <h3>The Classic</h3>
                                        <p>Fire Roasted pepper s, spanach</p>
                                        <h5 class="text-theme-primary font-weight-bold">$99.00</h5>
                                    </div>
                                </div>
                                <div class="cardFooter">
                                    <div class="cardAction">
                                        <div class="counterAction">
                                            <span class="qunatingCount">01</span>
                                            <button class="minus" type="button"><i class="fa fa-minus"></i></button>
                                            |
                                            <button class="plus" type="button"><i class="fa fa-plus"></i></button>
                                        </div>
                                        <div class="addToCart">
                                            <button type="button">Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-3">
                            <div class="categoryCard shadow">
                                <div class="cardHeader">
                                    <div class="topMeta">
                                        <div class="tags">
                                            <span>15%off</span>
                                        </div>
                                        <div class="tags wishList">
                                            <button class="button"><i class="fa fa-heart"></i></button>
                                        </div>
                                    </div>
                                    <div class="cardImage">
                                        <img src={c1} alt="Category Image" class="mw-100" />
                                    </div>

                                    <div class="topMeta">
                                        <div class="companyLogo tags">
                                            <button class="button"><img src={mac} alt="MAc" /></button>
                                        </div>
                                    </div>

                                </div>
                                <div class="cardBody">
                                    <div class="body-upper">
                                        <div class="ratingBox">
                                            <p class="mb-0">Reviews 3.5k</p>
                                            <p class="mb-0">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </p>
                                        </div>
                                        <div class="deliveryInfo">
                                            <div class="meter">
                                                <p class="mb-0"> 30-40 mins</p>
                                                <p class="mb-0 text-success">$0 Delivery</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="cardContent">
                                        <h3>The Classic</h3>
                                        <p>Fire Roasted pepper s, spanach</p>
                                        <h5 class="text-theme-primary font-weight-bold">$99.00</h5>
                                    </div>
                                </div>
                                <div class="cardFooter">
                                    <div class="cardAction">
                                        <div class="counterAction">
                                            <span class="qunatingCount">01</span>
                                            <button class="minus" type="button"><i class="fa fa-minus"></i></button>
                                            |
                                            <button class="plus" type="button"><i class="fa fa-plus"></i></button>
                                        </div>
                                        <div class="addToCart">
                                            <button type="button">Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section class="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <ul class="lastLink">
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Pricing</a></li>
                            </ul>
                            <p> Do not sell or share my personal information his site protected by reCAPTCHA and the google Provacy Policy and Terms of Servie apply</p>
                            <p>2023 Emmanuel -Food Marketplace Inc.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}