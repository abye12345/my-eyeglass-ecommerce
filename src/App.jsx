import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Menubar/Layout";
import Dazi from "./Menubar/Dazi";
import Allproducts from "./Menubar/Allproducts";
import Newarrivals from "./Menubar/Newarrivals";
import Sunglasses from "./Menubar/Sunglasses";
import Eyeglasses from "./Menubar/Eyeglasses";
import About from "./Menubar/About";
import Giftcard from "./Menubar/Giftcard";
import UserImage from "./Menubar/UserImage";
import Login from "./Menubar/Login";
import Cart from "./Menubar/Cart";
import Footer from "./Footer/Footer";
import Condor from "./Menubar/Condor";
import Solaris from "./Menubar/Solaris";
import Odyes from "./Menubar/Odyes";
import Lumin from "./Menubar/Lumin";
import Focus from "./Menubar/Focus";
import Nebula from "./Menubar/Nebula";
import Sung1 from "./Menubar/Sung1";
import Sung2 from "./Menubar/Sung2";
import Eyeg1 from "./Menubar/Eyeg1";
import Eyeg2 from "./Menubar/Eyeg2";
const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className=" bg-amber-400 p-2 text-center text-sm md:text-base ">
        FREE SHIPPING ON ORDERS OVER $75
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dazi />} />
            <Route path="products" element={<Allproducts />} />
            <Route path="newarrival" element={<Newarrivals />} />
            <Route path="sunglasses" element={<Sunglasses />} />
            <Route path="eyeglasses" element={<Eyeglasses />} />
            <Route path="about" element={<About />} />
            <Route path="gift" element={<Giftcard />} />
            <Route path="userimage" element={<UserImage />} />
            <Route path="login" element={<Login />} />
            <Route path="cart" element={<Cart />} />
            <Route path="condor" element={<Condor />} />
            <Route path="solaris" element={<Solaris />} />
            <Route path="odyes" element={<Odyes />} />
            <Route path="lumin" element={<Lumin />} />
            <Route path="focus" element={<Focus />} />
            <Route path="nebula" element={<Nebula />} />
            <Route path="sung1" element={<Sung1 />} />
            <Route path="sung2" element={<Sung2 />} />
            <Route path="eyeg1" element={<Eyeg1 />} />
            <Route path="eyeg2" element={<Eyeg2 />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
