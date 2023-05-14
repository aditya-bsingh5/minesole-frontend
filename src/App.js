import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Store from "./pages/Store";
import Blogs from "./pages/Blogs";
import Compare from "./pages/Compare";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Forgot from "./pages/Forgot";
import Signup from "./pages/Signup";
import Reset from "./pages/Reset";
import Blog from "./pages/Blog";
import RefundPolicy from "./pages/RefundPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import TermsAndCond from "./pages/TermsAndCond";
import Product from "./pages/Product";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="store" element={<Store />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blog/:id" element={<Blog />} />
            <Route path="compare" element={<Compare />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<Forgot />} />
            <Route path="signup" element={<Signup />} />
            <Route path="reset" element={<Reset />} />
            <Route path="refund-policy" element={<RefundPolicy />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="shipping-policy" element={<ShippingPolicy />} />
            <Route path="terms-cond" element={<TermsAndCond />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
