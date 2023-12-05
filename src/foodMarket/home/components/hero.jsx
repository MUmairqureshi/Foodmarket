import React from "react";


export function Hero(){
    return(

        <section className="mainBanner">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 px-md-0">
                    <div className="baner-1 h-100"></div>
                </div>
                <div className="col-md-4 px-md-0">
                    <div className="bannerBox text-center baner-2">
                        <div className="banContent">
                            <h2 className="text-white mb-3">Restaurant & Food Marketplace</h2>
                            <a href="javascript: void()" className="nav-link active d-inline-block mb-3">Subscription Meal</a>
                            <p>Subscription Module for 5-Day Meals</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 px-md-0">
                    <div className="baner-3 h-100"></div>
                </div>
            </div>
            </div>
    </section>
    )
}