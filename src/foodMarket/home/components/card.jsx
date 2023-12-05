// import React from 'react';
// import { useCart } from '../../../context';

// import mac from '../../images/mac.png'

 

// export function Card ({product}){
//     console.log(product)
//      const ImageUrl = "https://custom2.mystagingserver.site/food-stadium/public/"
   
//     return(
//         <div className="row" > 
//                                            <Card style={{ width: '16rem' }}>
//                                                  <div className="categoryCard shadow">
//                                                      <div className="cardHeader">
//                                                          <div className="topMeta">
//                                                              <div className="tags">
//                                                                  <span>15%off</span>
//                                                              </div>
//                                                              <div className="tags wishList">
//                                                                  <button className="button"><i className="fa fa-heart"></i></button>
//                                                              </div>
//                                                          </div>
//                                                          <div className="cardImage">
//                                                              <img  src={ImageUrl + product?.feature_image} alt="Category Image" className="mw-100" />
//                                                          </div>

//                                                          <div className="topMeta">
//                                                              <div className="companyLogo tags">
//                                                                  <button className="button"><img src={mac} alt="MAc" /></button>
//                                                              </div>
//                                                          </div>

//                                                      </div>
//                                                      <div className="cardBody">
//                                                          <div className="body-upper">
//                                                              <div className="ratingBox">
//                                                                  <p className="mb-0">Reviews 3.5k</p>
//                                                                  <p className="mb-0">
//                                                                      <i className="fa fa-star"></i>
//                                                                      <i className="fa fa-star"></i>
//                                                                      <i className="fa fa-star"></i>
//                                                                      <i className="fa fa-star"></i>
//                                                                      <i className="fa fa-star"></i>
//                                                                  </p>
//                                                              </div>
//                                                              <div className="deliveryInfo">
//                                                                  <div className="meter">
//                                                                      <p className="mb-0"> 30-40 mins</p>
//                                                                      <p className="mb-0 text-success">$0 Delivery</p>
//                                                                  </div>
//                                                              </div>
//                                                          </div>
//                                                          <div className="cardContent">
//                                                              {/* <h3>{product.title}</h3> */}
//                                                              {/* <p>{product.description.slice(0,12) }</p> */}
//                                                              {/* <h5 className="text-theme-primary font-weight-bold">${product.product_price}</h5> */}
//                                                          </div>
//                                                      </div>
//                                                      <div className="cardFooter">
//                                                          <div className="cardAction">
//                                                              <div className="counterAction">
//                                                                  <span className="qunatingCount">  01</span>
//                                                                  <button className="minus"  type="button"   ><i className="fa fa-minus"></i></button>

//                                                                  <button  className="plus" type="button"><i className="fa fa-plus"></i></button>
//                                                              </div>
//                                                              <div className="addToCart">
                                                         
//                                                                  <button     type="button">Add To Cart</button>
//                                                              </div>
//                                                          </div>
//                                                      </div>
//                                                  </div>
//                                              </Card> 
//                                              </div> 
//     )
// }