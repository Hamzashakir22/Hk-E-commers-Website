import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Order from "./Pages/Order";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import PlaceOrder from "./Pages/PlaceOrder";
import Collection from "./Pages/Collection";
import Login from "./Pages/Login";
import Navbar from "./Components/Navbar.jsx"
import Footer from "./Components/Footer.jsx";

const App = () => {
  return (
    <div className=" px-4 sm:px-[5vw] md:x-[7vw] lg:px-[9px]">

    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/order" element={<Order />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
