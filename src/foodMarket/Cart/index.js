
import { Nav } from 'react-bootstrap';
import { Product_deatail } from '../productDetail/product_detail'

// import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';

import React, { useState } from 'react'
import { useEffect } from 'react'
import mac from '../../assets/images/mac.png'
import c1 from '../../assets/images/c1.png'
import { Get_all_product_detail, Order_Placed } from '../../components/services/catigories'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, addToCart, incrementvariationQuantity, removeFromCart, updateCartItem } from '../../components/redux/actions';
import { json } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export function Cart() {











    const [name, setName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cvc, setCVC] = useState('');
    const [expiration, setExpiration] = useState('');
  
    const handleNameChange = (e) => setName(e.target.value);
    const handleCardNumberChange = (e) => setCardNumber(e.target.value);
    const handleCVCChange = (e) => setCVC(e.target.value);
    const handleExpirationChange = (e) => setExpiration(e.target.value);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add your payment processing logic here
    };

    const [errorMessage, setErrorMessage] = useState(null);

    const [zipcode, setZipcode] = useState()

    const [coupon, setCoupon] = useState()
    const [message, setMessage] = useState('')
    const [date, setDate] = useState('')

    const [qty, setQty] = useState(1)
    const [productQuantities, setProductQuantities] = useState({});
    const cartItems = useSelector((state) => state.cart.items);
    console.log("cartItems", cartItems)
    console.log("cartItems", cartItems)
    const dispatch = useDispatch()



    const calculateTotalPrice = (product) => {
        const quantity = product.quantity || 0;

        if (product.variation && Array.isArray(product.variation)) {
            const variationPrices = product?.variation?.reduce((total, item) => {

                const variationPrice = item.price || 0;
                return total + variationPrice;
            }, 0);

            return (product.product_price + variationPrices) * quantity;
        }
        return product.product_price * quantity;
    };


    const ImageUrl = "https://custom2.mystagingserver.site/food-stadium/public/"


    const totalCartPrice = cartItems?.reduce((total, product) => {
        const productPrice = product.product_price || 0;
        const productQuantity = product.quantity || 1; // Assuming a default quantity of 1

        const variationTotal = Array.isArray(product.variation)
            ? product.variation.reduce(
                (variationSum, variation) => variationSum + (variation.price || 0) * (variation.quantity || 1),
                0
            )
            : 0;

        return total + productPrice * productQuantity + variationTotal;
    }, 0) ;



    const sunbtotalCartPrice = cartItems?.reduce((total, product) => {
        const productPrice = product.product_price || 0;
        const productQuantity = product.quantity || 1; // Assuming a default quantity of 1

        const variationTotal = Array.isArray(product.variation)
            ? product.variation.reduce(
                (variationSum, variation) => variationSum + (variation.price || 0) * (variation.quantity || 1),
                0
            )
            : 0;

        return total + productPrice * productQuantity + variationTotal;
    }, 0) + 10;

    const [showModal, setShowModal] = useState(false);

    const [productDetails, setProductDetails] = useState(null);


    const handleProductClick = async (productId) => {


        setShowModal(true);
        try {
            const response = await Get_all_product_detail(productId)


            setProductDetails(response);
            setShowModal(true);
        } catch (error) {
            console.error('Error fetching product details:', error);
        }
    };






    const calculateTotalquantity = (product) => {
        // setQty(product + 1)
        console.log("product qty", product)
        const quantity = product.quantity;

        const variationPrices = product.variation?.reduce((total, item) => total + item.quantity, 0) || 0;

        return quantity + variationPrices;
    };


    const handleChangeQuantity = (productid, newQuantity) => {
        console.log("newQuantity", newQuantity)
        dispatch(incrementvariationQuantity(productid, newQuantity));

        setProductQuantities((prevQuantities) => ({
            ...prevQuantities,
            [productid]: newQuantity,
        }));
    };







    const [applycoupon, setApplycoupon] = useState('');


    const handleCouponChange = (e) => {
        setCoupon(e.target.value);
    };

    const applyCoupon = () => {
        setApplycoupon(coupon)
        console.log(`Applying coupon: ${coupon}`);
    };
    console.log('applycoupon', applycoupon)

    const handleZipcodeChange = (e) => {
        setZipcode(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };





    const data = {
        date: date,
        user_address: "dwqed",
        sub_total: sunbtotalCartPrice,
        total: totalCartPrice,
        zipcode: zipcode,
        message: message,
        products: cartItems,
        discount: 32,
        coupon_code: applycoupon,
        user_address: "dedjedn",
        delivery_type: "ontime"
    };
    const placeOrder = async () => {
        try {
            const response = await Order_Placed(data);

            if (response && response.status === true) {
                // Handle the successful response here

                console.log('Success ', response.message);

                toast.success('Order placed successfully!', {
                    position: toast.POSITION.TOP_RIGHT,
                });


                setZipcode("");
                setMessage("");
                setDate("")
                // setApplyCoupon("");

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
                                        {cartItems?.map(data => (
                                            <tr>
                                                <td>
                                                    {/* variation */}
                                                    <Nav.Link className="no-link-decoration" id='nav-link' style={{ textDecorationStyle: 'none' }} onClick={() => handleProductClick(data?.id)}>
                                                    <div className="product_discription ">
                                                        <div className="img_div mb-3" style={{ display: 'flex', alignItems: 'center' }}>
                                                            <img src={ImageUrl + data?.feature_image} className="img-fluid" alt="" />
                                                        </div>
                                                        <div className="product_detail">
                                                            <div className="titleBox text-left ">
                                                                <h3>{data?.title}</h3>

                                                            </div>

                                                            <div className="product_detail_extras">

                                                                {data.variation?.map(item => (
                                                                    <div key={item.id}>

                                                                        <div key={item.id} className="first_extra d-flex align-items-center">
                                                                            <div className="img_div">
                                                                                <img src={ImageUrl + item?.image} className="img-fluid" alt="" />
                                                                            </div>
                                                                            <p>{item?.title} : <span> ${item.price}</span></p>
                                                                        </div>
                                                                        {/* ))} */}
                                                                    </div>
                                                                ))}


                                                                {/* {data.variation?.map(item => (

                                                                    <div className="first_extra d-flex align-items-center">
                                                                        <div className="img_div">
                                                                            <img src={ImageUrl + item?.image} className="img=-fluid" alt="" />
                                                                        </div>
                                                                        <p>{item?.title} : <span> ${item.price}</span></p>
                                                                    </div>))} */}

                                                            </div>
                                                        </div>
                                                    </div>
                                                    </Nav.Link>


                                                </td>
                                                <td className="p_quantity align-middle" >
                                                    <input
                                                        type="number"
                                                        id={`quantity-${data.id}`}
                                                        name={`quantity-${data.id}`}
                                                        value={productQuantities[data.id] || data.quantity}
                                                        onChange={(e) => handleChangeQuantity(data.id, parseInt(e.target.value, 10))}
                                                    />
                                                    {/* <input   type="number"
                                       
                                        onChange={(e) => productquantity(parseInt(e.target.value, 10))} value={data.quantity} /> */}
                                                </td>
                                                <td className="p_price align-middle">

                                                    <div className=' d-flex align-items-center justify-content-between'>

                                                        <p >${calculateTotalPrice(data) * qty} </p>
                                                        <div id="contained-modal-title-vcenter" className="d-flex contained-modal-title-vcenter align-items-center text-center ">
                                                            <button type="button" className="btn-close  text-center " aria-label="Close" onClick={() => dispatch(removeFromCart(data.id))}  >
                                                                X
                                                            </button>
                                                        </div>


                                                    </div>

                                                </td>

                                            </tr>
                                        ))}
                                        {/* 
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
                                        </tr> */}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Product_deatail productDetails={productDetails} show={showModal}
                onHide={() => setShowModal(false)}
            />

            <section className="delivery_detail_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-5">




                            {/* <div className="delivery_detail d-flex gap-10 flex-lg-nowrap flex-wrap justify-content- between">
                                <div className="delivery_content">
                                    <div className="titleBox text-left ">
                                        <h3>Delivery Zip*</h3>
                                    </div>
                                    <p>Hint: if this is a gift, enter your recipient’s ZIP!</p>
                                    <div className="delivery_info">
                                        <input
                                            type="text"
                                            placeholder="484892"
                                            className="form-control"
                                            value={zipcode}
                                            onChange={handleZipcodeChange}
                                        />
                                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                                    </div>
                                </div>
 
                                <div className="delivery_content">
                                    <div className="titleBox text-left ">
                                        <h3>Delivery Date*</h3>
                                    </div>
                                    <p>Choose an arrival date for order</p>
                                    <div className="delivery_info">
                                        <input
                                            type="date"
                                            placeholder="20/10/23"
                                            className="form-control"
                                            // onChange={(e) => setMessage(e.target.value)}
                                        />
                                        <i className="fa fa-calendar" aria-hidden="true"></i>
                                    </div>
                                </div>

                                <div className="delivery_content">
                                    <div className="titleBox text-left ">
                                        <h3>Gift Message</h3>
                                    </div>
                                    <p>Choose an arrival date for order</p>
                                    <div className="delivery_info">
                                        <input
                                            type="text"
                                            placeholder="Write Message"
                                            className="form-control"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                        />
                                        <i className="fa fa-comments" aria-hidden="true"></i>
                                    </div>
                                </div>

                            </div> */}






                            <div className="delivery_detail">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="delivery_content">
                                            <div className="titleBox text-left">
                                                <h3>Delivery Zip*</h3>
                                            </div>
                                            <p>Hint: if this is a gift, enter your recipient’s ZIP!</p>
                                            <div className="delivery_info">
                                                <input
                                                    type="text"
                                                    placeholder="484892"
                                                    className="form-control"
                                                    value={zipcode}
                                                    onChange={handleZipcodeChange}
                                                />
                                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="delivery_content">
                                            <div className="titleBox text-left">
                                                <h3>Delivery Date*</h3>
                                            </div>
                                            <p>Choose an arrival date for order</p>
                                            <div className="delivery_info">
                                                <input
                                                    type="date"
                                                    placeholder="20/10/23"
                                                    className="form-control"
                                                    value={date}
                                                    onChange={(e) => setDate(e.target.value)}
                                                />
                                                <i className="fa fa-calendar" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-md-12">
                                        <div className="delivery_content">
                                            <div className="titleBox text-left">
                                                <h3>Gift Message</h3>
                                            </div>
                                            {/* <p>Write a message for your gift</p> */}
                                            <div className="delivery_info">
                                                <textarea
                                                    rows="4"
                                                    placeholder="Write Message"
                                                    className="form-control"
                                                    value={message}
                                                    onChange={(e) => setMessage(e.target.value)}
                                                />
                                                {/* <i className="fa fa-comments" aria-hidden="true"></i> */}
                                            </div>
                                        </div>
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

                                    {/* <input type="text" placeholder="coupon Code" className="form-control" onChange={(e) => setCoupon(e.target.value)} /> */}
                                    <input
                                        type="text"
                                        placeholder="coupon Code"
                                        className="form-control"
                                        value={coupon}
                                        onChange={handleCouponChange}
                                    />
                                </div>
                                <div className="actionApply">
                                    <button type="button" className="btn couponButton" onClick={applyCoupon}>Apply Coupon</button>
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
                                        <p> ${totalCartPrice}</p>
                                    </div>
                                    <div>
                                        <p>Shipping:</p>
                                        <p>$10</p>
                                    </div>
                                    <div>
                                        <p>Total:</p>
                                        <p>${sunbtotalCartPrice}</p>
                                    </div>
                                </div>
                                {/* <form > */}
                                <div className="container-fluid">
      <div id="card-errors" role="alert"></div>
      <div className="card p-4 mt-4">
        <div className="card-body">
          <form id="payment-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name on Card</label>
              <input type="text" className="form-control" id="name" placeholder="John Doe" value={name} onChange={handleNameChange} />
            </div>
            <div className="form-group">
              <label htmlFor="card-number">Credit Card Number</label>
              <input type="text" className="form-control" id="card-number" placeholder="1234 5678 9012 3456" value={cardNumber} onChange={handleCardNumberChange} />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="card-cvc">CVC Number</label>
                <input type="text" className="form-control" id="card-cvc" placeholder="123" value={cvc} onChange={handleCVCChange} />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="card-exp">Expiration</label>
                <input type="text" className="form-control" id="card-exp" placeholder="MM/YYYY" value={expiration} onChange={handleExpirationChange} />
              </div>
            </div>
            <button type="submit" className="btn btn-primary mt-3">Submit Payment</button>
          </form>
        </div>
      </div>
    </div>
                                    {/* Show error message to your customers */}
                                {/* </form> */}
                                <div className="actionApply">
                                    <button type="button" className="btn couponButton" onClick={placeOrder}>Proceesd To Checkout</button>
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
            <ToastContainer />
        </div>
    )
}