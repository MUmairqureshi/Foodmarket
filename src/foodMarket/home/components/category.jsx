import { useState, useEffect } from 'react'

import { PopularCategories } from './popularCategories'

import { Menue } from './menue'

import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, addToCart, incrementQuantity, decrementQuantity } from '../../../components/redux/actions';
import { Cart } from '../../../components/redux/carts'
import { Increment, Decrement, Remove } from '../../../redux/hook'
import { Product_deatail } from '../../productDetail/product_detail'


import React from 'react';
import Slider from "react-slick";
import { useRef } from "react";

import { Catigory_view } from './catigory_view'

import { Get_all_product, Get_all_product_detail } from '../../../components/services/catigories'

export function Category() {


    const [showModal, setShowModal] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(null);
    const [productDetails, setProductDetails] = useState(null);



    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const loading = useSelector((state) => state.products.loading);



    // console.log(productDetails?.data)



    const [product_filter, setproduct_filter] = useState([])

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

    const ImageUrl = "https://custom2.mystagingserver.site/food-stadium/public/"




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




    console.log("all_productqty", all_product)



    return (


        <section className="homeCategory">
            <div className="container-fluid">
                <div className="row">
                    <Menue />

                    <div className="col-md-6 col-xl-7">
                        <div className="categoryListing py-3 h-100">
                            <Catigory_view />

                            <PopularCategories />
                            {/* <div className="popularCategories">
                                <div className="categoryHeader d-flex justify-content-between align-items-center flex-wrap">
                                    <div className="titleBox">
                                        <h3>Most Popular </h3>
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
                                                                        <button className="minus" type="button" onClick={() => dispatch(decrementQuantity(data.id))} ><i className="fa fa-minus"></i></button>

                                                                        <button className="plus" onClick={() => dispatch(incrementQuantity(data.id))} type="button"><i className="fa fa-plus"></i></button>
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

                            </div> */}
                        </div>
                    </div>

                    {/* <Product_deatail productDetails={productDetails} show={showModal}
                        onHide={() => setShowModal(false)}
                    /> */}
                    <Cart />

                </div>
            </div>
        </section>

    )
}