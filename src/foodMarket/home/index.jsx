
import { Get_all_catigories, Menu_listing, Dietary_listing, Get_all_product, Trending_product, Filter_product } from '../../components/services/catigories'
import { useState, useEffect } from 'react'
import { Hero } from './components/hero'
import { Category } from './components/category'
import { Shaking_dissert } from './components/shaking-dissert'
import { Trending_dishes } from './components/trending_dishes'
import { FavoriteseNear } from './components/favoriteseNear'
import { Bakery } from './components/bakery'
import { Subscription } from './components/subscription'
import { Beverages } from './components/beverages'
import { Beverages_Recommendations } from './components/beverages_recommendation'
import { Chooseus } from './components/chooseus'
import { AboutCompanyBanner } from './components/aboutCompanyBanner'
import { Get_help } from './components/get_help'


// Menu
export function Home() {


    return (
        <div className="">

            <Hero />

            {/*   category section       */}
            <Category />

            {/* <Category /> */}
            <Shaking_dissert />
            <Trending_dishes />

            <FavoriteseNear />
            <Bakery />


            {/* subscription */}

            <Subscription />

            <Beverages />



            <Beverages_Recommendations />
 
            <Chooseus />


            <AboutCompanyBanner />
            <Get_help />



        </div>
    );
}

export default Home;
