



// import CloseButton from 'react-bootstrap/CloseButton';





import user from '../../assets/images/user.png'
import { useState, useMemo, useEffect } from 'react';


import mac from '../../assets/images/mac.png'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, addToCart, incrementvariationQuantity, incrementQuantity, decrementcariationQuantity } from '../../components/redux/actions';
import '../css/style.css'
import c1 from '../../assets/images/c1.png'



import Modal from 'react-bootstrap/Modal';
import { Tabs, Tab } from 'react-bootstrap';


export const Product_deatail = (props) => {


    const datas = props.productDetails?.data.id

    const cartItems = useSelector((state) => state.cart.items);
    console.log("cartItems", cartItems)

    //  in the cartItems come product and variation who selected check in this data?.variation_items who selected already  in the cartItems select the radiobutton 




    useEffect(() => {
        const productId = props.productDetails?.data.id
        const totalProductQuantity = cartItems.reduce((total, item) => {
            return item.id === productId ? total + item.quantity : total;
        }, 0);
        setNewQuantity(totalProductQuantity);
    }, [cartItems, props]);


    const handleChangeQuantity = (e) => {
        const inputValue = e.target.value;
        setNewQuantity(inputValue);
    };








    const data = props.productDetails?.data.product_price

    const dispatch = useDispatch();
    const [selectedVariations, setSelectedVariations] = useState({});




    const ImageUrl = "https://custom2.mystagingserver.site/food-stadium/public/"

    const [key, setKey] = useState('section1');




    const totaldata = selectedVariations?.price


    const [totalPrice, setTotalPrice] = useState(0);


    const calculateTotalPrice = () => {
        let productPrice = parseFloat(props.productDetails?.data.product_price);
        let variationPrice = 0;

        for (const variationId in selectedVariations) {
            const variation = selectedVariations[variationId];
            variationPrice += parseFloat(variation.price) * variation.quantity;
        }

        const total = productPrice + variationPrice;
        setTotalPrice(total);
    };

    useEffect(() => {
        calculateTotalPrice();
    }, [selectedVariations, props.productDetails?.data.product_price]);



    const handleAddToCart = () => {
        props.onHide()
        const selectedVariationsObject = {
            ...props.productDetails?.data,
            quantity: newQuantity,

            // variation: Object.values(selectedVariations),
            variation: Object.values(selectedVariations).map(variation => ({
                ...variation,
                quantity: newQuantity,
            })),


        };

        dispatch(addToCart(selectedVariationsObject));


        setSelectedVariations({});

    }

    const handleQuantityChange = (newQuantity) => {
        const productId = parseFloat(props.productDetails?.data.id);



        dispatch(incrementvariationQuantity(productId, newQuantity));


    };


    const [newQuantity, setNewQuantity] = useState(1);




    const [selectedVariationId, setSelectedVariationId] = useState(null);








    const handleToggleSelection = (variationId, itemId, selected) => {
        if (selected) {
            const selectedItem = props.productDetails?.data.variation
                .find((variation) => variation.id === variationId)
                .variation_items.find((item) => item.id === itemId);

            setSelectedVariations((prevVariations) => ({
                ...prevVariations,
                [variationId]: {
                    item_id: itemId,
                    ...selectedItem,
                    quantity: 1,
                },
            }));

            setSelectedVariationId(itemId);
        } else {
            setSelectedVariations((prevVariations) => {
                const updatedVariations = { ...prevVariations };
                delete updatedVariations[variationId];
                return updatedVariations;
            });

            setSelectedVariationId(null);
        }
    };
    // useEffect(() => {
    //     // Initialize selected variations based on cart items
    //     const initialSelectedVariations = {};

    //     cartItems.forEach((cartItem) => {
    //         const { variationId, itemId } = cartItem;
    //         initialSelectedVariations[variationId] = {
    //             item_id: itemId,
    //             // Add other properties as needed
    //         };
    //     });

    //     setSelectedVariations(initialSelectedVariations);
    // }, [cartItems]);

    // const handleToggleSelection = (variationId, itemId, selected) => {
    //     if (selected) {
    //         const selectedItem = props.productDetails?.data.variation
    //             .find((variation) => variation.id === variationId)
    //             .variation_items.find((item) => item.id === itemId);

    //         setSelectedVariations((prevVariations) => ({
    //             ...prevVariations,
    //             [variationId]: {
    //                 item_id: itemId,
    //                 ...selectedItem,
    //                 quantity: 1,
    //             },
    //         }));

    //         setSelectedVariationId(itemId);
    //     } else {
    //         setSelectedVariations((prevVariations) => {
    //             const updatedVariations = { ...prevVariations };
    //             delete updatedVariations[variationId];
    //             return updatedVariations;
    //         });

    //         setSelectedVariationId(null);
    //     }
    // };

    // const isVariationSelected = (variationId, itemId) => {
    //     return selectedVariations[variationId]?.item_id === itemId;
    // };




    // const handleToggleSelection = (variationId, itemId, selected) => {
    //     if (selected) {
    //         const selectedItem = props.productDetails?.data.variation
    //             .find((variation) => variation.id === variationId)
    //             .variation_items.find((item) => item.id === itemId);

    //         setSelectedVariations((prevVariations) => ({
    //             ...prevVariations,
    //             [variationId]: {
    //                 item_id: itemId,
    //                 ...selectedItem,
    //                 quantity: 1,
    //             },
    //         }));

    //         setSelectedVariationId(itemId);
    //     } else {
    //         setSelectedVariations((prevVariations) => {
    //             const updatedVariations = { ...prevVariations };
    //             delete updatedVariations[variationId];
    //             return updatedVariations;
    //         });

    //         setSelectedVariationId(null);
    //     }
    // };

    // const isVariationSelected = (variationId, itemId) => {
    //     return selectedVariations[variationId]?.item_id === itemId;
    // };




    // useEffect(() => {
    //     const cartItems = props.cartItems; // Replace with your actual cartItems logic

    //     // Update selectedVariations based on cartItems
    //     const updatedVariations = {};
    //     cartItems?.forEach((cartItem) => {
    //         const { variationId, itemId } = cartItem; // Replace with your actual property names
    //         const selectedItem = props.productDetails?.data?.variation
    //             .find((variation) => variation.id === variationId)
    //             .variation_items?.find((item) => item.id === itemId);

    //         updatedVariations[variationId] = {
    //             item_id: itemId,
    //             ...selectedItem,
    //             quantity: 1,
    //         };
    //     });

    //     setSelectedVariations(updatedVariations);

    //     // Update selectedVariationId based on cartItems
    //     if (cartItems?.length > 0) {
    //         setSelectedVariationId(cartItems[0].itemId); // Adjust this based on your logic for selecting the default variation
    //     }
    // }, [cartItems, props.productDetails?.data.variation]);

    // const handleToggleSelection = (variationId, itemId, selected) => {
    //     if (selected) {
    //         const selectedItem = props.productDetails?.data.variation
    //             .find((variation) => variation.id === variationId)
    //             .variation_items?.find((item) => item.id === itemId);

    //         setSelectedVariations((prevVariations) => ({
    //             ...prevVariations,
    //             [variationId]: {
    //                 item_id: itemId,
    //                 ...selectedItem,
    //                 quantity: 1,
    //             },
    //         }));

    //         setSelectedVariationId(itemId);
    //     } else {
    //         setSelectedVariations((prevVariations) => {
    //             const updatedVariations = { ...prevVariations };
    //             delete updatedVariations[variationId];
    //             return updatedVariations;
    //         });

    //         setSelectedVariationId(null);
    //     }
    // };

    // const isVariationSelected = (variationId, itemId) => {
    //     return selectedVariations[variationId]?.item_id === itemId;
    // };


    // useEffect(() => {
    //     // Update selectedVariations based on cartItems
    //     const updatedVariations = {};
    //     cartItems.forEach((cartItem) => {
    //         const { variationId, itemId } = cartItem;
    //         console.log("variationId" , variationId)
    //         const variation = props.productDetails?.data.variation.find((v) => v.id == 2);

    //         if (variation) {
    //             const selectedItem = variation.variation_items.find((item) => item.id == 5);

    //             updatedVariations[variationId] = {
    //                 item_id: itemId,
    //                 ...selectedItem,
    //                 quantity: 1,
    //             };
    //         }
    //     });

    //     setSelectedVariations(updatedVariations);

    //     // Update selectedVariationId based on cartItems
    //     if (cartItems.length > 0) {
    //         setSelectedVariationId(cartItems[0].itemId); // Adjust this based on your logic for selecting the default variation
    //     }
    // }, [cartItems, props.productDetails?.data.variation]);



























    // useEffect(() => {
    //     const updatedVariations = {};
    //     cartItems.forEach((cartItem) => {
    //         const { variationId, itemId } = cartItem;
    //         const variation = props.productDetails?.data.variation.find((v) => v.id === variationId);

    //         if (variation && variation.variation_items) {
    //             const selectedItem = variation.variation_items.find((item) => item.id === itemId);

    //             if (selectedItem) {
    //                 updatedVariations[variationId] = {
    //                     item_id: itemId,
    //                     ...selectedItem,
    //                     quantity: 1,
    //                 };
    //             }
    //         }
    //     });

    //     setSelectedVariations(updatedVariations);

    //     // Update selectedVariationId based on cartItems
    //     if (cartItems.length > 0) {
    //         setSelectedVariationId(cartItems[0].itemId); // Adjust this based on your logic for selecting the default variation
    //     }
    // }, [cartItems, props.productDetails?.data.variation]);

    // const handleToggleSelection = (variationId, itemId, selected) => {
    //     if (selected) {
    //         const selectedItem = props.productDetails?.data.variation
    //             .find((variation) => variation.id === variationId)
    //             .variation_items.find((item) => item.id === itemId);

    //         setSelectedVariations((prevVariations) => ({
    //             ...prevVariations,
    //             [variationId]: {
    //                 item_id: itemId,
    //                 ...selectedItem,
    //                 quantity: 1,
    //             },
    //         }));

    //         setSelectedVariationId(itemId);
    //     } else {
    //         setSelectedVariations((prevVariations) => {
    //             const updatedVariations = { ...prevVariations };
    //             delete updatedVariations[variationId];
    //             return updatedVariations;
    //         });

    //         setSelectedVariationId(null);
    //     }
    // };

    // const isVariationSelected = (variationId, itemId) => {
    //     console.log("variationId" , variationId)
    //     console.log("itemId" , itemId)

    //     return selectedVariations[variationId]?.item_id === itemId;
    // };












    // useEffect(() => {
    //     // Update selectedVariations based on cartItems
    //     const updatedVariations = {};
    //     cartItems?.forEach((cartItem) => {
    //         const { variationId, itemId } = cartItem;
    //         const selectedItem = props.productDetails?.data?.variation
    //             .find((variation) => variation.id === variationId)
    //             .variation_items.find((item) => item.id === itemId);

    //         updatedVariations[variationId] = {
    //             item_id: itemId,
    //             ...selectedItem,
    //             quantity: 1,
    //         };
    //     });

    //     setSelectedVariations(updatedVariations);

    //     // Update selectedVariationId based on cartItems
    //     if (cartItems.length > 0) {
    //         setSelectedVariationId(cartItems[0].itemId); // Adjust this based on your logic for selecting the default variation
    //     }
    // }, [cartItems, props.productDetails?.data.variation]);

    // const handleToggleSelection = (variationId, itemId, selected) => {
    //     if (selected) {
    //         const selectedItem = props.productDetails?.data.variation
    //             .find((variation) => variation.id === variationId)
    //             .variation_items.find((item) => item.id === itemId);

    //         setSelectedVariations((prevVariations) => ({
    //             ...prevVariations,
    //             [variationId]: {
    //                 item_id: itemId,
    //                 ...selectedItem,
    //                 quantity: 1,
    //             },
    //         }));

    //         setSelectedVariationId(itemId);
    //     } else {
    //         setSelectedVariations((prevVariations) => {
    //             const updatedVariations = { ...prevVariations };
    //             delete updatedVariations[variationId];
    //             return updatedVariations;
    //         });

    //         setSelectedVariationId(null);
    //     }
    // };

    // const isVariationSelected = (variationId, itemId) => {
    //     return selectedVariations[variationId]?.item_id === itemId;
    // };


    return (

        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >


            <section class="store_detail_section">
                <div class="container">
                    <div class="row">

                        <Modal.Header className="col-md-12">
                            <div id="contained-modal-title-vcenter" className="titleBox text-center">
                                <h1>Subscription Module for 5-day Meals</h1>
                            </div>
                            {/* Close button in flex container */}
                            <div id="contained-modal-title-vcenter" className="d-flex contained-modal-title-vcenter align-items-center text-center ">
                                <button type="button" className="btn-close  text-center " aria-label="Close" onClick={props.onHide}  >
                                    {/* Optionally, you can use an iconcLOSE */}
                                    {/* <i className="bi bi-x-lg"></i> */}
                                    {/* <CloseButton />;xX */}X
                                </button>
                            </div>
                        </Modal.Header>

                        <div class="col-md-5">
                            <div class="img_div">
                                <img src={ImageUrl + props.productDetails?.data.feature_image} class="img-fluid" alt="" />
                            </div>
                        </div>
                        <div class="col-md-7 align-self-center">
                            <div class="store_content">
                                <div class="titleBox mb-3">
                                    <h2>{props.productDetails?.data.title} </h2>

                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                    since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <h3>Price: <span class="text-theme-primary font-weight-bold">{props.productDetails?.data.product_price}</span></h3>
                                <p class="star">
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>

                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section class="store_tabbing_section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <Tabs
                                activeKey={key}
                                onSelect={(k) => setKey(k)} class="nav nav-tabs" id="myTab" role="tablist"
                            >           <Tab class="nav-item" eventKey="section1" title="Variations">
                                    <a class="nav-link active" id="variation-tab" data-toggle="tab" href="#variation" role="tab" aria-controls="variation" aria-selected="true">Variations</a>






                                    <div class="tab-pane fade show active" id="variation" role="tabpanel" aria-labelledby="variation-tab">
                                        <div id="accordion">
                                            {props.productDetails?.data.variation.map(data => (
                                                <div key={data?.id} class="card">
                                                    <div class="card-header" id={`heading${data?.id}`}>
                                                        <h5 class="mb-0">
                                                            <button class="btn btn-link" data-toggle="collapse" data-target={`#collapse${data?.id}`} aria-expanded="true" aria-controls={`collapse${data?.id}`}>
                                                                {data?.name} Selection*
                                                            </button>
                                                        </h5>
                                                    </div>

                                                    <div id={`collapse${data?.id}`} class="collapse" aria-labelledby={`heading${data?.id}`} data-parent="#accordion">
                                                        <div class="card-body">
                                                            {data?.variation_items?.map((item) => (
                                                                <div key={item.id} className="selection_div">
                                                                    <div className="">
                                                                        <input
                                                                            type="radio"
                                                                            name={`variation_${data?.id}`}
                                                                            onChange={(e) =>
                                                                                handleToggleSelection(data?.id, item?.id, e.target.checked)
                                                                            }
                                                                        />
                                                                    </div>
                                                                    <div className="order_img">
                                                                        <img src={ImageUrl + item?.image} className="img-fluid" alt="" />
                                                                    </div>
                                                                    <div className="order_name">
                                                                        <div className="titleBox">
                                                                            <h3>{item?.title}</h3>
                                                                        </div>
                                                                    </div>
                                                                    <div className="product_price ">
                                                                        <h3>${item?.price}</h3>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>





                                </Tab>
                                <Tab class="nav-item" eventKey="section2" title="Store Details">
                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Store Details</a>


                                    <div id="profile" role="tabpanel" aria-labelledby="profile-tab">

                                        <div class="store_detail">
                                            <div class="titleBox">
                                                <h3>Store Details*</h3>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero beatae architecto sequi? Placeat corporis iste hic officiis magni id atque
                                                    ipsam sed dolorum. Id, itaque. Deserunt tempora ab quia nostrum.</p>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero beatae architecto sequi? Placeat corporis iste hic officiis magni id atque
                                                    ipsam sed dolorum. Id, itaque. Deserunt tempora ab quia nostrum.</p>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero beatae architecto sequi? Placeat corporis iste hic officiis magni id atque
                                                    ipsam sed dolorum. Id, itaque. Deserunt tempora ab quia nostrum.</p>
                                            </div>
                                        </div>

                                    </div>



                                </Tab>
                                <Tab class="nav-item" eventKey="section3" title="Reviews">

                                    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Reviews</a>



                                    <div id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                        <div class="store_detail reviews_tabb">

                                            <div class="client_info">
                                                <div class="img_div">
                                                    <img src={user} class="img-fluid" alt="" />
                                                </div>
                                                <div class="client_name">
                                                    <div class="title">
                                                        <h3>Client Name</h3>
                                                    </div>
                                                    <p>Company Name</p>
                                                </div>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero beatae architecto sequi? Placeat corporis iste hic officiis magni id atque
                                                ipsam sed dolorum. Id, itaque. Deserunt tempora ab quia nostrum.</p>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero beatae architecto sequi? Placeat corporis iste hic officiis magni id atque
                                                ipsam sed dolorum. Id, itaque. Deserunt tempora ab quia nostrum.</p>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero beatae architecto sequi? Placeat corporis iste hic officiis magni id atque
                                                ipsam sed dolorum. Id, itaque. Deserunt tempora ab quia nostrum.</p>

                                        </div>
                                    </div>
                                </Tab>
                            </Tabs>
                            <div class="tab-content" id="myTabContent">


                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="store_extra_info">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="quntity_instructions d-flex align-items-center justify-content-between">
                                <div class="titleBox">
                                    <h3>Quantity <br /> Special Instructions?</h3>
                                </div>
                                <div class="p_quantity">
                                    <input
                                        type="number"
                                        id="quantity"
                                        name="quantity"
                                        value={newQuantity}
                                        onChange={handleChangeQuantity}
                                    />
                                </div>
                            </div>
                            <div class="text_area">
                                <textarea name="" id="" cols="30" rows="8" class="form-control">Add instructions...</textarea>
                            </div>
                            <div class="quntity_instructions d-flex align-items-center justify-content-between">
                                <div class="titleBox">
                                    <h3>Total Price</h3>
                                </div>
                                <div class="p_quantity">
                                    <h3>$ {totalPrice * newQuantity}</h3>
                                </div>
                            </div>
                            <div class="actionCart">
                                <button type="button" class="btn couponButton" onClick={handleAddToCart} >Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="recomendation_section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="titleBox mb-3">
                                <h2>Recomendations</h2>
                            </div>
                        </div>
                        <div class="col-md-4 mb-3">
                            <div class="categoryCard shadow">
                                <div class="cardHeader">
                                    <div class="topMeta">
                                        <div class="tags">
                                            <span>15%off</span>
                                        </div>
                                        <div class="tags wishList">
                                            <button class="button"><i class="fa fa-heart"></i></button>
                                        </div>
                                    </div>
                                    <div class="cardImage">
                                        <img src={c1} alt="Category Image" class="mw-100" />
                                    </div>

                                    <div class="topMeta">
                                        <div class="companyLogo tags">
                                            <button class="button"><img src={mac} alt="MAc" /></button>
                                        </div>
                                    </div>

                                </div>
                                <div class="cardBody">
                                    <div class="body-upper">
                                        <div class="ratingBox">
                                            <p class="mb-0">Reviews 3.5k</p>
                                            <p class="mb-0">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </p>
                                        </div>
                                        <div class="deliveryInfo">
                                            <div class="meter">
                                                <p class="mb-0"> 30-40 mins</p>
                                                <p class="mb-0 text-success">$0 Delivery</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="cardContent">
                                        <h3>The Classic</h3>
                                        <p>Fire Roasted pepper s, spanach</p>
                                        <h5 class="text-theme-primary font-weight-bold">$99.00</h5>
                                    </div>
                                </div>
                                <div class="cardFooter">
                                    <div class="cardAction">
                                        <div class="counterAction">
                                            <span class="qunatingCount">01</span>
                                            <button class="minus" type="button"><i class="fa fa-minus"></i></button>
                                            |
                                            <button class="plus" type="button"><i class="fa fa-plus"></i></button>
                                        </div>
                                        <div class="addToCart">
                                            <button type="button">Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-3">
                            <div class="categoryCard shadow">
                                <div class="cardHeader">
                                    <div class="topMeta">
                                        <div class="tags">
                                            <span>15%off</span>
                                        </div>
                                        <div class="tags wishList">
                                            <button class="button"><i class="fa fa-heart"></i></button>
                                        </div>
                                    </div>
                                    <div class="cardImage">
                                        <img src={c1} alt="Category Image" class="mw-100" />
                                    </div>

                                    <div class="topMeta">
                                        <div class="companyLogo tags">
                                            <button class="button"><img src={mac} alt="MAc" /></button>
                                        </div>
                                    </div>

                                </div>
                                <div class="cardBody">
                                    <div class="body-upper">
                                        <div class="ratingBox">
                                            <p class="mb-0">Reviews 3.5k</p>
                                            <p class="mb-0">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </p>
                                        </div>
                                        <div class="deliveryInfo">
                                            <div class="meter">
                                                <p class="mb-0"> 30-40 mins</p>
                                                <p class="mb-0 text-success">$0 Delivery</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="cardContent">
                                        <h3>The Classic</h3>
                                        <p>Fire Roasted pepper s, spanach</p>
                                        <h5 class="text-theme-primary font-weight-bold">$99.00</h5>
                                    </div>
                                </div>
                                <div class="cardFooter">
                                    <div class="cardAction">
                                        <div class="counterAction">
                                            <span class="qunatingCount">01</span>
                                            <button class="minus" type="button"><i class="fa fa-minus"></i></button>
                                            |
                                            <button class="plus" type="button"><i class="fa fa-plus"></i></button>
                                        </div>
                                        <div class="addToCart">
                                            <button type="button">Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col mb-3">
                            <div class="categoryCard shadow">
                                <div class="cardHeader">
                                    <div class="topMeta">
                                        <div class="tags">
                                            <span>15%off</span>
                                        </div>
                                        <div class="tags wishList">
                                            <button class="button"><i class="fa fa-heart"></i></button>
                                        </div>
                                    </div>
                                    <div class="cardImage">
                                        <img src={c1} alt="Category Image" class="mw-100" />
                                    </div>

                                    <div class="topMeta">
                                        <div class="companyLogo tags">
                                            <button class="button"><img src={mac} alt="MAc" /></button>
                                        </div>
                                    </div>

                                </div>
                                <div class="cardBody">
                                    <div class="body-upper">
                                        <div class="ratingBox">
                                            <p class="mb-0">Reviews 3.5k</p>
                                            <p class="mb-0">
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                                <i class="fa fa-star"></i>
                                            </p>
                                        </div>
                                        <div class="deliveryInfo">
                                            <div class="meter">
                                                <p class="mb-0"> 30-40 mins</p>
                                                <p class="mb-0 text-success">$0 Delivery</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="cardContent">
                                        <h3>The Classic</h3>
                                        <p>Fire Roasted pepper s, spanach</p>
                                        <h5 class="text-theme-primary font-weight-bold">$99.00</h5>
                                    </div>
                                </div>
                                <div class="cardFooter">
                                    <div class="cardAction">
                                        <div class="counterAction">
                                            <span class="qunatingCount">01</span>
                                            <button class="minus" type="button"><i class="fa fa-minus"></i></button>
                                            |
                                            <button class="plus" type="button"><i class="fa fa-plus"></i></button>
                                        </div>
                                        <div class="addToCart">
                                            <button type="button">Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section class="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <ul class="lastLink">
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
        </Modal>
    );
};

// export default Product_deatail;










































































// // .fixed-item {
// //     position: absolute;
// //     top: 50%;
// //     left: 50%;
// //     transform: translate(-50%, -50%);
// //   }





// // import CloseButton from 'react-bootstrap/CloseButton';





// import user from '../../assets/images/user.png'
// import { useState, useMemo, useEffect } from 'react';


// import mac from '../../assets/images/mac.png'
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchProducts, addToCart, incrementvariationQuantity, incrementQuantity, decrementcariationQuantity } from '../../components/redux/actions';
// import '../css/style.css'
// import c1 from '../../assets/images/c1.png'



// import Modal from 'react-bootstrap/Modal';
// import { Tabs, Tab } from 'react-bootstrap';


// export const Product_deatail = (props) => {
//     //   onHide

//     const datas = props.productDetails?.data.id

//     const cartItems = useSelector((state) => state.cart.items);

// console.log('cartItems' , cartItems)





//     useEffect(() => {
//         const productId = props.productDetails?.data.id
//         const totalProductQuantity = cartItems.reduce((total, item) => {
//             return item.id === productId ? total + item.quantity : total;
//         }, 0);
//         setNewQuantity(totalProductQuantity);
//     }, [cartItems, props]);


//     const handleChangeQuantity = (e) => {
//         const inputValue = e.target.value;
//         setNewQuantity(inputValue);
//     };








//     const data = props.productDetails?.data.product_price

//     const dispatch = useDispatch();
//     const [selectedVariations, setSelectedVariations] = useState([]);




//     const ImageUrl = "https://custom2.mystagingserver.site/food-stadium/public/"

//     const [key, setKey] = useState('section1');




//     const totaldata = selectedVariations.price


//     const [totalPrice, setTotalPrice] = useState(0);
//     console.log("totalPrice", totalPrice)

//     const calculateTotalPrice = () => {
//         let productPrice = parseFloat(props.productDetails?.data.product_price);
//         let variationPrice = 0;

//         for (const variationId in selectedVariations) {
//             const variation = selectedVariations[variationId];
//             variationPrice += parseFloat(variation.price) * variation.quantity;
//         }

//         const total = productPrice + variationPrice;
//         setTotalPrice(total);
//     };

//     useEffect(() => {
//         calculateTotalPrice();
//     }, [selectedVariations, props.productDetails?.data.product_price]);



//     const handleAddToCart = () => {
//         props.onHide()
//         const selectedVariationsObject = {
//             ...props.productDetails?.data,
//             quantity: newQuantity,

//             // variation: Object.values(selectedVariations),
//             variation: Object.values(selectedVariations).map(variation => ({
//                 ...variation,
//                 quantity: newQuantity,
//             })),


//         };

//         dispatch(addToCart(selectedVariationsObject));



//         // if (existingProductIndex !== -1) {
//         //   // Product already in cart, update variations or add new variations
//         // //   const updatedCart = [...cartItems];
//         // //   const existingProduct = updatedCart[existingProductIndex];

//         // //   updatedCart[existingProductIndex] = {
//         // //     ...existingProduct,
//         // //     variation: selectedVariations,
//         // //   };

//         // //   dispatch(addToCart(updatedCart));
//         // } else {
//         //   // Product not in cart, add it
//         //   dispatch(addToCart(selectedVariationsObject));
//         // }

//         // Reset selection and quantity after adding to the cart
//         setSelectedVariations({});
//         // setProductQuantity(1);
//     }
//     // const handleVariationQuantityChange = (newQuantity) => {
//     //     // props.productDetails?.data.forEach(product => {
//     //     //   if (product.id === productId) {
//     //     //     product?.variation.forEach(variation => {
//     //     dispatch(incrementvariationQuantity(props.productDetails?.data.id, selectedVariations.variation_id , newQuantity));
//     //     // });
//     //     //   }
//     //     // });
//     // };



//     //     const handleVariationQuantityChange = (newQuantity) => {
//     //         console.log(newQuantity)
//     //         const productId = parseFloat(props.productDetails?.data.id);

//     //           // Update the quantity for the selected variation
//     //         //   const updatedVariations = {
//     //         //     ...selectedVariations,
//     //         //     quantity: newQuantity,
//     //         //   };

//     // console.log(selectedVariations)

//     //         // const updatedVariations = {
//     //         //     ...selectedVariations,
//     //         //     variations: selectedVariations?.map(variation => { 
//     //         //       if (variation.variation_id === selectedVariations.variation_id) {
//     //         //         return {
//     //         //           ...variation,
//     //         //           quantity: newQuantity,
//     //         //         };
//     //         //       }
//     //         //       return variation;
//     //         //     }),
//     //         //   };


//     //           // Update the quantity for the product
//     //           const updatedProduct = {
//     //             ...props.productDetails?.data,
//     //             quantity: newQuantity,
//     //           };

//     //           // Optionally, update the selectedVariations state based on the new quantity
//     //         //   setSelectedVariations(updatedVariations);

//     //           // Dispatch an action with the updated data
//     //           dispatch(incrementvariationQuantity(productId,  updatedProduct));

//     //           // You might also dispatch an action to update the product quantity if needed

//     //       };















//     const handleQuantityChange = (newQuantity) => {
//         const productId = parseFloat(props.productDetails?.data.id);

//         // const selectedVariationsObject = {
//         //     ...props.productDetails?.data,
//         //     quantity: newQuantity,

//         //     // variation: Object.values(selectedVariations),
//         //     variation: Object.values(selectedVariations).map(variation => ({
//         //         ...variation,
//         //         quantity: newQuantity,
//         //     })),


//         // };

//         //   setSelectedVariations(updatedVariations);

//         dispatch(incrementvariationQuantity(productId, newQuantity));


//     };


//     const [newQuantity, setNewQuantity] = useState(1); // Initialize with a default value
//     console.log("newQuantity", newQuantity)
//     // const handleVariationQuantityChange = () => {
//     //     const productId = parseFloat(props.productDetails?.data.id, 10);

//     //     // Update the quantity for the product
//     //     const updatedVariationId = selectedVariations?.map(filteredVariation => filteredVariation.variation_id);
//     //     // .filter(variation => variation.variation_id === selectedVariations.variation_id)



//     //     const updatedProduct = {
//     //         ...props.productDetails?.data,
//     //         quantity: newQuantity,
//     //     }; 
//     //     dispatch(incrementvariationQuantity(productId , updatedVariationId, newQuantity));

//     // };


//     // const handleBlur = () => {
//     //     handleVariationQuantityChange();
//     // };
//     // useEffect(() => {
//     //     handleVariationQuantityChange();
//     // }, [  props.productDetails?.data.id]);




//     // const handleToggleSelection = (variationId, itemId, selected) => {
//     //     if (selected) {
//     //         const selectedItem = props.productDetails?.data.variation
//     //             .find((variation) => variation.id === variationId)
//     //             .variation_items.find((item) => item.id === itemId);

//     //         setSelectedVariations((prevVariations) => ({
//     //             ...prevVariations,
//     //             [variationId]: {
//     //                 item_id: itemId,
//     //                 ...selectedItem,
//     //                 quantity: 1,
//     //             },
//     //         }));
//     //     } else {
//     //         setSelectedVariations((prevVariations) => {
//     //             const updatedVariations = { ...prevVariations };
//     //             delete updatedVariations[variationId];
//     //             return updatedVariations;
//     //         });
//     //     }
//     // };













//     const handleToggleSelection = (variationId, itemId, selected) => {
//         setSelectedVariations((prevVariations) => {
//             if (selected) {
//                 // Add the selected item to the variations
//                 const selectedItem = props.productDetails?.data.variation
//                     .find((variation) => variation.id === variationId)
//                     .variation_items.find((item) => item.id === itemId);
    
//                 return {
//                     ...prevVariations,
//                     [variationId]: {
//                         item_id: itemId,
//                         ...selectedItem,
//                         quantity: 1,
//                     },
//                 };
//             } else {
//                 // Remove the selected item from the variations
//                 const updatedVariations = { ...prevVariations };
//                 delete updatedVariations[variationId];
//                 return updatedVariations;
//             }
//         });
//     };
    
//     //   console.log(calculateTotalPrice.toFixed(2))
//     return (

//         <Modal
//             {...props}
//             size="lg"
//             aria-labelledby="contained-modal-title-vcenter"
//             centered
//         >


//             <section class="store_detail_section">
//                 <div class="container">
//                     <div class="row">

//                         <Modal.Header className="col-md-12">
//                             <div id="contained-modal-title-vcenter" className="titleBox text-center">
//                                 <h1>Subscription Module for 5-day Meals</h1>
//                             </div>
//                             {/* Close button in flex container */}
//                             <div id="contained-modal-title-vcenter" className="d-flex contained-modal-title-vcenter align-items-center text-center ">
//                                 <button type="button" className="btn-close  text-center " aria-label="Close" onClick={props.onHide}  >
//                                     {/* Optionally, you can use an iconcLOSE */}
//                                     {/* <i className="bi bi-x-lg"></i> */}
//                                     {/* <CloseButton />;xX */}X
//                                 </button>
//                             </div>
//                         </Modal.Header>

//                         <div class="col-md-5">
//                             <div class="img_div">
//                                 <img src={ImageUrl + props.productDetails?.data.feature_image} class="img-fluid" alt="" />
//                             </div>
//                         </div>
//                         <div class="col-md-7 align-self-center">
//                             <div class="store_content">
//                                 <div class="titleBox mb-3">
//                                     <h2>{props.productDetails?.data.title} </h2>

//                                 </div>
//                                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
//                                     since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
//                                 <h3>Price: <span class="text-theme-primary font-weight-bold">{props.productDetails?.data.product_price}</span></h3>
//                                 <p class="star">
//                                     <i class="fa fa-star" aria-hidden="true"></i>
//                                     <i class="fa fa-star" aria-hidden="true"></i>
//                                     <i class="fa fa-star" aria-hidden="true"></i>
//                                     <i class="fa fa-star" aria-hidden="true"></i>
//                                     <i class="fa fa-star" aria-hidden="true"></i>

//                                 </p>
//                             </div>

//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <section class="store_tabbing_section">
//                 <div class="container">
//                     <div class="row">
//                         <div class="col-md-12">
//                             <Tabs
//                                 activeKey={key}
//                                 onSelect={(k) => setKey(k)} class="nav nav-tabs" id="myTab" role="tablist"
//                             >           <Tab class="nav-item" eventKey="section1" title="Variations">
//                                     <a class="nav-link active" id="variation-tab" data-toggle="tab" href="#variation" role="tab" aria-controls="variation" aria-selected="true">Variations</a>






//                                     <div class="tab-pane fade show active" id="variation" role="tabpanel" aria-labelledby="variation-tab">
//                                         <div id="accordion">
//                                             {props.productDetails?.data.variation.map(data => (
//                                                 <div key={data?.id} class="card">
//                                                     <div class="card-header" id={`heading${data?.id}`}>
//                                                         <h5 class="mb-0">
//                                                             <button class="btn btn-link" data-toggle="collapse" data-target={`#collapse${data?.id}`} aria-expanded="true" aria-controls={`collapse${data?.id}`}>
//                                                                 {data?.name} Selection*
//                                                             </button>
//                                                         </h5>
//                                                     </div>

//                                                     <div id={`collapse${data?.id}`} class="collapse" aria-labelledby={`heading${data?.id}`} data-parent="#accordion">
//                                                         <div class="card-body">
//                                                             {data?.variation_items.map(item => (
//                                                                 <div key={item.id} class="selection_div">
//                                                                     <div class="">
//                                                                         <input
//                                                                             type="checkbox"
//                                                                             value={item?.id}
//                                                                             id={item?.id}
//                                                                             name={`variation_${data?.id}`}
//                                                                             onChange={(e) => handleToggleSelection(data?.id, item?.id, e.target.checked)}
//                                                                             checked={selectedVariations[data?.id]?.item_id === item?.id}
//                                                                         />

//                                                                     </div>
//                                                                     <div class="order_img">
//                                                                         <img src={ImageUrl + item?.image} class="img-fluid" alt="" />
//                                                                     </div>
//                                                                     <div class="order_name">
//                                                                         <div class="titleBox">
//                                                                             <h3> {item?.title}</h3>
//                                                                         </div>
//                                                                     </div>

//                                                                     <div class="product_price ">
//                                                                         <h3>${item?.price}</h3>
//                                                                     </div>
//                                                                 </div>
//                                                             ))}
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </div>





//                                 </Tab>
//                                 <Tab class="nav-item" eventKey="section2" title="Store Details">
//                                     <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Store Details</a>


//                                     <div id="profile" role="tabpanel" aria-labelledby="profile-tab">

//                                         <div class="store_detail">
//                                             <div class="titleBox">
//                                                 <h3>Store Details*</h3>
//                                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero beatae architecto sequi? Placeat corporis iste hic officiis magni id atque
//                                                     ipsam sed dolorum. Id, itaque. Deserunt tempora ab quia nostrum.</p>
//                                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero beatae architecto sequi? Placeat corporis iste hic officiis magni id atque
//                                                     ipsam sed dolorum. Id, itaque. Deserunt tempora ab quia nostrum.</p>
//                                                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero beatae architecto sequi? Placeat corporis iste hic officiis magni id atque
//                                                     ipsam sed dolorum. Id, itaque. Deserunt tempora ab quia nostrum.</p>
//                                             </div>
//                                         </div>

//                                     </div>



//                                 </Tab>
//                                 <Tab class="nav-item" eventKey="section3" title="Reviews">

//                                     <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Reviews</a>



//                                     <div id="contact" role="tabpanel" aria-labelledby="contact-tab">
//                                         <div class="store_detail reviews_tabb">

//                                             <div class="client_info">
//                                                 <div class="img_div">
//                                                     <img src={user} class="img-fluid" alt="" />
//                                                 </div>
//                                                 <div class="client_name">
//                                                     <div class="title">
//                                                         <h3>Client Name</h3>
//                                                     </div>
//                                                     <p>Company Name</p>
//                                                 </div>
//                                             </div>
//                                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero beatae architecto sequi? Placeat corporis iste hic officiis magni id atque
//                                                 ipsam sed dolorum. Id, itaque. Deserunt tempora ab quia nostrum.</p>
//                                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero beatae architecto sequi? Placeat corporis iste hic officiis magni id atque
//                                                 ipsam sed dolorum. Id, itaque. Deserunt tempora ab quia nostrum.</p>
//                                             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero beatae architecto sequi? Placeat corporis iste hic officiis magni id atque
//                                                 ipsam sed dolorum. Id, itaque. Deserunt tempora ab quia nostrum.</p>

//                                         </div>
//                                     </div>
//                                 </Tab>
//                             </Tabs>
//                             <div class="tab-content" id="myTabContent">


//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <section class="store_extra_info">
//                 <div class="container">
//                     <div class="row">
//                         <div class="col-md-12">
//                             <div class="quntity_instructions d-flex align-items-center justify-content-between">
//                                 <div class="titleBox">
//                                     <h3>Quantity <br /> Special Instructions?</h3>
//                                 </div>
//                                 <div class="p_quantity">
//                                     <input
//                                         type="number"
//                                         id="quantity"
//                                         name="quantity"
//                                         value={newQuantity}
//                                         onChange={handleChangeQuantity}
//                                     />
//                                 </div>
//                             </div>
//                             <div class="text_area">
//                                 <textarea name="" id="" cols="30" rows="8" class="form-control">Add instructions...</textarea>
//                             </div>
//                             <div class="quntity_instructions d-flex align-items-center justify-content-between">
//                                 <div class="titleBox">
//                                     <h3>Total Price</h3>
//                                 </div>
//                                 <div class="p_quantity">
//                                     <h3>$ {totalPrice * newQuantity}</h3>
//                                 </div>
//                             </div>
//                             <div class="actionCart">
//                                 <button type="button" class="btn couponButton" onClick={handleAddToCart} >Add To Cart</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <section class="recomendation_section">
//                 <div class="container">
//                     <div class="row">
//                         <div class="col-md-12">
//                             <div class="titleBox mb-3">
//                                 <h2>Recomendations</h2>
//                             </div>
//                         </div>
//                         <div class="col-md-4 mb-3">
//                             <div class="categoryCard shadow">
//                                 <div class="cardHeader">
//                                     <div class="topMeta">
//                                         <div class="tags">
//                                             <span>15%off</span>
//                                         </div>
//                                         <div class="tags wishList">
//                                             <button class="button"><i class="fa fa-heart"></i></button>
//                                         </div>
//                                     </div>
//                                     <div class="cardImage">
//                                         <img src={c1} alt="Category Image" class="mw-100" />
//                                     </div>

//                                     <div class="topMeta">
//                                         <div class="companyLogo tags">
//                                             <button class="button"><img src={mac} alt="MAc" /></button>
//                                         </div>
//                                     </div>

//                                 </div>
//                                 <div class="cardBody">
//                                     <div class="body-upper">
//                                         <div class="ratingBox">
//                                             <p class="mb-0">Reviews 3.5k</p>
//                                             <p class="mb-0">
//                                                 <i class="fa fa-star"></i>
//                                                 <i class="fa fa-star"></i>
//                                                 <i class="fa fa-star"></i>
//                                                 <i class="fa fa-star"></i>
//                                                 <i class="fa fa-star"></i>
//                                             </p>
//                                         </div>
//                                         <div class="deliveryInfo">
//                                             <div class="meter">
//                                                 <p class="mb-0"> 30-40 mins</p>
//                                                 <p class="mb-0 text-success">$0 Delivery</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div class="cardContent">
//                                         <h3>The Classic</h3>
//                                         <p>Fire Roasted pepper s, spanach</p>
//                                         <h5 class="text-theme-primary font-weight-bold">$99.00</h5>
//                                     </div>
//                                 </div>
//                                 <div class="cardFooter">
//                                     <div class="cardAction">
//                                         <div class="counterAction">
//                                             <span class="qunatingCount">01</span>
//                                             <button class="minus" type="button"><i class="fa fa-minus"></i></button>
//                                             |
//                                             <button class="plus" type="button"><i class="fa fa-plus"></i></button>
//                                         </div>
//                                         <div class="addToCart">
//                                             <button type="button">Add To Cart</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="col mb-3">
//                             <div class="categoryCard shadow">
//                                 <div class="cardHeader">
//                                     <div class="topMeta">
//                                         <div class="tags">
//                                             <span>15%off</span>
//                                         </div>
//                                         <div class="tags wishList">
//                                             <button class="button"><i class="fa fa-heart"></i></button>
//                                         </div>
//                                     </div>
//                                     <div class="cardImage">
//                                         <img src={c1} alt="Category Image" class="mw-100" />
//                                     </div>

//                                     <div class="topMeta">
//                                         <div class="companyLogo tags">
//                                             <button class="button"><img src={mac} alt="MAc" /></button>
//                                         </div>
//                                     </div>

//                                 </div>
//                                 <div class="cardBody">
//                                     <div class="body-upper">
//                                         <div class="ratingBox">
//                                             <p class="mb-0">Reviews 3.5k</p>
//                                             <p class="mb-0">
//                                                 <i class="fa fa-star"></i>
//                                                 <i class="fa fa-star"></i>
//                                                 <i class="fa fa-star"></i>
//                                                 <i class="fa fa-star"></i>
//                                                 <i class="fa fa-star"></i>
//                                             </p>
//                                         </div>
//                                         <div class="deliveryInfo">
//                                             <div class="meter">
//                                                 <p class="mb-0"> 30-40 mins</p>
//                                                 <p class="mb-0 text-success">$0 Delivery</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div class="cardContent">
//                                         <h3>The Classic</h3>
//                                         <p>Fire Roasted pepper s, spanach</p>
//                                         <h5 class="text-theme-primary font-weight-bold">$99.00</h5>
//                                     </div>
//                                 </div>
//                                 <div class="cardFooter">
//                                     <div class="cardAction">
//                                         <div class="counterAction">
//                                             <span class="qunatingCount">01</span>
//                                             <button class="minus" type="button"><i class="fa fa-minus"></i></button>
//                                             |
//                                             <button class="plus" type="button"><i class="fa fa-plus"></i></button>
//                                         </div>
//                                         <div class="addToCart">
//                                             <button type="button">Add To Cart</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="col mb-3">
//                             <div class="categoryCard shadow">
//                                 <div class="cardHeader">
//                                     <div class="topMeta">
//                                         <div class="tags">
//                                             <span>15%off</span>
//                                         </div>
//                                         <div class="tags wishList">
//                                             <button class="button"><i class="fa fa-heart"></i></button>
//                                         </div>
//                                     </div>
//                                     <div class="cardImage">
//                                         <img src={c1} alt="Category Image" class="mw-100" />
//                                     </div>

//                                     <div class="topMeta">
//                                         <div class="companyLogo tags">
//                                             <button class="button"><img src={mac} alt="MAc" /></button>
//                                         </div>
//                                     </div>

//                                 </div>
//                                 <div class="cardBody">
//                                     <div class="body-upper">
//                                         <div class="ratingBox">
//                                             <p class="mb-0">Reviews 3.5k</p>
//                                             <p class="mb-0">
//                                                 <i class="fa fa-star"></i>
//                                                 <i class="fa fa-star"></i>
//                                                 <i class="fa fa-star"></i>
//                                                 <i class="fa fa-star"></i>
//                                                 <i class="fa fa-star"></i>
//                                             </p>
//                                         </div>
//                                         <div class="deliveryInfo">
//                                             <div class="meter">
//                                                 <p class="mb-0"> 30-40 mins</p>
//                                                 <p class="mb-0 text-success">$0 Delivery</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div class="cardContent">
//                                         <h3>The Classic</h3>
//                                         <p>Fire Roasted pepper s, spanach</p>
//                                         <h5 class="text-theme-primary font-weight-bold">$99.00</h5>
//                                     </div>
//                                 </div>
//                                 <div class="cardFooter">
//                                     <div class="cardAction">
//                                         <div class="counterAction">
//                                             <span class="qunatingCount">01</span>
//                                             <button class="minus" type="button"><i class="fa fa-minus"></i></button>
//                                             |
//                                             <button class="plus" type="button"><i class="fa fa-plus"></i></button>
//                                         </div>
//                                         <div class="addToCart">
//                                             <button type="button">Add To Cart</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </section>


//             <section class="footer">
//                 <div class="container">
//                     <div class="row">
//                         <div class="col-md-12">
//                             <ul class="lastLink">
//                                 <li><a href="#">Privacy Policy</a></li>
//                                 <li><a href="#">Terms</a></li>
//                                 <li><a href="#">Pricing</a></li>
//                             </ul>
//                             <p> Do not sell or share my personal information his site protected by reCAPTCHA and the google Provacy Policy and Terms of Servie apply</p>
//                             <p>2023 Emmanuel -Food Marketplace Inc.</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </Modal>
//     );
// };

// // export default Product_deatail;








































































// import { useState, useEffect } from "react";
// import { DashboardLayout } from "../../Components/Layout/DashboardLayout";
// import BackButton from "../../Components/BackButton";
// import CustomModal from "../../Components/CustomModal";
// import CustomInput from '../../Components/CustomInput';
// import { SelectBox } from "../../Components/CustomSelect";
// import CustomButton from "../../Components/CustomButton";
// import { CategoryList, DietaryList, MenuList } from "../../Components/CategoryList";
// import { useParams } from "react-router";
// import './style.css'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faClose } from "@fortawesome/free-solid-svg-icons";
// import { BASE_URL } from "../../Api/apiConfig";
// export const EditProduct = () => {
//     const [unit, setUnit] = useState({});
//     const [showModal, setShowModal] = useState(false);
//     const [menu, setMenu] = useState([]);
//     const [files, setFiles] = useState([]);
//     const [variations, setVariations] = useState([{ id: null, selectedVariation: null, items: [] }]);
//     const [variationIds, setVariationIds] = useState([]);
//     const [selectedVariation, setSelectedVariation] = useState(null);
//     const [selectedItems, setSelectedItems] = useState({});

//     const [items, setItems] = useState([]);
//     const imageArray = [];
//     const [formData, setFormData] = useState({
//         // product_images: [], // Initialize image as an empty string
//         customize_item_id: []
//     });

//     const [productImage, setProductImage] = useState('');

//     const { id } = useParams();
//     const base_url = 'https://custom2.mystagingserver.site/food-stadium/public/'

//     const handleRemove = (imageId) => {
//         // Find the index of the item with the specified imageId
//         const indexToRemove = formData?.product_images.findIndex(item => item?.id === imageId);

//         // If the item is found, create a new array without the removed item
//         if (indexToRemove !== -1) {
//             setFormData((prevFormData) => {
//                 const newProductImages = [...prevFormData.product_images.slice(0, indexToRemove), ...prevFormData.product_images.slice(indexToRemove + 1)];

//                 return {
//                     ...prevFormData,
//                     product_images: newProductImages,
//                 };
//             });
//             newImageShow()
//         }


//     };

//     const handleSelectedItem = (variationId, itemId) => {
//         // console.log(selectedItems)
//         setSelectedItems((prevSelectedItems) => {
//             const updatedItems = { ...prevSelectedItems };
//             // console.log(selectedItems);

//             if (!updatedItems[variationId]) {
//                 updatedItems[variationId] = [itemId];
//             } else {
//                 if (updatedItems[variationId].includes(itemId)) {
//                     // Item is already selected, so remove it
//                     updatedItems[variationId] = updatedItems[variationId].filter((id) => id !== itemId);
//                 } else {
//                     // Item is not selected, so add it
//                     updatedItems[variationId] = [...updatedItems[variationId], itemId];
//                 }
//             }

//             return updatedItems;

//         });

//         // setFormData({
//         //     ...formData,
//         //     variation_id: selectedItems
//         // })

//         // console.log(formData)
//     };

//     const fetchItemsForVariation = async (variationId) => {
//         try {
//             const response = await fetch(`${BASE_URL}api/vendor/get_item_by_variation/${variationId}`, {
//                 headers: {
//                     'Authorization': `Bearer ${LogoutData}`,
//                     'Content-Type': 'application/json',
//                 },
//             });
//             const data = await response.json();
//             return data?.data; // Assuming the response has an 'items' property
//         } catch (error) {
//             console.error('Error fetching items:', error);
//             return [];
//         }
//     };

//     const handleVariationChange = async (value, index) => {
//         const updatedVariations = [...variations];
//         updatedVariations[index].selectedVariation = value;

//         try {
//             const items = await fetchItemsForVariation(value);
//             updatedVariations[index].items = items;
//             setVariations(updatedVariations);
//         } catch (error) {
//             console.error('Error updating items:', error);
//         }
//     };


//     const handleAddVariation = () => {
//         setVariations([...variations, { id: variations?.id, selectedVariation: null, items: [] }]);
//     };

//     const newImageShow = () => {
//         formData?.product_images?.map((item) => {
//             imageArray.push(item?.id)
//         })

//         console.log('image', imageArray)
//     }


//     useEffect(() => {
//         newImageShow()
//     }, [])



//     const editFetchData = () => {
//         document.querySelector('.loaderBox').classList.remove("d-none");
//         fetch(`${BASE_URL}public/api/vendor/edit_product/${id}`,
//             {
//                 method: 'GET',
//                 headers: {
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json',
//                     'Authorization': `Bearer ${LogoutData}`
//                 },
//             }
//         )
//             .then((response) => {
//                 return response.json()
//             })
//             .then((data) => {
//                 // console.log(data?.data?.variation_id)
//                 document.querySelector('.loaderBox').classList.add("d-none");
//                 setFormData(data?.data)
//                 CustomizeMenuList(data?.data?.category_id)

//             })
//             .catch((error) => {
//                 document.querySelector('.loaderBox').classList.add("d-none");
//                 console.log(error);
//             })
//     }

//     // console.log(formData)
//     const categories = CategoryList();
//     const dietary = DietaryList();
//     const Menu = MenuList();


//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));

//         console.log(formData)
//     };

//     const handleCustomMenu = (event) => {
//         const { value } = event.target;
//         setFormData((prevFormData) => {
//             let currentCustomizeItemId = prevFormData.customize_item_id;

//             // Ensure customize_item_id is an array
//             if (!Array.isArray(currentCustomizeItemId)) {
//                 currentCustomizeItemId = [];
//             }

//             const newCustomizeItemId = currentCustomizeItemId.includes(parseInt(value))
//                 ? currentCustomizeItemId.filter((item) => item !== parseInt(value))
//                 : [...currentCustomizeItemId, parseInt(value)];

//             console.log('newCustomizeItemId:', newCustomizeItemId);

//             return {
//                 ...prevFormData,
//                 customize_item_id: newCustomizeItemId
//             };
//         });

//         console.log('formData:', formData);
//     };





//     const fetchMenu = (event) => {
//         const { value } = event.target
//         console.log(value)
//         CustomizeMenuList(value)
//         handleChange(event)
//     }

//     const filehandleChange = (event) => {
//         const file = event.target.files;
//         const fileName = file;
//         setFiles(fileName)
//         console.log(files)
//     };

//     const SinglefilehandleChange = (event) => {
//         const file = event.target.files[0];
//         const fileName = file;
//         setProductImage(fileName)
//     }



//     const CustomizeMenuList = (idMenu) => {
//         document.querySelector('.loaderBox').classList.remove("d-none");
//         fetch(`${BASE_URL}public/api/vendor/customize_menu_by_category/${idMenu}`,
//             {
//                 method: 'GET',
//                 headers: {
//                     'Accept': 'application/json',
//                     'Content-Type': 'application/json',
//                     'Authorization': `Bearer ${LogoutData}`
//                 },
//             }
//         )
//             .then((response) => {
//                 return response.json()
//             })
//             .then((data) => {
//                 console.log('meny', data)
//                 document.querySelector('.loaderBox').classList.add("d-none");
//                 setMenu(data?.data)

//             })
//             .catch((error) => {
//                 document.querySelector('.loaderBox').classList.add("d-none");
//                 console.log(error);
//             })
//     }






//     const LogoutData = localStorage.getItem('login');

//     const addProductImages = () => {
//         const formDataMethod = new FormData();
//         if (files != "") {
//             for (let i = 0; i < files.length; i++) {
//                 console.log(files[i]);
//                 formDataMethod.append(`product_images[]`, files[i]);

//             }
//         }

//         if (productImage != "") {
//             formDataMethod.append('feature_image', productImage)
//         }

//         fetch(`${BASE_URL}public/api/vendor/multiple_product_image/${id}`, {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Authorization': `Bearer ${LogoutData}`
//             },
//             body: formDataMethod // Use the FormData object as the request body
//         })
//             .then((response) => {
//                 return response.json();
//             })
//             .then((data) => {
//                 document.querySelector('.loaderBox').classList.add("d-none");
//                 console.log(data);
//                 setShowModal(true)
//             })
//             .catch((error) => {
//                 document.querySelector('.loaderBox').classList.add("d-none");
//                 console.log(error)
//             })
//     }

//     const 
    
    
    
    
//     handleSubmit = (event) => {
//         event.preventDefault();
//         newImageShow()

//         // Create a new FormData object
//         const formDataMethod = new FormData();
//         for (const key in formData) {
//             if (key != 'product_images') {
//                 formDataMethod.append(key, formData[key]);
//             }
//         }

//         formDataMethod.append('product_images', imageArray)

//         console.log(formData)
//         if (files != "" || productImage != "") {
//             addProductImages()
//         }

//         document.querySelector('.loaderBox').classList.remove("d-none");
//         // Make the fetch request
//         fetch(`${BASE_URL}public/api/vendor/product_add_update/${id}`, {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Authorization': `Bearer ${LogoutData}`
//             },
//             body: formDataMethod // Use the FormData object as the request body
//         })
//             .then((response) => {
//                 return response.json();
//             })
//             .then((data) => {
//                 document.querySelector('.loaderBox').classList.add("d-none");
//                 console.log(data);
//                 setShowModal(true)
//             })
//             .catch((error) => {
//                 document.querySelector('.loaderBox').classList.add("d-none");
//                 console.log(error)
//             })
//     };


//     useEffect(() => {
//         editFetchData()
//     }, [])


//     useEffect(() => {
//         const fetchVariationIds = async () => {
//             try {
//                 const response = await fetch(`${BASE_URL}api/vendor/get_variation_ids`, {
//                     headers: {
//                         'Authorization': `Bearer ${LogoutData}`,
//                         'Content-Type': 'application/json',
//                     },
//                 });
//                 const data = await response.json();
//                 setVariationIds(data?.data || []);
//                 console.log('variation', variationIds)
//             } catch (error) {
//                 console.error('Error fetching variation IDs:', error);
//             }
//         };

//         fetchVariationIds();
//     }, []);

//     console.log(formData?.category_id)






//     return (
//         <>
//             <DashboardLayout>
//                 <div className="dashCard mb-4">
//                     <div className="row mb-3">
//                         <div className="col-12 mb-2">
//                             <h2 className="mainTitle">
//                                 <BackButton />
//                                 Edit Product
//                             </h2>
//                         </div>
//                     </div>
//                     <div className="row mb-3">
//                         <div className="col-12">
//                             <form onSubmit={handleSubmit}>
//                                 <div className="row">
//                                     <div className="col-lg-12">
//                                         <div className="row">
//                                             <div className="col-md-6 mb-4">
//                                                 <CustomInput
//                                                     label='Edit Product Name'
//                                                     required
//                                                     id='name'
//                                                     type='text'
//                                                     placeholder='Enter Product Name'
//                                                     labelClass='mainLabel'
//                                                     inputClass='mainInput'
//                                                     name="title"
//                                                     value={formData.title}
//                                                     onChange={handleChange}
//                                                 />
//                                             </div>
//                                             <div className="col-md-6 mb-4">
//                                                 <CustomInput
//                                                     label='Enter price'
//                                                     required
//                                                     id='price'
//                                                     type='number'
//                                                     placeholder='Enter price'
//                                                     labelClass='mainLabel'
//                                                     inputClass='mainInput'
//                                                     name="product_price"
//                                                     value={formData.product_price}
//                                                     onChange={handleChange}
//                                                 />
//                                             </div>
//                                             <div className="col-md-12 mb-4">
//                                                 <SelectBox
//                                                     selectClass="mainInput"
//                                                     name="category_id"
//                                                     label="Select Category"
//                                                     placeholder="Select Category"
//                                                     required
//                                                     value={formData.category_id}
//                                                     option={categories}
//                                                     onChange={fetchMenu}
//                                                 />

//                                             </div>
//                                             {/* {menu && menu.length > 0 ? (
//                                                 <div className="col-md-6 mb-4">
//                                                     <SelectBox
//                                                         selectClass="mainInput"
//                                                         name="customize_item_id"
//                                                         label="Edit Customize Menu"
//                                                         placeholder="Select Menu's"
//                                                         required
//                                                         value={formData.customize_item_id}
//                                                         option={menu}
//                                                         onChange={handleChange}
//                                                     />

//                                                 </div>
//                                             ) : ''
//                                             } */}

//                                             <div className="col-md-12 mb-4">

//                                                 <div className="menuListItem row">
//                                                     <div className="col-md-12 mb-4">
//                                                         <h4>{`Customize ${formData.category_id} Menu`}</h4>
//                                                     </div>
//                                                     {menu && menu.map((item) => (
//                                                         <div className="customDataItem col-md-4 mb-4">
//                                                             <div className="checkList">
//                                                                 <input
//                                                                     type="checkbox"
//                                                                     value={item?.id}
//                                                                     id={item?.id}
//                                                                     name="addons[]"
//                                                                     onClick={handleCustomMenu}
//                                                                     checked={formData?.customize_item_id && formData.customize_item_id.includes(item?.id)}
//                                                                 />


//                                                             </div>
//                                                             <label for={item?.id}>
//                                                                 <div className="productAdonItem">
//                                                                     <div className="productImageIcon">
//                                                                         <img src={base_url + item?.item_pic} />
//                                                                     </div>
//                                                                     <div className="addonDesc">
//                                                                         <h5 className="text-capitalize">{item?.item_name}</h5>
//                                                                         <p>{`$ ${item?.item_price}`}</p>
//                                                                     </div>
//                                                                 </div>
//                                                             </label>
//                                                         </div>
//                                                     ))
//                                                     }
//                                                 </div>

//                                             </div>


//                                             {/* edit varaiation data  */}


//                                             <div className="variationData">
//                                                 <div className="d-flex justify-content-end mb-4">
//                                                     <button onClick={handleAddVariation} type="button" className="btn bg-primary text-white">
//                                                         Add More Variation
//                                                     </button>
//                                                 </div>
//                                                 {variations.map((variation, index) => (
//                                                     <div key={index} className="col-md-12">
//                                                         <h6>Variation Box {index + 1}</h6>
//                                                         <div className="form-controls mb-4">
//                                                             <select
//                                                                 className="mainInput"
//                                                                 onChange={(e) => handleVariationChange(e.target.value, index)}
//                                                                 value={variation.selectedVariation || ''}
//                                                             >
//                                                                 <option value="">Select Variation</option>
//                                                                 {variationIds.map((item) => (
//                                                                     <option key={item.id} value={item.id}>
//                                                                         {item.name}
//                                                                     </option>
//                                                                 ))}
//                                                             </select>
//                                                         </div>
//                                                         <div className="row">
//                                                             {variation.items.map((item) => (
//                                                                 <div key={item.id} className="customDataItem col-md-4 mb-4" id={item?.variation_id}>
//                                                                     <div className="checkList">
//                                                                         <input
//                                                                             type="checkbox"
//                                                                             value={item?.id}
//                                                                             id={item?.id}
//                                                                             name="addons[]"
//                                                                             onClick={() => handleSelectedItem(item?.variation_id, item?.id)}
//                                                                             checked={selectedItems[item?.variation_id]?.includes(item?.id)}
//                                                                         />
//                                                                     </div>
//                                                                     <label for={item?.id}>
//                                                                         <div className="productAdonItem">
//                                                                             <div className="productImageIcon">
//                                                                                 <img src={base_url + item?.image} />
//                                                                             </div>
//                                                                             <div className="addonDesc">
//                                                                                 <h5 className="text-capitalize">{item?.title}</h5>
//                                                                                 <p>{`$ ${item?.price}`}</p>
//                                                                             </div>
//                                                                         </div>
//                                                                     </label>
//                                                                 </div>
//                                                             ))}
//                                                         </div>
//                                                     </div>
//                                                 ))}
//                                             </div>


//                                             {/* <div className="variationData">
//                                                 <div className="d-flex justify-content-end mb-4">
//                                                     <button onClick={handleAddVariation} type="button" className="btn bg-primary text-white">Add More Variation</button>
//                                                 </div>
//                                                 {formData?.variation_id.map((variation, index) => (
//                                                     <div key={variation.id} className="col-md-12">
//                                                         <h6>Variation Box {index + 1}</h6>
//                                                         <div className="form-controls mb-4">
//                                                             <select
//                                                                 className="mainInput"
//                                                                 onChange={(e) => handleVariationChange(e.target.value, index)}
//                                                                 value={variation.selectedVariation || ''}
//                                                             >
//                                                                 <option value="">Select Variation</option>
//                                                                 {variationIds.map((item) => (
//                                                                     <option key={item.id} value={item.id}>{item.name}</option>
//                                                                 ))}
//                                                             </select>
//                                                         </div>
//                                                         <div className="row">
//                                                             {variation.items.map((item) => (
//                                                                 <div key={item.id} className="customDataItem col-md-4 mb-4" id={item?.variation_id}>
//                                                                     <div className="checkList">
//                                                                         <input
//                                                                             type="checkbox"
//                                                                             value={item?.id}
//                                                                             id={item?.id}
//                                                                             name="addons[]"
//                                                                             onClick={() => handleSelectedItem(item?.variation_id, item?.id)}
//                                                                             checked={selectedItems[item?.variation_id]?.includes(item?.id)}
//                                                                         />
//                                                                     </div>
//                                                                     <label for={item?.id}>
//                                                                         <div className="productAdonItem">
//                                                                             <div className="productImageIcon">
//                                                                                 <img src={base_url + item?.image} />
//                                                                             </div>
//                                                                             <div className="addonDesc">
//                                                                                 <h5 className="text-capitalize">{item?.title}</h5>
//                                                                                 <p>{`$ ${item?.price}`}</p>
//                                                                             </div>
//                                                                         </div>
//                                                                     </label>
//                                                                 </div>
//                                                             ))}
//                                                         </div>
//                                                     </div>
//                                                 ))}

//                                             </div> */}
//                                             {/* end  */}


//                                             <div className="col-md-6 mb-4">
//                                                 <SelectBox
//                                                     selectClass="mainInput"
//                                                     name="dietary_id"
//                                                     label="Select Dietary"
//                                                     placeholder="Select Dietary"
//                                                     required
//                                                     value={formData.dietary_id}
//                                                     option={dietary}
//                                                     onChange={handleChange}
//                                                 />

//                                             </div>
//                                             <div className="col-md-6 mb-4">
//                                                 <SelectBox
//                                                     selectClass="mainInput"
//                                                     name="menu_id"
//                                                     label="Select Menu"
//                                                     placeholder="Select Menu"
//                                                     required
//                                                     value={formData.menu_id}
//                                                     option={Menu}
//                                                     onChange={handleChange}
//                                                 />

//                                             </div>
//                                             <div className="col-md-6 mb-4">
//                                                 <CustomInput
//                                                     label='Upload Gallery Image'

//                                                     id='file'
//                                                     type='file'
//                                                     multiple
//                                                     labelClass='mainLabel'
//                                                     inputClass='mainInput'
//                                                     name="image"
//                                                     // value={formData.image}
//                                                     onChange={filehandleChange}
//                                                 />
//                                                 <div className="galleryBox row">
//                                                     {
//                                                         formData?.product_images && formData?.product_images?.map((item) => (
//                                                             <div className="galleryItem col-md-3 mb-3 position-relative">
//                                                                 <img src={base_url + item?.image} />
//                                                                 <div className="removeImage" onClick={() => {
//                                                                     handleRemove(item?.id)
//                                                                 }}>
//                                                                     <button type="button">
//                                                                         <FontAwesomeIcon icon={faClose} ></FontAwesomeIcon>

//                                                                     </button>
//                                                                 </div>
//                                                             </div>
//                                                         ))
//                                                     }
//                                                 </div>
//                                             </div>
//                                             <div className="col-md-6 mb-4">
//                                                 <CustomInput
//                                                     label='Upload Product Image'

//                                                     id='file'
//                                                     type='file'
//                                                     multiple
//                                                     labelClass='mainLabel'
//                                                     inputClass='mainInput'
//                                                     name="image"
//                                                     // value={formData.image}
//                                                     onChange={SinglefilehandleChange}
//                                                 />
//                                                 <div className="galleryBox row justify-content-center">
//                                                     <div className="galleryItem col-md-3 mb-3 position-relative">
//                                                         <img src={base_url + formData?.feature_image} />
//                                                         {/* <div className="removeImage" onClick={() => {
//                                                             handleRemove()
//                                                         }}>
//                                                             <button type="button">
//                                                                 <FontAwesomeIcon icon={faClose} ></FontAwesomeIcon>

//                                                             </button>
//                                                         </div> */}
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div className="col-md-12 mb-4">
//                                                 <div className="inputWrapper">
//                                                     <div className="form-controls">
//                                                         <label htmlFor="">Description</label>
//                                                         <textarea
//                                                             name="description"
//                                                             className="form-control shadow border-0"
//                                                             id=""
//                                                             cols="30"
//                                                             rows="10"
//                                                             value={formData.description}
//                                                             onChange={handleChange}
//                                                         >
//                                                         </textarea>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div className="col-md-12">
//                                                 <CustomButton variant='primaryButton' text='Update' type='submit' />
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>

//                 <CustomModal show={showModal} close={() => { setShowModal(false) }} success heading='Product Updated Successfully.' />

//             </DashboardLayout>
//         </>
//     );
// };