import React , {useState} from "react";

import {Zipcode} from '../../../components/services/catigories'

export function Hero(){
    const [zip, setZip] = useState('');
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
  
    const handleZipChange = (e) => {
      // Update the state with the new value from the input
      setZip(e.target.value);
    };

    const fetchDataByZipCode = async () => {
        console.log("Zipcode", zip);
        try {
          const response = await Zipcode(zip);
          console.log("response", response);
    
          // Assuming the response contains a property named 'products'
          // Update the state with the fetched products
          setProducts(response);
          setError(null);
        } catch (error) {
          // Handle errors
          console.error('Error fetching data:', error);
          setError('Error fetching data. Please try again.');
          setProducts([]);
        }
      };
    
      const handleFetchData = () => {
        // Call the API when the button is clicked
        fetchDataByZipCode();
      };
  console.log("productshome" , products)

 

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
  
                  {/* Styled Input Box */}
                  <input
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
                  />
  
                  <button onClick={handleFetchData}  href="javascript: void()" className="nav-link active d-inline-block mb-3">
                  Find your Near food
                  </button>
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
    );

  
}