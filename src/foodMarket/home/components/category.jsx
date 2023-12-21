import { useState, useEffect } from 'react'

import { PopularCategories } from './popularCategories'

import { Menue } from './menue'

import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, addToCart, incrementQuantity, decrementQuantity } from '../../../components/redux/actions';
import { Cart } from '../../../components/redux/carts'
import { Increment, Decrement, Remove } from '../../../redux/hook'
import { Product_deatail } from '../../productDetail/product_detail'


import React from 'react';
import Slider from "react-slick";
import { useRef } from "react";

import { Catigory_view } from './catigory_view'

import { Get_all_product, Get_all_product_detail } from '../../../components/services/catigories'

export function Category() { 
 
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
 

 

    return (


        <section className="homeCategory">
            <div className="container-fluid">
                <div className="row">
                    <Menue />

                    <div className="col-md-6 col-xl-7">
                        <div className="categoryListing py-3 h-100">
                            <Catigory_view />

                            <PopularCategories />
                        </div>
                    </div> 
                    <Cart />

                </div>
            </div>
        </section>

    )
}