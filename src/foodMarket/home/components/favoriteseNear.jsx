import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, addToCart, incrementQuantity, decrementQuantity } from '../../../components/redux/actions';
import {  Get_all_product } from '../../../components/services/catigories'
import { useState, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap';

import  { useRef } from "react";
export function FavoriteseNear (){
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products?.products);
        const loading = useSelector((state) => state.products.loading);
      
    console.log ("Redux product favourites " + products)
    
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
      slidesToScroll: 1
    };
     
    const ImageUrl = "https://custom2.mystagingserver.site/food-stadium/public/"
    const [all_product, setAll_product] = useState([]);
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
    }, []);



    useEffect(() => {
        dispatch(fetchProducts());
      }, [dispatch]);


return(
    <div>
  <section className="favoriteseNear">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <div className="titleBox d-flex align-items-center">
                                <h1 className="font-weight-bold">Favorites Near You</h1>
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

                    <div id="homeFavouriteCarousel" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#homeFavouriteCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#homeFavouriteCarousel" data-slide-to="1"></li>
                            <li data-target="#homeFavouriteCarousel" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row">
                                 {products.map(data => ( 
                                     <div className="col-md-4 col-xl-3 mb-3">
                                        <div className="favouriteCard">
                                            <div className="leftCard">
                                                <div className="whishListIcon">
                                                    <button type="button"><i className="fa fa-heart-o"></i></button>
                                                </div>
                                                <div className="imageThumbnail">
                                                    <img src={ImageUrl + data?.feature_image} alt="Favorite" />
                                                </div>
                                            </div>
                                            <div className="rightCard">
                                                <div className="favContent">
                                                    <div className="reviewsStar">
                                                        <p>Reviews 3.5k
                                                            <span>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                            </span>
                                                        </p>
                                                    </div>
                                                    <div className="favContent">
                                                        <h3>{data.title}</h3>
                                                        <p className="addressData"><i className="fa fa-map-marker"></i> 4564 US-40 (468) 366-788 $$$</p>
                                                        <p className="foodPerson">4.8 (106) 98% Good Food </p>
                                                        <p className="deliveries">$2.99 Delivery <span>Fee 15-30</span></p>
                                                    </div>
                                                    <div className="favButton">
                                                        <button type="button" onClick={() => dispatch(addToCart(data))} className="primaryButton btn w-100">Place Order</button>
                                                        <button type="button" className="primaryButton btn w-100">Book Seat</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>)) }
                                  
                            
                                </div>
                            </div>
                        </div>

                        {/* <div className="d-flex justify-content-start carouselArrows ">
                            <a className="carousel-control-prevs" href="#homeFavouriteCarousel"    role="button" data-slide="prev">
                                <i className="fa fa-chevron-left" aria-hidden="true"></i>
                            </a>
                            <a className="carousel-control-nexts" href="#homeFavouriteCarousel"   role="button" data-slide="next">
                                <i className="fa fa-chevron-right" aria-hidden="true"></i>

                            </a>
                        </div> */}


                    </div>


                </div>
            </section>

    </div>
)
}