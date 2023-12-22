import React , {useState , useEffect} from "react";

import { Menu_listing , Dietary_listing , filterProducts} from '../../../components/services/catigories'
export function Menue(){

     
    const ImageUrl = "https://custom2.mystagingserver.site/food-stadium/public/"
    const [mainmenu, setMainmenu] = useState([]);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');




    const [filter_listing, setFilter_listing] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://custom2.mystagingserver.site/food-stadium/public/api/filter_product/?category_id=2&menu_id=3&dietary_id=1&min_price=300&max_price=304', {
                    method: 'GET',
                  });
                  const data = await res.json();
               console.log("filterdata" , data)
                setFilter_listing(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

console.log("filter_listing" , filter_listing)



    const [dietary_listing, setDietary_listing] = useState([]);

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
    return(
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
                        <li key={data.id} className="nav-link px-md-0"><a className="catLink text-dark" href="#"><i className="fa fa-home" aria-hidden="true"></i> {data.name}</a></li>
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
                            <input className="form-control" placeholder="$ Max" type="number"
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(e.target.value)} />
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
                        <button type="button" className="primaryButton btn w-100">{data.name}</button>
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
                        <input className="form-check-input position-static" type="radio" name="stores" id="popular" value="popular" aria-label="..." /> Most Popular
                    </label>
                </div>
                <div className="form-check">
                    <label for="rating">
                        <input className="form-check-input position-static" type="radio" name="stores" id="rating" value="rating" aria-label="..." /> Rating
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