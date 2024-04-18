import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import ProductByBrand from "./pages/product-by-brand";
import ProductByCategory from "./pages/product-by-category.jsx";
import ProductByKeyword from "./pages/product-by-keyword.jsx";
import ProductDetails from "./pages/product-details.jsx";
import LoginPage from "./pages/login-page.jsx";
import OtpPage from "./pages/otp-page.jsx";
import ProfilePage from "./pages/profile-page.jsx";
import Dashboard from "./pages/dashbord.jsx";
import CreateProduct from "./pages/createProduct.jsx";
import CreateProductList from "./pages/createProductList.jsx";
import UpdateProductPage from "./pages/UpdateProductPage.jsx";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/by-brand/:id" element={<ProductByBrand />} />
        <Route path="/by-category/:id" element={<ProductByCategory />} />
        <Route path="/by-keyword/:keyword" element={<ProductByKeyword />} />
        <Route path="/details/:id" element={<ProductDetails />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/CreateProduct" element={<CreateProduct />} />
        <Route path="/productList" element={<CreateProductList />} />
        <Route path="/update/:id" element={<UpdateProductPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/otp" element={<OtpPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
