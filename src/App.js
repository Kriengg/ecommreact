import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Header from './components/Header';
import Home from './components/Home';
import OrderConfirmation from './components/OrderConfirmation';
import OrderHistory from './components/OrderHistory';
import UserProfile from './components/UserProfile'; // Import the UserProfile component
import sampleProducts from './data/sampleProducts';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setProducts(sampleProducts);
  }, []);

  return (
    <Router>
      <Header cart={cart} />
      <Routes>
        <Route path="/" element={<Home products={products} cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/checkout" element={<Checkout cart={cart} />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/profile" element={<UserProfile />} /> {/* Add the UserProfile route */}
      </Routes>
    </Router>
  );
}

export default App;