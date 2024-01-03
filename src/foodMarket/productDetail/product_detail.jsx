  



import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import user from '../../assets/images/user.png'
import { useState, useMemo, useEffect } from 'react';


 
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, addToCart, updateCartItem, incrementvariationQuantity, incrementQuantity, decrementcariationQuantity } from '../../components/redux/actions';
import '../css/style.css'
 



import Modal from 'react-bootstrap/Modal';
import { Tabs, Tab } from 'react-bootstrap';


export const Product_deatail = (props) => {


    const datas = props.productDetails?.data.id
    console.log("datacomment", props.productDetails?.data)

    const [remarks, setRemarks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRemarks = async () => {
            try {
                const response = await fetch(`https://custom2.mystagingserver.site/food-stadium/public/api/user/remark_by_product/${datas}`);
                const data = await response.json();

                setRemarks(data.data);
            } catch (error) {
                console.error('Error fetching remarks:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchRemarks();
    }, [datas]);

    // console.log("remarks", remarks)

    // console.log("datas", datas)
    const cartItems = useSelector((state) => state.cart.items);
    // console.log("cartItems", cartItems[0])



    useEffect(() => {
        const productId = props.productDetails?.data.id;
        const productqty = props.productDetails?.data.quantity;
        // Calculate the total quantity for the specific product
        const totalProductQuantity = cartItems
            .filter((item) => item.id === productId)
        // .reduce((item) => item.quantity);

        // console.log('abc', totalProductQuantity[0])


        // Set the initial quantity to the calculated total if it's greater than 0
        setNewQuantity(totalProductQuantity[0]?.quantity > 0 ? totalProductQuantity[0]?.quantity : 0);
    }, [cartItems, props]);


    // useEffect(() => {
    //     const productId = props.productDetails?.data.id;
    //     const productqty = props.productDetails?.data.quantity;

    //     const totalProductQuantity = cartItems?.reduce((total, item) => total + item.quantity > 0 ? (total, item) => total + item.quantity : 1);
    //         // .filter((item) => item.id === productId)



    //     setNewQuantity(totalProductQuantity > 0 ? totalProductQuantity : productqty > 0 ? totalProductQuantity : 1);
    // }, [cartItems, props]);




    const handleChangeQuantity = (e) => {
        const inputValue = e.target.value;
        setNewQuantity(inputValue);
    };






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
        props.onHide();

        const selectedVariationsObject = Object.values(selectedVariations).map((variation) => ({
            ...variation,
            quantity: newQuantity,
        }));


        console.log("selectedVariationsObject" , selectedVariationsObject)

        const existingCartItem = cartItems?.find(
            (cartVariation) => cartVariation.id === props.productDetails?.data?.id
        );



        if (existingCartItem) {

            const updatedCartItem = {
                ...existingCartItem,
                quantity: newQuantity,
                variation: selectedVariationsObject,
            };


            dispatch(updateCartItem(updatedCartItem));
        } else {
            const newCartItem = {
                ...props.productDetails?.data,
                quantity: newQuantity,
                variation: selectedVariationsObject,
            }; toast.success(`${props.productDetails?.data.title}  added to cart!`, {
                position: toast.POSITION.TOP_RIGHT,
            });
            dispatch(addToCart(newCartItem));
        }
    };



    const handleQuantityChange = (newQuantity) => {
        const productId = parseFloat(props.productDetails?.data.id);



        dispatch(incrementvariationQuantity(productId, newQuantity));


    };


    const [newQuantity, setNewQuantity] = useState(1);


    const [selectedVariationId, setSelectedVariationId] = useState(null);


    // const handleToggleSelection = (variationId, itemId, selected) => {
    //     console.log(selected)

 

    //     setSelectedVariations((prevVariations) => {
    //         const updatedVariations = { ...prevVariations };

    //         if (selected) {
    //             const selectedItem = props.productDetails?.data.variation
    //                 .find((variation) => variation.id === variationId)
    //                 .variation_items.find((item) => item.id === itemId);

    //             updatedVariations[variationId] = {
    //                 item_id: itemId,
    //                 ...selectedItem,
    //                 quantity: 1,
    //             };

    //             setSelectedVariationId(itemId);
    //         } else {
    //             // delete updatedVariations[variationId];
    //             setSelectedVariationId(null);
    //         }

    //         return updatedVariations;
    //     });
    // };
 



// const handleToggleSelection = (variationId, itemId, selected) => {
//     console.log(selected);
//     // cartItems.some(variationItem =>
//     //     variationItem?.variation?.some(cartVariation => cartVariation.id === item?.id && cartVariation.variation_id === data?.id)
//     setSelectedVariations((prevVariations) => {
//         const updatedVariations = { ...prevVariations };

//         if (selected) {
//             const selectedItem = props.productDetails?.data.variation
//                 .find((variation) => variation.id === variationId)
//                 .variation_items.find((item) => item.id === itemId);

//             updatedVariations[variationId] = {
//                 item_id: itemId,
//                 ...selectedItem,
//                 quantity: 1,
//             };

//             setSelectedVariationId(itemId);
//         } else {
     
//             delete updatedVariations[variationId];

          
//             const remainingVariations = Object.values(updatedVariations);
//             const newSelectedVariationId = remainingVariations.length > 0
//                 ? remainingVariations[0].item_id
//                 : null;

//             setSelectedVariationId(newSelectedVariationId);
//         }

//         return updatedVariations;
//     });
// };



 











const handleToggleSelection = (variationId, itemId, selected) => {
    console.log(selected);

    // Check if the variation is present in cartItems
    const isVariationInCart = cartItems.some((variationItem) =>
        variationItem?.variation?.some(
            (cartVariation) =>
                cartVariation.id === itemId && cartVariation.variation_id === variationId
        )
    );

    setSelectedVariations((prevVariations) => {
        const updatedVariations = { ...prevVariations };

        if (selected) {
            const selectedItem = props.productDetails?.data.variation
                .find((variation) => variation.id === variationId)
                .variation_items.find((item) => item.id === itemId);

            updatedVariations[variationId] = {
                item_id: itemId,
                ...selectedItem,
                quantity: 1,
            };

            setSelectedVariationId(itemId);
        } else {
         
            if (!isVariationInCart) {
                delete updatedVariations[variationId];
            }

            const remainingVariations = Object.values(updatedVariations);
            const newSelectedVariationId =
                remainingVariations.length > 0 ? remainingVariations[0].item_id : null;

            setSelectedVariationId(newSelectedVariationId);
        }

        return updatedVariations;
    });
};


 
    const itmdata = cartItems?.variation;
 
    // const isItemChecked = (variationId, itemId) => {
    //      console.log("itemId", itemId)
    // };



    const [reviewData, setReviewData] = useState({
        name: '',
        email: '',
        rating: '',
        description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setReviewData({ ...reviewData, [name]: value });
    };

    //   const handleSubmit = async () => {
    //     try {
    //       const response = await fetch(`https://custom2.mystagingserver.site/food-stadium/public/api/user/product_remark_add/${datas}`, {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(reviewData),
    //       });

    //       if (response.ok) {
    //         console.log('Review submitted successfully!');
    //         // Handle success, e.g., show a success message to the user
    //       } else {
    //         console.error('Error submitting review:', response.statusText);
    //         // Handle error, e.g., show an error message to the user
    //       }
    //     } catch (error) {
    //       console.error('Error submitting review:', error);
    //       // Handle other types of errors
    //     }
    //   };





    const handleSubmit = async () => {
        try {
            const response = await fetch(`https://custom2.mystagingserver.site/food-stadium/public/api/user/product_remark_add/${datas}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reviewData),
            });

            if (response.ok) {
                // console.log('Review submitted successfully!');
                // Show a success toast
                toast.success('Review submitted successfully!');
                // You can also redirect the user or perform other actions upon success
            } else {
                // console.error('Error submitting review:', response.statusText);
                // Show an error toast
                toast.error('Error submitting review. Please try again.');
            }
        } catch (error) {
            // console.error('Error submitting review:', error);
            // Show an error toast
            toast.error('Error submitting review. Please try again.');
        }
    };


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
                                    X
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
                                                            {data?.variation_items?.map((item) =>
                                                                <div key={item.id} className="selection_div">
                                                                    <div className="">

                                                                        <input
                                                                            type="radio"
                                                                            name={`variation_${data?.id}`}
                                                                            defaultChecked={cartItems.some(variationItem =>
                                                                                variationItem?.variation?.some(cartVariation => cartVariation.id === item?.id && cartVariation.variation_id === data?.id)
                                                                            )}
                                                                            onChange={(e) => handleToggleSelection(data?.id, item?.id, e.target.checked)}
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
                                                            )}
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

                                            {remarks?.map((data) => (
                                                <div>   <div class="client_info">
                                                    <div class="img_div">
                                                        <img src={user} class="img-fluid" alt="" />
                                                    </div>
                                                    <div class="client_name">
                                                        <div class="title">
                                                            <h3>{data?.name}</h3>
                                                        </div>
                                                        <p>Rating : {data?.rating}</p>
                                                    </div>
                                                </div>
                                                    <p>{data?.description}</p>


                                                </div>
                                            ))}
                                        </div>

                                        <div class="form-row mt-5 mb-4">
                                            <div class="form-group col-md-6">
                                                <input type="text" class="form-control" placeholder="Name" name="name" value={reviewData.name} onChange={handleChange} required />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <input type="text" class="form-control" placeholder="Email" name="email" value={reviewData.email} onChange={handleChange} required />
                                            </div>
                                            <div class="form-group col-md-12">
                                                <input type="text" class="form-control" placeholder="Rating" name="rating" value={reviewData.rating} onChange={handleChange} required />
                                            </div>
                                            <div class="form-group col-md-12">
                                                <input type="text" class="form-control" placeholder="Description" name="description" value={reviewData.description} onChange={handleChange} required />
                                            </div>
                                            <div class="col-md-12">
                                                <button type="button" class="reviewBtn" onClick={handleSubmit}>Submit</button>
                                            </div>
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
                                    <h3>Quantity</h3>
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
                            {/* <div class="text_area">
                                <textarea name="" id="" cols="30" rows="8" class="form-control">Add instructions...</textarea>
                            </div> */}
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
            <ToastContainer />
        </Modal>
    );
};

// export default Product_deatail;