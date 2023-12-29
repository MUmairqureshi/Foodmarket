import {useEffect} from 'react'
import '../css/style.css'
import m_img from '../../assets/images/m_img.png'
import ab_bg from '../../assets/images/ab_bg.png'
import filter from '../../assets/images/filter.png'
import mac from '../../assets/images/mac.png'
import ab_2 from '../../assets/images/ab_2.png'
 import {PopularCategory} from './popularcatigory'
import {Trending_dishes} from './trending_disher'
import clock_icon from '../../assets/images/clock_icon.png'
import {Bakery} from '../home/components/bakery'
import {Wenderdata} from '../../components/services/catigories'
import c1 from '../../assets/images/c1.png'
import {Beverages} from './beraverages'
import { useParams } from 'react-router-dom';

 import {Beverages_Recommendations} from '../home/components/beverages_recommendation'
import { Form } from 'react-bootstrap'
import { useState } from 'react'
export function Vendor() {


    const[loading  , setLoading ] = useState(true)
 

const [wenderdata , setWenderdata] = useState([])
const { id } = useParams()
// console.log("id" , id)
    // useEffect(() => {
        
    //     const fetchData = async (id) => {
    //         console.log("id" , id)
    //         try {
                // const data = await Wenderdata(id);
    //             setWenderdata(data?.data || []);
    //             // setFilteredBeverages(data?.data || []);
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchData();
    // }, []);
    let componentMounted = true
 
    useEffect(() => {
        const getproduct = async () => {
            setLoading(true)
            const data = await fetch(`https://custom2.mystagingserver.site/food-stadium/public/api/product_by_store/${id}`)


            if (componentMounted) {
                const venderdata = await data.json()
                const vemdorproduct = venderdata.data
                setWenderdata(venderdata)
                setLoading(false)
            }
            return () => {
                componentMounted = false
            }
        }
        getproduct()
    }, [])
    console.log("wenderdata" , wenderdata)
    const ImageUrl = "https://custom2.mystagingserver.site/food-stadium/public/"
    return (
        <div className=" ">
            <section className="aboutUsBanner" >
                <img src={ab_bg} className="main_img img-fluid" alt="" />
                <div className="company_logo">
                    <img src={ImageUrl + wenderdata?.data?.store_detail.logo} className=" img-fluid" alt="" />
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
                              

                                <div className="popularCategories">
                                    




                                                 
                        <PopularCategory data={wenderdata} setWenderdata={setWenderdata}/>

                    </div>
                </div>
                </div>
                </div>
                </div>
            </section>
 
            <section className="trendingDishes">
                <div className="container-fluid">
                    {/* <div className="row">
                        <div className="col-md-12 mb-3">
                            <div className="titleBox text-center">
                                <h1 className="font-weight-bold">SHOP OUR TRENDING DISHES</h1>
                            </div>
                        </div>
                    </div> */}
                     <Trending_dishes data={wenderdata}/>

 


                </div>
            </section>




        

<Beverages data={wenderdata}/>
           
           {/* <Beverages_Recommendations /> */}

 

            

{/* <Bakery/> */}

            
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


