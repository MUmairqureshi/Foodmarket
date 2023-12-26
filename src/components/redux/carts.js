// Cart.js

import menuOrder from '../../assets/images/menuOrder.png'
import cashBack from '../../assets/images/cashBack.png'
import recycle from '../../assets/images/recycle.png'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from './actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
import { Link } from 'react-router-dom';

export const Cart = () => {

    const dispatch = useDispatch();
    
    const handleDelete = (itemId) => {
        dispatch(removeFromCart(itemId));
    
        // Show toast for successful deletion
        toast.success('Item removed from the cart.', {
          position: toast.POSITION.TOP_RIGHT,
        });
      };
    
    const cartItems = useSelector((state) => state.cart.items);
    const ImageUrl = "https://custom2.mystagingserver.site/food-stadium/public/"



    //   const totalCartPrice = cartItems?.reduce((total, product) => {
    //     const productPrice = product.product_price || 0;
    //     const productQuantity = product.quantity || 1; // Assuming a default quantity of 1

    //     // Ensure that variation is an array before attempting to reduce


    //     return total + productPrice * productQuantity + 10 ;
    //   }, 0);



    // const totalCartPrice = cartItems?.reduce((total, product) => {
    //     const productPrice = product.product_price || 0;
    //     const productQuantity = product.quantity || 1; // Assuming a default quantity of 1

    //     // Ensure that variation is an array before attempting to reduce
    //     const variationTotal = Array.isArray(product.variation)
    //         ? product.variation.reduce(
    //             (variationSum, variation) => variationSum + (variation.price || 0) * (variation.quantity || 1),
    //             0
    //         )
    //         : 0;

    //     return total + productPrice * productQuantity + variationTotal + 10 ;
    // }, 0);



    const totalCartPrice = cartItems?.reduce((total, product) => {
        const productPrice = product.product_price || 0;
        const productQuantity = product.quantity || 1; // Assuming a default quantity of 1

        // Ensure that variation is an array before attempting to reduce
        const variationTotal = Array.isArray(product.variation)
            ? product.variation.reduce(
                (variationSum, variation) => variationSum + (variation.price || 0) * (variation.quantity || 1),
                0
            )
            : 0;

        return total + productPrice * productQuantity + variationTotal;
    }, 0) + 10;

    return (
        // <div>
        //   <h2>Cart</h2>
        //   <ul>
        //     {cartItems.map((item) => (
        //       <li key={item.id}>
        //         {item.name} - ${item.price}
        //         <button onClick={() => dispatch(removeFromCart(item.id))}>
        //           Remove from Cart
        //         </button>
        //       </li>
        //     ))}
        //   </ul>
        // </div>



        // select different  product variation come in array to  onclick  create object and when add to card send into card page add variation



        <div className="col-md-3">
            <div className="homeCart bg-white shadow p-md-4 h-100">
                <div className="notificationIcons mb-3">
                    <button className="btn border-0 bg-transparent px-2" type="button">
                        <i className="fa fa-comments" aria-hidden="true"></i>
                    </button>
                    <button className="btn border-0 bg-transparent px-2" type="button">
                        <i className="fa fa-bell-o" aria-hidden="true"></i>
                    </button>
                    <button className="btn border-0 bg-transparent px-2" type="button">
                        <i className="fa fa-cogs" aria-hidden="true"></i>
                    </button>
                </div>
                <div className="titleBox">
                    <h3> Your Balance</h3>
                </div>
                <div className="creditBox mb-3">
                    <div className="balanceInfo flex-xl-nowrap flex-wrap">
                        <div className="remaining d-flex justify-content-center align-items-center">
                            <div className="remainContent py-2">
                                <p className="mb-0">Balance</p>
                                <h5 className="mb-0 font-weight-bold">$300</h5>
                            </div>
                        </div>
                        <div className="topUp">
                            <div className="firstModel">
                                <div className="iconBox">
                                    <img src={cashBack} className="mw-100" />
                                </div>
                                <p>Top Up</p>
                            </div>
                            <div className="firstModel">
                                <div className="iconBox">
                                    <img src={recycle} className="mw-100" />
                                </div>
                                <p>Transfer</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="addressBox mb-3">
                    <div className="addressTitle flex-xl-nowrap flex-wrap">
                        <div className="addrssName">
                            <p className="mb-0">Your Address</p>
                            <h5 className="font-weight-bold text-black"><i className="fa fa-map-marker"></i>Jordan James</h5>
                        </div>
                        <div className="actionChange">
                            <button type="button" className="btn primaryButton">Changes</button>
                        </div>
                    </div>
                    <div className="addressContent">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
                    </div>
                </div>
                <div className="orderMenu mb-3">
                    <div className="titleBox mb-3">
                        <h3> Order Menu</h3>
                    </div>
                    <div className="orderList">
                        {cartItems.map((item) => (
                            <div key={item.id} className="orderCard flex-xl-nowrap flex-wrap mb-3">
                                <div className="orderItem flex-xl-nowrap flex-wrap">
                                    <div className="orderThumnail">
                                        <img src={`${ImageUrl}${item?.feature_image}`} alt="Menu Image" className="mw-100" />
                                    </div>
                                    <div className="orderInfo">
                                        <p className="mb-0">{item?.title}</p>
                                        <p className="mb-0 text-secondary">{item?.quantity}</p>
                                    </div>
                                </div>
                                <div className="orderPrice">
                                    <p><span>+</span>${item?.product_price}</p>
                                </div>
                                <div className="deleteButton">
                                    <Link onClick={() => handleDelete(item.id)}><i class="fa-regular fa-trash-can"></i></Link>
                                </div>
                            </div>


                        ))}



                    </div>
                </div>
                <div className="serviceTax mb-3 border-top pt-3">
                    <div className="taxRate d-flex align-items-center justify-content-between">
                        <div className="serviceTitle">
                            <h5 className="mb-0 text-secondary">Service</h5>
                        </div>
                        <div className="taxPrice">
                            <p className="mb-0">$10</p>
                        </div>
                    </div>
                </div>
                <div className="priceBox mb-3">
                    <div className="taxRate d-flex align-items-center justify-content-between">
                        <div className="serviceTitle">
                            <h5 className="mb-0">Total</h5>
                        </div>
                        <div className="totalPrice">
                            <p className="mb-0">${totalCartPrice}</p>
                        </div>
                    </div>
                </div>
                <div className="actionButton mb-3">
                    <div className="haveACoupon mb-3">
                        <button type="button" className="primaryButton btn w-100 "> <span className="metaDollar">$</span>Have a Coupon code? <i className="fa fa-chevron-right"></i></button>
                    </div>
                    <div className="checkoutBtn">
                        <Link to="/cart" className="primaryButton btn w-100"> Checkout</Link>
                    </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

