            
// import mac from '../images/mac.png' 
 

// import '../css/style.css'
// import product_extras_1 from '../images/product_extras_1.png'
// import pe_2 from '../images/pe_2.png'
//  import product_1 from '../images/product_1.png'
// import c1 from '../images/c1.png'
// export function Product_deatail() {
//     return (
// <div>
// <section className="product_detail">
//     <div className="container">
//         <div className="row">
//             <div className="col-md-12">
//             <div className="product_detail_content">
//             <table className="table ">
//             <thead>
//                 <tr>
//                 <th scope="col">Products</th>
//                 <th scope="col">Quantity</th>
//                 <th scope="col">Total</th>
               
//                 </tr>
//             </thead>
//             <tbody >
//                 <tr>
//                 <td>
//                   <div className="product_discription ">
//                     <div className="img_div mb-3">
//                         <img src={product_1} className="img-fluid" alt=""/>
//                     </div>
//                     <div className="product_detail">
//                     <div className="titleBox text-left ">
//                             <h3>The Classic</h3>
//                         </div>
//                         <p>Order are expected to ship <br/> within 7-10 days</p>
//                         <div className="product_detail_extras">
//                            <div className="first_extra d-flex align-items-center">
//                            <div className="img_div">
//                             <img src={product_extras_1} className="img=-fluid" alt=""/>
//                             </div>
//                             <p>-Floor : <span> $100</span></p>
//                            </div>
//                            <div className="first_extra d-flex align-items-center">
//                            <div className="img_div">
//                             <img src={pe_2} className="img=-fluid" alt=""/>
//                             </div>
//                             <p>-Tomato : <span> $100</span></p>
//                            </div>
//                         </div>
//                     </div>
//                   </div>
//                 </td>
//                 <td className="p_quantity align-middle" ><input type="number" placeholder="01" value="01"/></td>
//                 <td className="p_price align-middle"><p>$9.00</p></td>
//                 </tr>
//                 <tr>
//                 <td>
//                   <div className="product_discription ">
//                     <div className="img_div mb-3">
//                         <img src={product_1} className="img-fluid" alt=""/>
//                     </div>
//                     <div className="product_detail">
//                     <div className="titleBox text-left ">
//                             <h3>The Classic</h3>
//                         </div>
//                         <p>Order are expected to ship <br/> within 7-10 days</p>
//                         <div className="product_detail_extras">
//                            <div className="first_extra d-flex align-items-center">
//                            <div className="img_div">
//                             <img src={product_extras_1} className="img=-fluid" alt=""/>
//                             </div>
//                             <p>-Floor : <span> $100</span></p>
//                            </div>
//                            <div className="first_extra d-flex align-items-center">
//                            <div className="img_div">
//                             <img src={pe_2} className="img=-fluid" alt=""/>
//                             </div>
//                             <p>-Tomato : <span> $100</span></p>
//                            </div>
//                         </div>
//                     </div>
//                   </div>
//                 </td>
//                 <td className="p_quantity align-middle"><input type="number" placeholder="01" value="01"/></td>
//                 <td className="p_price align-middle"><p>$9.00</p></td>
//                 </tr>
//                 <tr>
//                 <td>
//                   <div className="product_discription ">
//                     <div className="img_div mb-3">
//                         <img src={product_1} className="img-fluid" alt=""/>
//                     </div>
//                     <div className="product_detail">
//                     <div className="titleBox text-left ">
//                             <h3>The Classic</h3>
//                         </div>
//                         <p>Order are expected to ship <br/> within 7-10 days</p>
//                         <div className="product_detail_extras">
//                            <div className="first_extra d-flex align-items-center">
//                            <div className="img_div">
//                             <img src={product_extras_1} className="img=-fluid" alt=""/>
//                             </div>
//                             <p>-Floor : <span> $100</span></p>
//                            </div>
//                            <div className="first_extra d-flex align-items-center">
//                            <div className="img_div">
//                             <img src={pe_2} className="img=-fluid" alt=""/>
//                             </div>
//                             <p>-Tomato : <span> $100</span></p>
//                            </div>
//                         </div>
//                     </div>
//                   </div>
//                 </td>
//                 <td className="p_quantity align-middle"><input type="number" placeholder="01" value="01"/></td>
//                 <td className="p_price align-middle"><p>$9.00</p></td>
//                 </tr>
//                 <tr>
//                     <td>
//                     <div className="actionChange">
//                                 <button type="button" className="btn primaryButton">Apply Coupon</button>
//                             </div>
//                     </td>
//                     <td>
                   
//                     </td>
//                     <td>
//                     <div className="actionChange">
//                                 <button type="button" className="btn primaryButton">Update Cart</button>
//                             </div>
//                     </td>
//                 </tr>
               
//             </tbody>
//             </table>
//             </div>
//             </div>
//         </div>
//     </div>
// </section>

// <section className="delivery_detail_section">
//     <div className="container">
//         <div className="row">
//             <div className="col-md-12 mb-5">
         
//                 <div className="delivery_detail d-flex gap-10 flex-lg-nowrap flex-wrap justify-content-between">
//                <div className="delivery_content">
//                <div className="titleBox text-left ">
//                     <h3>Delivery Zip*</h3>
//                 </div>
//                 <p>Hint: if this is a gift, enter your recipient’s ZIP!</p>
//                 <div className="delivery_info">
//                     <input type="text" placeholder="484892" className="form-control"/>
//                     <i className="fa fa-map-marker" aria-hidden="true"></i>
//                 </div>
//                </div>
//                <div className="delivery_content">
//                <div className="titleBox text-left ">
//                     <h3>Delivery Date*</h3>
//                 </div>
//                 <p>Choose an arrival date for order</p>
//                 <div className="delivery_info">
//                     <input type="date" placeholder="20/10/23" className="form-control"/>
//                     <i className="fa fa-calendar" aria-hidden="true"></i>
//                 </div>
//                </div>
//                <div className="delivery_content">
//                <div className="titleBox text-left ">
//                     <h3>Gift Message</h3>
//                 </div>
//                 <p>Choose an arrival date for order</p>
//                 <div className="delivery_info">
//                     <input type="text" placeholder="Write Message" className="form-control"/>
//                     <i className="fa fa-comments" aria-hidden="true"></i>
//                 </div>
//                </div>
//                 </div>
//             </div>
//             <div className="col-md-4 mb-4">
//                 <div className="apply_coupon">
//                 <div className="titleBox text-left mb-3">
//                     <h3>Apply Coupon</h3>
//                 </div>
//                 <div className="coupon_code">
//                     <input type="text" placeholder="coupon Code" className="form-control"/>
//                 </div>
//                 <div className="actionApply">
//                                 <button type="button" className="btn couponButton">Apply Coupon</button>
//                             </div>
//                 </div>
//             </div>
//             <div className="offset-md-1 col-md-7  ">
//                 <div className="apply_coupon total_cart">
//                 <div className="titleBox text-left mb-3">
//                     <h3>Cart Total</h3>
//                 </div>
//                 <div className="cart_info">
//                     <div>
//                         <p>Sub Total:</p>
//                         <p>$250.00</p>
//                     </div>
//                     <div>
//                         <p>Shipping:</p>
//                         <p>Free</p>
//                     </div>
//                     <div>
//                         <p>Total:</p>
//                         <p>$250.00</p>
//                     </div>
//                 </div>
//                 <div className="actionApply">
//                                 <button type="button" className="btn couponButton">Proceesd To Checkout</button>
//                             </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </section>
// <section className="mt-5 mb-3">
//     <div className="container">
//         <div className="row">
//         <div className="col-md-4">
//                 <div className="categoryCard shadow mb-4">
//                     <div className="cardHeader">
//                         <div className="topMeta">
//                             <div className="tags">
//                                 <span>15%off</span>
//                             </div>
//                             <div className="tags wishList">
//                                 <button className="button"><i className="fa fa-heart"></i></button>
//                             </div>
//                         </div>
//                         <div className="cardImage">
//                             <img src={c1} alt="Category Image" className="mw-100"/>
//                         </div>

//                         <div className="topMeta">
//                             <div className="companyLogo tags">
//                                 <button className="button"><img src={mac} alt="MAc"/></button>
//                             </div>
//                         </div>

//                     </div>
//                     <div className="cardBody">
//                         <div className="body-upper">
//                             <div className="ratingBox">
//                                 <p className="mb-0">Reviews 3.5k</p>
//                                 <p className="mb-0">
//                                     <i className="fa fa-star"></i>
//                                     <i className="fa fa-star"></i>
//                                     <i className="fa fa-star"></i>
//                                     <i className="fa fa-star"></i>
//                                     <i className="fa fa-star"></i>
//                                 </p>
//                             </div>
//                             <div className="deliveryInfo">
//                                 <div className="meter">
//                                     <p className="mb-0"> 30-40 mins</p>
//                                     <p className="mb-0 text-success">$0 Delivery</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="cardContent">
//                             <h3>The Classic</h3>
//                             <p>Fire Roasted pepper s, spanach</p>
//                             <h5 className="text-theme-primary font-weight-bold">$99.00</h5>
//                         </div>
//                     </div>
//                     <div className="cardFooter">
//                         <div className="cardAction">
//                             <div className="counterAction">
//                                 <span className="qunatingCount">01</span>
//                                 <button className="minus" type="button"><i className="fa fa-minus"></i></button>
                                 
//                                 <button className="plus" type="button"><i className="fa fa-plus"></i></button>
//                             </div>
//                             <div className="addToCart">
//                                 <button type="button">Add To Cart</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         <div className="col-md-4">
//                 <div className="categoryCard shadow mb-4">
//                     <div className="cardHeader">
//                         <div className="topMeta">
//                             <div className="tags">
//                                 <span>15%off</span>
//                             </div>
//                             <div className="tags wishList">
//                                 <button className="button"><i className="fa fa-heart"></i></button>
//                             </div>
//                         </div>
//                         <div className="cardImage">
//                             <img src={c1} alt="Category Image" className="mw-100"/>
//                         </div>

//                         <div className="topMeta">
//                             <div className="companyLogo tags">
//                                 <button className="button"><img src={mac} alt="MAc"/></button>
//                             </div>
//                         </div>

//                     </div>
//                     <div className="cardBody">
//                         <div className="body-upper">
//                             <div className="ratingBox">
//                                 <p className="mb-0">Reviews 3.5k</p>
//                                 <p className="mb-0">
//                                     <i className="fa fa-star"></i>
//                                     <i className="fa fa-star"></i>
//                                     <i className="fa fa-star"></i>
//                                     <i className="fa fa-star"></i>
//                                     <i className="fa fa-star"></i>
//                                 </p>
//                             </div>
//                             <div className="deliveryInfo">
//                                 <div className="meter">
//                                     <p className="mb-0"> 30-40 mins</p>
//                                     <p className="mb-0 text-success">$0 Delivery</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="cardContent">
//                             <h3>The Classic</h3>
//                             <p>Fire Roasted pepper s, spanach</p>
//                             <h5 className="text-theme-primary font-weight-bold">$99.00</h5>
//                         </div>
//                     </div>
//                     <div className="cardFooter">
//                         <div className="cardAction">
//                             <div className="counterAction">
//                                 <span className="qunatingCount">01</span>
//                                 <button className="minus" type="button"><i className="fa fa-minus"></i></button>
                                 
//                                 <button className="plus" type="button"><i className="fa fa-plus"></i></button>
//                             </div>
//                             <div className="addToCart">
//                                 <button type="button">Add To Cart</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         <div className="col-md-4">
//                 <div className="categoryCard shadow mb-4">
//                     <div className="cardHeader">
//                         <div className="topMeta">
//                             <div className="tags">
//                                 <span>15%off</span>
//                             </div>
//                             <div className="tags wishList">
//                                 <button className="button"><i className="fa fa-heart"></i></button>
//                             </div>
//                         </div>
//                         <div className="cardImage">
//                             <img src={c1} alt="Category Image" className="mw-100"/>
//                         </div>

//                         <div className="topMeta">
//                             <div className="companyLogo tags">
//                                 <button className="button"><img src={mac} alt="MAc"/></button>
//                             </div>
//                         </div>

//                     </div>
//                     <div className="cardBody">
//                         <div className="body-upper">
//                             <div className="ratingBox">
//                                 <p className="mb-0">Reviews 3.5k</p>
//                                 <p className="mb-0">
//                                     <i className="fa fa-star"></i>
//                                     <i className="fa fa-star"></i>
//                                     <i className="fa fa-star"></i>
//                                     <i className="fa fa-star"></i>
//                                     <i className="fa fa-star"></i>
//                                 </p>
//                             </div>
//                             <div className="deliveryInfo">
//                                 <div className="meter">
//                                     <p className="mb-0"> 30-40 mins</p>
//                                     <p className="mb-0 text-success">$0 Delivery</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="cardContent">
//                             <h3>The Classic</h3>
//                             <p>Fire Roasted pepper s, spanach</p>
//                             <h5 className="text-theme-primary font-weight-bold">$99.00</h5>
//                         </div>
//                     </div>
//                     <div className="cardFooter">
//                         <div className="cardAction">
//                             <div className="counterAction">
//                                 <span className="qunatingCount">01</span>
//                                 <button className="minus" type="button"><i className="fa fa-minus"></i></button>
                                 
//                                 <button className="plus" type="button"><i className="fa fa-plus"></i></button>
//                             </div>
//                             <div className="addToCart">
//                                 <button type="button">Add To Cart</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </section>


// <section className="footer">
//     <div className="container">
//         <div className="row">
//             <div className="col-md-12">
//                 <ul className="lastLink">
//                     <li><a href="#">Privacy Policy</a></li>
//                     <li><a href="#">Terms</a></li>
//                     <li><a href="#">Pricing</a></li>
//                 </ul>
//                 <p> Do not sell or share my personal information his site protected by reCAPTCHA and the google Provacy Policy and Terms of Servie apply</p>
//                 <p>2023 Emmanuel -Food Marketplace Inc.</p>
//             </div>
//         </div>
//     </div>
// </section>
// </div>
// )}

































// .fixed-item {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//   }













// Subscription Module for 5-day Meals
import user  from '../images/user.png'
import bun_img  from '../images/bun_img.png'
  

 import b_img  from '../images/b_img.png'
import ab_2 from '../images/ab_2.png'
            
import mac from '../images/mac.png' 
 import { useState } from 'react'

import '../css/style.css'
import product_extras_1 from '../images/product_extras_1.png'
import pe_2 from '../images/pe_2.png'
 import product_1 from '../images/product_1.png'
import c1 from '../images/c1.png'

 

// import noodles from './img/noodles.png' 
// import './style.css'
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Tabs, Tab } from 'react-bootstrap';
// import React, { useState } from 'react';
// import c1 from './img/frt3.png'
// import mac from './img/mac3.png'
// import bun_img from './img/fit.png'
// import user from './img/user.png'
// import b_img   from './img/b_.png' 
// Store details
export const Product_deatail = (props) => {
      const [key, setKey] = useState('section1');
   return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >

{/* img */}
 
<section class="store_detail_section">
    <div class="container">
        <div class="row">
        
            <Modal.Header closeButton className="col-md-12">
  <div id="contained-modal-title-vcenter" className="titleBox text-center">
   {/* style={{ backgroundColor: "#e776a2" }} */}
    <h1 >Subscription Module for 5-day Meals</h1>
{/* <button type="button" className='btn-close' aria-label="Close" > 
    <i className="bi bi-x-lg"></i></button> */}
  </div>
</Modal.Header>

            <div class="col-md-5">
                <div class="img_div">
                    <img src={b_img} class="img-fluid" alt=""/>
                </div>
            </div>
            <div class="col-md-7 align-self-center">
                <div class="store_content">
                <div class="titleBox mb-3">
                    <h2>Burger </h2>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
                    since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <h3>Price: <span class="text-theme-primary font-weight-bold">$99.00</span></h3>
                <p class="star">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
            
            </p>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="store_tabbing_section">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
            <Tabs
      activeKey={key}
      onSelect={(k) => setKey(k)}  class="nav nav-tabs" id="myTab" role="tablist"
    >           <Tab  class="nav-item" eventKey="section1" title="Variations"> 
                <a class="nav-link active" id="variation-tab" data-toggle="tab" href="#variation" role="tab" aria-controls="variation" aria-selected="true">Variations</a>
                






                <div class="tab-pane fade show active" id="variation" role="tabpanel" aria-labelledby="variation-tab">
            <div id="accordion">
            <div class="card">
                <div class="card-header" id="headingOne">
                <h5 class="mb-0">
                    <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Bun Selection*
                    </button>
                </h5>
                </div>

                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                <div class="card-body ">
                   <div class="selection_div">
                   <div class="order_cancel">
                   <button><i class="fa fa-times" aria-hidden="true"></i></button>
                   </div>
                    <div class="order_img">
                        <img src={bun_img} class="img-fluid" alt=""/>
                    </div>
                    <div class="order_name">
                       <div class="titleBox">
                        <h3>Classic burger</h3>
                       </div>
                    </div>
                    <div class="p_quantity">
                        <input type="number" value="01" placeholder="01"/>
                    </div>
                    <div class="product_price ">
                        <h3>+$0</h3>
                    </div>
                   </div>
                   <div class="selection_div">
                   <div class="order_cancel">
                   <button><i class="fa fa-times" aria-hidden="true"></i></button>
                   </div>
                    <div class="order_img">
                        <img src={bun_img} class="img-fluid" alt=""/>
                    </div>
                    <div class="order_name">
                       <div class="titleBox">
                        <h3>Classic burger</h3>
                       </div>
                    </div>
                    <div class="p_quantity">
                        <input type="number" value="01" placeholder="01"/>
                    </div>
                    <div class="product_price ">
                        <h3>+$0</h3>
                    </div>
                   </div>
                   <div class="selection_div">
                   <div class="order_cancel">
                   <button><i class="fa fa-times" aria-hidden="true"></i></button>
                   </div>
                    <div class="order_img">
                        <img src={bun_img} class="img-fluid" alt=""/>
                    </div>
                    <div class="order_name">
                       <div class="titleBox">
                        <h3>Classic burger</h3>
                       </div>
                    </div>
                    <div class="p_quantity">
                        <input type="number" value="01" placeholder="01"/>
                    </div>
                    <div class="product_price ">
                        <h3>+$0</h3>
                    </div>
                   </div>
                </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingTwo">
                <h5 class="mb-0">
                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Drinks*
                    </button>
                </h5>
                </div>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                <div class="card-body">
                <div class="selection_div">
                   <div class="order_cancel">
                   <button><i class="fa fa-times" aria-hidden="true"></i></button>
                   </div>
                    <div class="order_img">
                        <img src={bun_img} class="img-fluid" alt=""/>
                    </div>
                    <div class="order_name">
                       <div class="titleBox">
                        <h3>Classic burger</h3>
                       </div>
                    </div>
                    <div class="p_quantity">
                        <input type="number" value="01" placeholder="01"/>
                    </div>
                    <div class="product_price ">
                        <h3>+$0</h3>
                    </div>
                   </div>

            </div>
                </div>
            </div>
           
            </div>
       </div>








            </Tab>
               <Tab class="nav-item" eventKey="section2" title="Store Details">
                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Store Details</a>
              
              
                <div  id="profile" role="tabpanel" aria-labelledby="profile-tab">

<div class="store_detail">
<div class="titleBox">
                        <h3>Store Details*</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero beatae architecto sequi? Placeat corporis iste hic officiis magni id atque 
                            ipsam sed dolorum. Id, itaque. Deserunt tempora ab quia nostrum.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero beatae architecto sequi? Placeat corporis iste hic officiis magni id atque 
                            ipsam sed dolorum. Id, itaque. Deserunt tempora ab quia nostrum.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero beatae architecto sequi? Placeat corporis iste hic officiis magni id atque 
                            ipsam sed dolorum. Id, itaque. Deserunt tempora ab quia nostrum.</p>
                    </div>
</div>

            </div>
              
              
              
                </Tab>
           <Tab class="nav-item" eventKey="section3" title="Reviews">

                <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Reviews</a>
           
           
           
                <div   id="contact" role="tabpanel" aria-labelledby="contact-tab">
            <div class="store_detail reviews_tabb">

                        <div class="client_info">
                            <div class="img_div">
                                <img src={user} class="img-fluid" alt=""/>
                            </div>
                            <div class="client_name">
                            <div class="title">
                                <h3>Client Name</h3>
                            </div>
                            <p>Company Name</p>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero beatae architecto sequi? Placeat corporis iste hic officiis magni id atque 
                            ipsam sed dolorum. Id, itaque. Deserunt tempora ab quia nostrum.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero beatae architecto sequi? Placeat corporis iste hic officiis magni id atque 
                            ipsam sed dolorum. Id, itaque. Deserunt tempora ab quia nostrum.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero beatae architecto sequi? Placeat corporis iste hic officiis magni id atque 
                            ipsam sed dolorum. Id, itaque. Deserunt tempora ab quia nostrum.</p>
                    
</div>
            </div>
           
           
           
           
           
            </Tab>
            </Tabs>  
            <div class="tab-content" id="myTabContent">
         
          
            </div>
            </div>
        </div>
    </div>
</section>

<section class="store_extra_info">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
              <div class="quntity_instructions d-flex align-items-center justify-content-between">
              <div class="titleBox">
                    <h3>Quantity <br/> Special Instructions?</h3>
                </div>
                <div class="p_quantity">
                        <input type="number" value="01" placeholder="01"/>
                    </div>
              </div>
              <div class="text_area">
                <textarea name="" id="" cols="30" rows="8" class="form-control">Add instructions...</textarea>
              </div>
              <div class="quntity_instructions d-flex align-items-center justify-content-between">
              <div class="titleBox">
                    <h3>Total Price</h3>
                </div>
                <div class="p_quantity">
                       <h3>$99.00</h3>
                    </div>
              </div>
              <div class="actionCart">
                                <button type="button" class="btn couponButton">Add To Cart</button>
                            </div>
            </div>
        </div>
    </div>
</section>

<section class="recomendation_section">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="titleBox mb-3">
                <h2>Recomendations</h2>
                </div>
            </div>
            <div class="col-md-4 mb-3">
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
                            <img src={c1} alt="Category Image" class="mw-100"/>
                        </div>

                        <div class="topMeta">
                            <div class="companyLogo tags">
                                <button class="button"><img src={mac} alt="MAc"/></button>
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
                            <img src={c1} alt="Category Image" class="mw-100"/>
                        </div>

                        <div class="topMeta">
                            <div class="companyLogo tags">
                                <button class="button"><img src={mac} alt="MAc"/></button>
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
                            <img src={c1} alt="Category Image" class="mw-100"/>
                        </div>

                        <div class="topMeta">
                            <div class="companyLogo tags">
                                <button class="button"><img src={mac} alt="MAc"/></button>
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
    </Modal>
  );
};

// export default Product_deatail;