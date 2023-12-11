import React from 'react' 
import product_extras1 from '../images/product_1.png'
import product1 from '../images/product_1.png'
 
import { useDispatch, useSelector } from 'react-redux';
export function Cart() {
    const cartItems = useSelector((state) => state.cart.items);
    console.log(cartItems)
return(
    <div>

  
<section className="product_detail">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
            <div className="product_detail_content">
            <table className="table ">
            <thead>
                <tr>
                <th scope="col">Products</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total</th>
               
                </tr>
            </thead>
            <tbody >
            {cartItems.data?.map(data =>(
                                <tr>
   <td>
                  <div className="product_discription ">
                    <div className="img_div mb-3">
                        <img src={data?.image} className="img-fluid" alt=""/>
                    </div>
                    <div className="product_detail">
                    <div className="titleBox text-left ">
                            <h3>The Classic</h3>
                        </div>
                        <p>Order are expected to ship <br/> within 7-10 days</p>
                        <div className="product_detail_extras">
                           <div className="first_extra d-flex align-items-center">
                           <div className="img_div">
                            <img src={product_extras1} className="img=-fluid" alt=""/>
                            </div>
                            <p>-Floor : <span> $100</span></p>
                           </div>
                           <div className="first_extra d-flex align-items-center">
                           <div className="img_div">
                            <img src="../images/pe-2.png" className="img=-fluid" alt=""/>
                            </div>
                            <p>-Tomato : <span> $100</span></p>
                           </div>
                        </div>
                    </div>
                  </div>
                </td>
                <td className="p_quantity align-middle" ><input type="number" placeholder="01" value="01"/></td>
                <td className="p_price align-middle"><p>$9.00</p></td>
                </tr>
            ))  }
               
                <tr>
                    <td>
                    <div className="actionChange">
                                <button type="button" className="btn primaryButton">Apply Coupon</button>
                            </div>
                    </td>
                    <td>
                   
                    </td>
                    <td>
                    <div className="actionChange">
                                <button type="button" className="btn primaryButton">Update Cart</button>
                            </div>
                    </td>
                </tr>
               
            </tbody>
            </table>
            </div>
            </div>
        </div>
    </div>
</section>

<section className="delivery_detail_section">
    <div className="container">
        <div className="row">
            <div className="col-md-12 mb-5">
         
                <div className="delivery_detail d-flex gap-10 flex-lg-nowrap flex-wrap justify-content-between">
               <div className="delivery_content">
               <div className="titleBox text-left ">
                    <h3>Delivery Zip*</h3>
                </div>
                <p>Hint: if this is a gift, enter your recipient’s ZIP!</p>
                <div className="delivery_info">
                    <input type="text" placeholder="484892" className="form-control"/>
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                </div>
               </div>
               <div className="delivery_content">
               <div className="titleBox text-left ">
                    <h3>Delivery Date*</h3>
                </div>
                <p>Choose an arrival date for order</p>
                <div className="delivery_info">
                    <input type="date" placeholder="20/10/23" className="form-control"/>
                    <i className="fa fa-calendar" aria-hidden="true"></i>
                </div>
               </div>
               <div className="delivery_content">
               <div className="titleBox text-left ">
                    <h3>Gift Message</h3>
                </div>
                <p>Choose an arrival date for order</p>
                <div className="delivery_info">
                    <input type="text" placeholder="Write Message" className="form-control"/>
                    <i className="fa fa-comments" aria-hidden="true"></i>
                </div>
               </div>
                </div>
            </div>
            <div className="col-md-4 mb-4">
                <div className="apply_coupon">
                <div className="titleBox text-left mb-3">
                    <h3>Apply Coupon</h3>
                </div>
                <div className="coupon_code">
                    <input type="text" placeholder="coupon Code" className="form-control"/>
                </div>
                <div className="actionApply">
                                <button type="button" className="btn couponButton">Apply Coupon</button>
                            </div>
                </div>
            </div>
            <div className="offset-md-1 col-md-7  ">
                <div className="apply_coupon total_cart">
                <div className="titleBox text-left mb-3">
                    <h3>Cart Total</h3>
                </div>
                <div className="cart_info">
                    <div>
                        <p>Sub Total:</p>
                        <p>$250.00</p>
                    </div>
                    <div>
                        <p>Shipping:</p>
                        <p>Free</p>
                    </div>
                    <div>
                        <p>Total:</p>
                        <p>$250.00</p>
                    </div>
                </div>
                <div className="actionApply">
                                <button type="button" className="btn couponButton">Proceesd To Checkout</button>
                            </div>
                </div>
            </div>
        </div>
    </div>
</section>
<section className="mt-5 mb-3">
    <div className="container">
        <div className="row">
        <div className="col-md-4">
                <div className="categoryCard shadow mb-4">
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
                            <img src="../images/c1.png" alt="Category Image" className="mw-100"/>
                        </div>

                        <div className="topMeta">
                            <div className="companyLogo tags">
                                <button className="button"><img src="../images/mac.png" alt="MAc"/></button>
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
                                |
                                <button className="plus" type="button"><i className="fa fa-plus"></i></button>
                            </div>
                            <div className="addToCart">
                                <button type="button">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div className="col-md-4">
                <div className="categoryCard shadow mb-4">
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
                            <img src="../images/c1.png" alt="Category Image" className="mw-100"/>
                        </div>

                        <div className="topMeta">
                            <div className="companyLogo tags">
                                <button className="button"><img src="../images/mac.png" alt="MAc"/></button>
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
                                |
                                <button className="plus" type="button"><i className="fa fa-plus"></i></button>
                            </div>
                            <div className="addToCart">
                                <button type="button">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div className="col-md-4">
                <div className="categoryCard shadow mb-4">
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
                            <img src="../images/c1.png" alt="Category Image" className="mw-100"/>
                        </div>

                        <div className="topMeta">
                            <div className="companyLogo tags">
                                <button className="button"><img src="../images/mac.png" alt="MAc"/></button>
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
                                |
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
)}