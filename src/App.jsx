import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Componetns
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

//Pages
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import AboutUsPage from "./pages/AboutUsPage";
import AllProductsPage from "./pages/AllProductsPage";
import ItemDetailContainerPage from "./pages/ItemDetailContainerPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/allproducts" element={<AllProductsPage />} />
          <Route path="/category/:genre" element={<CategoryPage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route
            path="/detail/:id"
            element={<ItemDetailContainerPage />}
          ></Route>
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
