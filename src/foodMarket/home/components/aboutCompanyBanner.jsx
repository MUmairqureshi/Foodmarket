
import l1 from '../../../assets/images/l1.png'

import l3 from '../../../assets/images/l3.png'
// import dq from '../../../assets/images'
import React from "react";

 
export function AboutCompanyBanner(){
    return(
    
        <section className="aboutCompanyBanner">
        <div className="container-fluid contentShow">
            <div className="row">
                <div className="col-md-12 mb-3">
                    <div className="titleBox text-center">
                        <h3 className="text-white">LOGO HERE</h3>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="infoBox">
                        <div className="imageInfo">
                            <img src={l1} alt="" className="mw-100" />
                        </div>
                        <div className="infoContent">
                            <h3>Address</h3>
                            <p><i className="fa fa-building"></i>Plaza x. y Floor XYZ</p>
                            <p><i className="fa fa-envelope"></i><a href="mailto: info@gmail.com" className="text-white">info@gmail.com</a></p>
                            <p><i className="fa fa-phone"></i><a href="tel: 123-3646-466" className="text-white">123-3646-466</a></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="infoBox">
                        <div className="imageInfo">
                            <img src={l1} alt="" className="mw-100" />
                        </div>
                        <div className="infoContent">
                            <h3>Open Time</h3>
                            <p>24/7 Open</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="infoBox">
                        <div className="imageInfo">
                            <img src={l3} alt="" className="mw-100" />
                        </div>
                        <div className="infoContent">
                            <h3>Subcribe Newsletter</h3>
                            <div className="formField">
                                <i className="fa fa-send"></i>
                                <input type="email" className="form-control" placeholder="Email Address" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 mt-4">
                    <p>Copyright 2023 All Right Reserved.   Privacy Policy   Terms & Conditions   Faq </p>
                </div>
            </div>
        </div>
    </section>
    
        )}
