import React from "react";

import {Card} from '../foodMarket/Card/index'
import { Header } from '../foodMarket/Layout/header'

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from '../foodMarket/home/index'
export function Rout (){
    return(
        <div>
    <Router>
    <Header />
 
        <Routes>
          <Route path="/home" element={<Home />} /> 
          <Route path="/card" element={<Card />} /> 

        </Routes>


      </Router>
        </div>
    )
}