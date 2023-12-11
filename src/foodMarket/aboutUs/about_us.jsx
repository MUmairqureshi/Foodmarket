
import '../css/style.css'
import m_img from '../../assets/images/m_img.png'
import ab_bg from '../../assets/images/ab_bg.png'
import filter from '../../assets/images/filter.png'
import mac from '../../assets/images/mac.png'
import ab_2 from '../../assets/images/ab_2.png'
 

import clock_icon from '../../assets/images/clock_icon.png'

import c1 from '../../assets/images/c1.png'
 
import { Form } from 'react-bootstrap'
export function Aboutus() {
    return (
        <div className=" ">
            <section className="aboutUsBanner" >
                <img src={ab_bg} className="main_img img-fluid" alt="" />
                <div className="company_logo">
                    <img src={m_img} className=" img-fluid" alt="" />
                </div>
            </section>

            <section className="map_location_section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8 detail_locate">
                            <div className="location_detail">
                                <p> <span className="rating">4.5 <i className="fa fa-star px-2" aria-hidden="true"></i></span> <span className="px-2">(14.100+ratings)</span> Chicken Sides. Deserts. <span> </span> 2.6 mi <span> </span> $</p>
                                <div className="time_schedule d-flex align-items-end flex-wrap flex-lg-nowarp gap-10">
                                    <div className="img_div">
                                        <img src={clock_icon} className="img-fluid" alt="" />
                                    </div>
                                    <div className="time_detail">
                                        <p><span>Open now</span> . Closes at 10:10 PM</p>
                                        <p className="pricing">Pricing & Fees <i className="fa fa-exclamation-circle" aria-hidden="true"></i></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 p-0">
                            <div className="google_map ">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3332292.69331754!2d-122.39252975570714!3d35.350879055529866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f80b6af690d39%3A0x7057232b59a1f803!2sUniversity%20of%20California!5e0!3m2!1sen!2s!4v1698329864184!5m2!1sen!2s"
                                    width="100%" height="300px" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/*     category section         */}

            <section className="homeCategory aboutUsCategroies">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-md-12 ">
                            <div className="categoryListing py-3 h-100">
                                <div className="categoryHomeHead mb-3">


                                </div>
                                <div className="catFilter d-flex align-items-center flex-wrap gap-10 mb-3">
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
                                    <div className="dineIN  genralBtn filterBtn">
                                        <button type="button" className="primaryButton btn w-100 bg-white"> <img src={filter} alt="" />Filters</button>
                                    </div>

                                </div>
                                <div className="categoryHeader d-flex justify-content-between align-items-center flex-wrap">
                                    <div className="titleBox">
                                        <h3>Menu</h3>
                                    </div>
                                    <div className="vewAll">
                                        <p><a href="#">View All</a></p>
                                    </div>
                                </div>
                                <div className="Dietary d-flex align-items-center flex-wrap gap-10 mb-3">
                                    <div className="titleBox text-center mb-3">
                                        <h3>Dietary</h3>
                                    </div>
                                    <div className="featuredBtn mb-3">
                                        <button type="button" className="primaryButton btn w-100 px-4">Most Popular</button>
                                    </div>
                                    <div className="featuredBtn mb-3">
                                        <button type="button" className="primaryButton btn w-100 px-4 ">Deals</button>
                                    </div>
                                    <div className="featuredBtn mb-3">
                                        <button type="button" className="primaryButton btn w-100 px-4">Signature Dish</button>
                                    </div>
                                    <div className="featuredBtn mb-3">
                                        <button type="button" className="primaryButton btn w-100 px-4">Breakfast</button>
                                    </div>
                                    <div className="featuredBtn mb-3">
                                        <button type="button" className="primaryButton btn w-100 px-4">Lunch</button>
                                    </div>
                                    <div className="featuredBtn mb-3">
                                        <button type="button" className="primaryButton btn w-100 px-4">Dinner</button>
                                    </div>
                                    <div className="featuredBtn mb-3">
                                        <button type="button" className="primaryButton btn w-100 px-4">Midnight Meal</button>
                                    </div>

                                </div>

                                <div className="popularCategories">
                                    <div className="categoryHeader d-flex justify-content-between align-items-center flex-wrap">
                                        <div className="titleBox">
                                            <h3>Most Popular <i className="fa fa-chevron-circle-right text-theme-primary"></i></h3>
                                        </div>
                                    </div>




                                    <div id="mostPopularCarousel" className="carousel slide" data-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <div className="row">
                                                    <div className="col  mb-3">
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
                                                                    <img src={c1} alt="Category Image" className="mw-100" />
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
                                                                    <h3>The Classic</h3>
                                                                    <p>Fire Roasted pepper s, spanach</p>
                                                                    <h5 className="text-theme-primary font-weight-bold">$99.00</h5>
                                                                </div>
                                                            </div>
                                                            <div className="cardFooter">
                                                                <div className="cardAction">
                                                                    <div className="counterAction">
                                                                        <span className="qunatingCount">01</span>
                                                                        <button className="minus" type="button"><i className="fa fa-minus"></i></button>

                                                                        <button className="plus" type="button"><i className="fa fa-plus"></i></button>
                                                                    </div>
                                                                    <div className="addToCart">
                                                                        <button type="button">Add To Cart</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col  mb-3">
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
                                                                    <img src={c1} alt="Category Image" className="mw-100" />
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
                                                                    <h3>The Classic</h3>
                                                                    <p>Fire Roasted pepper s, spanach</p>
                                                                    <h5 className="text-theme-primary font-weight-bold">$99.00</h5>
                                                                </div>
                                                            </div>
                                                            <div className="cardFooter">
                                                                <div className="cardAction">
                                                                    <div className="counterAction">
                                                                        <span className="qunatingCount">01</span>
                                                                        <button className="minus" type="button"><i className="fa fa-minus"></i></button>

                                                                        <button className="plus" type="button"><i className="fa fa-plus"></i></button>
                                                                    </div>
                                                                    <div className="addToCart">
                                                                        <button type="button">Add To Cart</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col  mb-3">
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
                                                                    <img src={c1} alt="Category Image" className="mw-100" />
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
                                                                    <h3>The Classic</h3>
                                                                    <p>Fire Roasted pepper s, spanach</p>
                                                                    <h5 className="text-theme-primary font-weight-bold">$99.00</h5>
                                                                </div>
                                                            </div>
                                                            <div className="cardFooter">
                                                                <div className="cardAction">
                                                                    <div className="counterAction">
                                                                        <span className="qunatingCount">01</span>
                                                                        <button className="minus" type="button"><i className="fa fa-minus"></i></button>

                                                                        <button className="plus" type="button"><i className="fa fa-plus"></i></button>
                                                                    </div>
                                                                    <div className="addToCart">
                                                                        <button type="button">Add To Cart</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col  mb-3">
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
                                                                    <img src={c1} alt="Category Image" className="mw-100" />
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
                                                                    <h3>The Classic</h3>
                                                                    <p>Fire Roasted pepper s, spanach</p>
                                                                    <h5 className="text-theme-primary font-weight-bold">$99.00</h5>
                                                                </div>
                                                            </div>
                                                            <div className="cardFooter">
                                                                <div className="cardAction">
                                                                    <div className="counterAction">
                                                                        <span className="qunatingCount">01</span>
                                                                        <button className="minus" type="button"><i className="fa fa-minus"></i></button>

                                                                        <button className="plus" type="button"><i className="fa fa-plus"></i></button>
                                                                    </div>
                                                                    <div className="addToCart">
                                                                        <button type="button">Add To Cart</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col  mb-3">
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
                                                                    <img src={c1} alt="Category Image" className="mw-100" />
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
                                                                    <h3>The Classic</h3>
                                                                    <p>Fire Roasted pepper s, spanach</p>
                                                                    <h5 className="text-theme-primary font-weight-bold">$99.00</h5>
                                                                </div>
                                                            </div>
                                                            <div className="cardFooter">
                                                                <div className="cardAction">
                                                                    <div className="counterAction">
                                                                        <span className="qunatingCount">01</span>
                                                                        <button className="minus" type="button"><i className="fa fa-minus"></i></button>

                                                                        <button className="plus" type="button"><i className="fa fa-plus"></i></button>
                                                                    </div>
                                                                    <div className="addToCart">
                                                                        <button type="button">Add To Cart</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="row">
                                                    <div className="col  mb-3">
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
                                                                    <img src={c1} alt="Category Image" className="mw-100" />
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
                                                                    <h3>The Classic</h3>
                                                                    <p>Fire Roasted pepper s, spanach</p>
                                                                    <h5 className="text-theme-primary font-weight-bold">$99.00</h5>
                                                                </div>
                                                            </div>
                                                            <div className="cardFooter">
                                                                <div className="cardAction">
                                                                    <div className="counterAction">
                                                                        <span className="qunatingCount">01</span>
                                                                        <button className="minus" type="button"><i className="fa fa-minus"></i></button>

                                                                        <button className="plus" type="button"><i className="fa fa-plus"></i></button>
                                                                    </div>
                                                                    <div className="addToCart">
                                                                        <button type="button">Add To Cart</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col  mb-3">
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
                                                                    <img src={c1} alt="Category Image" className="mw-100" />
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
                                                                    <h3>The Classic</h3>
                                                                    <p>Fire Roasted pepper s, spanach</p>
                                                                    <h5 className="text-theme-primary font-weight-bold">$99.00</h5>
                                                                </div>
                                                            </div>
                                                            <div className="cardFooter">
                                                                <div className="cardAction">
                                                                    <div className="counterAction">
                                                                        <span className="qunatingCount">01</span>
                                                                        <button className="minus" type="button"><i className="fa fa-minus"></i></button>

                                                                        <button className="plus" type="button"><i className="fa fa-plus"></i></button>
                                                                    </div>
                                                                    <div className="addToCart">
                                                                        <button type="button">Add To Cart</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col  mb-3">
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
                                                                    <img src={c1} alt="Category Image" className="mw-100" />
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
                                                                    <h3>The Classic</h3>
                                                                    <p>Fire Roasted pepper s, spanach</p>
                                                                    <h5 className="text-theme-primary font-weight-bold">$99.00</h5>
                                                                </div>
                                                            </div>
                                                            <div className="cardFooter">
                                                                <div className="cardAction">
                                                                    <div className="counterAction">
                                                                        <span className="qunatingCount">01</span>
                                                                        <button className="minus" type="button"><i className="fa fa-minus"></i></button>

                                                                        <button className="plus" type="button"><i className="fa fa-plus"></i></button>
                                                                    </div>
                                                                    <div className="addToCart">
                                                                        <button type="button">Add To Cart</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col  mb-3">
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
                                                                    <img src={c1} alt="Category Image" className="mw-100" />
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
                                                                    <h3>The Classic</h3>
                                                                    <p>Fire Roasted pepper s, spanach</p>
                                                                    <h5 className="text-theme-primary font-weight-bold">$99.00</h5>
                                                                </div>
                                                            </div>
                                                            <div className="cardFooter">
                                                                <div className="cardAction">
                                                                    <div className="counterAction">
                                                                        <span className="qunatingCount">01</span>
                                                                        <button className="minus" type="button"><i className="fa fa-minus"></i></button>

                                                                        <button className="plus" type="button"><i className="fa fa-plus"></i></button>
                                                                    </div>
                                                                    <div className="addToCart">
                                                                        <button type="button">Add To Cart</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col  mb-3">
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
                                                                    <img src={c1} alt="Category Image" className="mw-100" />
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
                                                                    <h3>The Classic</h3>
                                                                    <p>Fire Roasted pepper s, spanach</p>
                                                                    <h5 className="text-theme-primary font-weight-bold">$99.00</h5>
                                                                </div>
                                                            </div>
                                                            <div className="cardFooter">
                                                                <div className="cardAction">
                                                                    <div className="counterAction">
                                                                        <span className="qunatingCount">01</span>
                                                                        <button className="minus" type="button"><i className="fa fa-minus"></i></button>

                                                                        <button className="plus" type="button"><i className="fa fa-plus"></i></button>
                                                                    </div>
                                                                    <div className="addToCart">
                                                                        <button type="button">Add To Cart</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className="carousel-item ">
                                                <div className="row">
                                                    <div className="col  mb-3">
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
                                                                    <img src={c1} alt="Category Image" className="mw-100" />
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
                                                                    <h3>The Classic</h3>
                                                                    <p>Fire Roasted pepper s, spanach</p>
                                                                    <h5 className="text-theme-primary font-weight-bold">$99.00</h5>
                                                                </div>
                                                            </div>
                                                            <div className="cardFooter">
                                                                <div className="cardAction">
                                                                    <div className="counterAction">
                                                                        <span className="qunatingCount">01</span>
                                                                        <button className="minus" type="button"><i className="fa fa-minus"></i></button>

                                                                        <button className="plus" type="button"><i className="fa fa-plus"></i></button>
                                                                    </div>
                                                                    <div className="addToCart">
                                                                        <button type="button">Add To Cart</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col  mb-3">
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
                                                                    <img src={c1} alt="Category Image" className="mw-100" />
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
                                                                    <h3>The Classic</h3>
                                                                    <p>Fire Roasted pepper s, spanach</p>
                                                                    <h5 className="text-theme-primary font-weight-bold">$99.00</h5>
                                                                </div>
                                                            </div>
                                                            <div className="cardFooter">
                                                                <div className="cardAction">
                                                                    <div className="counterAction">
                                                                        <span className="qunatingCount">01</span>
                                                                        <button className="minus" type="button"><i className="fa fa-minus"></i></button>

                                                                        <button className="plus" type="button"><i className="fa fa-plus"></i></button>
                                                                    </div>
                                                                    <div className="addToCart">
                                                                        <button type="button">Add To Cart</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col  mb-3">
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
                                                                    <img src={c1} alt="Category Image" className="mw-100" />
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
                                                                    <h3>The Classic</h3>
                                                                    <p>Fire Roasted pepper s, spanach</p>
                                                                    <h5 className="text-theme-primary font-weight-bold">$99.00</h5>
                                                                </div>
                                                            </div>
                                                            <div className="cardFooter">
                                                                <div className="cardAction">
                                                                    <div className="counterAction">
                                                                        <span className="qunatingCount">01</span>
                                                                        <button className="minus" type="button"><i className="fa fa-minus"></i></button>

                                                                        <button className="plus" type="button"><i className="fa fa-plus"></i></button>
                                                                    </div>
                                                                    <div className="addToCart">
                                                                        <button type="button">Add To Cart</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col  mb-3">
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
                                                                    <img src={c1} alt="Category Image" className="mw-100" />
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
                                                                    <h3>The Classic</h3>
                                                                    <p>Fire Roasted pepper s, spanach</p>
                                                                    <h5 className="text-theme-primary font-weight-bold">$99.00</h5>
                                                                </div>
                                                            </div>
                                                            <div className="cardFooter">
                                                                <div className="cardAction">
                                                                    <div className="counterAction">
                                                                        <span className="qunatingCount">01</span>
                                                                        <button className="minus" type="button"><i className="fa fa-minus"></i></button>

                                                                        <button className="plus" type="button"><i className="fa fa-plus"></i></button>
                                                                    </div>
                                                                    <div className="addToCart">
                                                                        <button type="button">Add To Cart</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col  mb-3">
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
                                                                    <img src={c1} alt="Category Image" className="mw-100" />
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
                                                                    <h3>The Classic</h3>
                                                                    <p>Fire Roasted pepper s, spanach</p>
                                                                    <h5 className="text-theme-primary font-weight-bold">$99.00</h5>
                                                                </div>
                                                            </div>
                                                            <div className="cardFooter">
                                                                <div className="cardAction">
                                                                    <div className="counterAction">
                                                                        <span className="qunatingCount">01</span>
                                                                        <button className="minus" type="button"><i className="fa fa-minus"></i></button>

                                                                        <button className="plus" type="button"><i className="fa fa-plus"></i></button>
                                                                    </div>
                                                                    <div className="addToCart">
                                                                        <button type="button">Add To Cart</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="row">
                                                    <div className="col  mb-3">
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
                                                                    <img src={c1} alt="Category Image" className="mw-100" />
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
                                                                    <h3>The Classic</h3>
                                                                    <p>Fire Roasted pepper s, spanach</p>
                                                                    <h5 className="text-theme-primary font-weight-bold">$99.00</h5>
                                                                </div>
                                                            </div>
                                                            <div className="cardFooter">
                                                                <div className="cardAction">
                                                                    <div className="counterAction">
                                                                        <span className="qunatingCount">01</span>
                                                                        <button className="minus" type="button"><i className="fa fa-minus"></i></button>

                                                                        <button className="plus" type="button"><i className="fa fa-plus"></i></button>
                                                                    </div>
                                                                    <div className="addToCart">
                                                                        <button type="button">Add To Cart</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col  mb-3">
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
                                                                    <img src={c1} alt="Category Image" className="mw-100" />
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
                                                                    <h3>The Classic</h3>
                                                                    <p>Fire Roasted pepper s, spanach</p>
                                                                    <h5 className="text-theme-primary font-weight-bold">$99.00</h5>
                                                                </div>
                                                            </div>
                                                            <div className="cardFooter">
                                                                <div className="cardAction">
                                                                    <div className="counterAction">
                                                                        <span className="qunatingCount">01</span>
                                                                        <button className="minus" type="button"><i className="fa fa-minus"></i></button>

                                                                        <button className="plus" type="button"><i className="fa fa-plus"></i></button>
                                                                    </div>
                                                                    <div className="addToCart">
                                                                        <button type="button">Add To Cart</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col  mb-3">
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
                                                                    <img src={c1} alt="Category Image" className="mw-100" />
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
                                                                    <h3>The Classic</h3>
                                                                    <p>Fire Roasted pepper s, spanach</p>
                                                                    <h5 className="text-theme-primary font-weight-bold">$99.00</h5>
                                                                </div>
                                                            </div>
                                                            <div className="cardFooter">
                                                                <div className="cardAction">
                                                                    <div className="counterAction">
                                                                        <span className="qunatingCount">01</span>
                                                                        <button className="minus" type="button"><i className="fa fa-minus"></i></button>

                                                                        <button className="plus" type="button"><i className="fa fa-plus"></i></button>
                                                                    </div>
                                                                    <div className="addToCart">
                                                                        <button type="button">Add To Cart</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col  mb-3">
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
                                                                    <img src={c1} alt="Category Image" className="mw-100" />
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
                                                                    <h3>The Classic</h3>
                                                                    <p>Fire Roasted pepper s, spanach</p>
                                                                    <h5 className="text-theme-primary font-weight-bold">$99.00</h5>
                                                                </div>
                                                            </div>
                                                            <div className="cardFooter">
                                                                <div className="cardAction">
                                                                    <div className="counterAction">
                                                                        <span className="qunatingCount">01</span>
                                                                        <button className="minus" type="button"><i className="fa fa-minus"></i></button>

                                                                        <button className="plus" type="button"><i className="fa fa-plus"></i></button>
                                                                    </div>
                                                                    <div className="addToCart">
                                                                        <button type="button">Add To Cart</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col  mb-3">
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
                                                                    <img src={c1} alt="Category Image" className="mw-100" />
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
                                                                    <h3>The Classic</h3>
                                                                    <p>Fire Roasted pepper s, spanach</p>
                                                                    <h5 className="text-theme-primary font-weight-bold">$99.00</h5>
                                                                </div>
                                                            </div>
                                                            <div className="cardFooter">
                                                                <div className="cardAction">
                                                                    <div className="counterAction">
                                                                        <span className="qunatingCount">01</span>
                                                                        <button className="minus" type="button"><i className="fa fa-minus"></i></button>

                                                                        <button className="plus" type="button"><i className="fa fa-plus"></i></button>
                                                                    </div>
                                                                    <div className="addToCart">
                                                                        <button type="button">Add To Cart</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>

                                        <div className="d-flex justify-content-center carouselArrows ">
                                            <a className="carousel-control-prevs" href="#mostPopularCarousel" role="button" data-slide="prev">
                                                <i className="fa fa-chevron-left" aria-hidden="true"></i>
                                            </a>
                                            <a className="carousel-control-nexts" href="#mostPopularCarousel" role="button" data-slide="next">
                                                <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            dessert

            trending dishes
            <section className="trendingDishes">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <div className="titleBox text-center">
                                <h1 className="font-weight-bold">SHOP OUR TRENDING DISHES</h1>
                            </div>
                        </div>
                    </div>



                    <div id="trendingDishes" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col mb-3">
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
                                                    <img src={c1} alt="Category Image" className="mw-100" />
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
                                                    <h3>The Classic</h3>
                                                    <p>Fire Roasted pepper s, spanach</p>
                                                    <h5 className="text-theme-primary font-weight-bold">$99.00</h5>
                                                </div>
                                            </div>
                                            <div className="cardFooter">
                                                <div className="cardAction">
                                                    <div className="counterAction">
                                                        <span className="qunatingCount">01</span>
                                                        <button className="minus" type="button"><i className="fa fa-minus"></i></button>

                                                        <button className="plus" type="button"><i className="fa fa-plus"></i></button>
                                                    </div>
                                                    <div className="addToCart">
                                                        <button type="button">Add To Cart</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col mb-3">
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
                                                    <img src={c1} alt="Category Image" className="mw-100" />
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
                                                    <h3>The Classic</h3>
                                                    <p>Fire Roasted pepper s, spanach</p>
                                                    <h5 className="text-theme-primary font-weight-bold">$99.00</h5>
                                                </div>
                                            </div>
                                            <div className="cardFooter">
                                                <div className="cardAction">
                                                    <div className="counterAction">
                                                        <span className="qunatingCount">01</span>
                                                        <button className="minus" type="button"><i className="fa fa-minus"></i></button>

                                                        <button className="plus" type="button"><i className="fa fa-plus"></i></button>
                                                    </div>
                                                    <div className="addToCart">
                                                        <button type="button">Add To Cart</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col mb-3">
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
                                                    <img src={c1} alt="Category Image" className="mw-100" />
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
                                                    <h3>The Classic</h3>
                                                    <p>Fire Roasted pepper s, spanach</p>
                                                    <h5 className="text-theme-primary font-weight-bold">$99.00</h5>
                                                </div>
                                            </div>
                                            <div className="cardFooter">
                                                <div className="cardAction">
                                                    <div className="counterAction">
                                                        <span className="qunatingCount">01</span>
                                                        <button className="minus" type="button"><i className="fa fa-minus"></i></button>

                                                        <button className="plus" type="button"><i className="fa fa-plus"></i></button>
                                                    </div>
                                                    <div className="addToCart">
                                                        <button type="button">Add To Cart</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col mb-3">
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
                                                    <img src={c1} alt="Category Image" className="mw-100" />
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
                                                    <h3>The Classic</h3>
                                                    <p>Fire Roasted pepper s, spanach</p>
                                                    <h5 className="text-theme-primary font-weight-bold">$99.00</h5>
                                                </div>
                                            </div>
                                            <div className="cardFooter">
                                                <div className="cardAction">
                                                    <div className="counterAction">
                                                        <span className="qunatingCount">01</span>
                                                        <button className="minus" type="button"><i className="fa fa-minus"></i></button>

                                                        <button className="plus" type="button"><i className="fa fa-plus"></i></button>
                                                    </div>
                                                    <div className="addToCart">
                                                        <button type="button">Add To Cart</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col mb-3">
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
                                                    <img src={c1} alt="Category Image" className="mw-100" />
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
                                                    <h3>The Classic</h3>
                                                    <p>Fire Roasted pepper s, spanach</p>
                                                    <h5 className="text-theme-primary font-weight-bold">$99.00</h5>
                                                </div>
                                            </div>
                                            <div className="cardFooter">
                                                <div className="cardAction">
                                                    <div className="counterAction">
                                                        <span className="qunatingCount">01</span>
                                                        <button className="minus" type="button"><i className="fa fa-minus"></i></button>

                                                        <button className="plus" type="button"><i className="fa fa-plus"></i></button>
                                                    </div>
                                                    <div className="addToCart">
                                                        <button type="button">Add To Cart</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item ">
                                <div className="row">
                                    <div className="col mb-3">
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
                                                    <img src={c1} alt="Category Image" className="mw-100" />
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
                                                    <h3>The Classic</h3>
                                                    <p>Fire Roasted pepper s, spanach</p>
                                                    <h5 className="text-theme-primary font-weight-bold">$99.00</h5>
                                                </div>
                                            </div>
                                            <div className="cardFooter">
                                                <div className="cardAction">
                                                    <div className="counterAction">
                                                        <span className="qunatingCount">01</span>
                                                        <button className="minus" type="button"><i className="fa fa-minus"></i></button>

                                                        <button className="plus" type="button"><i className="fa fa-plus"></i></button>
                                                    </div>
                                                    <div className="addToCart">
                                                        <button type="button">Add To Cart</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col mb-3">
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
                                                    <img src={c1} alt="Category Image" className="mw-100" />
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
                                                    <h3>The Classic</h3>
                                                    <p>Fire Roasted pepper s, spanach</p>
                                                    <h5 className="text-theme-primary font-weight-bold">$99.00</h5>
                                                </div>
                                            </div>
                                            <div className="cardFooter">
                                                <div className="cardAction">
                                                    <div className="counterAction">
                                                        <span className="qunatingCount">01</span>
                                                        <button className="minus" type="button"><i className="fa fa-minus"></i></button>

                                                        <button className="plus" type="button"><i className="fa fa-plus"></i></button>
                                                    </div>
                                                    <div className="addToCart">
                                                        <button type="button">Add To Cart</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col mb-3">
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
                                                    <img src={c1} alt="Category Image" className="mw-100" />
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
                                                    <h3>The Classic</h3>
                                                    <p>Fire Roasted pepper s, spanach</p>
                                                    <h5 className="text-theme-primary font-weight-bold">$99.00</h5>
                                                </div>
                                            </div>
                                            <div className="cardFooter">
                                                <div className="cardAction">
                                                    <div className="counterAction">
                                                        <span className="qunatingCount">01</span>
                                                        <button className="minus" type="button"><i className="fa fa-minus"></i></button>

                                                        <button className="plus" type="button"><i className="fa fa-plus"></i></button>
                                                    </div>
                                                    <div className="addToCart">
                                                        <button type="button">Add To Cart</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col mb-3">
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
                                                    <img src={c1} alt="Category Image" className="mw-100" />
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
                                                    <h3>The Classic</h3>
                                                    <p>Fire Roasted pepper s, spanach</p>
                                                    <h5 className="text-theme-primary font-weight-bold">$99.00</h5>
                                                </div>
                                            </div>
                                            <div className="cardFooter">
                                                <div className="cardAction">
                                                    <div className="counterAction">
                                                        <span className="qunatingCount">01</span>
                                                        <button className="minus" type="button"><i className="fa fa-minus"></i></button>

                                                        <button className="plus" type="button"><i className="fa fa-plus"></i></button>
                                                    </div>
                                                    <div className="addToCart">
                                                        <button type="button">Add To Cart</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col mb-3">
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
                                                    <img src={c1} alt="Category Image" className="mw-100" />
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
                                                    <h3>The Classic</h3>
                                                    <p>Fire Roasted pepper s, spanach</p>
                                                    <h5 className="text-theme-primary font-weight-bold">$99.00</h5>
                                                </div>
                                            </div>
                                            <div className="cardFooter">
                                                <div className="cardAction">
                                                    <div className="counterAction">
                                                        <span className="qunatingCount">01</span>
                                                        <button className="minus" type="button"><i className="fa fa-minus"></i></button>

                                                        <button className="plus" type="button"><i className="fa fa-plus"></i></button>
                                                    </div>
                                                    <div className="addToCart">
                                                        <button type="button">Add To Cart</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="d-flex justify-content-center carouselArrows">
                            <a className="carousel-control-prevs" href="#trendingDishes" role="button" data-slide="prev">
                                <i className="fa fa-chevron-left" aria-hidden="true"></i>
                            </a>
                            <a className="carousel-control-nexts" href="#trendingDishes" role="button" data-slide="next">
                                <i className="fa fa-chevron-right" aria-hidden="true"></i>
                            </a>
                        </div>

                    </div>



                </div>
            </section>


            Beverages near

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

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 mb-3">
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
                                        <img src={c1} alt="Category Image" className="mw-100" />
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
                                        <h3>The Classic</h3>
                                        <p>Fire Roasted pepper s, spanach</p>
                                        <h5 className="text-theme-primary font-weight-bold">$99.00</h5>
                                    </div>
                                </div>
                                <div className="cardFooter">
                                    <div className="cardAction">
                                        <div className="counterAction">
                                            <span className="qunatingCount">01</span>
                                            <button className="minus" type="button"><i className="fa fa-minus"></i></button>

                                            <button className="plus" type="button"><i className="fa fa-plus"></i></button>
                                        </div>
                                        <div className="addToCart">
                                            <button type="button">Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
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
                                        <img src={c1} alt="Category Image" className="mw-100" />
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
                                        <h3>The Classic</h3>
                                        <p>Fire Roasted pepper s, spanach</p>
                                        <h5 className="text-theme-primary font-weight-bold">$99.00</h5>
                                    </div>
                                </div>
                                <div className="cardFooter">
                                    <div className="cardAction">
                                        <div className="counterAction">
                                            <span className="qunatingCount">01</span>
                                            <button className="minus" type="button"><i className="fa fa-minus"></i></button>

                                            <button className="plus" type="button"><i className="fa fa-plus"></i></button>
                                        </div>
                                        <div className="addToCart">
                                            <button type="button">Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
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
                                        <img src={c1} alt="Category Image" className="mw-100" />
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
                                        <h3>The Classic</h3>
                                        <p>Fire Roasted pepper s, spanach</p>
                                        <h5 className="text-theme-primary font-weight-bold">$99.00</h5>
                                    </div>
                                </div>
                                <div className="cardFooter">
                                    <div className="cardAction">
                                        <div className="counterAction">
                                            <span className="qunatingCount">01</span>
                                            <button className="minus" type="button"><i className="fa fa-minus"></i></button>

                                            <button className="plus" type="button"><i className="fa fa-plus"></i></button>
                                        </div>
                                        <div className="addToCart">
                                            <button type="button">Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
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
                                        <img src={c1} alt="Category Image" className="mw-100" />
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
                                        <h3>The Classic</h3>
                                        <p>Fire Roasted pepper s, spanach</p>
                                        <h5 className="text-theme-primary font-weight-bold">$99.00</h5>
                                    </div>
                                </div>
                                <div className="cardFooter">
                                    <div className="cardAction">
                                        <div className="counterAction">
                                            <span className="qunatingCount">01</span>
                                            <button className="minus" type="button"><i className="fa fa-minus"></i></button>

                                            <button className="plus" type="button"><i className="fa fa-plus"></i></button>
                                        </div>
                                        <div className="addToCart">
                                            <button type="button">Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
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
                                        <img src={c1} alt="Category Image" className="mw-100" />
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
                                        <h3>The Classic</h3>
                                        <p>Fire Roasted pepper s, spanach</p>
                                        <h5 className="text-theme-primary font-weight-bold">$99.00</h5>
                                    </div>
                                </div>
                                <div className="cardFooter">
                                    <div className="cardAction">
                                        <div className="counterAction">
                                            <span className="qunatingCount">01</span>
                                            <button className="minus" type="button"><i className="fa fa-minus"></i></button>

                                            <button className="plus" type="button"><i className="fa fa-plus"></i></button>
                                        </div>
                                        <div className="addToCart">
                                            <button type="button">Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
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
                                        <img src={c1} alt="Category Image" className="mw-100" />
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
                                        <h3>The Classic</h3>
                                        <p>Fire Roasted pepper s, spanach</p>
                                        <h5 className="text-theme-primary font-weight-bold">$99.00</h5>
                                    </div>
                                </div>
                                <div className="cardFooter">
                                    <div className="cardAction">
                                        <div className="counterAction">
                                            <span className="qunatingCount">01</span>
                                            <button className="minus" type="button"><i className="fa fa-minus"></i></button>

                                            <button className="plus" type="button"><i className="fa fa-plus"></i></button>
                                        </div>
                                        <div className="addToCart">
                                            <button type="button">Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
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
                                        <img src={c1} alt="Category Image" className="mw-100" />
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
                                        <h3>The Classic</h3>
                                        <p>Fire Roasted pepper s, spanach</p>
                                        <h5 className="text-theme-primary font-weight-bold">$99.00</h5>
                                    </div>
                                </div>
                                <div className="cardFooter">
                                    <div className="cardAction">
                                        <div className="counterAction">
                                            <span className="qunatingCount">01</span>
                                            <button className="minus" type="button"><i className="fa fa-minus"></i></button>

                                            <button className="plus" type="button"><i className="fa fa-plus"></i></button>
                                        </div>
                                        <div className="addToCart">
                                            <button type="button">Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
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
                                        <img src={c1} alt="Category Image" className="mw-100" />
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
                                        <h3>The Classic</h3>
                                        <p>Fire Roasted pepper s, spanach</p>
                                        <h5 className="text-theme-primary font-weight-bold">$99.00</h5>
                                    </div>
                                </div>
                                <div className="cardFooter">
                                    <div className="cardAction">
                                        <div className="counterAction">
                                            <span className="qunatingCount">01</span>
                                            <button className="minus" type="button"><i className="fa fa-minus"></i></button>

                                            <button className="plus" type="button"><i className="fa fa-plus"></i></button>
                                        </div>
                                        <div className="addToCart">
                                            <button type="button">Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            Beverages near

            <section className="beverages">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <div className="titleBox d-flex align-items-center justify-content-center">
                                <h1 className="font-weight-bold text-center">RECOMMENDATIONS</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col mb-3">
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
                                        <img src={c1} alt="Category Image" className="mw-100" />
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
                                        <h3>The Classic</h3>
                                        <p>Fire Roasted pepper s, spanach</p>
                                        <h5 className="text-theme-primary font-weight-bold">$99.00</h5>
                                    </div>
                                </div>
                                <div className="cardFooter">
                                    <div className="cardAction">
                                        <div className="counterAction">
                                            <span className="qunatingCount">01</span>
                                            <button className="minus" type="button"><i className="fa fa-minus"></i></button>

                                            <button className="plus" type="button"><i className="fa fa-plus"></i></button>
                                        </div>
                                        <div className="addToCart">
                                            <button type="button">Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-3">
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
                                        <img src={c1} alt="Category Image" className="mw-100" />
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
                                        <h3>The Classic</h3>
                                        <p>Fire Roasted pepper s, spanach</p>
                                        <h5 className="text-theme-primary font-weight-bold">$99.00</h5>
                                    </div>
                                </div>
                                <div className="cardFooter">
                                    <div className="cardAction">
                                        <div className="counterAction">
                                            <span className="qunatingCount">01</span>
                                            <button className="minus" type="button"><i className="fa fa-minus"></i></button>

                                            <button className="plus" type="button"><i className="fa fa-plus"></i></button>
                                        </div>
                                        <div className="addToCart">
                                            <button type="button">Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-3">
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
                                        <img src={c1} alt="Category Image" className="mw-100" />
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
                                        <h3>The Classic</h3>
                                        <p>Fire Roasted pepper s, spanach</p>
                                        <h5 className="text-theme-primary font-weight-bold">$99.00</h5>
                                    </div>
                                </div>
                                <div className="cardFooter">
                                    <div className="cardAction">
                                        <div className="counterAction">
                                            <span className="qunatingCount">01</span>
                                            <button className="minus" type="button"><i className="fa fa-minus"></i></button>

                                            <button className="plus" type="button"><i className="fa fa-plus"></i></button>
                                        </div>
                                        <div className="addToCart">
                                            <button type="button">Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-3">
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
                                        <img src={c1} alt="Category Image" className="mw-100" />
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
                                        <h3>The Classic</h3>
                                        <p>Fire Roasted pepper s, spanach</p>
                                        <h5 className="text-theme-primary font-weight-bold">$99.00</h5>
                                    </div>
                                </div>
                                <div className="cardFooter">
                                    <div className="cardAction">
                                        <div className="counterAction">
                                            <span className="qunatingCount">01</span>
                                            <button className="minus" type="button"><i className="fa fa-minus"></i></button>

                                            <button className="plus" type="button"><i className="fa fa-plus"></i></button>
                                        </div>
                                        <div className="addToCart">
                                            <button type="button">Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-3">
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
                                        <img src={c1} alt="Category Image" className="mw-100" />
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
                                        <h3>The Classic</h3>
                                        <p>Fire Roasted pepper s, spanach</p>
                                        <h5 className="text-theme-primary font-weight-bold">$99.00</h5>
                                    </div>
                                </div>
                                <div className="cardFooter">
                                    <div className="cardAction">
                                        <div className="counterAction">
                                            <span className="qunatingCount">01</span>
                                            <button className="minus" type="button"><i className="fa fa-minus"></i></button>

                                            <button className="plus" type="button"><i className="fa fa-plus"></i></button>
                                        </div>
                                        <div className="addToCart">
                                            <button type="button">Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>



            bakery

            <section className="bakery">
                <div className="container-fluid">
                    <div className="row justify-content-between">
                        <div className="col-md-5 mb-3">
                            <div className="bakeryLeftSection">
                                <div className="titleBox d-flex align-items-center gap-10">
                                    <h1 className="font-weight-bold">Snacks</h1>
                                    <div className="catFilter">
                                        <div className="dineIN mb-2 genralBtn">
                                            <div className="form-group mb-0">
                                                <i className="fa fa-search"></i>
                                                <input type="text" placeholder="Search Favorite Food..." className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bakeryContent">
                                    <p>Wheatear it’s a party of one or a party of ten, we’ve got you with epic desserts.</p>
                                </div>
                                <div className="offerCat">
                                    <div className="titleBox d-flex align-items-center mb-3">
                                        <div className="grid pr-2">
                                            <button type="button"><i className="fa fa-server" aria-hidden="true"></i></button>
                                        </div>
                                        <h4 className="font-weight-bold mb-0">Offers & Category:</h4>
                                    </div>
                                    <div className="catFilter d-flex align-items-center flex-wrap mb-3">
                                        <div className="dineIN genralBtn">
                                            <button type="button" className="primaryButton btn w-100 bg-white"> Most Popular</button>
                                        </div>
                                        <div className="dineIN genralBtn">
                                            <button type="button" className="primaryButton btn w-100 bg-white"> Top Rated</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <div className="offerCard">
                                            <div className="offerImage">
                                                <img src={c1} alt="Offers" />
                                            </div>
                                            <div className="offerContent">
                                                <h4>North Beach Cafe & Creamy</h4>
                                                <p><i className="fa fa-star"></i>3.8(15) Homburger
                                                    $5.99 delivery</p>
                                            </div>
                                            <div className="offerButton">
                                                <button type="button" className="primaryButton btn">View Store</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <div className="offerCard">
                                            <div className="offerImage">
                                                <img src={c1} alt="Offers" />
                                            </div>
                                            <div className="offerContent">
                                                <h4>North Beach Cafe & Creamy</h4>
                                                <p><i className="fa fa-star"></i>3.8(15) Homburger
                                                    $5.99 delivery</p>
                                            </div>
                                            <div className="offerButton">
                                                <button type="button" className="primaryButton btn">View Store</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">


                            <div id="snacksCarousel" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">

                                        <div className="row">
                                            <div className="col-xl-4 col-md-6 mb-3">
                                                <div className="categoryCard shadow">
                                                    <div className="cardHeader">
                                                        <div className="topMetas">
                                                            <div className="tags wishList">
                                                                <button className="button"><i className="fa fa-heart"></i></button>
                                                            </div>
                                                        </div>
                                                        <div className="cardImage offerThumb">
                                                            <img src={c1} alt="Category Image" className="mw-100" />
                                                        </div>

                                                        <div className="topMeta">
                                                            <div className="companyLogo tags">
                                                                <button className="button"><img src={mac} alt="MAc" /></button>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="offerContent text-center">
                                                        <h4>Dunkin</h4>
                                                        <p><i className="fa fa-star"></i>3.8(15) Homburger
                                                            $5.99 delivery</p>
                                                    </div>
                                                    <div className="offerButton text-center">
                                                        <button type="button" className="primaryButton btn">View Store</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-6 mb-3">
                                                <div className="categoryCard shadow">
                                                    <div className="cardHeader">
                                                        <div className="topMetas">
                                                            <div className="tags wishList">
                                                                <button className="button"><i className="fa fa-heart"></i></button>
                                                            </div>
                                                        </div>
                                                        <div className="cardImage offerThumb">
                                                            <img src={c1} alt="Category Image" className="mw-100" />
                                                        </div>

                                                        <div className="topMeta">
                                                            <div className="companyLogo tags">
                                                                <button className="button"><img src={mac} alt="MAc" /></button>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="offerContent text-center">
                                                        <h4>Dunkin</h4>
                                                        <p><i className="fa fa-star"></i>3.8(15) Homburger
                                                            $5.99 delivery</p>
                                                    </div>
                                                    <div className="offerButton text-center">
                                                        <button type="button" className="primaryButton btn">View Store</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-6 mb-3">
                                                <div className="categoryCard shadow">
                                                    <div className="cardHeader">
                                                        <div className="topMetas">
                                                            <div className="tags wishList">
                                                                <button className="button"><i className="fa fa-heart"></i></button>
                                                            </div>
                                                        </div>
                                                        <div className="cardImage offerThumb">
                                                            <img src={c1} alt="Category Image" className="mw-100" />
                                                        </div>

                                                        <div className="topMeta">
                                                            <div className="companyLogo tags">
                                                                <button className="button"><img src={mac} alt="MAc" /></button>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="offerContent text-center">
                                                        <h4>Dunkin</h4>
                                                        <p><i className="fa fa-star"></i>3.8(15) Homburger
                                                            $5.99 delivery</p>
                                                    </div>
                                                    <div className="offerButton text-center">
                                                        <button type="button" className="primaryButton btn">View Store</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-6 mb-3">
                                                <div className="categoryCard shadow">
                                                    <div className="cardHeader">
                                                        <div className="topMetas">
                                                            <div className="tags wishList">
                                                                <button className="button"><i className="fa fa-heart"></i></button>
                                                            </div>
                                                        </div>
                                                        <div className="cardImage offerThumb">
                                                            <img src={c1} alt="Category Image" className="mw-100" />
                                                        </div>

                                                        <div className="topMeta">
                                                            <div className="companyLogo tags">
                                                                <button className="button"><img src={mac} alt="MAc" /></button>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="offerContent text-center">
                                                        <h4>Dunkin</h4>
                                                        <p><i className="fa fa-star"></i>3.8(15) Homburger
                                                            $5.99 delivery</p>
                                                    </div>
                                                    <div className="offerButton text-center">
                                                        <button type="button" className="primaryButton btn">View Store</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-6 mb-3">
                                                <div className="categoryCard shadow">
                                                    <div className="cardHeader">
                                                        <div className="topMetas">
                                                            <div className="tags wishList">
                                                                <button className="button"><i className="fa fa-heart"></i></button>
                                                            </div>
                                                        </div>
                                                        <div className="cardImage offerThumb">
                                                            <img src={c1} alt="Category Image" className="mw-100" />
                                                        </div>

                                                        <div className="topMeta">
                                                            <div className="companyLogo tags">
                                                                <button className="button"><img src={mac} alt="MAc" /></button>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="offerContent text-center">
                                                        <h4>Dunkin</h4>
                                                        <p><i className="fa fa-star"></i>3.8(15) Homburger
                                                            $5.99 delivery</p>
                                                    </div>
                                                    <div className="offerButton text-center">
                                                        <button type="button" className="primaryButton btn">View Store</button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xl-4 col-md-6 mb-3">
                                                <div className="categoryCard shadow">
                                                    <div className="cardHeader">
                                                        <div className="topMetas">
                                                            <div className="tags wishList">
                                                                <button className="button"><i className="fa fa-heart"></i></button>
                                                            </div>
                                                        </div>
                                                        <div className="cardImage offerThumb">
                                                            <img src={c1} alt="Category Image" className="mw-100" />
                                                        </div>

                                                        <div className="topMeta">
                                                            <div className="companyLogo tags">
                                                                <button className="button"><img src={mac} alt="MAc" /></button>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="offerContent text-center">
                                                        <h4>Dunkin</h4>
                                                        <p><i className="fa fa-star"></i>3.8(15) Homburger
                                                            $5.99 delivery</p>
                                                    </div>
                                                    <div className="offerButton text-center">
                                                        <button type="button" className="primaryButton btn">View Store</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">

                                        <div className="row">
                                            <div className="col-xl-4 col-md-6 mb-3">
                                                <div className="categoryCard shadow">
                                                    <div className="cardHeader">
                                                        <div className="topMetas">
                                                            <div className="tags wishList">
                                                                <button className="button"><i className="fa fa-heart"></i></button>
                                                            </div>
                                                        </div>
                                                        <div className="cardImage offerThumb">
                                                            <img src={c1} alt="Category Image" className="mw-100" />
                                                        </div>

                                                        <div className="topMeta">
                                                            <div className="companyLogo tags">
                                                                <button className="button"><img src={mac} alt="MAc" /></button>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="offerContent text-center">
                                                        <h4>Dunkin</h4>
                                                        <p><i className="fa fa-star"></i>3.8(15) Homburger
                                                            $5.99 delivery</p>
                                                    </div>
                                                    <div className="offerButton text-center">
                                                        <button type="button" className="primaryButton btn">View Store</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-6 mb-3">
                                                <div className="categoryCard shadow">
                                                    <div className="cardHeader">
                                                        <div className="topMetas">
                                                            <div className="tags wishList">
                                                                <button className="button"><i className="fa fa-heart"></i></button>
                                                            </div>
                                                        </div>
                                                        <div className="cardImage offerThumb">
                                                            <img src={c1} alt="Category Image" className="mw-100" />
                                                        </div>

                                                        <div className="topMeta">
                                                            <div className="companyLogo tags">
                                                                <button className="button"><img src={mac} alt="MAc" /></button>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="offerContent text-center">
                                                        <h4>Dunkin</h4>
                                                        <p><i className="fa fa-star"></i>3.8(15) Homburger
                                                            $5.99 delivery</p>
                                                    </div>
                                                    <div className="offerButton text-center">
                                                        <button type="button" className="primaryButton btn">View Store</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-6 mb-3">
                                                <div className="categoryCard shadow">
                                                    <div className="cardHeader">
                                                        <div className="topMetas">
                                                            <div className="tags wishList">
                                                                <button className="button"><i className="fa fa-heart"></i></button>
                                                            </div>
                                                        </div>
                                                        <div className="cardImage offerThumb">
                                                            <img src={c1} alt="Category Image" className="mw-100" />
                                                        </div>

                                                        <div className="topMeta">
                                                            <div className="companyLogo tags">
                                                                <button className="button"><img src={mac} alt="MAc" /></button>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="offerContent text-center">
                                                        <h4>Dunkin</h4>
                                                        <p><i className="fa fa-star"></i>3.8(15) Homburger
                                                            $5.99 delivery</p>
                                                    </div>
                                                    <div className="offerButton text-center">
                                                        <button type="button" className="primaryButton btn">View Store</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-6 mb-3">
                                                <div className="categoryCard shadow">
                                                    <div className="cardHeader">
                                                        <div className="topMetas">
                                                            <div className="tags wishList">
                                                                <button className="button"><i className="fa fa-heart"></i></button>
                                                            </div>
                                                        </div>
                                                        <div className="cardImage offerThumb">
                                                            <img src={c1} alt="Category Image" className="mw-100" />
                                                        </div>

                                                        <div className="topMeta">
                                                            <div className="companyLogo tags">
                                                                <button className="button"><img src={mac} alt="MAc" /></button>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="offerContent text-center">
                                                        <h4>Dunkin</h4>
                                                        <p><i className="fa fa-star"></i>3.8(15) Homburger
                                                            $5.99 delivery</p>
                                                    </div>
                                                    <div className="offerButton text-center">
                                                        <button type="button" className="primaryButton btn">View Store</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-6 mb-3">
                                                <div className="categoryCard shadow">
                                                    <div className="cardHeader">
                                                        <div className="topMetas">
                                                            <div className="tags wishList">
                                                                <button className="button"><i className="fa fa-heart"></i></button>
                                                            </div>
                                                        </div>
                                                        <div className="cardImage offerThumb">
                                                            <img src={c1} alt="Category Image" className="mw-100" />
                                                        </div>

                                                        <div className="topMeta">
                                                            <div className="companyLogo tags">
                                                                <button className="button"><img src={mac} alt="MAc" /></button>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="offerContent text-center">
                                                        <h4>Dunkin</h4>
                                                        <p><i className="fa fa-star"></i>3.8(15) Homburger
                                                            $5.99 delivery</p>
                                                    </div>
                                                    <div className="offerButton text-center">
                                                        <button type="button" className="primaryButton btn">View Store</button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-xl-4 col-md-6 mb-3">
                                                <div className="categoryCard shadow">
                                                    <div className="cardHeader">
                                                        <div className="topMetas">
                                                            <div className="tags wishList">
                                                                <button className="button"><i className="fa fa-heart"></i></button>
                                                            </div>
                                                        </div>
                                                        <div className="cardImage offerThumb">
                                                            <img src={c1} alt="Category Image" className="mw-100" />
                                                        </div>

                                                        <div className="topMeta">
                                                            <div className="companyLogo tags">
                                                                <button className="button"><img src={mac} alt="MAc" /></button>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="offerContent text-center">
                                                        <h4>Dunkin</h4>
                                                        <p><i className="fa fa-star"></i>3.8(15) Homburger
                                                            $5.99 delivery</p>
                                                    </div>
                                                    <div className="offerButton text-center">
                                                        <button type="button" className="primaryButton btn">View Store</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="d-flex justify-content-start carouselArrows">
                                    <a className="carousel-control-prevs" href="#snacksCarousel" role="button" data-slide="prev">
                                        <i className="fa fa-chevron-left" aria-hidden="true"></i>
                                    </a>
                                    <a className="carousel-control-nexts" href="#snacksCarousel" role="button" data-slide="next">
                                        <i className="fa fa-chevron-right" aria-hidden="true"></i>
                                    </a>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </section>



            Sponserd

            <section className="sponsored">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <div className="titleBox d-flex align-items-center ">
                                <h1 className="font-weight-bold ">Sponsored restaurant in your area</h1>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="img_div">
                                <img src="../images/s1.png" className="img-fluid" alt="" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="img_div">
                                <img src="../images/s2.png" className="img-fluid" alt="" />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="img_div">
                                <img src="../images/s3.png" className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            subscription

            <section className="subscription">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 mb-3 px-md-0">
                            <div className="theme-color leftSubs">
                                <div className="row align-items-center">
                                    <div className="col-md-4">
                                        <img src="../images/pp.png" alt="" className="mw-100" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="SubscriptionHeader">
                                            <h4>Buy 2 Subscription Meal Box And Get 1 Free</h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
                                            <h5>1’000+</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-3 px-md-0">
                            <div className="yellowColor leftSubs text-center h-100">
                                <div className="subsContent">
                                    <div className="SubscriptionHeader p-0">
                                        <h4>Log In/ Sign Up As Vendor</h4>
                                        <p>Serving quality products with unrivaled customer service</p>
                                    </div>
                                    <div className="subsButn">
                                        <button className="btn bg-white" type="button">Log in</button>
                                        <button className="btn bg-white" type="button">Sign Up</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            about us

            <section className="aboutus_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="titleBox text-center py-5">
                                <h2 className="text-white">About Us</h2>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="aboutus-content-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="titleBox text-center py-5">
                                <h2 className="text-dark">About FreshMeal</h2>
                            </div>
                        </div>
                        <div className="col-md-5 px-5">
                            <div className="img_div">
                                <img src={ab_2} className="img-fluid" alt="" />
                            </div>

                        </div>
                        <div className="col-md-7 px-5">
                            <div className="content">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to </p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            our team


            <section className="ourTeam">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="titleBox text-center py-5">
                                <h2 className="text-dark">Our Team</h2>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="teamCard">
                                <div className="img_div text-center">
                                    <img src="../images/t1.png" className="img-fluid" alt="" />
                                </div>
                                <div className="detail">
                                    <div className="titleBox text-center mt-2">
                                        <h3 className="text-dark">Chef Jeo Smith</h3>
                                    </div>
                                    <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry</p>
                                    <p className="text-center social_links"><a href="javascript:;"><i className="fa fa-facebook-official" aria-hidden="true"></i></a>
                                        <a href="javascript:;"> <i className="fa fa-twitter px-2" aria-hidden="true"></i></a>
                                        <a href="javascript:;"> <i className="fa fa-instagram" aria-hidden="true"></i></a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="teamCard">
                                <div className="img_div text-center">
                                    <img src="../images/t2.png" className="img-fluid" alt="" />
                                </div>
                                <div className="detail">
                                    <div className="titleBox text-center mt-2">
                                        <h3 className="text-dark">Chef Jeo Smith</h3>
                                    </div>
                                    <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry</p>
                                    <p className="text-center social_links"><a href="javascript:;"><i className="fa fa-facebook-official" aria-hidden="true"></i></a>
                                        <a href="javascript:;"> <i className="fa fa-twitter px-2" aria-hidden="true"></i></a>
                                        <a href="javascript:;"> <i className="fa fa-instagram" aria-hidden="true"></i></a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="teamCard">
                                <div className="img_div text-center">
                                    <img src="../images/t3.png" className="img-fluid" alt="" />
                                </div>
                                <div className="detail">
                                    <div className="titleBox text-center mt-2">
                                        <h3 className="text-dark">Chef Jeo Smith</h3>
                                    </div>
                                    <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry</p>
                                    <p className="text-center social_links"><a href="javascript:;"><i className="fa fa-facebook-official" aria-hidden="true"></i></a>
                                        <a href="javascript:;"> <i className="fa fa-twitter px-2" aria-hidden="true"></i></a>
                                        <a href="javascript:;"> <i className="fa fa-instagram" aria-hidden="true"></i></a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="teamCard">
                                <div className="img_div text-center">
                                    <img src="../images/t4.png" className="img-fluid" alt="" />
                                </div>
                                <div className="detail">
                                    <div className="titleBox text-center mt-2">
                                        <h3 className="text-dark">Chef Jeo Smith</h3>
                                    </div>
                                    <p className="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry</p>
                                    <p className="text-center social_links"><a href="javascript:;"><i className="fa fa-facebook-official" aria-hidden="true"></i></a>
                                        <a href="javascript:;"> <i className="fa fa-twitter px-2" aria-hidden="true"></i></a>
                                        <a href="javascript:;"> <i className="fa fa-instagram" aria-hidden="true"></i></a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            aboutCompany

            <section className="aboutCompanyBanner">
                <div className="container-fluid contentShow">
                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <div className="titleBox text-center">
                                <h3 className="text-white">LOGO HERE</h3>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="infoBox">
                                <div className="imageInfo">
                                    <img src="../images/l1.png" alt="" className="mw-100" />
                                </div>
                                <div className="infoContent">
                                    <h3>Address</h3>
                                    <p><i className="fa fa-building"></i>Plaza x. y Floor XYZ</p>
                                    <p><i className="fa fa-envelope"></i><a href="mailto: info@gmail.com" className="text-white">info@gmail.com</a></p>
                                    <p><i className="fa fa-phone"></i><a href="tel: 123-3646-466" className="text-white">123-3646-466</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="infoBox">
                                <div className="imageInfo">
                                    <img src="../images/l1.png" alt="" className="mw-100" />
                                </div>
                                <div className="infoContent">
                                    <h3>Open Time</h3>
                                    <p>24/7 Open</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="infoBox">
                                <div className="imageInfo">
                                    <img src="../images/l3.png" alt="" className="mw-100" />
                                </div>
                                <div className="infoContent">
                                    <h3>Subcribe Newsletter</h3>
                                    <div className="formField">
                                        <i className="fa fa-send"></i>
                                        <input type="email" className="form-control" placeholder="Email Address" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 mt-4">
                            <p>Copyright 2023 All Right Reserved.   Privacy Policy   Terms & Conditions   Faq </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="extraLinks">
                <div className="container">
                    <div className="justify-content-center row">
                        <div className="col-md-3">
                            <ul>
                                <li><a href="#">Get Help</a></li>
                                <li><a href="#">Buy Gift Cards</a></li>
                                <li><a href="#">Add your restaurant</a></li>
                                <li><a href="#">Sign up to deliver</a></li>
                                <li><a href="#">Create a business account</a></li>
                                <li><a href="#">Promotion</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <ul>
                                <li><a href="#">Restaurants near me</a></li>
                                <li><a href="#">view all cities</a></li>
                                <li><a href="#">view all countries</a></li>
                                <li><a href="#">Pickup near me</a></li>
                                <li><a href="#">About Uber Eats</a></li>
                                <li><a href="#">English</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="lastLink">
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Pricing</a></li>
                            </ul>
                            <p> Do not sell or share my personal information his site protected by reCAPTCHA and the google Provacy Policy and Terms of Servie apply</p>
                            <p>2023 Emmanuel -Food Marketplace Inc.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}


