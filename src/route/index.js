import React from "react";

import { Cart } from '../foodMarket/Cart/index'
import { Header } from '../foodMarket/Layout/header'
import {Aboutus} from '../foodMarket/aboutUs/about_us'

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
           
        </Routes>
      </BrowserRouter>
    </div>
  )
}