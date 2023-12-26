
// 
// ABOUT US
import {Link} from 'react-router-dom'
import { Card } from 'react-bootstrap';
import { useRef } from "react";
import React from "react";
import {Product_deatail} from '../../productDetail/product_detail'
 
import mac from '../../../assets/images/mac.png'
 
import { Get_all_product, Get_all_product_detail } from '../../../components/services/catigories'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {   addToCart  } from '../../../components/redux/actions';
import Slider from 'react-slick';
export function Beverages_Recommendations() {



    const dispatch = useDispatch();
 


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
        rows: 3,
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
    // const [all_product, setAll_product] = useState([]);
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const data = await Get_all_product();
    //             setAll_product(data);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };

    //     fetchData();
    // }, []); 



    const [productDetails, setProductDetails] = useState(null);
    const [showModal, setShowModal] = useState(false);


    const [recomentdation, setRecomendation] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await Get_all_product();
                setRecomendation(data?.data || []);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleIncrement = (productId) => {
        setRecomendation((prevProducts) =>
            prevProducts.map((product) =>
                product.id === productId
                    ? { ...product, quantity: product.quantity + 1 }
                    : product
            )
        );
    };

    const handleDecrement = (productId) => {
        setRecomendation((prevProducts) =>
            prevProducts.map((product) =>
                product.id === productId && product.quantity > 0
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
            )
        );
    };



    const handleAddToCart = (product) => {

        dispatch(addToCart(product));

        // Reset the quantity for the specific product
        setRecomendation((prevProducts) =>
            prevProducts.map((p) =>
                p.id === product.id ? { ...p, quantity: 1 } : p
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
    return (
        <section className="beverages">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 mb-3">
                        <div className="titleBox d-flex align-items-center">
                            <h1 className="font-weight-bold">RECOMMENDATIONS</h1>
                        </div>
                    </div>
                </div>


                <div id="homeBeveragesCarousel" className="carousel slide" data-ride="carousel">

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <Slider ref={sliderRef} {...settings}>

                                {recomentdation?.map(data => (
                                    <div className="row">
                                        <div key={data.id} className="col-md-3 mb-3">
                                            <Card style={{ width: '22em' }} className="categoryCard shadow">
                                                <Link className="no-link-decoration" id='nav-link' style={{ textDecorationStyle: 'none' }} onClick={() => handleProductClick(data?.id)}>

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
                                                            <h3>{data.title.slice(0, 15)}</h3>
                                                            <p>{data.description.slice(0, 30)}</p>
                                                            <h5 className="text-theme-primary font-weight-bold">${data.product_price}</h5>
                                                        </div>
                                                    </div>
                                                    </Link>
                                                    <div className="cardFooter">
                                                        <div className="cardAction">
                                                            <div className="counterAction">
                                                                <span className="qunatingCount">{data.quantity}</span>
                                                                <button className="minus" onClick={() => handleDecrement(data.id)} type="button"><i className="fa fa-minus"></i></button>

                                                                <button className="plus" onClick={() => handleIncrement(data.id)} type="button"><i className="fa fa-plus"></i></button>
                                                            </div>
                                                            <div className="addToCart">
                                                                <button type="button" onClick={() => handleAddToCart(data)}> Add To Cart</button>
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
                        <a className="carousel-control-prevs" onClick={previous} href="#homeBeveragesCarousel" role="button" data-slide="prev">
                            <i className="fa fa-chevron-left" aria-hidden="true"></i>
                        </a>
                        <a className="carousel-control-nexts" onClick={next} href="#homeBeveragesCarousel" role="button" data-slide="next">
                            <i className="fa fa-chevron-right" aria-hidden="true"></i>

                        </a>
                    </div>

                </div>


                <Product_deatail productDetails={productDetails} show={showModal}
                        onHide={() => setShowModal(false)}
                    />

            </div>
        </section>
    )
}