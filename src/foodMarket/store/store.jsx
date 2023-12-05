 
import b_img from '../images/b_img.png' 
 
import mac from '../images/mac.png' 
// style={{backgroundcolor: "#e776a2"}}
 

import c1 from '../images/c1.png'
import bun_img from '../images/bun_img.png' 
import '../css/style.css'
export function Store() {
    return (
        <div className=" ">



            <section className="store_detail_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="titleBox text-center">
                                <h1 style={{backgroundcolor: "#e776a2"}}>Subscription Module for 5-day Meals</h1>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="img_div">
                                <img src={b_img} className="img-fluid" alt="" />
                            </div>
                        </div>
                        <div className="col-md-7 align-self-center">
                            <div className="store_content">
                                <div className="titleBox mb-3">
                                    <h2>Burger </h2>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                    since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <h3>Price: <span className="text-theme-primary font-weight-bold">$99.00</span></h3>
                                <p className="star">
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="store_tabbing_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="variation-tab" data-toggle="tab" href="#variation" role="tab" aria-controls="variation" aria-selected="true">Variations</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Store Details</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Reviews</a>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="variation" role="tabpanel" aria-labelledby="variation-tab">
                                    <div id="accordion">
                                        <div className="card">
                                            <div className="card-header" id="headingOne">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        Bun Selection*
                                                    </button>
                                                </h5>
                                            </div>

                                            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                                <div className="card-body ">
                                                    <div className="selection_div">
                                                        <div className="order_cancel">
                                                            <button><i className="fa fa-times" aria-hidden="true"></i></button>
                                                        </div>
                                                        <div className="order_img">
                                                            <img src={bun_img} className="img-fluid" alt="" />
                                                        </div>
                                                        <div className="order_name">
                                                            <div className="titleBox">
                                                                <h3>Classic burger</h3>
                                                            </div>
                                                        </div>
                                                        <div className="p_quantity">
                                                            <input type="number" value="01" placeholder="01" />
                                                        </div>
                                                        <div className="product_price ">
                                                            <h3>+$0</h3>
                                                        </div>
                                                    </div>
                                                    <div className="selection_div">
                                                        <div className="order_cancel">
                                                            <button><i className="fa fa-times" aria-hidden="true"></i></button>
                                                        </div>
                                                        <div className="order_img">
                                                            <img src={bun_img.png} className="img-fluid" alt="" />
                                                        </div>
                                                        <div className="order_name">
                                                            <div className="titleBox">
                                                                <h3>Classic burger</h3>
                                                            </div>
                                                        </div>
                                                        <div className="p_quantity">
                                                            <input type="number" value="01" placeholder="01" />
                                                        </div>
                                                        <div className="product_price ">
                                                            <h3>+$0</h3>
                                                        </div>
                                                    </div>
                                                    <div className="selection_div">
                                                        <div className="order_cancel">
                                                            <button><i className="fa fa-times" aria-hidden="true"></i></button>
                                                        </div>
                                                        <div className="order_img">
                                                            <img src={bun_img.png} className="img-fluid" alt="" />
                                                        </div>
                                                        <div className="order_name">
                                                            <div className="titleBox">
                                                                <h3>Classic burger</h3>
                                                            </div>
                                                        </div>
                                                        <div className="p_quantity">
                                                            <input type="number" value="01" placeholder="01" />
                                                        </div>
                                                        <div className="product_price ">
                                                            <h3>+$0</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card">
                                            <div className="card-header" id="headingTwo">
                                                <h5 className="mb-0">
                                                    <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                        Drinks*
                                                    </button>
                                                </h5>
                                            </div>
                                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                                <div className="card-body">
                                                    <div className="selection_div">
                                                        <div className="order_cancel">
                                                            <button><i className="fa fa-times" aria-hidden="true"></i></button>
                                                        </div>
                                                        <div className="order_img">
                                                            <img src={bun_img.png} className="img-fluid" alt="" />
                                                        </div>
                                                        <div className="order_name">
                                                            <div className="titleBox">
                                                                <h3>Classic burger</h3>
                                                            </div>
                                                        </div>
                                                        <div className="p_quantity">
                                                            <input type="number" value="01" placeholder="01" />
                                                        </div>
                                                        <div className="product_price ">
                                                            <h3>+$0</h3>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

                                    <div className="store_detail">
                                        <div className="titleBox">
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
                                <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                    <div className="store_detail reviews_tabb">

                                        <div className="client_info">
                                            <div className="img_div">
                                                <img src="../images/user.png" className="img-fluid" alt="" />
                                            </div>
                                            <div className="client_name">
                                                <div className="title">
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="store_extra_info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="quntity_instructions d-flex align-items-center justify-content-between">
                                <div className="titleBox">
                                    <h3>Quantity <br/> Special Instructions?</h3>
                                </div>
                                <div className="p_quantity">
                                    <input type="number" value="01" placeholder="01" />
                                </div>
                            </div>
                            <div className="text_area">
                                <textarea name="" id="" cols="30" rows="8" className="form-control">Add instructions...</textarea>
                            </div>
                            <div className="quntity_instructions d-flex align-items-center justify-content-between">
                                <div className="titleBox">
                                    <h3>Total Price</h3>
                                </div>
                                <div className="p_quantity">
                                    <h3>$99.00</h3>
                                </div>
                            </div>
                            <div className="actionCart">
                                <button type="button" className="btn couponButton">Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="recomendation_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="titleBox mb-3">
                                <h2>Recomendations</h2>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="categoryCard shadow">
                                <div className="cardHeader">
                                    <div className="topMeta">
                                        <div className="tags">
                                            <span>15%off</span>
                                        </div>
                                        <div className="tags wishList">
                                            <button className="button"><i className="fa fa-heart"></i></button>
                                        </div>
                                    </div>
                                    <div className="cardImage">
                                        <img src={c1} alt="Category Image" className="mw-100"/>
                                    </div>

                                    <div className="topMeta">
                                        <div className="companyLogo tags">
                                            <button className="button"><img src={mac} alt="MAc"/></button>
                                        </div>
                                    </div>

                                </div>
                                <div className="cardBody">
                                    <div className="body-upper">
                                        <div className="ratingBox">
                                            <p className="mb-0">Reviews 3.5k</p>
                                            <p className="mb-0">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </p>
                                        </div>
                                        <div className="deliveryInfo">
                                            <div className="meter">
                                                <p className="mb-0"> 30-40 mins</p>
                                                <p className="mb-0 text-success">$0 Delivery</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cardContent">
                                        <h3>The Classic</h3>
                                        <p>Fire Roasted pepper s, spanach</p>
                                        <h5 className="text-theme-primary font-weight-bold">$99.00</h5>
                                    </div>
                                </div>
                                <div className="cardFooter">
                                    <div className="cardAction">
                                        <div className="counterAction">
                                            <span className="qunatingCount">01</span>
                                            <button className="minus" type="button"><i className="fa fa-minus"></i></button>

                                            <button className="plus" type="button"><i className="fa fa-plus"></i></button>
                                        </div>
                                        <div className="addToCart">
                                            <button type="button">Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-3">
                            <div className="categoryCard shadow">
                                <div className="cardHeader">
                                    <div className="topMeta">
                                        <div className="tags">
                                            <span>15%off</span>
                                        </div>
                                        <div className="tags wishList">
                                            <button className="button"><i className="fa fa-heart"></i></button>
                                        </div>
                                    </div>
                                    <div className="cardImage">
                                        <img src={c1} alt="Category Image" className="mw-100"/>
                                    </div>

                                    <div className="topMeta">
                                        <div className="companyLogo tags">
                                            <button className="button"><img src={mac} alt="MAc"/></button>
                                        </div>
                                    </div>

                                </div>
                                <div className="cardBody">
                                    <div className="body-upper">
                                        <div className="ratingBox">
                                            <p className="mb-0">Reviews 3.5k</p>
                                            <p className="mb-0">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </p>
                                        </div>
                                        <div className="deliveryInfo">
                                            <div className="meter">
                                                <p className="mb-0"> 30-40 mins</p>
                                                <p className="mb-0 text-success">$0 Delivery</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cardContent">
                                        <h3>The Classic</h3>
                                        <p>Fire Roasted pepper s, spanach</p>
                                        <h5 className="text-theme-primary font-weight-bold">$99.00</h5>
                                    </div>
                                </div>
                                <div className="cardFooter">
                                    <div className="cardAction">
                                        <div className="counterAction">
                                            <span className="qunatingCount">01</span>
                                            <button className="minus" type="button"><i className="fa fa-minus"></i></button>

                                            <button className="plus" type="button"><i className="fa fa-plus"></i></button>
                                        </div>
                                        <div className="addToCart">
                                            <button type="button">Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-3">
                            <div className="categoryCard shadow">
                                <div className="cardHeader">
                                    <div className="topMeta">
                                        <div className="tags">
                                            <span>15%off</span>
                                        </div>
                                        <div className="tags wishList">
                                            <button className="button"><i className="fa fa-heart"></i></button>
                                        </div>
                                    </div>
                                    <div className="cardImage">
                                        <img src={c1} alt="Category Image" className="mw-100"/>
                                    </div>

                                    <div className="topMeta">
                                        <div className="companyLogo tags">
                                            <button className="button"><img src={mac} alt="MAc"/></button>
                                        </div>
                                    </div>

                                </div>
                                <div className="cardBody">
                                    <div className="body-upper">
                                        <div className="ratingBox">
                                            <p className="mb-0">Reviews 3.5k</p>
                                            <p className="mb-0">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </p>
                                        </div>
                                        <div className="deliveryInfo">
                                            <div className="meter">
                                                <p className="mb-0"> 30-40 mins</p>
                                                <p className="mb-0 text-success">$0 Delivery</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cardContent">
                                        <h3>The Classic</h3>
                                        <p>Fire Roasted pepper s, spanach</p>
                                        <h5 className="text-theme-primary font-weight-bold">$99.00</h5>
                                    </div>
                                </div>
                                <div className="cardFooter">
                                    <div className="cardAction">
                                        <div className="counterAction">
                                            <span className="qunatingCount">01</span>
                                            <button className="minus" type="button"><i className="fa fa-minus"></i></button>

                                            <button className="plus" type="button"><i className="fa fa-plus"></i></button>
                                        </div>
                                        <div className="addToCart">
                                            <button type="button">Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="lastLink">
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

        </div>
    );
}

