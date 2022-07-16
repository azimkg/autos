import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Guearentees from "./Guarantees/Guearantees";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Forma from "./Forma/Forma";
import ToolsofBmw from "./ToolsofBmw/ToolsofBmw";
import Categories from "./Categories/Categories";
import HeaderTop from "./HeaderTop/HeaderTop";
import AboutUs from "./AboutUs/AboutUs";
import Contacts from "./Contacts/Contacts";
import PartsList from "./PartsList/PartsList";
import Support from "./Support/Support";
import Models from "./Models/Models";
import Details from "./Details/Details";
import Cart from "./ModelsCart/Cart";
import SearchByVin from "./SearchByVin/SearchByVin";
import Favorites from "./Favorites/Favorites";
import OneCategory from "./OneCategory/OneCategory";
import QA from "./QA/QA";

const Routing = () => {
  return (
    <BrowserRouter>
      <HeaderTop />
      <Header />
      <Routes>
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/category/:id" element={<OneCategory />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Forma />} />
        <Route path="/tools" element={<ToolsofBmw />} />
        <Route path="/models/:id/categories/:id" element={<Categories />} />

        <Route path="/details/:id" element={<Details />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/guarentees" element={<Guearentees />} />
        <Route path="/models/:id" element={<Models />} />
        <Route path="/cartModels" element={<Cart />} />
        <Route path="/search" element={<SearchByVin />} />
        <Route path="/qa" element={<QA />} />

        <Route
          path="/models/:id/categories/:id/parts/:id"
          element={<PartsList />}
        />
      </Routes>
      <Support />
      <Footer />
    </BrowserRouter>
  );
};

export default Routing;
