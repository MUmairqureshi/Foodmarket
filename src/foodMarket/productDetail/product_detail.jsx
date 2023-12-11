







// .fixed-item {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//   }





import CloseButton from 'react-bootstrap/CloseButton';






// Subscription Module for 5-day Meals
import user from '../../assets/images/user.png'


import { useState, useMemo  , useEffect} from 'react';


import mac from '../../assets/images/mac.png'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, addToCart, incrementvariationQuantity, decrementcariationQuantity } from '../../components/redux/actions';
import '../css/style.css'
import c1 from '../../assets/images/c1.png'



import Modal from 'react-bootstrap/Modal';
import { Tabs, Tab } from 'react-bootstrap';


export const Product_deatail = (props) => {
    //   onHide
    const datas = props.productDetails?.data
    console.log("datasid ", datas)
    const cartItems = useSelector((state) => state.cart.items);
    const data = props.productDetails?.data
    console.log(data)
    const dispatch = useDispatch();
    const [selectedVariations, setSelectedVariations] = useState([]);
    console.log(selectedVariations?.variation_id)
    const productId = parseFloat(props.productDetails?.data.id);
    console.log(productId)
    const handleVariationQuantityChange = (newQuantity) => {
        // Assuming props.productDetails?.data is an object
        const productId = parseFloat(props.productDetails?.data.id);
      
        // Check if the product id matches
 
        if (productId === selectedVariations.product_id) {
          // If variation exists, update its quantity

            // if (variation.variation_id === selectedVariations.variation_id) {
            //   return {
            //     ...variation,
            //     quantity: newQuantity,
            //   };
            // }
                    // Optionally, update the selectedVariations state based on the new quantity
           
          setSelectedVariations((prevVariations) => ({
            ...prevVariations,
            quantity: newQuantity,
            ...productDetails?.data,
            quantity: newQuantity
            
          }));
        
      
      
          // Dispatch an action with the updated data
          dispatch(incrementvariationQuantity(productId, selectedVariations.variation_id, newQuantity));
      
  
        }
      };
      

    const ImageUrl = "https://custom2.mystagingserver.site/food-stadium/public/"

    const [key, setKey] = useState('section1');


    console.log(selectedVariations)

    const totaldata = selectedVariations.price
    console.log(totaldata)

    const [totalPrice, setTotalPrice] = useState(0);

    const calculateTotalPrice = () => {
        let productPrice = parseFloat(props.productDetails?.data.product_price) ;
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

  useEffect(() => {
    handleVariationQuantityChange();
  }, [ selectedVariations,  , props.productDetails?.data.id]);



    const handleAddToCart = () => {
        const selectedVariationsObject = {
            ...props.productDetails?.data,
            quantity: 1,

            variation: Object.values(selectedVariations),
        };

        // const existingProductIndex = cartItems.findIndex(
        //   (cartItem) => cartItem.product.id === props.productDetails?.data.id
        // );
        dispatch(addToCart(selectedVariationsObject));

        //   const handleProductQuantityChange = (productId, newQuantity) => {
        //     dispatch(decrementcariationQuantity(productId, newQuantity));
        //   };

        //   const handleVariationQuantityChange = (productId, variationId, newQuantity) => {
        //     dispatch(UpdatevariationQuantity(productId, variationId));
        //   };




        // if (existingProductIndex !== -1) {
        //   // Product already in cart, update variations or add new variations
        // //   const updatedCart = [...cartItems];
        // //   const existingProduct = updatedCart[existingProductIndex];

        // //   updatedCart[existingProductIndex] = {
        // //     ...existingProduct,
        // //     variation: selectedVariations,
        // //   };

        // //   dispatch(addToCart(updatedCart));
        // } else {
        //   // Product not in cart, add it
        //   dispatch(addToCart(selectedVariationsObject));
        // }

        // Reset selection and quantity after adding to the cart
        setSelectedVariations({});
        // setProductQuantity(1);
    }
    // const handleVariationQuantityChange = (newQuantity) => {
    //     // props.productDetails?.data.forEach(product => {
    //     //   if (product.id === productId) {
    //     //     product?.variation.forEach(variation => {
    //     dispatch(incrementvariationQuantity(props.productDetails?.data.id, selectedVariations.variation_id , newQuantity));
    //     // });
    //     //   }
    //     // });
    // };

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
        } else {
            setSelectedVariations((prevVariations) => {
                const updatedVariations = { ...prevVariations };
                delete updatedVariations[variationId];
                return updatedVariations;
            });
        }
    };


    //   console.log(calculateTotalPrice.toFixed(2))
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
                                    {/* <CloseButton />;x */}X
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
                                                            {data?.variation_items.map(item => (
                                                                <div key={item.id} class="selection_div">
                                                                    <div class="">
                                                                        <input
                                                                            type="checkbox"
                                                                            onChange={(e) =>
                                                                                handleToggleSelection(data?.id, item?.id, e.target.checked)
                                                                            }
                                                                        />
                                                                    </div>
                                                                    <div class="order_img">
                                                                        <img src={ImageUrl + item?.image} class="img-fluid" alt="" />
                                                                    </div>
                                                                    <div class="order_name">
                                                                        <div class="titleBox">
                                                                            <h3> {item?.title}</h3>
                                                                        </div>
                                                                    </div>

                                                                    <div class="product_price ">
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
                                        value={props.productDetails?.data.quantity}
                                        onChange={(e) => handleVariationQuantityChange(parseInt(e.target.value, 10))}
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
                                    <h3>$ {totalPrice}</h3>
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