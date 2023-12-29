import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Cart } from '../foodMarket/Cart/index'
import { Header } from '../foodMarket/Layout/header'
import {Vendor} from '../foodMarket/wender/wender'
import {Login} from '../foodMarket/acount/login'
import {Signup} from '../foodMarket/acount/signup'
import {Contact} from '../foodMarket/Contact-us/contactus'
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter  } from "react-router-dom";
import Home from '../foodMarket/home/index'
import { Protected , Protectedvendor } from "./protectedroute";
import {Favourites} from '../foodMarket/favourite/favourite'
export function Rout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const navigate = useNavigate();

  // Check if user is logged in
 
     
  return (
    <div>
      <BrowserRouter basename="/foodmarket">
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/cart"  element={<Protected Components={Cart}/>} />
          <Route path="/wender/:id" element={<Protectedvendor Components={Vendor}/>} />

          <Route path="/contact-us" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/favourit-product" element={<Favourites />} />
       {/* favourit-product */}
        </Routes>
      </BrowserRouter>
 
    </div>
  )
}

 