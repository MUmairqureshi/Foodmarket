
import React from "react";
import { Card } from 'react-bootstrap';

import { Link } from 'react-router-dom'
import { useRef } from "react";
import Slider from 'react-slick';
import mac from '../../assets/images/mac.png'
import { Get_all_product, Get_all_product_detail } from   '../../components/services/catigories'
import { useState, useEffect } from 'react'

import { Product_deatail } from '../productDetail/product_detail'

import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, addToCart } from   '../../components/redux/actions';
export function Beverages({data , setWenderdata}) {



    const dispatch = useDispatch();




    const sliderRef = useRef(null);

    const next = () => {
        sliderRef.current.slickNext();
    };

    const previous = () => {
        sliderRef.current.slickPrev();
    };

    const carouselStyles = {
        width: '100%',   // Adjust the width as needed
        margin: '14 auto' // Center the carousel
    };

    var settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        rows: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    rows: 2,
                    //   dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    // const settings = {
    //     // dots: true,
    //     infinite: true,
    //     breakpoint: 1024, // Medium devices (tablets, 768px and up)
    //     speed: 500,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,}
    //     responsive: [
    //         {
    //             infinite: true,
    //             breakpoint: 1024, // Medium devices (tablets, 768px and up)
    //             settings: {
    //                 infinite: true,
    //                 slidesToShow: 2,
    //                 slidesToScroll: 1,
    //                 rows: 2,
    //             },
    //         },
    //         {
    //             infinite: true,
    //             breakpoint: 768, // Small devices (landscape phones, 576px and up)
    //             settings: {
    //                 infinite: true,
    //                 slidesToShow: 2,
    //                 slidesToScroll: 1,
    //                 rows: 1,
    //             },
    //         },
    //         {
    //             infinite: true,
    //             breakpoint: 576, // Extra small devices (portrait phones, 576px and down)
    //             settings: {
    //                 infinite: true,
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 rows: 1,
    //             },
    //         },
    //         {
    //             infinite: true,
    //             breakpoint: 320, // Extra small devices (portrait phones, 576px and down)
    //             settings: {
    //                 infinite: true,
    //                 slidesToShow: 2,
    //                 slidesToScroll: 1,
    //                 rows: 1,
    //             },
    //         },
    //     ],
    // };



    const ImageUrl = "https://custom2.mystagingserver.site/food-stadium/public/"

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredBeverages, setFilteredBeverages] = useState([]);


    const [productDetails, setProductDetails] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const [beverages, setBeverages] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await Get_all_product();
                setBeverages(data?.data || []);
                setFilteredBeverages(data?.data || []);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleSearch = () => {
        if (searchTerm?.trim() === '') {
            setFilteredBeverages(beverages);
        } else {
            const filteredData = beverages?.filter(beverage =>
                beverage?.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredBeverages(filteredData);
        }
    };
    const handlepopulerdata = () => {
        const popularDataId = 1;
    
        // Filter the data based on is_popular property
        const popularData = beverages.filter(beverage => beverage.is_popular === popularDataId);
    
        setFilteredBeverages(popularData);
      };
      const handletoprateddata = () => {
        const toprateddata = 1;
    
        // Filter the data based on is_popular property
        const toprateData = beverages.filter(beverage => beverage.is_trending === toprateddata);
    
        setFilteredBeverages(toprateData);
      };

      const handlealldata = () => {
        setFilteredBeverages(beverages);
      };

    //   handlealldata
    const handleIncrement = (productId) => {
        setWenderdata((prevProducts) =>
            prevProducts.map((product) =>
                product.id === productId
                    ? { ...product, quantity: product.quantity + 1 }
                    : product
            )
        );
    };

    const handleDecrement = (productId) => {
        setWenderdata((prevProducts) =>
            prevProducts.map((product) =>
                product.id === productId && product.quantity > 0
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
            )
        );
    };



    const handleAddToCart = (product) => {

        dispatch(addToCart(product));


        setWenderdata((prevProducts) =>
            prevProducts.map((p) =>
                p.id === product.id ? { ...p, quantity: 1 } : p
            )
        );
    };

    const handleProductClick = async (productId) => {
        console.log(productId)

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
                                        <button type="button" onClick={handlepopulerdata} className="primaryButton btn w-100 bg-white"> Most Popular</button>
                                    </div>
                                    <div className="dineIN mb-2 genralBtn">
                                        <button onClick={handlealldata} type="button" className="primaryButton btn w-100 bg-white"> 0$ Delivery</button>
                                    </div>
                                    <div className="dineIN mb-2 genralBtn">
                                        <button   onClick={handletoprateddata}  type="button" className="primaryButton btn w-100 bg-white"> Top Rated</button>
                                    </div>
                                    <div className="dineIN mb-2 genralBtn">
                                        <div className="form-group mb-0">
                                            <i className="fa fa-search"></i>
                                            <input
                                                type="text"
                                                placeholder="Search Favorite Food..."
                                                className="form-control"
                                                value={searchTerm}
                                                onChange={(e) => setSearchTerm(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="dineIN mb-2 genralBtn filterBtn">
                                        <button onClick={handleSearch} type="button" className="primaryButton btn w-100 bg-white"> <img src="../images/filter.png" alt="" />Filter</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="homeBeveragesCarousel" className="carousel slide" data-ride="carousel">

                        <div className="carousel-inner">
                            <div className="carousel-item active">
 

                                {loading ? (
                                    <p>Loading...</p>
                                ) : (
                                    <>

                                        {filteredBeverages.length > 0 ? (
                                            <Slider ref={sliderRef} {...settings} style={carouselStyles} >
                                                {
                                                    data?.map(data => (
                                                        <div className="row">
                                                            <div key={data?.id} className="col-md-3 mb-3">
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
                                                                                <div className="cardContent" style={{ textAlign: 'left' }}>
                                                                                    <h3>{data?.title.slice(0, 15)}</h3>
                                                                                    <p>{data?.description.slice(0, 40)}</p>
                                                                                    <h5 className="text-theme-primary font-weight-bold">${data.product_price}</h5>
                                                                                </div>
                                                                            </div>


                                                                        </div>
                                                                    </Link>
                                                                    <div className="cardFooter">
                                                                        <div className="cardAction">
                                                                            <div className="counterAction">
                                                                                <span className="qunatingCount">{data?.quantity}</span>
                                                                                <button className="minus" onClick={() => handleDecrement(data?.id)} type="button"><i className="fa fa-minus"></i></button>

                                                                                <button className="plus" onClick={() => handleIncrement(data?.id)} type="button"><i className="fa fa-plus"></i></button>
                                                                            </div>
                                                                            <div className="addToCart">
                                                                                <button onClick={() => handleAddToCart(data)} type="button">Add To Cart</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Card>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </Slider>) : (
                                            <p>No results found.</p>
                                        )}
                                    </>
                                )}

 
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


                </div>
            </section>
            <Product_deatail productDetails={productDetails} show={showModal}
                onHide={() => setShowModal(false)}
            />
        </div>

    )
}
