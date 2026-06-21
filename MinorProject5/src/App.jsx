import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Productdetails from "./Pages/Productdetails";

import { CartProvider } from "./Context/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>

        <Navbar />

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/product/:id"
            element={<Productdetails />}
          />

          <Route
            path="/cart"
            element={<Cart />}
          />

        </Routes>

      </BrowserRouter>
    </CartProvider>
  );
}

export default App;