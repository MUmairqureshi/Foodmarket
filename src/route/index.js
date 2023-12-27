import React from "react";

import { Cart } from '../foodMarket/Cart/index'
import { Header } from '../foodMarket/Layout/header'
import {Aboutus} from '../foodMarket/aboutUs/about_us'
import {Login} from '../foodMarket/acount/login'
import {Contact} from '../foodMarket/Contact-us/contactus'
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from '../foodMarket/home/index'
export function Rout() {
  return (
    <div>
      <BrowserRouter basename="/foodmarket">
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/login" element={<Login />} />
           {/* Login */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}