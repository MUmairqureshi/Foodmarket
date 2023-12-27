
import { Get_all_product } from '../../components/services/catigories'
import { useState, useEffect } from 'react'
import { Hero } from './components/hero'
import { Category } from './components/category'
import { Shakingdissert } from './components/shaking-dissert'
import { Trending_dishes } from './components/trending_dishes'
import { FavoriteseNear } from './components/favoriteseNear'
import { Bakery } from './components/bakery'
import { Subscription } from './components/subscription'
import { Beverages } from './components/beverages'
import { Beverages_Recommendations } from './components/beverages_recommendation'
import { Chooseus } from './components/chooseus'
import { AboutCompanyBanner } from './components/aboutCompanyBanner'
import { Get_help } from './components/get_help'
import { Loader, Placeholder } from 'rsuite';

import { ColorRing } from 'react-loader-spinner'

// Menu
export function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await Get_all_product();
        setData(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {

        setLoading(false);
      }
    };

    fetchData();
  }, []);

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

      {loading && <div><Placeholder.Paragraph rows={8} />
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        /></div>}

      {!loading && data && (
        <>

          <Hero />
          <Category />
          <Shakingdissert />
          <Trending_dishes />
          <FavoriteseNear />
          <Bakery />
          <Subscription />
          <Beverages />
          <Beverages_Recommendations />
          <Chooseus />
          <AboutCompanyBanner />
          <Get_help />
        </>
      )}

      {/* Display a message when no data is available */}
      {!loading && !data && <Placeholder.Paragraph rows={8} />}
    </div>
  );
}

export default Home;
