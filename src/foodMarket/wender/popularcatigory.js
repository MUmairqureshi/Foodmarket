import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { Nav } from 'react-bootstrap';
import Slider from "react-slick";

import { Get_all_product, Get_all_product_detail } from '../../components/services/catigories'
import { useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Product_deatail } from '../productDetail/product_detail'
import mac from '../../assets/images/mac.png'
// import { Increment, Decrement, Remove } from '../../redux/hook'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchProducts, addToCart, incrementQuantity, decrementQuantity } from '../../components/redux/actions';
export function PopularCategory({data , setWenderdata}) {
console.log("wemderdata" , data)



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
    const dispatch = useDispatch();


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







    const settings = {

        infinite: true,
        speed: 500,
        // slidesToShow: all_product.length > 6 ? 6 : all_product.length, // Set slidesToShow based on the number of items

        slidesToShow: 5,
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

    const ImageUrl = "https://custom2.mystagingserver.site/food-stadium/public/"

    const [allproduct, setAllproduct] = useState([])
    const [loading, setLoading] = useState(true)

 
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await Get_all_product();
                setAllproduct(data?.data || []);
                // setFilteredBeverages(data?.data || []);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);




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
                p?.id === product?.id ? { ...p, quantity: 1 } : p,

            )
        );

        // Show toast
        toast.success(`${product.title} added to cart!`, {
            position: toast.POSITION.TOP_RIGHT,
        });
    };

    return (
        <div className="popularCategories">
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


                            {data?.map(data => (
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
                                                    <button className="minus" type="button" onClick={() => handleIncrement(data.id)} ><i className="fa fa-minus"></i></button>

                                                    <button className="plus" onClick={() => handleIncrement(data.id)} type="button"><i className="fa fa-plus"></i></button>
                                                </div>
                                                <div className="addToCart">

                                                    <button type="button" onClick={() => handleAddToCart(data)} >  Add To Cart</button>
                                                </div>
                                            </div>
                                        </div>

                                    </Card>
                                </div>


                            ))}        </Slider>



                    </div>
                </div>

                <Product_deatail productDetails={productDetails} show={showModal}
                    onHide={() => setShowModal(false)}
                />
            </div>
            <ToastContainer />
        </div>
    )
}