import { useState, useEffect } from 'react'
 
import mac from '../../../assets/images/mac.png'
import cupcake from '../../../assets/images/cupcake.png'
 
import Card from 'react-bootstrap/Card'; 
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, addToCart, incrementQuantity, decrementQuantity } from '../../../components/redux/actions';
import {Cart} from '../../../components/redux/carts'
import { Increment, Decrement, Remove } from '../../../redux/hook'
import { Product_deatail } from '../../productDetail/product_detail'
import { Nav } from 'react-bootstrap';

import React from 'react';
import Slider from "react-slick";
import { useRef } from "react";
 

import burger from '../../../assets/images/burger.png'
import { Menu_listing, Dietary_listing, Get_all_product, Get_all_product_detail   , filterProduct} from '../../../components/services/catigories'
// import { useContext } from "react";
export function Category() {
//     const cartItems = useSelector((state) => state.cart.items);
// console.log("cartItemscatigory" ,cartItems )
    
// Filter_product

    const [showModal, setShowModal] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(null);
    const [productDetails, setProductDetails] = useState(null);

      
 
    const dispatch = useDispatch();
const products = useSelector((state) => state.products.products);
    const loading = useSelector((state) => state.products.loading);

    


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
    // console.log(productDetails?.data)













    const  [product_filter , setproduct_filter] = useState([])
    
        //   useEffect(() => {
            
        //     filterProduct
        //     // fetchData();
        // }, []);

        // console.log(product_filter)

    const sliderRefs = useRef(null);

    const nextcat = () => {
        sliderRefs.current.slickNext();
    };

    const previouscat = () => {
        sliderRefs.current.slickPrev();
    };


    const sliderRef = useRef(null);

    const next = () => {
        sliderRef.current.slickNext();
    };

    const previous = () => {
        sliderRef.current.slickPrev();
    };

    const settingscat = {

        infinite: true, // Enable infinite loop
        speed: 500,
        slidesToShow: 6, // Number of items to show in a row
        slidesToScroll: 1,
        responsive: [
            {
                infinite: true,
                breakpoint: 1024, // Medium devices (tablets, 768px and up)
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  
                },
            },
            {
                infinite: true,
                breakpoint: 768, // Small devices (landscape phones, 576px and up)
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 1,
                },
            },
            {
                infinite: true,
                breakpoint: 576, // Extra small devices (portrait phones, 576px and down)
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    rows: 1,
                },
            },
        ],
    };

 
    const ImageUrl = "https://custom2.mystagingserver.site/food-stadium/public/"
    const [mainmenu, setMainmenu] = useState([]);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await Menu_listing();
                setMainmenu(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);



    const [all_product, setAll_product] = useState([]);
    // console.log("allproduct" , all_product)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await Get_all_product();
                setAll_product(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    useEffect(() => {
        dispatch(fetchProducts());
      }, [dispatch]);


    const [dietary_listing, setDietary_listing] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await Dietary_listing();
                setDietary_listing(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);




console.log("all_productqty" , all_product)
     

    
    const settings = {

        infinite: true,
        speed: 500,
        // slidesToShow: all_product.length > 6 ? 6 : all_product.length, // Set slidesToShow based on the number of items

        slidesToShow: 3,
        slidesToScroll: 1,
        rows: 2,
        responsive: [
            {
                infinite: true,
                breakpoint: 1024, // Medium devices (tablets, 768px and up)
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    rows: 2,
                },
            },
            {
                infinite: true,
                breakpoint: 768, // Small devices (landscape phones, 576px and up)
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 1,
                },
            },
            {
                infinite: true,
                breakpoint: 576, // Extra small devices (portrait phones, 576px and down)
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 1,
                },
            },
        ],
    };


    return (


        <section className="homeCategory">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-xl-2">
                        <div className="categoryFilter bg-white shadow p-md-3 h-100">
                            <div className="menuList">
                                <div className="titleBox text-center mb-3">
                                    <h3>Menu</h3>
                                </div>
                                <div className="featuredBtn mb-3">
                                    <button type="button" className="primaryButton btn w-100">Featured Items</button>
                                </div>
                                <div className="categoryData">
                                    {mainmenu.data?.map(data => (<ul>
                                        <li key={data.id} className="nav-link px-md-0"><a className="catLink text-dark" href="#"><i className="fa fa-home" aria-hidden="true"></i> {data.name}</a></li>
                                    </ul>))}
                                </div>
                            </div>

                            <div className="priceRange mb-4">
                                <div className="titleBox text-center mb-3">
                                    <h3>Price Range</h3>
                                </div>
                                <div className="priceField">
                                    <div className="form-row align-items-center">
                                        <div className="col">
                                            <input type="number" className="form-control" placeholder="$ Min" value={minPrice}
                                                onChange={(e) => setMinPrice(e.target.value)} />
                                        </div>

                                        <div className="col">
                                            <input className="form-control" placeholder="$ Max" type="number"
                                                value={maxPrice}
                                                onChange={(e) => setMaxPrice(e.target.value)} />
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="Dietary mb-3">
                                <div className="titleBox text-center mb-3">
                                    <h3>Dietary</h3>
                                </div>
                                {dietary_listing.data?.map(data => (
                                    <div className="featuredBtn mb-3">
                                        <button type="button" className="primaryButton btn w-100">{data.name}</button>
                                    </div>

                                ))}

                            </div>

                            <div className="stores">
                                <div className="titleBox text-center mb-3">
                                    <h3>All Stores</h3>
                                    <p>Sort</p>
                                </div>
                                <div className="form-check">
                                    <label for="picked">
                                        <input className="form-check-input position-static" type="radio" name="stores" id="picked" value="popular" aria-label="..." /> Picked for you (Default)
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label for="popular">
                                        <input className="form-check-input position-static" type="radio" name="stores" id="popular" value="popular" aria-label="..." /> Most Popular
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label for="rating">
                                        <input className="form-check-input position-static" type="radio" name="stores" id="rating" value="rating" aria-label="..." /> Rating
                                    </label>
                                </div>
                                <div className="form-check">
                                    <label for="delivery">
                                        <input className="form-check-input position-static" type="radio" name="stores" id="delivery" value="delivery" aria-label="..." /> Delivery</label>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-7">
                        <div className="categoryListing py-3 h-100">
                            <div className="categoryHomeHead mb-3">
                                <div className="categoryHeader d-flex justify-content-between align-items-center flex-wrap">
                                    <div className="titleBox">
                                        <h3>Category</h3>
                                    </div>
                                    <div className="vewAll">
                                        <p><a href="#">View All</a></p>
                                    </div>
                                </div>
                                <div className="categorySlides">
                                    <div className="mainC at">
                                        {/* <div className="featuredCat flex-shrink-0">
                                            <div className="categoryBox">
                                                <img src={cupcake} alt="" />
                                                <p className="mb-0">National Picks</p>
                                            </div>
                                        </div> */}
                                        <div id="homeCategoryCarousel" className="carousel slide" data-ride="carousel">

                                            <div className="carousel-inner">





                                                <div className="carousel-item active">

                                                    <Slider ref={sliderRefs} {...settingscat}>
                                                        <div className="featuredCat flex-shrink-0" id='fixed-item'>
                                                            <div className="categoryBox">
                                                                <img src={cupcake} alt="" />
                                                                <p className="mb-0">National Picks</p>
                                                            </div>
                                                        </div>


                                                        {all_product.data?.map(data => (
                                                            <div className="categorySlider ">

                                                                <div className="categoryBox bg-white shadow" id='categoriesSlider'>
                                                                    <div className='text-center'>
                                                                        <img src={burger} alt="" />
                                                                    </div>
                                                                    <p className="mb-0">Hamburgers </p>
                                                                </div>
                                                            </div>
                                                            ))}
                                                    </Slider>
                                                </div>












                                                {/* <div className="carousel-item">
                                                    <div className="categorySlider">
                                                        <div className="categoryBox bg-white shadow">
                                                            <img src={burger} alt="" />
                                                            <p className="mb-0">Hamburgers</p>
                                                        </div>
                                                        <div className="categoryBox bg-white shadow">
                                                            <img src={noodles} alt="" />
                                                            <p className="mb-0">Asian</p>
                                                        </div>

                                                    </div>
                                                </div> */}
                                            </div>
                                            <div className="d-flex justify-content-end carouselArrows CategoryArrows">
                                                <a className="carousel-control-prevs" href="#homeCategoryCarousel " onClick={previouscat} role="button" data-slide="prev">
                                                    <i className="fa fa-chevron-left" aria-hidden="true"></i>
                                                </a>
                                                <a className="carousel-control-nexts" href="#homeCategoryCarousel" onClick={nextcat} role="button" data-slide="next">
                                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>

                                                </a>
                                            </div>

                                        </div>


                                    </div>
                                </div>
                            </div>
                            <div className="catFilter d-flex align-items-center flex-wrap mb-3">
                                <div className="dineIN mb-2">
                                    <button type="button" className="primaryButton btn w-100"> <span className="metaDollar">Delivery</span>Pickup <span>Dine-in</span></button>
                                </div>
                                <div className="dineIN mb-2 genralBtn">
                                    <button type="button" className="primaryButton btn w-100 bg-white"> Group Order</button>
                                </div>
                                <div className="dineIN mb-2 genralBtn">
                                    <button type="button" className="primaryButton btn w-100 bg-white"> Catering</button>
                                </div>
                                <div className="dineIN mb-2 genralBtn">
                                    <button type="button" className="primaryButton btn w-100 bg-white"> Schedule</button>
                                </div>
                                <div className="dineIN mb-2 genralBtn">
                                    <button type="button" className="primaryButton btn w-100 bg-white"> Manhattan west . Now</button>
                                </div>
                                <div className="dineIN mb-2 genralBtn">
                                    <button type="button" className="primaryButton btn w-100 bg-white">Food, groceries,etc</button>
                                </div>

                            </div>
                            <div className="popularCategories">
                                <div className="categoryHeader d-flex justify-content-between align-items-center flex-wrap">
                                    <div className="titleBox">
                                        {/* <h3>Most Popular <i className="fa fa-chevron-circle-right text-theme-primary"></i></h3> */}
                                    </div>
                                </div>

                                <div id="homeMostPopularCarousel" className="carousel slide" data-ride="carousel">
                                    <div className="d-flex justify-content-end carouselArrows mostPopular">
                                        <a className="carousel-control-prevs" onClick={previous} href="#homeMostPopularCarousel" role="button" data-slide="prev">
                                            <i className="fa fa-chevron-left" aria-hidden="true"></i>
                                        </a>
                                        <a className="carousel-control-nexts" onClick={next} href="#homeMostPopularCarousel" role="button" data-slide="next">
                                            <i className="fa fa-chevron-right" aria-hidden="true"  ></i>

                                        </a>



                                    </div>
                                    <div className="carousel-inner">

                                        <div className="carousel-item active">
                                            <Slider ref={sliderRef} {...settings}>


                                                {products?.map(data => (
                                                    <div className="row">
                                                        <Card className="mb-3" style={{ width: '16rem' }}>
                                                            <Nav.Link className="no-link-decoration" id='nav-link' style={{ textDecorationStyle: 'none' }} onClick={() => handleProductClick(data?.id)}>
                                                                <div className="cardHeader">
                                                                    <div className="topMeta">
                                                                        <div className="tags">
                                                                            <span>19%off</span>
                                                                        </div>
                                                                        <div className="tags wishList">
                                                                            <button className="button"><i className="fa fa-heart"></i></button>
                                                                        </div>
                                                                    </div>
                                                                    <div className="cardImage">
                                                                        <img src={ImageUrl + data?.feature_image} alt="Category Image" className="mw-100" />
                                                                    </div>

                                                                    <div className="topMeta">
                                                                        <div className="companyLogo tags">
                                                                            <button className="button"><img src={mac} alt="MAc" /></button>
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
                                                                    <div className="cardContent" style={{ textAlign: 'left' }}>
                                                                        <h3>{data.title.slice(0, 10)}</h3>
                                                                        <p>{data.description.slice(0, 20)}</p>
                                                                        <h5 className="text-theme-primary font-weight-bold">${data.product_price}</h5>
                                                                    </div>
                                                                </div>
                                                                </Nav.Link>
                                                                <div className="cardFooter">
                                                                    <div className="cardAction">
                                                                        <div className="counterAction">
                                                                            <span className="qunatingCount">  {data.quantity}</span>
                                                                            <button className="minus" type="button"  onClick={() => dispatch(decrementQuantity(data.id))} ><i className="fa fa-minus"></i></button>

                                                                            <button className="plus"  onClick={() => dispatch(incrementQuantity(data.id))} type="button"><i className="fa fa-plus"></i></button>
                                                                        </div>
                                                                        <div className="addToCart">

                                                                            <button type="button" onClick={() => dispatch(addToCart(data))} >  Add To Cart</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                       
                                                        </Card>
                                                    </div>


                                                ))}        </Slider>



                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>

                    <Product_deatail productDetails={productDetails} show={showModal}
                        onHide={() => setShowModal(false)}
                    />
                    <Cart/>
                    {/* <div className="col-md-3">
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
                                    <div className="orderCard flex-xl-nowrap flex-wrap mb-3">
                                        <div className="orderItem flex-xl-nowrap flex-wrap">
                                            <div className="orderThumnail">
                                                <img src={menuOrder} alt="Menu Image" className="mw-100" />
                                            </div>
                                            <div className="orderInfo">
                                                <p className="mb-0">Pepperoni</p>
                                                <p className="mb-0 text-secondary">X1</p>
                                            </div>
                                        </div>
                                        <div className="orderPrice">
                                            <p><span>+</span>$350</p>
                                        </div>
                                    </div>
                                  
                              
                                   
                                    
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
                                        <p className="mb-0">$810</p>
                                    </div>
                                </div>
                            </div>
                            <div className="actionButton mb-3">
                                <div className="haveACoupon mb-3">
                                    <button type="button" className="primaryButton btn w-100 "> <span className="metaDollar">$</span>Have a Coupon code? <i className="fa fa-chevron-right"></i></button>
                                </div>
                                <div className="checkoutBtn">
                                    <button type="button" className="primaryButton btn w-100"> Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>

    )
}