import React, { useState, useEffect } from "react";
import cupcake from '../../../assets/images/cupcake.png'
import { Get_all_product, Get_all_catigories } from '../../../components/services/catigories'
import Slider from "react-slick";
import burger from '../../../assets/images/burger.png'
import { useRef } from "react";
import { Link } from 'react-router-dom'
export function Catigory_view({setSelectedCatigoryId}) {


    const handleProductClick = async (productId) => {
        try {
            setSelectedCatigoryId(productId);
 
            return "Success";  
        } catch (error) {
            console.error('Error handling product click:', error);
            return "Error";  
        }
    };

    const [all_product, setAll_product] = useState([]);
 
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await Get_all_catigories();
                setAll_product(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

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


    return (

        <div>
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
                                                <Link className="no-link-decoration" id='nav-link' style={{ textDecorationStyle: 'none' }} onClick={() => handleProductClick(data?.id)}>
                                                    <div className="categoryBox bg-white shadow" id='categoriesSlider'>
                                                        <div className='text-center'>
                                                            <img src={ImageUrl + data?.image} alt="" />
                                                        </div>
                                                        <p className="mb-0">{data?.name} </p>
                                                    </div>
                                                </Link>
                                            </div>
                                        ))}
                                    </Slider>
                                </div>













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
        </div>
    )
}