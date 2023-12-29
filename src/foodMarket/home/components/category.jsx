import { useState, useEffect  } from 'react'
import { PopularCategories } from './popularCategories.jsx'
import '../../css/style.css'
import { Menue } from './menue'
import { useDispatch , useSelector } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
import { addToCart  , updateCartItem} from '../../../components/redux/actions';
import { Cart } from '../../../components/redux/carts'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import React from 'react';
import Slider from "react-slick";
import { useRef } from "react";

import { Catigory_view } from './catigory_view'

import { Get_all_product, filterProducts, filterMenu, filterDietary, filterPrice   , Zipcode} from '../../../components/services/catigories'

export function Category() {
     const cartItems = useSelector((state) => state.cart.items);
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
                setLoading(true);

                // Simulate a loading time of 2 seconds
                const loadingTime = 100;
                const startTime = new Date().getTime();
// Zipcode
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

                const elapsedTime = new Date().getTime() - startTime;
                const remainingTime = Math.max(0, loadingTime - elapsedTime);

                // Simulate loading with a timeout
                setTimeout(() => {
                    setFilteredData(data?.data || []);
                    setAllProducts(data?.data || []);
                    setLoading(false);
                });
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [selectedCatigoryId, selectedMenuId, dietary, minPrice, maxPrice ]);

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
        const firstProductStoreId = cartItems.length > 0 ? cartItems[0].store_id : null;
     
        if (cartItems.length === 2 && firstProductStoreId !== product.store_id) {
            // Remove the first product from the cart
            const updatedCardItems = cartItems.slice(1);
     
            dispatch(updateCartItem(updatedCardItems));
     
            toast.info('Removed the first vendor product from the order.', {
                position: toast.POSITION.TOP_RIGHT,
            });
        }

        dispatch(addToCart(product));
    
        // Update the quantity of the added product in the local state
        setAllProducts((prevProducts) =>
            prevProducts.map((p) =>
                p?.id === product?.id ? { ...p, quantity: 1 } : p
            )
        );
    
        // Show toast indicating that the product has been added to the cart
        toast.success(`${product.title} added to cart!`, {
            position: toast.POSITION.TOP_RIGHT,
        });
    };
    const [zipcode, setZipCode] = useState();
    // console.log("zipcode" , zipcode)
    // const handlezipcode = () => {
    //   // If the zipcode is empty, show all products
    //   if (zipcode.trim() === "") {
    //     setAllProducts((prevProducts) => [...prevProducts]); // Copy the array to trigger a re-render
    //     setZipCode("")
    // } else {
    //     // Filter products based on the provided zipcode
    //     setAllProducts((prevProducts) =>
    //       prevProducts?.filter((product) => product?.zipcodes?.includes(zipcode))
    //     );
    //     setZipCode("")  
    // }

    // };

    const handlezipcode = () => {
        console.log(typeof(parseInt(zipcode)));
         
        if (zipcode.trim() === "") {
          setAllProducts((prevProducts) => [...prevProducts]);  
          setZipCode("");
        } else {
          // Filter products based on the provided zipcode

          setAllProducts((prevProducts) =>
            prevProducts.filter((product) =>
              product?.zipcodes?.some((code) => code.includes(parseInt(zipcode)))
             
            )
          );
          setZipCode("");
        }
      };
      
    // const handlezipcode = () => { 
    //     if (zipcode.trim() === "") {
    //       setAllProducts((prevProducts) => [...prevProducts]);  
    //       setFoundProducts([]);  
    //     } else { 
    //       const filteredProducts = allProducts.filter((product) => product?.zipcodes?.includes(4563));
       
    //       setFoundProducts(filteredProducts);
       
    //       setAllProducts([...filteredProducts]);
    //     }
       
    //     if (zipcode.trim() === "") {
    //       setZipCode("");
    //     }
    //   };

//     const [zipcode, setZipCode] = useState("");
 

 
// const [foundProducts, setFoundProducts] = useState([]); // State to store filtered products

// console.log("zipcode", zipcode);

// const handlezipcode = () => {
//     console.log("handlezipcode", zipcode);
 
//   if (zipcode.trim() === "") {
//     setFoundProducts([]);
//     setAllProducts((prevProducts) => [...prevProducts]); // Copy the array to trigger a re-render
//   } else {
//     // Filter products based on the provided zipcode
//     const filteredProducts = allProducts.filter((product) => {
//       const zipcodes = product?.zipcodes || [];
//       return zipcodes.includes(zipcode);
//     });
 
//     setFoundProducts(filteredProducts);
 
//     if (filteredProducts.length === 0) {
//       console.log("No products found for the provided zipcode"); 
//     }
 
//     setAllProducts([...filteredProducts]);
//   }
 
//   if (zipcode.trim() === "") {
//     setZipCode("");
//   }
// };

    

 

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
                    <Menue   
                    maxPrice={maxPrice} minPrice={minPrice} setSelectedMenuId={setSelectedMenuId} setMinPrice={setMinPrice} handletoprateddata={handletoprateddata} handlealldata={handlealldata}
                        setDietary={setDietary} setMaxPrice={setMaxPrice} handlepopulerdata={handlepopulerdata} isRadioHidden={isRadioHidden}
                    />

                    <div className="col-md-6 col-xl-7">
                        <div className="categoryListing py-3 h-100">
                            <Catigory_view setSelectedCatigoryId={setSelectedCatigoryId} />

                            <PopularCategories
                            // datas={products}
                                data={allProducts}
                                handleIncrement={handleIncrement}
                                handleDecrement={handleDecrement}
                                handleAddToCart={handleAddToCart}
                                loading={loading}
                            />
 


                        </div>
                    </div>
                    <Cart zip={zipcode} setZipCode={setZipCode} handlezipcode={handlezipcode} />

                </div>
            </div>
            <ToastContainer />
        </section>

    )
}