import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { Menu_listing, Dietary_listing } from '../../../components/services/catigories'
export function Menue({isRadioHidden ,  setSelectedMenuId, setDietary, minPrice, setMinPrice, setMaxPrice, maxPrice  , handlepopulerdata , handletoprateddata , handlealldata}) {


    const ImageUrl = "https://custom2.mystagingserver.site/food-stadium/public/"
    const [mainmenu, setMainmenu] = useState([]);
    const [dietary_listing, setDietary_listing] = useState([]);


    const handleProductClick = async (productId) => {
        try {
            setSelectedMenuId(productId);

            return "Success";
        } catch (error) {
            console.error('Error handling product click:', error);
            return "Error";
        }
    };

    const dietary_Click = async (productId) => {
        try {
            setDietary(productId);

            return "Success";
        } catch (error) {
            console.error('Error handling product click:', error);
            return "Error";
        }
    };



  
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await Dietary_listing();
                setDietary_listing(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await Menu_listing();
                setMainmenu(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    const [filter, setFilter] = useState([]);



    return (
        <div className="col-md-3 col-xl-2">
            <div className="categoryFilter bg-white shadow p-md-3 h-100">
                <div className="menuList">
                    <div className="titleBox text-center mb-3">
                        <h3>Menu</h3>
                    </div>
                    <div className="featuredBtn mb-3">
                        <button type="button" className="primaryButton btn w-100">Featured Items</button>
                    </div>
                    <div className="categoryData">
                        {mainmenu.data?.map(data => (<ul>
                            <li onClick={() => handleProductClick(data.id)} key={data.id} className="nav-link px-md-0"><Link className="catLink text-dark" ><i className="fa fa-home" aria-hidden="true"></i> {data.name}</Link></li>
                        </ul>))}
                    </div>
                </div>

                <div className="priceRange mb-4">
                    <div className="titleBox text-center mb-3">
                        <h3>Price Range</h3>
                    </div>
                    <div className="priceField">
                        <div className="form-row align-items-center">
                            <div className="col">
                                <input type="number" className="form-control" placeholder="$ Min" value={minPrice}
                                    onChange={(e) => setMinPrice(e.target.value)} />
                            </div>

                            <div className="col">
                                <input type="number" className="form-control" placeholder="$ Max" value={maxPrice}
                                    onChange={(e) => setMaxPrice(e.target.value)} />
                                {/* <input className="form-control" placeholder="$ Max" type="number"
                                    value={maxPrice}
                                    onChange={(e) => setMaxPrice(e.target.value)} /> */}
                            </div>
                        </div>
                    </div>

                </div>

                <div className="Dietary mb-3">
                    <div className="titleBox text-center mb-3">
                        <h3>Dietary</h3>
                    </div>
                    {dietary_listing.data?.map(data => (
                        <div className="featuredBtn mb-3">
                            <button onClick={() => dietary_Click(data.id)} type="button" className="primaryButton btn w-100">{data.name}</button>
                        </div>

                    ))}

                </div>

                <div className="stores">
                    <div className="titleBox text-center mb-3">
                        <h3>All Stores</h3>
                        <p>Sort</p>
                    </div>
                    <div className="form-check">
                        <label for="picked">
                            <input className="form-check-input position-static" type="radio" name="stores" id="picked" value="popular" aria-label="..." /> Picked for you (Default)
                        </label>
                    </div>
                    <div className="form-check">
                        <label for="popular">
                        <input
        onClick={handlepopulerdata}
        className={`form-check-input position-static ${isRadioHidden ? 'hidden' : ''}`}
        type="radio"
        name="stores"
        id="popular"
        value="popular"
        aria-label="..."
      /> Most Popular
                        </label>
                    </div>
                    <div className="form-check">
                        <label for="rating">
                            <input onClick={handletoprateddata} className="form-check-input position-static" type="radio" name="stores" id="rating" value="rating" aria-label="..." /> Rating
                        </label>
                    </div>
                    <div className="form-check">
                        <label for="delivery">
                            <input className="form-check-input position-static" type="radio" name="stores" id="delivery" value="delivery" aria-label="..." /> Delivery</label>
                    </div>

                </div>
            </div>
        </div>
    )
}