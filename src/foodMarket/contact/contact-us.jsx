


 import React from "react";
 import mac from '../images/mac.png'

 import c1 from '../images/c1.png'
  
import '../css/style.css'
export function Contact_us() {
    //  style={{backgroundcolor: "#e776a2"}}
  return (
    <div className=" ">
     <section className="store_detail_section contact_us_section">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="titleBox text-center">
                    <h1 style={{backgroundcolor: "#e776a2"}}>Subscription Module for 5-day Meals</h1>
                </div>
            </div>
           <div className="col-md-6 mt-5">
           <div className="d-flex justify-content-between gap-10">
           <div className="contact_info">
                <div className="img_div">
                    <img src="../images/phone_icon.png" className="img-fluid" alt=""/>
                </div>
                <div className="titleBox text-center mt-3 mb-0">
                    <h3>For Booking</h3>
                </div>
                <p>01 123 456 789</p>
            </div>
            <div className="contact_info">
                <div className="img_div">
                    <img src="../images/message_icon.png" className="img-fluid" alt=""/>
                </div>
                <div className="titleBox text-center mt-3">
                    <h3>Email Address</h3>
                </div>
                <p>01 123 456 789</p>
            </div>
           </div>


           <div className="google_map mt-4">
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3332292.69331754!2d-122.39252975570714!3d35.350879055529866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f80b6af690d39%3A0x7057232b59a1f803!2sUniversity%20of%20California!5e0!3m2!1sen!2s!4v1698329864184!5m2!1sen!2s"
             width="100%" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
           </div>
            <div className="delivery_details_edit">
                <div className="detials_edit_top">
                <div className="titleBox text-center mt-3 mb-0">
                    <h3>Delivery Details</h3>
                </div>
                <div className="actionEdit">
            <button type="button" className="btn ">Edit</button>
        </div>
                </div>
                <p>113000 2nd 64,4774</p>
                <p>delivery details pa 728328</p>
                <div className="d-flex justify-content-between">
                    <h3>Delivery Date </h3>
                    <p>Tuesday Sep 19,2023</p>
                </div>
                <div className="d-flex justify-content-between">
                    <h3>Estimated Delivery Time </h3>
                    <p>23 Mins</p>
                </div>
            </div>
           </div>
           <div className="col-md-6 mt-5">
             <div className="contact_form">
             <div className="titleBox text-center">
                    <h2>Have Question?</h2>
                </div>
                <div className="content_discription">
                    <p>For all enquires, please contact us and one of our delightful team will be be happy to help.</p>
                </div>
                <form>
                <div className="form-row">
                <div className="form-group col-md-12">
                
                    <select id="inputState" className="form-control">
                        <option selected>Full Name</option>
                        <option>...</option>
                    </select>
                    </div>
                    <div className="form-group col-md-12">
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck"/>
                    <label className="form-check-label" for="gridCheck">
                    Email me with news and offers
                    </label>
                    </div>
                </div>
                </div>
                <div className="titleBox text-center mb-3">
                    <h3>Shipping Address</h3>
                </div>
             
              
                <div className="form-row">
  <div className="form-group col-md-12">
   
      <select id="inputState" className="form-control">
        <option selected>Country</option>
        <option>...</option>
      </select>
    </div>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
          <label for="inputEmail4"></label>       
      <input type="text" className="form-control" id="inputEmail4" placeholder="First Name"/>
    </div>
    <div className="form-group col-md-6">
          <label for="inputPassword4"></label>       
      <input type="text" className="form-control" id="inputPassword4" placeholder="Last Name"/>
    </div>
  </div>

  <div className="form-row">
    <div className="form-group col-md-6">
          <label for="inputEmail4">First Name</label>       
      <input type="text" className="form-control" id="inputEmail4" placeholder="Company (Optional)"/>
    </div>
    <div className="form-group col-md-6">
          <label for="inputPassword4">Last Name</label>       
      <input type="text" className="form-control" id="inputPassword4" placeholder="Address"/>
    </div>
  </div>
  <div className="form-row">
    <div className="form-group col-md-12">
          <label for="inputEmail4">First Name</label>       
      <input type="text" className="form-control" id="inputEmail4" placeholder="Apartment, suite, etc (optional)"/>
    </div>
  
  </div>
  <div className="form-row">
    <div className="form-group col-md-4">
          <label for="inputEmail4">First Name</label>       
      <input type="text" className="form-control" id="inputEmail4" placeholder="City"/>
    </div>
    <div className="form-group col-md-4">
          <label for="inputPassword4">Last Name</label>       
      <input type="text" className="form-control" id="inputPassword4" placeholder="State"/>
    </div>
    <div className="form-group col-md-4">
          <label for="inputPassword4">Last Name</label>       
      <input type="text" className="form-control" id="inputPassword4" placeholder="Zip"/>
    </div>
  </div>
  <div className="form-row">
    <div className="form-group col-md-12">
      
      <textarea name="" className="form-control" id="" cols="30" rows="5">Message</textarea>
    </div>
    <div className="form-group col-md-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
      Email me with news and offers
      </label>
    </div>
  </div>
   
  </div>
        <div className="form-row align-items-center">
            <div className="form-group col-md-6 ">
            <div className="actionShipping">
            <button type="button" className="btn shippingButton">Continue To shipping</button>
        </div>
        
            </div>
            <div className="form-group col-md-6 ">
            <div className="actionReturn">
            <button className="btn">Return To Cart</button>
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
    <div className="container">
        <div className="row">
        <div className="col mb-3">
                <div className="categoryCard shadow">
                    <div className="cardHeader">
                        <div className="topMeta">
                            <div className="tags">
                                <span>15%off</span>
                            </div>
                            <div className="tags wishList">
                                <button className="button"><i className="fa fa-heart"></i></button>
                            </div>
                        </div>
                        <div className="cardImage">
                            <img src={c1} alt="Category Image" className="mw-100"/>
                        </div>

                        <div className="topMeta">
                            <div className="companyLogo tags">
                                <button className="button"><img src={mac} alt="MAc"/></button>
                            </div>
                        </div>

                    </div>
                    <div className="cardBody">
                        <div className="body-upper">
                            <div className="ratingBox">
                                <p className="mb-0">Reviews 3.5k</p>
                                <p className="mb-0">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </p>
                            </div>
                            <div className="deliveryInfo">
                                <div className="meter">
                                    <p className="mb-0"> 30-40 mins</p>
                                    <p className="mb-0 text-success">$0 Delivery</p>
                                </div>
                            </div>
                        </div>
                        <div className="cardContent">
                            <h3>The Classic</h3>
                            <p>Fire Roasted pepper s, spanach</p>
                            <h5 className="text-theme-primary font-weight-bold">$99.00</h5>
                        </div>
                    </div>
                    <div className="cardFooter">
                        <div className="cardAction">
                            <div className="counterAction">
                                <span className="qunatingCount">01</span>
                                <button className="minus" type="button"><i className="fa fa-minus"></i></button>
                                  
                                <button className="plus" type="button"><i className="fa fa-plus"></i></button>
                            </div>
                            <div className="addToCart">
                                <button type="button">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col mb-3">
                <div className="categoryCard shadow">
                    <div className="cardHeader">
                        <div className="topMeta">
                            <div className="tags">
                                <span>15%off</span>
                            </div>
                            <div className="tags wishList">
                                <button className="button"><i className="fa fa-heart"></i></button>
                            </div>
                        </div>
                        <div className="cardImage">
                            <img src={c1} alt="Category Image" className="mw-100"/>
                        </div>

                        <div className="topMeta">
                            <div className="companyLogo tags">
                                <button className="button"><img src={mac} alt="MAc"/></button>
                            </div>
                        </div>

                    </div>
                    <div className="cardBody">
                        <div className="body-upper">
                            <div className="ratingBox">
                                <p className="mb-0">Reviews 3.5k</p>
                                <p className="mb-0">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </p>
                            </div>
                            <div className="deliveryInfo">
                                <div className="meter">
                                    <p className="mb-0"> 30-40 mins</p>
                                    <p className="mb-0 text-success">$0 Delivery</p>
                                </div>
                            </div>
                        </div>
                        <div className="cardContent">
                            <h3>The Classic</h3>
                            <p>Fire Roasted pepper s, spanach</p>
                            <h5 className="text-theme-primary font-weight-bold">$99.00</h5>
                        </div>
                    </div>
                    <div className="cardFooter">
                        <div className="cardAction">
                            <div className="counterAction">
                                <span className="qunatingCount">01</span>
                                <button className="minus" type="button"><i className="fa fa-minus"></i></button>
                                  
                                <button className="plus" type="button"><i className="fa fa-plus"></i></button>
                            </div>
                            <div className="addToCart">
                                <button type="button">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col mb-3">
                <div className="categoryCard shadow">
                    <div className="cardHeader">
                        <div className="topMeta">
                            <div className="tags">
                                <span>15%off</span>
                            </div>
                            <div className="tags wishList">
                                <button className="button"><i className="fa fa-heart"></i></button>
                            </div>
                        </div>
                        <div className="cardImage">
                            <img src={c1} alt="Category Image" className="mw-100"/>
                        </div>

                        <div className="topMeta">
                            <div className="companyLogo tags">
                                <button className="button"><img src={mac} alt="MAc"/></button>
                            </div>
                        </div>

                    </div>
                    <div className="cardBody">
                        <div className="body-upper">
                            <div className="ratingBox">
                                <p className="mb-0">Reviews 3.5k</p>
                                <p className="mb-0">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                </p>
                            </div>
                            <div className="deliveryInfo">
                                <div className="meter">
                                    <p className="mb-0"> 30-40 mins</p>
                                    <p className="mb-0 text-success">$0 Delivery</p>
                                </div>
                            </div>
                        </div>
                        <div className="cardContent">
                            <h3>The Classic</h3>
                            <p>Fire Roasted pepper s, spanach</p>
                            <h5 className="text-theme-primary font-weight-bold">$99.00</h5>
                        </div>
                    </div>
                    <div className="cardFooter">
                        <div className="cardAction">
                            <div className="counterAction">
                                <span className="qunatingCount">01</span>
                                <button className="minus" type="button"><i className="fa fa-minus"></i></button>
                                  
                                <button className="plus" type="button"><i className="fa fa-plus"></i></button>
                            </div>
                            <div className="addToCart">
                                <button type="button">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>



<section className="footer">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <ul className="lastLink">
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
  );
}
 