import "./App.css";
import Navbar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Main from "./components/Main";

const NavLayout = () => (
  <div>
    <Navbar />
    <Outlet />
  </div>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<NavLayout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" />
            <Route path="/checkout" />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
