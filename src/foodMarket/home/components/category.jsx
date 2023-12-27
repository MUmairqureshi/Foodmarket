import { useState, useEffect } from 'react'
import { PopularCategories } from './popularCategories'
import '../../css/style.css'
import { Menue } from './menue'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../components/redux/actions';
import { Cart } from '../../../components/redux/carts'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import React from 'react';
import Slider from "react-slick";
import { useRef } from "react";

import { Catigory_view } from './catigory_view'

import { Get_all_product, filterProducts, filterMenu, filterDietary, filterPrice } from '../../../components/services/catigories'

export function Category() {
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

    const [dietary, setDietary] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [isRadioHidden, setIsRadioHidden] = useState(false);

    const [filteredData, setFilteredData] = useState([]);
    const [selectedCatigoryId, setSelectedCatigoryId] = useState('');
    const [selectedMenuId, setSelectedMenuId] = useState('');
    const [loading, setLoading] = useState(true);

    const [populerdata, setPopulardata] = useState(false)

    const [allProducts, setAllProducts] = useState([]);
    console.log("allProducts", allProducts)

    console.log("dietary", dietary)
    useEffect(() => {
        const fetchData = async () => {
            try {
                let data;

                if (selectedCatigoryId) {
                    data = await filterProducts(selectedCatigoryId);
                } else if (selectedMenuId) {
                    data = await filterMenu(selectedMenuId);

                    setAllProducts([]);
                } else if (dietary) {
                    data = await filterDietary(dietary);

                    setAllProducts([]);
                } else if (minPrice || maxPrice) {

                    data = await filterPrice(minPrice, maxPrice);
                    setAllProducts([]);
                } else {
                    data = await Get_all_product();
                    setAllProducts(data?.data || []);
                }


                setFilteredData(data?.data || []);

                setAllProducts(data?.data || []);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [selectedCatigoryId, selectedMenuId, dietary, minPrice, maxPrice]);

    console.log("")
    const handleIncrement = (productId) => {
        setAllProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === productId
                    ? { ...product, quantity: product.quantity + 1 }
                    : product
            )
        );
    };

    const handleDecrement = (productId) => {
        setAllProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === productId && product.quantity > 0
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
            )
        );
    };



    const handleAddToCart = (product) => {
        dispatch(addToCart(product));

        setAllProducts((prevProducts) =>
            prevProducts.map((p) =>
                p?.id === product?.id ? { ...p, quantity: 1 } : p,

            )
        );

        // Show toast
        toast.success(`${product.title} added to cart!`, {
            position: toast.POSITION.TOP_RIGHT,
        });
    };





    const handlepopulerdata = () => {

        const popularDataId = 1;

        setAllProducts((prevProducts) => prevProducts?.filter(beverage => beverage.is_popular === popularDataId));
        setIsRadioHidden(true)
    };
    const handletoprateddata = () => {
        const toprateddata = 1;

        setAllProducts((prevProducts) => prevProducts?.filter(beverage => beverage.is_trending === toprateddata));

     };

    const handlealldata = () => {
        setAllProducts(allProducts);
    };


     

    return (


        <section className="homeCategory">
            <div className="container-fluid">
                <div className="row">
                    <Menue maxPrice={maxPrice} minPrice={minPrice} setSelectedMenuId={setSelectedMenuId} setMinPrice={setMinPrice} handletoprateddata={handletoprateddata} handlealldata={handlealldata}
                        setDietary={setDietary} setMaxPrice={setMaxPrice} handlepopulerdata={handlepopulerdata} isRadioHidden={isRadioHidden}
                    />

                    <div className="col-md-6 col-xl-7">
                        <div className="categoryListing py-3 h-100">
                            <Catigory_view setSelectedCatigoryId={setSelectedCatigoryId} />

                            <PopularCategories

                                data={allProducts}
                                handleIncrement={handleIncrement}
                                handleDecrement={handleDecrement}
                                handleAddToCart={handleAddToCart}
                                loading={loading}
                            />



                        </div>
                    </div>
                    <Cart />

                </div>
            </div>
            <ToastContainer />
        </section>

    )
}