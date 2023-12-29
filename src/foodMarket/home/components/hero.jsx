import React, { useState } from "react";

import { Zipcode } from '../../../components/services/catigories'

export function Hero({ setZip, zip, handleFetchData }) {
  // const [zip, setZip] = useState('');

 
  return (
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

                {/* Styled Input Box */}
                {/* <input
                  onChange={(e) => setZip(e.target.value)}
                  type="text"
                  placeholder="Enter Zip"
                  value={zip}
                  style={{
                    padding: '10px',
                    fontSize: '16px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                    width: '100%',
                    marginBottom: '10px',
                  }}
                /> */}

                <button onClick={handleFetchData} href="javascript: void()" className="nav-link active d-inline-block mb-3">
              Subscription Module for 5-Day Meals
                </button>
               
              </div>
            </div>
          </div>
          <div className="col-md-4 px-md-0">
            <div className="baner-3 h-100"></div>
          </div>
        </div>
      </div>
    </section>
  );


}