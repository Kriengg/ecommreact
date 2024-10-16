// src/App.js
import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import OrderConfirmation from './components/OrderConfirmation';
import OrderHistory from './components/OrderHistory';
import ProductDetail from './components/ProductDetail'; // Import the ProductDetail component
import Profile from './components/Profile'; // Import the Profile component
import Register from './components/Register'; // Import the Register component
import sampleProducts from './data/sampleProducts';

function App() {
  const [products, setProducts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setProducts(sampleProducts);
  }, []);

  const location = useLocation();
  const hideHeaderPaths = ['/login', '/register'];

  return (
    <>
      {!hideHeaderPaths.includes(location.pathname) && (
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} cart={cart} />
      )}
      <main>
        <Routes>
          <Route path="/" element={<Home products={products} cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
          <Route path="/checkout" element={<Checkout cart={cart} />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/profile" element={<Profile />} /> {/* Add the Profile route */}
          <Route path="/product/:id" element={<ProductDetail products={products} />} /> {/* Add the ProductDetail route */}
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/register" element={<Register />} /> {/* Add the Register route */}
        </Routes>
      </main>
      <Footer />
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;