// // import React from 'react';
// // import { Card, Row, Col } from 'react-bootstrap';
// // import burger from  '../../images/burger.png'
// // const Product_deatail = () => {
// //   return (
// //     <div className="row">

// //     <div className="col-md-4"> {/* You can adjust the column size as needed */}
// //         <Card>
// //           <Card.Img variant="top" src={burger} />
// //           <Card.Body>
// //             <Card.Title>Card title</Card.Title>
// //             <Card.Text>
// //               This is a wider card with supporting text below as a natural lead-in
// //               to additional content. This content is a little bit longer.
// //             </Card.Text>
// //           </Card.Body>
// //           <Card.Footer>
// //             <small className="text-muted">Last updated 3 mins ago</small>
// //           </Card.Footer>
// //         </Card>
// //       </div>
// //     </div>
    
// //   );
// // };

// // export default Product_deatail;

























  

// // // import styles from "./Page.module.css";
// import c1 from '../../images/c1.png'
// import mac from '../../images/mac.png'
// import bun_img from '../../images/bun_img.png'
// import user from '../../images/user.png'
// import b_img   from '../../images/b_img.png'
 
// const Product_deatail = () => {
//   return (
//     <div>

// {/* img */}

      
// <section class="store_detail_section">
//     <div class="container">
//         <div class="row">
//             <div class="col-md-12">
//                 <div class="titleBox text-center">
//                     <h1 style={{backgroundcolor : " #e776a2;"}}>Subscription Module for 5-day Meals</h1>
//                 </div>
//             </div>
//             <div class="col-md-5">
//                 <div class="img_div">
//                     <img src={b_img} class="img-fluid" alt=""/>
//                 </div>
//             </div>
//             <div class="col-md-7 align-self-center">
//                 <div class="store_content">
//                 <div class="titleBox mb-3">
//                     <h2>Burger </h2>
//                 </div>
//                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
//                     since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
//                 <h3>Price: <span class="text-theme-primary font-weight-bold">$99.00</span></h3>
//                 <p class="star">
//                 <i class="fa fa-star" aria-hidden="true"></i>
//                 <i class="fa fa-star" aria-hidden="true"></i>
//                 <i class="fa fa-star" aria-hidden="true"></i>
//                 <i class="fa fa-star" aria-hidden="true"></i>
//                     <i class="fa fa-star" aria-hidden="true"></i>
            
//             </p>
//                 </div>
//             </div>
//         </div>
//     </div>
// </section>
// <section class="store_tabbing_section">
//     <div class="container">
//         <div class="row">
//             <div class="col-md-12">
//             <ul class="nav nav-tabs" id="myTab" role="tablist">
//             <li class="nav-item">
//                 <a class="nav-link active" id="variation-tab" data-toggle="tab" href="#variation" role="tab" aria-controls="variation" aria-selected="true">Variations</a>
//             </li>
//             <li class="nav-item">
//                 <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Store Details</a>
//             </li>
//             <li class="nav-item">
//                 <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Reviews</a>
//             </li>
//             </ul>
//             <div class="tab-content" id="myTabContent">
//             <div class="tab-pane fade show active" id="variation" role="tabpanel" aria-labelledby="variation-tab">
//             <div id="accordion">
//             <div class="card">
//                 <div class="card-header" id="headingOne">
//                 <h5 class="mb-0">
//                     <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
//                     Bun Selection*
//                     </button>
//                 </h5>
//                 </div>

//                 <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
//                 <div class="card-body ">
//                    <div class="selection_div">
//                    <div class="order_cancel">
//                    <button><i class="fa fa-times" aria-hidden="true"></i></button>
//                    </div>
//                     <div class="order_img">
//                         <img src={bun_img} class="img-fluid" alt=""/>
//                     </div>
//                     <div class="order_name">
//                        <div class="titleBox">
//                         <h3>Classic burger</h3>
//                        </div>
//                     </div>
//                     <div class="p_quantity">
//                         <input type="number" value="01" placeholder="01"/>
//                     </div>
//                     <div class="product_price ">
//                         <h3>+$0</h3>
//                     </div>
//                    </div>
//                    <div class="selection_div">
//                    <div class="order_cancel">
//                    <button><i class="fa fa-times" aria-hidden="true"></i></button>
//                    </div>
//                     <div class="order_img">
//                         <img src={bun_img} class="img-fluid" alt=""/>
//                     </div>
//                     <div class="order_name">
//                        <div class="titleBox">
//                         <h3>Classic burger</h3>
//                        </div>
//                     </div>
//                     <div class="p_quantity">
//                         <input type="number" value="01" placeholder="01"/>
//                     </div>
//                     <div class="product_price ">
//                         <h3>+$0</h3>
//                     </div>
//                    </div>
//                    <div class="selection_div">
//                    <div class="order_cancel">
//                    <button><i class="fa fa-times" aria-hidden="true"></i></button>
//                    </div>
//                     <div class="order_img">
//                         <img src={bun_img} class="img-fluid" alt=""/>
//                     </div>
//                     <div class="order_name">
//                        <div class="titleBox">
//                         <h3>Classic burger</h3>
//                        </div>
//                     </div>
//                     <div class="p_quantity">
//                         <input type="number" value="01" placeholder="01"/>
//                     </div>
//                     <div class="product_price ">
//                         <h3>+$0</h3>
//                     </div>
//                    </div>
//                 </div>
//                 </div>
//             </div>
//             <div class="card">
//                 <div class="card-header" id="headingTwo">
//                 <h5 class="mb-0">
//                     <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
//                     Drinks*
//                     </button>
//                 </h5>
//                 </div>
//                 <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
//                 <div class="card-body">
//                 <div class="selection_div">
//                    <div class="order_cancel">
//                    <button><i class="fa fa-times" aria-hidden="true"></i></button>
//                    </div>
//                     <div class="order_img">
//                         <img src={bun_img} class="img-fluid" alt=""/>
//                     </div>
//                     <div class="order_name">
//                        <div class="titleBox">
//                         <h3>Classic burger</h3>
//                        </div>
//                     </div>
//                     <div class="p_quantity">
//                         <input type="number" value="01" placeholder="01"/>
//                     </div>
//                     <div class="product_price ">
//                         <h3>+$0</h3>
//                     </div>
//                    </div>

//             </div>
//                 </div>
//             </div>
           
//             </div>
//             </div>
//             <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

// <div class="store_detail">
// <div class="titleBox">
//                         <h3>Store Details*</h3>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero beatae architecto sequi? Placeat corporis iste hic officiis magni id atque 
//                             ipsam sed dolorum. Id, itaque. Deserunt tempora ab quia nostrum.</p>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero beatae architecto sequi? Placeat corporis iste hic officiis magni id atque 
//                             ipsam sed dolorum. Id, itaque. Deserunt tempora ab quia nostrum.</p>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero beatae architecto sequi? Placeat corporis iste hic officiis magni id atque 
//                             ipsam sed dolorum. Id, itaque. Deserunt tempora ab quia nostrum.</p>
//                     </div>
// </div>

//             </div>
//             <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
//             <div class="store_detail reviews_tabb">

//                         <div class="client_info">
//                             <div class="img_div">
//                                 <img src={user} class="img-fluid" alt=""/>
//                             </div>
//                             <div class="client_name">
//                             <div class="title">
//                                 <h3>Client Name</h3>
//                             </div>
//                             <p>Company Name</p>
//                             </div>
//                         </div>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero beatae architecto sequi? Placeat corporis iste hic officiis magni id atque 
//                             ipsam sed dolorum. Id, itaque. Deserunt tempora ab quia nostrum.</p>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero beatae architecto sequi? Placeat corporis iste hic officiis magni id atque 
//                             ipsam sed dolorum. Id, itaque. Deserunt tempora ab quia nostrum.</p>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero beatae architecto sequi? Placeat corporis iste hic officiis magni id atque 
//                             ipsam sed dolorum. Id, itaque. Deserunt tempora ab quia nostrum.</p>
                    
// </div>
//             </div>
//             </div>
//             </div>
//         </div>
//     </div>
// </section>

// <section class="store_extra_info">
//     <div class="container">
//         <div class="row">
//             <div class="col-md-12">
//               <div class="quntity_instructions d-flex align-items-center justify-content-between">
//               <div class="titleBox">
//                     <h3>Quantity <br/> Special Instructions?</h3>
//                 </div>
//                 <div class="p_quantity">
//                         <input type="number" value="01" placeholder="01"/>
//                     </div>
//               </div>
//               <div class="text_area">
//                 <textarea name="" id="" cols="30" rows="8" class="form-control">Add instructions...</textarea>
//               </div>
//               <div class="quntity_instructions d-flex align-items-center justify-content-between">
//               <div class="titleBox">
//                     <h3>Total Price</h3>
//                 </div>
//                 <div class="p_quantity">
//                        <h3>$99.00</h3>
//                     </div>
//               </div>
//               <div class="actionCart">
//                                 <button type="button" class="btn couponButton">Add To Cart</button>
//                             </div>
//             </div>
//         </div>
//     </div>
// </section>

// <section class="recomendation_section">
//     <div class="container">
//         <div class="row">
//             <div class="col-md-12">
//                 <div class="titleBox mb-3">
//                 <h2>Recomendations</h2>
//                 </div>
//             </div>
//             <div class="col-md-4 mb-3">
//                 <div class="categoryCard shadow">
//                     <div class="cardHeader">
//                         <div class="topMeta">
//                             <div class="tags">
//                                 <span>15%off</span>
//                             </div>
//                             <div class="tags wishList">
//                                 <button class="button"><i class="fa fa-heart"></i></button>
//                             </div>
//                         </div>
//                         <div class="cardImage">
//                             <img src={c1} alt="Category Image" class="mw-100"/>
//                         </div>

//                         <div class="topMeta">
//                             <div class="companyLogo tags">
//                                 <button class="button"><img src={mac} alt="MAc"/></button>
//                             </div>
//                         </div>

//                     </div>
//                     <div class="cardBody">
//                         <div class="body-upper">
//                             <div class="ratingBox">
//                                 <p class="mb-0">Reviews 3.5k</p>
//                                 <p class="mb-0">
//                                     <i class="fa fa-star"></i>
//                                     <i class="fa fa-star"></i>
//                                     <i class="fa fa-star"></i>
//                                     <i class="fa fa-star"></i>
//                                     <i class="fa fa-star"></i>
//                                 </p>
//                             </div>
//                             <div class="deliveryInfo">
//                                 <div class="meter">
//                                     <p class="mb-0"> 30-40 mins</p>
//                                     <p class="mb-0 text-success">$0 Delivery</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="cardContent">
//                             <h3>The Classic</h3>
//                             <p>Fire Roasted pepper s, spanach</p>
//                             <h5 class="text-theme-primary font-weight-bold">$99.00</h5>
//                         </div>
//                     </div>
//                     <div class="cardFooter">
//                         <div class="cardAction">
//                             <div class="counterAction">
//                                 <span class="qunatingCount">01</span>
//                                 <button class="minus" type="button"><i class="fa fa-minus"></i></button>
//                                 |
//                                 <button class="plus" type="button"><i class="fa fa-plus"></i></button>
//                             </div>
//                             <div class="addToCart">
//                                 <button type="button">Add To Cart</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div class="col mb-3">
//                 <div class="categoryCard shadow">
//                     <div class="cardHeader">
//                         <div class="topMeta">
//                             <div class="tags">
//                                 <span>15%off</span>
//                             </div>
//                             <div class="tags wishList">
//                                 <button class="button"><i class="fa fa-heart"></i></button>
//                             </div>
//                         </div>
//                         <div class="cardImage">
//                             <img src={c1} alt="Category Image" class="mw-100"/>
//                         </div>

//                         <div class="topMeta">
//                             <div class="companyLogo tags">
//                                 <button class="button"><img src={mac} alt="MAc"/></button>
//                             </div>
//                         </div>

//                     </div>
//                     <div class="cardBody">
//                         <div class="body-upper">
//                             <div class="ratingBox">
//                                 <p class="mb-0">Reviews 3.5k</p>
//                                 <p class="mb-0">
//                                     <i class="fa fa-star"></i>
//                                     <i class="fa fa-star"></i>
//                                     <i class="fa fa-star"></i>
//                                     <i class="fa fa-star"></i>
//                                     <i class="fa fa-star"></i>
//                                 </p>
//                             </div>
//                             <div class="deliveryInfo">
//                                 <div class="meter">
//                                     <p class="mb-0"> 30-40 mins</p>
//                                     <p class="mb-0 text-success">$0 Delivery</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="cardContent">
//                             <h3>The Classic</h3>
//                             <p>Fire Roasted pepper s, spanach</p>
//                             <h5 class="text-theme-primary font-weight-bold">$99.00</h5>
//                         </div>
//                     </div>
//                     <div class="cardFooter">
//                         <div class="cardAction">
//                             <div class="counterAction">
//                                 <span class="qunatingCount">01</span>
//                                 <button class="minus" type="button"><i class="fa fa-minus"></i></button>
//                                 |
//                                 <button class="plus" type="button"><i class="fa fa-plus"></i></button>
//                             </div>
//                             <div class="addToCart">
//                                 <button type="button">Add To Cart</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div class="col mb-3">
//                 <div class="categoryCard shadow">
//                     <div class="cardHeader">
//                         <div class="topMeta">
//                             <div class="tags">
//                                 <span>15%off</span>
//                             </div>
//                             <div class="tags wishList">
//                                 <button class="button"><i class="fa fa-heart"></i></button>
//                             </div>
//                         </div>
//                         <div class="cardImage">
//                             <img src={c1} alt="Category Image" class="mw-100"/>
//                         </div>

//                         <div class="topMeta">
//                             <div class="companyLogo tags">
//                                 <button class="button"><img src={mac} alt="MAc"/></button>
//                             </div>
//                         </div>

//                     </div>
//                     <div class="cardBody">
//                         <div class="body-upper">
//                             <div class="ratingBox">
//                                 <p class="mb-0">Reviews 3.5k</p>
//                                 <p class="mb-0">
//                                     <i class="fa fa-star"></i>
//                                     <i class="fa fa-star"></i>
//                                     <i class="fa fa-star"></i>
//                                     <i class="fa fa-star"></i>
//                                     <i class="fa fa-star"></i>
//                                 </p>
//                             </div>
//                             <div class="deliveryInfo">
//                                 <div class="meter">
//                                     <p class="mb-0"> 30-40 mins</p>
//                                     <p class="mb-0 text-success">$0 Delivery</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="cardContent">
//                             <h3>The Classic</h3>
//                             <p>Fire Roasted pepper s, spanach</p>
//                             <h5 class="text-theme-primary font-weight-bold">$99.00</h5>
//                         </div>
//                     </div>
//                     <div class="cardFooter">
//                         <div class="cardAction">
//                             <div class="counterAction">
//                                 <span class="qunatingCount">01</span>
//                                 <button class="minus" type="button"><i class="fa fa-minus"></i></button>
//                                 |
//                                 <button class="plus" type="button"><i class="fa fa-plus"></i></button>
//                             </div>
//                             <div class="addToCart">
//                                 <button type="button">Add To Cart</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     </div>
// </section>


// <section class="footer">
//     <div class="container">
//         <div class="row">
//             <div class="col-md-12">
//                 <ul class="lastLink">
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
//     </div>
//   );
// };

// export default Product_deatail;