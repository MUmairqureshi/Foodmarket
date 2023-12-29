import React, { useState, useEffect } from "react";
import { TailSpin } from 'react-loader-spinner'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { Nav } from "react-bootstrap";
import { favouritepropuctlist , Get_all_product_detail } from '../../components/services/catigories'
import { useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Product_deatail } from '../../foodMarket/productDetail/product_detail'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import mac from '../../assets/images/mac.png'
import {   addToCart   } from '../../components/redux/actions';
// import '../../css/style.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Favourit() {
    const [productDetails, setProductDetails] = useState(null);
    const [showModal, setShowModal] = useState(false);


    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    console.log("product", products)
    const sliderRefs = useRef(null);


    // Favourite

    const sliderRef = useRef(null);

    const next = () => {
        sliderRef.current.slickNext();
    };

    const previous = () => {
        sliderRef.current.slickPrev();
    };


    const [favouriteproduct, setFavouriteproduct] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await favouritepropuctlist();
                setFavouriteproduct(data.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    console.log("favouriteproduct", favouriteproduct)
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









      const handleIncrement = (productId) => {
        setFavouriteproduct((prevProducts) =>
            prevProducts.map((product) =>
              product.product?.id === productId
                ? { ...product.product, quantity: product.product.quantity + 1 }
                : product.product
            )
          );
        };
      
        const handleDecrement = (productId) => {
            setFavouriteproduct((prevProducts) =>
            prevProducts.map((product) =>
              product.product?.id === productId && product.product.quantity > 0
                ? { ...product.product, quantity: product.product.quantity - 1 }
                : product.product
            )
          );
        };
    
    
    
        const handleAddToCart = (product) => {
     console.log("productfav" , product?.id)
            dispatch(addToCart(product));
        
            // Reset the quantity for the specific product
            setFavouriteproduct((prevProducts) =>
              prevProducts.map((p) =>
                p.product?.id === product?.id ? { ...p.quantity, quantity: 1 } : p.product
              )
            );
          };
    
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

    const ImageUrl = "https://custom2.mystagingserver.site/food-stadium/public/"
    const loaderContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', // Optional: Adjust the height based on your layout requirements
    };
    return (
        <div>
            <section className="trendingDishes">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <div className="titleBox text-center">
                                <h1 className="font-weight-bold">Favourite product</h1>
                            </div>
                        </div>
                    </div>
                    <div id="homeTrendingDishes" className="carousel slide" data-ride="carousel">

                        <div className="carousel-inner">
                            {/* <div className="d-flex justify-content-end carouselArrows trendingDishesArrows">
                                <a className="carousel-control-prevs" href="#homeTrendingDishes" onClick={next} role="button" data-slide="prev">
                                    <i className="fa fa-chevron-left" aria-hidden="true"></i>
                                </a>
                                <a className="carousel-control-nexts" href="#homeTrendingDishes" onClick={previous} role="button" data-slide="next">
                                    <i className="fa fa-chevron-right" aria-hidden="true"></i>

                                </a>
                            </div> */}
                            <div className="m-4 ">
                                {/* <Slider ref={sliderRef} {...settings}> */}

                                    {favouriteproduct?.map(data => (
                                        <div className="row">
                                            <Card style={{ width: '22em' }}>

                                                <Nav.Link className="no-link-decoration" id='nav-link' style={{ textDecorationStyle: 'none' }} onClick={() => handleProductClick(data.product?.id)} >

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
                                                            <img src={ImageUrl + data.product?.feature_image} alt="Category Imagesss" className="mw-100" />
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
                                                            <h3>{data.product?.title}</h3>
                                                            <p>{data.product?.description.slice(0, 20)}</p>
                                                            <h5 className="text-theme-primary font-weight-bold">${data.product?.product_price}</h5>
                                                        </div>
                                                    </div>
                                                </Nav.Link>
                                                <div className="cardFooter">
                                                    <div className="cardAction">
                                                        <div className="counterAction">
                                                            <span className="qunatingCount">{data.product?.quantity}</span>
                                                            <button className="minus" type="button" onClick={() => handleDecrement(data.product?.id)}  ><i className="fa fa-minus"></i></button>

                                                            <button className="plus" onClick={() => handleIncrement(data.product?.id)} type="button"><i className="fa fa-plus"></i></button>
                                                        </div>
                                                        <div className="addToCart">
                                                            <button type="button" onClick={() => handleAddToCart(data.product)}>Add To Cart</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* </div> */}
                                            </Card>
                                        </div>))}


                                {/* </Slider> */}




                            </div>

                        </div>




                        <Product_deatail productDetails={productDetails} show={showModal}
                        onHide={() => setShowModal(false)}
                    />
                          




                    </div>
                </div>
            </section>
        </div>
    )
}