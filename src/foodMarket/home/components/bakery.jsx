import React from "react";
import { Button, Card } from 'react-bootstrap';

import Slider from 'react-slick';  
import  { useRef } from "react";
import {Link} from 'react-router-dom'
import mac from '../../../assets/images/mac.png' 
import c1 from '../../../assets/images/c1.png'
import { Get_all_product ,  Wenderdata } from '../../../components/services/catigories'
import { useState, useEffect } from 'react'
export function Bakery(){
    const ImageUrl = "https://custom2.mystagingserver.site/food-stadium/public/"
    const [all_product, setAll_product] = useState([]);
     

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
      slidesToShow: 3,
      slidesToScroll: 1,
      rows : 3,
      

      responsive: [
        {
          breakpoint: 1024, // Medium devices (tablets, 768px and up)
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            rows: 2,
          },
        },
        {
          breakpoint: 768, // Small devices (landscape phones, 576px and up)
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 1,
          },
        },
        {
          breakpoint: 576, // Extra small devices (portrait phones, 576px and down)
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 1,
          },
        },
    ]

    };

  //   const handleProductClick = async (productId) => {
  //     console.log(productId)

  //     setShowModal(true);
  //     try {
  //         const response = await Wenderdata(productId)
  //         console.log('abc', response)
  //         setProductDetails(response);
  //         setShowModal(true);
  //     } catch (error) {
  //         console.error('Error fetching product details:', error);
  //     }
  // };

    useEffect(() => {
  const fetchData = async () => {
            try {
                const data = await Get_all_product();
                setAll_product(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    },[]);

    return(
 <div>
      <section className="bakery">
                <div className="container-fluid">
                    <div className="row justify-content-between">
                        <div className="col-md-5 mb-3">
                            <div className="bakeryLeftSection">
                                <div className="titleBox d-flex align-items-center gap-10">
                                    <h1 className="font-weight-bold">Bakery</h1>
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
                                                <Link   to="/cart" className="primaryButton btn">View Store</Link>
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

                            <div id="homeBakeryCarousel" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                    <Slider  ref={sliderRef} {...settings}>
                               
                                      
                                           {all_product.data?.map(data => (
                                         <div className="row">
                                            <div className="col-xl-4 col-md-6 mb-3">
                                            <Card  style={{ width: '14em' }} className="categoryCard shadow">
                                              <div className="cardHeader">
                                                <div className="topMetas">
                                                  <div className="tags wishList">
                                                    <Button className="button"><i className="fa fa-heart"></i></Button>
                                                  </div>
                                                </div>
                                                <div className="cardImage offerThumb">
                                                  <Card.Img src={ImageUrl + data?.feature_image} alt="Category Image" className="mw-100" />
                                                </div>
                                                <div className="topMeta">
                                                  <div className="companyLogo tags">
                                                    <Button className="button"><img src={mac} alt="MAc" /></Button>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="offerContent text-center">
                                                <Card.Title>{data.title.slice(0 , 12)}</Card.Title>
                                                <Card.Text>
                                                  <i className="fa fa-star"></i> 3.8(15) Homburger ${data.product_price} delivery
                                                </Card.Text>
                                              </div>
                                              <div className="offerButton text-center">
                                                <Link   to={`wender/${data.store_id}`} type="button" className="primaryButton btn">View Store</Link>
                                              </div>
                                            </Card>
                                            </div>      </div>
                                           ))}
                                           
                                           </Slider>
                                            
                                            
 
                                       
                                    </div>
                                </div>

                                <div className="d-flex justify-content-start carouselArrows homeBakery">
                                    <a className="carousel-control-prevs" onClick={next} href="#homeBakeryCarousel" role="button" data-slide="prev">
                                        <i className="fa fa-chevron-left" aria-hidden="true"></i>
                                    </a>
                                    <a className="carousel-control-nexts" onClick={previous} href="#homeBakeryCarousel" role="button" data-slide="next">
                                        <i className="fa fa-chevron-right" aria-hidden="true"></i>

                                    </a>
                                </div>

                            </div>

                        </div>
    </div>
                </div>
            </section>
    </div>
        )
}