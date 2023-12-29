import React from "react";


import {Favourit} from './favouritest'
 
import { useState, useEffect } from 'react'
import { Hero } from '../../foodMarket/home/components/hero' 
// 
import { ColorRing } from 'react-loader-spinner'

// Menu
export function Favourites() {
  // const [loading, setLoading] = useState(true);
  // const [data, setData] = useState(null);
 

const login = localStorage.getItem('userToken');
console.log("authToken" , login)

  return (
    //         <div className="">
    //    <Placeholder.Paragraph rows={8} />
    //     <Loader backdrop content="loading..." vertical />
    //             <Hero />
    //             <Category />
    //             <Shakingdissert />
    //             <Trending_dishes />
    //             <FavoriteseNear />
    //             <Bakery />
    //             <Subscription />
    //             <Beverages />
    //             <Beverages_Recommendations />
    //             <Chooseus />
    //             <AboutCompanyBanner />
    //             <Get_help />



    //         </div>
    <div>
       {/* {loading && <div>
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        /></div>} */}

      {/* {loading && data && ( */}
        <>

          <Hero />
          <Favourit/>
          {/* <Category />
          <Shakingdissert />
          <Trending_dishes />
          <FavoriteseNear />
          <Bakery />
          <Subscription />
          <Beverages />
          <Beverages_Recommendations />
          <Chooseus />
          <AboutCompanyBanner />
          <Get_help /> */}
        </>
      {/* )} */}

      {/* Display a message when no data is available */}
      {/* {!loading && !data && <Placeholder.Paragraph rows={8} />} */}
    </div>
  );
}

 
