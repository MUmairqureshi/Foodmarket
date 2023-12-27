 
import React from "react";
import { Nav } from 'react-bootstrap';
import { Product_deatail } from '../../productDetail/product_detail'

import  { useRef } from "react";
 
import Slider from 'react-slick';  
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, addToCart, incrementQuantity, decrementQuantity } from '../../../components/redux/actions';
import {  Card } from 'react-bootstrap';
import mac from '../../../assets/images/mac.png'  
import {  Trending_product  , Get_all_product_detail} from '../../../components/services/catigories'

export function Trending_dishes(){
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products?.products);
        const loading = useSelector((state) => state.products.loading);
        const [productDetails, setProductDetails] = useState(null);
        const [showModal, setShowModal] = useState(false);


        const handleProductClick = async (productId) => {
            console.log(productId)
            // setSelectedProductId(productId);
            setShowModal(true);
            try {
                const response = await Get_all_product_detail(productId)
                console.log('abc', response)
                setProductDetails(response);
                setShowModal(true);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };
        // console.log(productDetails?.data)
    
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
     

    const [data , setData] = useState([])
 

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await Trending_product();
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
                                 
                                  {data?.map(data =>(
                                        <div className="row"> 
                                        <Card style={{ width: '22em' }}>
                                   
                                        <Nav.Link className="no-link-decoration" id='nav-link' style={{ textDecorationStyle: 'none' }} onClick={() => handleProductClick(data?.id)}>
                                    
                                        {/* <div className="categoryCard shadow"> */}
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
                                                    <p>{data.description.slice(0, 20)}</p>
                                                    <h5 className="text-theme-primary font-weight-bold">${data.product_price}</h5>
                                                </div>
                                            </div>
                                            </Nav.Link>
                                            <div className="cardFooter">
                                                <div className="cardAction">
                                                    <div className="counterAction">
                                                        <span className="qunatingCount">{data.quantity}</span>
                                                        <button className="minus" type="button" onClick={() => handleDecreaseQuantity(data.id)}  ><i className="fa fa-minus"></i></button>

                                                        <button className="plus" onClick={() => handleIncreaseQuantity(data.id)} type="button"><i className="fa fa-plus"></i></button>
                                                    </div>
                                                    <div className="addToCart">
                                                        <button type="button"  onClick={() => dispatch(addToCart(data))}>Add To Cart</button>
                                                    </div>
                                                </div>
                                            </div>
                                        {/* </div> */}
                                </Card>
                                </div>  ))}
                                
                                
                                 </Slider>
                                 <Product_deatail productDetails={productDetails} show={showModal}
                        onHide={() => setShowModal(false)}
                    />
                                   
                                   
                                   
                                </div>

                            </div>
                           
                          
                       
                         
                         
                           



                    </div>
                </div>
            </section>
    </div>
    
        )}