 
import React from "react";
import {  Card } from 'react-bootstrap';

import { useRef } from "react";
import Slider from 'react-slick';  
import mac from '../../../assets/images/mac.png' 
import c1 from '../../../assets/images/c1.png'
import {  Get_all_product } from '../../../components/services/catigories'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, addToCart, incrementQuantity, decrementQuantity } from '../../../components/redux/actions';
export function Beverages(){

     

    const dispatch = useDispatch();
    const products = useSelector((state) => state.products?.products);
        const loading = useSelector((state) => state.products.loading);
        

        useEffect(() => {
            dispatch(fetchProducts());
          }, [dispatch]);
    

    const sliderRef = useRef(null);

    const next = () => {
        sliderRef.current.slickNext();
    };

    const previous = () => {
        sliderRef.current.slickPrev();
    };

    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
              infinite: true,
            breakpoint: 1024, // Medium devices (tablets, 768px and up)
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              rows: 2,
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
              slidesToShow: 1,
              slidesToScroll: 1,
              rows: 1,
            },
          },
        ],
      };
       
  

    const ImageUrl = "https://custom2.mystagingserver.site/food-stadium/public/"
    const [all_product, setAll_product] = useState([]);
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




    


    const [data, setData] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Get_all_product();
                const data = response.data;
                const updatedData = data.map(product => ({ ...product, quantity: product.quantity }));

                setData(updatedData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    console.log("productdata", data);

    const handleIncreaseQuantity = async (productId) => {
        try {
            const updatedData = data.map(product => {
                if (product.id === productId) {
                    const updatedQuantity = product.quantity + 1;

                    return { ...product, quantity: updatedQuantity };
                }
                return product;
            });

            setData(updatedData);
        } catch (error) {
            console.error('Error updating quantity:', error);
        }
    };

    const handleDecreaseQuantity = async (productId) => {
        try {
            const updatedData = data.map(product => {
                if (product.id === productId && product.quantity > 0) {
                    const updatedQuantity = product.quantity - 1;

                    return { ...product, quantity: updatedQuantity };
                }
                return product;
            });

            setData(updatedData);
        } catch (error) {
            console.error('Error updating quantity:', error);
        }
    };
    return(
    
    <div>
            <section className="beverages">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <div className="titleBox d-flex align-items-center">
                                <h1 className="font-weight-bold">Beverages</h1>
                                <div className="grid pl-2">
                                    <button type="button"><i className="fa fa-server" aria-hidden="true"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="d-flex justify-content-end">
                                <div className="catFilter d-flex align-items-center flex-wrap mb-3">
                                    <div className="dineIN mb-2 genralBtn">
                                        <button type="button" className="primaryButton btn w-100 bg-white"> Most Popular</button>
                                    </div>
                                    <div className="dineIN mb-2 genralBtn">
                                        <button type="button" className="primaryButton btn w-100 bg-white"> 0$ Delivery</button>
                                    </div>
                                    <div className="dineIN mb-2 genralBtn">
                                        <button type="button" className="primaryButton btn w-100 bg-white"> Top Rated</button>
                                    </div>
                                    <div className="dineIN mb-2 genralBtn">
                                        <div className="form-group mb-0">
                                            <i className="fa fa-search"></i>
                                            <input type="text" placeholder="Search Favorite Food..." className="form-control" />
                                        </div>
                                    </div>
                                    <div className="dineIN mb-2 genralBtn filterBtn">
                                        <button type="button" className="primaryButton btn w-100 bg-white"> <img src="../images/filter.png" alt="" />Filter</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="homeBeveragesCarousel" className="carousel slide" data-ride="carousel">
                        
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <Slider ref={sliderRef} {...settings}>
                             
                                  {data?.map(data =>(
                                           <div className="row">
                                      <div key={data.id} className="col-md-3 mb-3">
                                        <Card style={{ width: '22em' }} className="categoryCard shadow">
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
                                                <div className="cardContent">
                                                <div className="cardContent" style={{ textAlign: 'left' }}>
    <h3>{data.title.slice(0, 15)}</h3>
    <p>{data.description.slice(0, 40)}</p>
    <h5 className="text-theme-primary font-weight-bold">${data.product_price}</h5>
</div>
                                                </div>

                                                
                                            </div>
                                            <div className="cardFooter">
                                                <div className="cardAction">
                                                    <div className="counterAction">
                                                        <span className="qunatingCount">{data.quantity}</span>
                                                        <button className="minus" onClick={() => handleDecreaseQuantity(data.id)} type="button"><i className="fa fa-minus"></i></button>

                                                        <button className="plus" onClick={() => handleIncreaseQuantity(data.id)} type="button"><i className="fa fa-plus"></i></button>
                                                    </div>
                                                    <div className="addToCart">
                                                        <button  onClick={() => dispatch(addToCart(data))}  type="button">Add To Cart</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                    </div>
                                    </div>
                                  ))}
                                   
                               
                                </Slider>
                            </div>
                        </div>

                        <div className="d-flex justify-content-center carouselArrows bevrage">
                            <a className="carousel-control-prevs"  onClick={previous} href="#homeBeveragesCarousel" role="button" data-slide="prev">
                                <i className="fa fa-chevron-left" aria-hidden="true"></i>
                            </a>
                            <a className="carousel-control-nexts" onClick={next}  href="#homeBeveragesCarousel" role="button" data-slide="next">
                                <i className="fa fa-chevron-right" aria-hidden="true"></i>

                            </a>
                        </div>

                    </div>


                </div>
            </section>

    </div>
    
        )}
