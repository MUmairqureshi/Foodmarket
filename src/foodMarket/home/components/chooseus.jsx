

import checkout from '../../images/checkout.png' 
// import package from '../../images/package.png' 
 import choose from '../../images/choose.png'
export function Chooseus(){
    return(
<div>
<section className="choose">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5 mb-3">
                            <div className="position-relative">
                                <div className="thumnailBox">
                                    <img src={choose} className="mw-100" />
                                </div>
                                {/* <div className="aboutBox shadow bg-white p-3">
                                    <h4>ABOUT US</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when anunknown printer took a galley of type and scrambled it to industry's standard dummy text ever since the when anunknown printer took a galley of type and scrambled it to </p>
                                    <div className="offerButton">
                                        <button type="button" className="primaryButton btn">Read More</button>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="chooseContent">
                                <div className="titleBox">
                                    <h1 className="font-weight-bold">Why Choose Us</h1>
                                </div>
                                <div className="aboutContentBox">
                                    <div className="iconImage">
                                        <img src={checkout} alt="" className="mw-100" />
                                    </div>
                                    <div className="contentArea">
                                        <h5><span>1.</span>One Of a Kind Treats</h5>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                    </div>
                                </div>
                                <div className="aboutContentBox">
                                    <div className="iconImage">
                                        <img src={checkout} alt="" className="mw-100" />
                                    </div>
                                    <div className="contentArea">
                                        <h5><span>2.</span>Thoughtfully packaged</h5>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                    </div>
                                </div>
                                <div className="aboutContentBox">
                                    <div className="iconImage">
                                        <img src={checkout} alt="" className="mw-100" />
                                    </div>
                                    <div className="contentArea">
                                        <h5><span>3.</span>nationwide delivery</h5>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
</div>


    )}
