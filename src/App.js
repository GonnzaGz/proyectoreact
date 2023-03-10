import "./App.css";
import Navbar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Contacto from "./components/Contacto";
import { CartContext, MyContext, CartProvider } from "./components/CartContext";
import { useState } from "react";

const NavLayout = () => (
  <div>
    <Navbar />
    <Outlet />
  </div>
);

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<NavLayout />}>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:id" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" />
              <Route path="/checkout" element={<Contacto />} />
              <Route path="/contacto" element={<Contacto />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
