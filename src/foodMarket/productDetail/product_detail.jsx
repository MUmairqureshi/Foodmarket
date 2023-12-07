

//   increment dec select different single  product variation to   onclick   come in variation_items array variation_items come in variation array
// product variation increment dec and when onclick  select variation and  his quantity  
// create object and when click on add to card send into card page add variation 










// get total price of product and variation and add to card func add to card fun not perform in map
// .fixed-item {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//   }











// Subscription Module for 5-day Meals
import user from '../images/user.png'

import { useState } from 'react';


import mac from '../images/mac.png'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, addToCart, incrementQuantity, decrementQuantity } from '../../components/redux/actions';
import '../css/style.css'
import c1 from '../images/c1.png'



import Modal from 'react-bootstrap/Modal';
import { Tabs, Tab } from 'react-bootstrap';

export const Product_deatail = (props) => {

    const cartItems = useSelector((state) => state.cart.items);
console.log(cartItems)
    const dispatch = useDispatch();
    const [selectedVariations, setSelectedVariations] = useState([]);
    console.log(selectedVariations)
    const [totalPrice, setTotalPrice] = useState(0);
    console.log(totalPrice)
    const propsdata = props.productDetails?.data

    const [quantity, setQuantity] = useState(props.productDetails?.data.quantity);








    // const handleAddToCart = () => {
    //     // Filter out variations with quantity > 0
    //     const selectedVariationsWithQuantity = selectedVariations.filter(
    //         (variation) => variation.quantity > 0
    //     );

    //     // Create a single object with selected variations
    //     const selectedVariationsObject = {
    //         product_id: propsdata.id,
    //         variations: selectedVariationsWithQuantity.map((variation) => ({
    //             variation_id: variation.id,
    //             quantity: variation.quantity,
    //         })),
    //     };

    //     // Dispatch the addToCart action with the selected variations object
    //     dispatch(addToCart(selectedVariationsObject));

    //     // Reset selectedVariations after adding to the cart
    //     setSelectedVariations([]);
    // };

    // const handleQuantityChange = (variationId, newQuantity) => {
    //     // Update the quantity in the state
    //     setSelectedVariations((prevVariations) => {
    //         const updatedVariations = prevVariations.map((prevVariation) =>
    //             prevVariation.id === variationId ? { ...prevVariation, quantity: newQuantity } : prevVariation
    //         );
    //         return updatedVariations;
    //     });
    // };



















    // const handleAddToCart = () => {
    //     const selectedVariationsWithQuantity = selectedVariations.filter(
    //         (variation) => variation.quantity > 0
    //     );

    //     // Create a single object with selected variations
    //     const selectedVariationsObject = {
    //         product_id: propsdata.id,
    //         variations: selectedVariationsWithQuantity.map((variation) => ({
    //             variation_id: variation.id,
    //             quantity: variation.quantity,
    //         })),
    //     };

    //     // Dispatch the addToCart action with the selected variations object
    //     dispatch(addToCart(selectedVariationsObject));

    //     // Reset selectedVariations after adding to the cart
    //     setSelectedVariations([]);
    // };

    // const handleQuantityChange = (variationId, newQuantity) => {
    //     // Validate that newQuantity is a positive integer
    //     const quantity = Number.isInteger(newQuantity) && newQuantity > 0 ? newQuantity : 0;

    //     // Update the quantity in the state
    //     setSelectedVariations((prevVariations) => {
    //         const updatedVariations = prevVariations.map((prevVariation) =>
    //             prevVariation.id === variationId ? { ...prevVariation, quantity } : prevVariation
    //         );
    //         return updatedVariations;
    //     });
    // };


// when add item  and increment and resend in to card  not add again only  update quantity who add previously  





// const handleAddToCart = () => {
//     // Filter out variations with quantity > 0
//     const selectedVariationsWithQuantity = selectedVariations.filter(
//       (variation) => variation.quantity > 0
//     );
  
//     // Create a single object with selected variations
//     const selectedVariationsObject = {
//       product_id: product.id,
//       variations: selectedVariationsWithQuantity.map((variation) => ({
//         variation_id: variation.variation_id,
//         item_id: variation.item_id,
//         quantity: variation.quantity,
//       })),
//     };
  
//     // Check if the variations already exist in the cart
//     const existingVariations = cart.filter((cartItem) => cartItem.product_id === product.id);
  
//     if (existingVariations.length > 0) {
//       // Update the quantity for existing variations
//       const updatedCart = cart.map((cartItem) => {
//         if (cartItem.product_id === product.id) {
//           cartItem.variations.forEach((variation) => {
//             const selectedVariation = selectedVariationsObject.variations.find(
//               (selectedVariation) =>
//                 selectedVariation.variation_id === variation.variation_id &&
//                 selectedVariation.item_id === variation.item_id
//             );
  
//             if (selectedVariation) {
//               // Increment the quantity for existing variations
//               variation.quantity += selectedVariation.quantity;
//             }
//           });
//         }
//         return cartItem;
//       });
  
//       // Dispatch the addToCart action with the updated cart
//       dispatch(addToCart(updatedCart));
//     } else {
//       // Dispatch the addToCart action with the selected variations object
//       dispatch(addToCart([...cart, selectedVariationsObject]));
//     }
  
//     // Reset selectedVariations after adding to the cart
//     setSelectedVariations([]);
//   };
  











    
//   const handleAddToSelection = (variationId, itemId, quantity) => {
//     // Find the selected variation
//     const selectedVariation = props.productDetails?.data.variation.find((variation) => variation.id === variationId);

//     // Find the selected variation item
//     const selectedItem = selectedVariation.variation_items.find((item) => item.id === itemId);

//     // Add the selected variation item to the list with the specified quantity
//     setSelectedVariations((prevVariations) => [
//       ...prevVariations,
//       { variation_id: variationId, item_id: itemId, quantity, item: selectedItem },
//     ]);
//   };




//   const handleAddToSelection = (variationId, itemId, quantity) => {
//     // Ensure the quantity is not less than zero
//     quantity = Math.max(0, quantity);
  
//     // Find the selected variation
//     const selectedVariation = props.productDetails?.data.variation.find((variation) => variation.id === variationId);
  
//     // Find the selected variation item
//     const selectedItem = selectedVariation.variation_items.find((item) => item.id === itemId);
  
//     // Add the selected variation item to the list with the specified quantity
//     setSelectedVariations((prevVariations) => [
//       ...prevVariations,
//       { variation_id: variationId, item_id: itemId, quantity, item: selectedItem },
//     ]);
//   };





const handleAddToSelection = (variationId, itemId, quantity) => {
    // Ensure quantity is non-negative
    if (quantity < 0) {
      // You can handle this case, show an error message, or prevent adding to the selection
      return;
    }
  
    // Find the selected variation
    const selectedVariation = props.productDetails?.data.variation.find((variation) => variation.id === variationId);
  
    // Find the selected variation item
    const selectedItem = selectedVariation.variation_items.find((item) => item.id === itemId);
  
    // Add the selected variation item to the list with the specified quantity
    setSelectedVariations((prevVariations) => [
      ...prevVariations,
      { variation_id: variationId, item_id: itemId, quantity, item: selectedItem },
    ]);
  };
  

//   const handleAddToCart = () => {
//     // Filter out variations with quantity > 0
//     const selectedVariationsWithQuantity = selectedVariations.filter(
//       (variation) => variation.quantity > 0
//     );

//     // Create a single object with selected variations
//     const selectedVariationsObject = {
//       product_id: propsdata.id,
//       variations: selectedVariationsWithQuantity.map((variation) => ({
//         variation_id: variation.variation_id,
//         item_id: variation.item_id,
//         quantity: variation.quantity,
//       })),
//     };

//     // Dispatch the addToCart action with the selected variations object
//     dispatch(addToCart(selectedVariationsObject));

//     // Reset selectedVariations after adding to the cart
//     setSelectedVariations([]);
//   };















    
//   const handleAddToSelection = (variationId, quantity) => {
//     // Find the selected variation
//     const selectedVariation = propsdata.product_variation.map.find((variation) => variation.id === variationId);

//     // Add the selected variation to the list with the specified quantity
//     setSelectedVariations((prevVariations) => [
//       ...prevVariations,
//       { id: variationId, quantity, variation: selectedVariation },
//     ]);
//   };

//   const handleAddToCart = () => {
//     // Filter out variations with quantity > 0
//     const selectedVariationsWithQuantity = selectedVariations.filter(
//       (variation) => variation.quantity > 0
//     );

//     // Create a single object with selected variations
//     const selectedVariationsObject = {
//       product_id: propsdata.id,
//       variations: selectedVariationsWithQuantity.map((variation) => ({
//         variation_id: variation.id,
//         quantity: variation.quantity,
//       })),
//     };

//     // Dispatch the addToCart action with the selected variations object
//     dispatch(addToCart(selectedVariationsObject));

//     // Reset selectedVariations after adding to the cart
//     setSelectedVariations([]);
//   };






















const handleAddToCart = () => {
    // Filter out variations with quantity > 0
    const selectedVariationsWithQuantity = selectedVariations.filter(
      (variation) => variation.quantity > 0
    );
  
    // Create a single object with selected variations
    const selectedVariationsObject = {
      product_id: propsdata.id,
      variations: selectedVariationsWithQuantity.map((variation) => ({
        variation_id: variation.variation_id,
        item_id: variation.item_id,
        quantity: variation.quantity,
      })),
    };
  
    // Check if the variations already exist in the cart
    const existingVariations = cartItems.filter((cartItem) => cartItem.product_id === propsdata.id);
  
    if (existingVariations.length > 0) {
      // Update the quantity for existing variations
      const updatedCart = cartItems.map((cartItem) => {
        if (cartItem.product_id === propsdata.id) {
          cartItem.variations.forEach((variation) => {
            const selectedVariation = selectedVariationsObject.variations.find(
              (selectedVariation) =>
                selectedVariation.variation_id === variation.variation_id &&
                selectedVariation.item_id === variation.item_id
            );
  
            if (selectedVariation) {
              // Increment the quantity for existing variations
              variation.quantity += selectedVariation.quantity;
            }
          });
        }
        return cartItem;
      });
  
      // Dispatch the addToCart action with the updated cart
      dispatch(addToCart(updatedCart));
    } else {
      // Dispatch the addToCart action with the selected variations object
      dispatch(addToCart([...cartItems, selectedVariationsObject]));
    }
  
    // Reset selectedVariations after adding to the cart
    setSelectedVariations([]);
  };

    const ImageUrl = "https://custom2.mystagingserver.site/food-stadium/public/"

    const [key, setKey] = useState('section1');
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

                        <Modal.Header closeButton className="col-md-12">
                            <div id="contained-modal-title-vcenter" className="titleBox text-center">
                                {/* style={{ backgroundColor: "#e776a2" }} */}
                                <h1 >Subscription Module for 5-day Meals</h1>
                                {/* <button type="button" className='btn-close' aria-label="Close" > 
    <i className="bi bi-x-lg"></i></button> */}
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
                                                <div key={data.id} class="card">
                                                    <div class="card-header" id="headingOne">
                                                        <h5 class="mb-0">
                                                            <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                {data?.name} Selection*
                                                            </button>
                                                        </h5>
                                                    </div>

                                                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                                        <div class="card-body ">
                                                            {data?.variation_items.map(item => (

                                                                <div key={item.id} class="selection_div">
                                                                    <div class="order_cancel">
                                                                        <button 
                                                                          onClick={() =>
                                                                            handleAddToSelection(data.id, item.id, parseInt(item.inputRef.value, 10))
                                                                          }


                                                                        ><i class="fa fa-times" aria-hidden="true"></i></button>
                                                                    </div>
                                                                    <div class="order_img">
                                                                        <img src={ImageUrl + item.image} class="img-fluid" alt="" />
                                                                    </div>
                                                                    <div class="order_name">
                                                                        <div class="titleBox">
                                                                            <h3> {item.title}</h3>
                                                                        </div>
                                                                    </div>
                                                                    <div class="p_quantity">
                                                                        <input  
                                                                          type="number"  defaultValue="0" ref={(input) => (item.inputRef = input)} 
                                                                        />
                                                                    </div>
                                                                    <div class="product_price ">
                                                                        <h3>+$0</h3>
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
                                    <input type="number" value="01" placeholder="01" />
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
                                    <h3>$ {props.productDetails?.data.price}</h3>
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