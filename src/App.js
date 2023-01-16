import "./App.css";
import Navbar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";

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
            <Route
              path="/"
              element={<ItemListContainer greeting="desdeItemListContainer " />}
            />
            <Route
              path="/category/:id"
              element={<ItemListContainer greeting="desdeItemListContainer " />}
            />
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
