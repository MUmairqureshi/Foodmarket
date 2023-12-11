import React from "react";


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

        </Routes>


      </Router>
        </div>
    )
}