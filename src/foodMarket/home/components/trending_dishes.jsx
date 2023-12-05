 
import React from "react";

import  { useRef } from "react";
 
import Slider from 'react-slick';  
import {  Card } from 'react-bootstrap';
import mac from '../../images/mac.png'  
import {  Trending_product } from '../../../components/services/catigories'
import { useState, useEffect } from 'react'
export function Trending_dishes(){

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
          breakpoint: 1024, // Medium devices (tablets, 768px and up)
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            rows: 2,
          },
        },
        {
          breakpoint: 768, // Small devices (landscape phones, 576px and up)
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 1,
          },
        },
        {
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
    
    const [trending_product, setTrending_product] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await Trending_product();
                setTrending_product(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


 
    // TRENDING DISHES
    return(
    <div>
 <section className="trendingDishes">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <div className="titleBox text-center">
                                <h1 className="font-weight-bold">SHOP OUR TRENDING DISHES</h1>
                            </div>
                        </div>
                    </div>
                    <div id="homeTrendingDishes" className="carousel slide" data-ride="carousel">
                      
                        <div className="carousel-inner">
                            <div className="d-flex justify-content-end carouselArrows trendingDishesArrows">
                                <a className="carousel-control-prevs" href="#homeTrendingDishes" onClick={next} role="button" data-slide="prev">
                                    <i className="fa fa-chevron-left" aria-hidden="true"></i>
                                </a>
                                <a className="carousel-control-nexts" href="#homeTrendingDishes" onClick={previous} role="button" data-slide="next">
                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>

                                </a>
                            </div>
                            <div className=" ">
                            <Slider  ref={sliderRef} {...settings}>
                                 
                                  {trending_product.data?.map(data =>(
                                        <div className="row"> 
                                        <Card style={{ width: '22em' }}>
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
                                                    <img src={ImageUrl + data?.feature_image} alt="Category Imagesss" className="mw-100" />
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
                                                    <h3>{data.title}</h3>
                                                    <p>{data.description}</p>
                                                    <h5 className="text-theme-primary font-weight-bold">${data.product_price}</h5>
                                                </div>
                                            </div>
                                            <div className="cardFooter">
                                                <div className="cardAction">
                                                    <div className="counterAction">
                                                        <span className="qunatingCount">09</span>
                                                        <button className="minus" type="button"><i className="fa fa-minus"></i></button>

                                                        <button className="plus" type="button"><i className="fa fa-plus"></i></button>
                                                    </div>
                                                    <div className="addToCart">
                                                        <button type="button">Add To Cart</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </Card>
                                </div>  ))}
                                
                                
                                 </Slider>
                                   
                                   
                                   
                                </div>

                            </div>
                           
                          
                       
                         
                         
                           



                    </div>
                </div>
            </section>
    </div>
    
        )}