import React, { useState, useEffect } from "react";
import { TailSpin } from 'react-loader-spinner'


import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { Nav } from "react-bootstrap";
import { Get_all_product_detail, Favourite } from '../../../components/services/catigories'
import { useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Product_deatail } from '../../productDetail/product_detail'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import mac from '../../../assets/images/mac.png'
import '../../css/style.css'
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function PopularCategories({ loading, data, handleIncrement, handleDecrement, handleAddToCart  , handlealldata}) {
    const [swiperRef, setSwiperRef] = useState(null);
    const appendNumber = useRef(500);
    const prependNumber = useRef(1);
    // Create array with 500 slides
    const [slides, setSlides] = useState(
      Array.from({ length: 500 }).map((_, index) => `Slide ${index + 4}`)
    );
  
    const prepend = () => {
      setSlides([
        `Slide ${prependNumber.current - 2}`,
        `Slide ${prependNumber.current - 3}`,
        ...slides,
      ]);
      prependNumber.current = prependNumber.current - 2;
      swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
    };
  
    const append = () => {
      setSlides([...slides, 'Slide ' + ++appendNumber.current]);
    };
  
    const slideTo = (index) => {
      swiperRef.slideTo(index - 3, 0);
    };
  

    const [favoriteStates, setFavoriteStates] = useState({});

    const handleFavorite = async (itemId, title) => {
        console.log("itemId", itemId)
        try {
            const response = await Favourite(itemId);

            if (response.status === true) {
                toast.success(`${title} added to favorites!`, {
                    position: toast.POSITION.TOP_RIGHT,
                });
            } else {
                toast.error(`Failed to add ${title} to favorites. Please try again.`, {
                    position: toast.POSITION.TOP_RIGHT,
                });
            }
        } catch (error) {
            console.error('Error adding item to favorites:', error);
            toast.error('An error occurred while adding the item to favorites. Please try again.', {
                position: toast.POSITION.TOP_RIGHT,
            });
        }


        setFavoriteStates((prevStates) => ({
            ...prevStates,
            [itemId]: !prevStates[itemId],
        }));
    };


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

    const ImageUrl = "https://custom2.mystagingserver.site/food-stadium/public/"
    const loaderContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', // Optional: Adjust the height based on your layout requirements
    };
    return (
        <div className="popularCategories">
            <div className="categoryHeader d-flex justify-content-between align-items-center flex-wrap">
            <div className="titleBox d-flex justify-content-between" style={{  'width' : '100%'  , "margin" : "0"  }}>

            <h3 className="mb-0">Most Popular</h3>

                    {/* <h3 onClick={handlealldata} className=" btn">All Food </h3> */}
                </div>
            </div>

            <div id="homeMostPopularCarousel" className="carousel slide" data-ride="carousel">
                <div className="d-flex justify-content-end carouselArrows mostPopular">
                    <a className="carousel-control-prevs" href="#homeMostPopularCarousel" onClick={next} role="button" data-slide="prev">
                        <i className="fa fa-chevron-left" aria-hidden="true"></i>
                    </a>
                    <a className="carousel-control-nexts" href="#homeMostPopularCarousel" role="button"  onClick={previous} data-slide="next">
                        <i className="fa fa-chevron-right" aria-hidden="true"  ></i>

                    </a>



                </div>
                <div className="carousel-inner">

                    <div className="loaderContainerStyle">
                        {loading ? (

                            <div className="loader-container ">  <div className="row">
                                <div className="col-md-4">
                                    <Card className="mb-3" style={{ width: '16rem' }}>
                                        <Nav.Link className="no-link-decoration" id='nav-link' style={{ textDecorationStyle: 'none' }} >
                                            <div className="cardHeader">
                                                <div className="topMeta">

                                                </div>
                                                <div className="cardImage">
                                                    {/* <img src={  <Skeleton />}  alt="Category Image" className="mw-100" /> */}<Skeleton height={200} width={200} />
                                                </div>



                                            </div>
                                            <div className="cardBody">
                                                <div className="body-upper">
                                                    <div className="ratingBox">
                                                        <p className="mb-0"><Skeleton /></p>
                                                        <p className="mb-0">

                                                        </p>
                                                    </div>
                                                    <div className="deliveryInfo">
                                                        <div className="meter">
                                                            <p className="mb-0"><Skeleton /></p>
                                                            <p className="mb-0 text-success"><Skeleton /></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cardContent" style={{ textAlign: 'left' }}>
                                                    <h3>  <Skeleton /></h3>
                                                    <p><Skeleton /></p>
                                                    <h5 className="text-theme-primary font-weight-bold"><Skeleton /></h5>
                                                </div>
                                            </div>
                                        </Nav.Link>
                                        <div className="cardFooter">
                                            <div className="cardAction">

                                            </div>
                                        </div>

                                    </Card>

                                </div>
                                <div className="col-md-4">
                                    <Card className="mb-3" style={{ width: '16rem' }}>
                                        <Nav.Link className="no-link-decoration" id='nav-link' style={{ textDecorationStyle: 'none' }} >
                                            <div className="cardHeader">
                                                <div className="topMeta">

                                                </div>
                                                <div className="cardImage">
                                                </div>



                                            </div>
                                            <div className="cardBody">
                                                <div className="body-upper">
                                                    <div className="ratingBox">
                                                        <p className="mb-0"><Skeleton /></p>
                                                        <p className="mb-0">

                                                        </p>
                                                    </div>
                                                    <div className="deliveryInfo">
                                                        <div className="meter">
                                                            <p className="mb-0"><Skeleton /></p>
                                                            <p className="mb-0 text-success"><Skeleton /></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cardContent" style={{ textAlign: 'left' }}>
                                                    <h3>  <Skeleton /></h3>
                                                    <p><Skeleton /></p>
                                                    <h5 className="text-theme-primary font-weight-bold"><Skeleton /></h5>
                                                </div>
                                            </div>
                                        </Nav.Link>
                                        <div className="cardFooter">
                                            <div className="cardAction">

                                            </div>
                                        </div>

                                    </Card>

                                </div>
                                <div className="col-md-4">
                                    <Card className="mb-3" style={{ width: '16rem' }}>
                                        <Nav.Link className="no-link-decoration" id='nav-link' style={{ textDecorationStyle: 'none' }} >
                                            <div className="cardHeader">
                                                <div className="topMeta">

                                                </div>
                                                <div className="cardImage">
                                                </div>



                                            </div>
                                            <div className="cardBody">
                                                <div className="body-upper">
                                                    <div className="ratingBox">
                                                        <p className="mb-0"><Skeleton /></p>
                                                        <p className="mb-0">

                                                        </p>
                                                    </div>
                                                    <div className="deliveryInfo">
                                                        <div className="meter">
                                                            <p className="mb-0"><Skeleton /></p>
                                                            <p className="mb-0 text-success"><Skeleton /></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cardContent" style={{ textAlign: 'left' }}>
                                                    <h3>  <Skeleton /></h3>
                                                    <p><Skeleton /></p>
                                                    <h5 className="text-theme-primary font-weight-bold"><Skeleton /></h5>
                                                </div>
                                            </div>
                                        </Nav.Link>
                                        <div className="cardFooter">
                                            <div className="cardAction">

                                            </div>
                                        </div>

                                    </Card>

                                </div>


                                <div className="col-md-4">
                                    <Card className="mb-3" style={{ width: '16rem' }}>
                                        <Nav.Link className="no-link-decoration" id='nav-link' style={{ textDecorationStyle: 'none' }} >
                                            <div className="cardHeader">
                                                <div className="topMeta">

                                                </div>
                                                <div className="cardImage">
                                                </div>



                                            </div>
                                            <div className="cardBody">
                                                <div className="body-upper">
                                                    <div className="ratingBox">
                                                        <p className="mb-0"><Skeleton /></p>
                                                        <p className="mb-0">

                                                        </p>
                                                    </div>
                                                    <div className="deliveryInfo">
                                                        <div className="meter">
                                                            <p className="mb-0"><Skeleton /></p>
                                                            <p className="mb-0 text-success"><Skeleton /></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cardContent" style={{ textAlign: 'left' }}>
                                                    <h3>  <Skeleton /></h3>
                                                    <p><Skeleton /></p>
                                                    <h5 className="text-theme-primary font-weight-bold"><Skeleton /></h5>
                                                </div>
                                            </div>
                                        </Nav.Link>
                                        <div className="cardFooter">
                                            <div className="cardAction">

                                            </div>
                                        </div>

                                    </Card>

                                </div>
                                <div className="col-md-4">
                                    <Card className="mb-3" style={{ width: '16rem' }}>
                                        <Nav.Link className="no-link-decoration" id='nav-link' style={{ textDecorationStyle: 'none' }} >
                                            <div className="cardHeader">
                                                <div className="topMeta">

                                                </div>
                                                <div className="cardImage">
                                                </div>



                                            </div>
                                            <div className="cardBody">
                                                <div className="body-upper">
                                                    <div className="ratingBox">
                                                        <p className="mb-0"><Skeleton /></p>
                                                        <p className="mb-0">

                                                        </p>
                                                    </div>
                                                    <div className="deliveryInfo">
                                                        <div className="meter">
                                                            <p className="mb-0"><Skeleton /></p>
                                                            <p className="mb-0 text-success"><Skeleton /></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cardContent" style={{ textAlign: 'left' }}>
                                                    <h3>  <Skeleton /></h3>
                                                    <p><Skeleton /></p>
                                                    <h5 className="text-theme-primary font-weight-bold"><Skeleton /></h5>
                                                </div>
                                            </div>
                                        </Nav.Link>
                                        <div className="cardFooter">
                                            <div className="cardAction">

                                            </div>
                                        </div>

                                    </Card>

                                </div>
                                <div className="col-md-4">
                                    <Card className="mb-3" style={{ width: '16rem' }}>
                                        <Nav.Link className="no-link-decoration" id='nav-link' style={{ textDecorationStyle: 'none' }} >
                                            <div className="cardHeader">
                                                <div className="topMeta">

                                                </div>
                                                <div className="cardImage">
                                                </div>



                                            </div>
                                            <div className="cardBody">
                                                <div className="body-upper">
                                                    <div className="ratingBox">
                                                        <p className="mb-0"><Skeleton /></p>
                                                        <p className="mb-0">
                                                        </p>
                                                    </div>
                                                    <div className="deliveryInfo">
                                                        <div className="meter">
                                                            <p className="mb-0"><Skeleton /></p>
                                                            <p className="mb-0 text-success"><Skeleton /></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="cardContent" style={{ textAlign: 'left' }}>
                                                    <h3>  <Skeleton /></h3>
                                                    <p><Skeleton /></p>
                                                    <h5 className="text-theme-primary font-weight-bold"><Skeleton /></h5>
                                                </div>
                                            </div>
                                        </Nav.Link>
                                        <div className="cardFooter">
                                            <div className="cardAction">

                                            </div>
                                        </div>

                                    </Card>

                                </div>
                            </div> </div>
                        ) : (
                            <>

                            {data.length > 0 ? (
                        //      <Swiper
                        //      modules={[Virtual, Navigation, Pagination]}
                        //      onSwiper={setSwiperRef}
                        //      slidesPerView={3}
                        //     //  centeredSlides={true}
                        //      slidesPerColumn={26}
                        //     //  spaceBetween={30}
 
                        //     //  pagination={{
                        //     //      type: 'fraction',
                        //     //  }}

                        //      navigation={true}
                        //     //  virtual
                        //     //  slidesPerGroup={3} 
                        //     //  slidesPerColumnFill="row"  // Fill the rows with slides
                        //  >
                        <Slider  ref={sliderRef} {...settings}>
                                         {data?.map((data , index )=> (
                                                  <SwiperSlide key={data}> 
                                                <Card className="mb-3 p-2 ml-2">
                                                    <Nav.Link className="no-link-decoration" id='nav-link' style={{ textDecorationStyle: 'none' }} onClick={() => handleProductClick(data?.id)}>
                                                        <div className="cardHeader">
                                                            <div className="topMeta">
                                                                <div className="tags">
                                                                    <span>19%off</span>
                                                                </div>
                                                                <div className="tags wishList">

                                                                    <button onClick={() => handleFavorite(data.id, data.title)} className="button" id="wwwefl">
                                                                        <i className={` ${favoriteStates[data.id] ? 'fa fa-heart' : ' fa fa-heart-o'}`} aria-hidden="true"></i>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div className="cardImage">
                                                                <img src={ImageUrl + data?.feature_image || <Skeleton />} alt="Category Image" className="mw-100" />
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
                                                                <h3>{data.title.slice(0, 10) || <Skeleton />}</h3>
                                                                <p>{data.description.slice(0, 20)}</p>
                                                                <h5 className="text-theme-primary font-weight-bold">${data.product_price}</h5>
                                                            </div>
                                                        </div>
                                                    </Nav.Link>
                                                    <div className="cardFooter">
                                                        <div className="cardAction">
                                                            <div className="counterAction">
                                                                <span className="qunatingCount">  {data.quantity}</span>
                                                                <button className="minus" type="button" onClick={() => handleDecrement(data.id)} ><i className="fa fa-minus"></i></button>

                                                                <button className="plus" onClick={() => handleIncrement(data.id)} type="button"><i className="fa fa-plus"></i></button>
                                                            </div>
                                                            <div className="addToCart">

                                                                <button type="button" onClick={() => handleAddToCart(data)} >  Add To Cart</button>
                                                            </div>
                                                        </div>
                                                    </div>


                                                </Card>
                                                </SwiperSlide>

                                            ))}
                                    </Slider>



                                )
                                    : (
                                        <p>No results found.</p>
                                    )}
                            </>
                        )}

                        <div className="row">
                            <div className="col-md-4 mb-3">
                                
                            </div>
                        </div>

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