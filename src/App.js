import React, { useState } from "react";
import {CounterDisplay} from "./components/Product";
//Add Components
import Nav from "./components/Nav";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Carousel from "./components/Carousel.js";



function App() {
  
  return (
    <div className="div">
      <Nav />
      <Product />
    </div>
  );
}

export default App;
