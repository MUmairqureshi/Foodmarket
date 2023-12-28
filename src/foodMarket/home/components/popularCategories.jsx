import React, { useState, useEffect } from "react";
import { TailSpin } from 'react-loader-spinner'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import { Nav } from "react-bootstrap";
import { Get_all_product_detail } from '../../../components/services/catigories'
import { useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Product_deatail } from '../../productDetail/product_detail'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import mac from '../../../assets/images/mac.png'
import '../../css/style.css'
 


export function PopularCategories({loading , data, handleIncrement, handleDecrement, handleAddToCart }) {


    //  <TailSpin
    //   visible={true}
    //   height="80"
    //   width="80"
    //   color="#4fa94d"
    //   ariaLabel="tail-spin-loading"
    //   radius="1"
    //   wrapperStyle={{}}
    //   wrapperClass=""
    //   />

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
{/*   {/* <TailSpin
                                visible={true}
                                height="80"
                                width="80"
                                margin="auto"
                                textAlign="center"
                                color="#4fa94d"
                                ariaLabel="tail-spin-loading"
                                radius="1"
                                wrapperStyle={{}}
                                wrapperClass=""
                            /> */}
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
                                                                    {/* <Skeleton />
                                                                    <Skeleton />
                                                                    <Skeleton />
                                                                    <Skeleton />
                                                                    <Skeleton /> */}
                                                                        {/* <i className="fa fa-star"></i><Skeleton /> */}
                                                                        {/* <i className="fa fa-star"></i> */}
                                                                        {/* <i className="fa fa-star"></i> */}
                                                                        {/* <i className="fa fa-star"></i> */}
                                                                        {/* <i className="fa fa-star"></i> */}
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
                                                                {/* <img src={  <Skeleton />}  alt="Category Image" className="mw-100" /> */}<Skeleton height={200} width={200} />
                                                            </div>

                                                        

                                                        </div>
                                                        <div className="cardBody">
                                                            <div className="body-upper">
                                                                <div className="ratingBox">
                                                                    <p className="mb-0"><Skeleton /></p>
                                                                    <p className="mb-0"> 
                                                                    {/* <Skeleton />
                                                                    <Skeleton />
                                                                    <Skeleton />
                                                                    <Skeleton />
                                                                    <Skeleton /> */}
                                                                        {/* <i className="fa fa-star"></i><Skeleton /> */}
                                                                        {/* <i className="fa fa-star"></i> */}
                                                                        {/* <i className="fa fa-star"></i> */}
                                                                        {/* <i className="fa fa-star"></i> */}
                                                                        {/* <i className="fa fa-star"></i> */}
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
                                                                {/* <img src={  <Skeleton />}  alt="Category Image" className="mw-100" /> */}<Skeleton height={200} width={200} />
                                                            </div>

                                                        

                                                        </div>
                                                        <div className="cardBody">
                                                            <div className="body-upper">
                                                                <div className="ratingBox">
                                                                    <p className="mb-0"><Skeleton /></p>
                                                                    <p className="mb-0"> 
                                                                    {/* <Skeleton />
                                                                    <Skeleton />
                                                                    <Skeleton />
                                                                    <Skeleton />
                                                                    <Skeleton /> */}
                                                                        {/* <i className="fa fa-star"></i><Skeleton /> */}
                                                                        {/* <i className="fa fa-star"></i> */}
                                                                        {/* <i className="fa fa-star"></i> */}
                                                                        {/* <i className="fa fa-star"></i> */}
                                                                        {/* <i className="fa fa-star"></i> */}
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
                                                                {/* <img src={  <Skeleton />}  alt="Category Image" className="mw-100" /> */}<Skeleton height={200} width={200} />
                                                            </div>

                                                        

                                                        </div>
                                                        <div className="cardBody">
                                                            <div className="body-upper">
                                                                <div className="ratingBox">
                                                                    <p className="mb-0"><Skeleton /></p>
                                                                    <p className="mb-0"> 
                                                                    {/* <Skeleton />
                                                                    <Skeleton />
                                                                    <Skeleton />
                                                                    <Skeleton />
                                                                    <Skeleton /> */}
                                                                        {/* <i className="fa fa-star"></i><Skeleton /> */}
                                                                        {/* <i className="fa fa-star"></i> */}
                                                                        {/* <i className="fa fa-star"></i> */}
                                                                        {/* <i className="fa fa-star"></i> */}
                                                                        {/* <i className="fa fa-star"></i> */}
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
                                                                {/* <img src={  <Skeleton />}  alt="Category Image" className="mw-100" /> */}<Skeleton height={200} width={200} />
                                                            </div>

                                                        

                                                        </div>
                                                        <div className="cardBody">
                                                            <div className="body-upper">
                                                                <div className="ratingBox">
                                                                    <p className="mb-0"><Skeleton /></p>
                                                                    <p className="mb-0"> 
                                                                    {/* <Skeleton />
                                                                    <Skeleton />
                                                                    <Skeleton />
                                                                    <Skeleton />
                                                                    <Skeleton /> */}
                                                                        {/* <i className="fa fa-star"></i><Skeleton /> */}
                                                                        {/* <i className="fa fa-star"></i> */}
                                                                        {/* <i className="fa fa-star"></i> */}
                                                                        {/* <i className="fa fa-star"></i> */}
                                                                        {/* <i className="fa fa-star"></i> */}
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
                                                                {/* <img src={  <Skeleton />}  alt="Category Image" className="mw-100" /> */}<Skeleton height={200} width={200} />
                                                            </div>

                                                        

                                                        </div>
                                                        <div className="cardBody">
                                                            <div className="body-upper">
                                                                <div className="ratingBox">
                                                                    <p className="mb-0"><Skeleton /></p>
                                                                    <p className="mb-0"> 
                                                                    {/* <Skeleton />
                                                                    <Skeleton />
                                                                    <Skeleton />
                                                                    <Skeleton />
                                                                    <Skeleton /> */}
                                                                        {/* <i className="fa fa-star"></i><Skeleton /> */}
                                                                        {/* <i className="fa fa-star"></i> */}
                                                                        {/* <i className="fa fa-star"></i> */}
                                                                        {/* <i className="fa fa-star"></i> */}
                                                                        {/* <i className="fa fa-star"></i> */}
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
                                                                <img src={ImageUrl + data?.feature_image || <Skeleton />}  alt="Category Image" className="mw-100" />
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
                                            </div>


                                        ))}
                                    </Slider>)
                                    : (
                                        <p>No results found.</p>
                                    )}
                            </>
                        )}
 

                    </div>
                </div>

                <Product_deatail productDetails={productDetails} show={showModal}
                    onHide={() => setShowModal(false)}
                />
            </div>

        </div>
    )
}