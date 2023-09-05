import AboutPage from "@/pages/AboutPage";
import BlogPage from "@/pages/BlogPage";
import ContactPage from "@/pages/ContactPage";
import DetailPage from "@/pages/DetailPage";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import ShopPage from "@/pages/ShopPage";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/product/:slug" element={<DetailPage />}></Route>
      <Route path="/collections/all" element={<ShopPage />}></Route>
      <Route path="/blog" element={<BlogPage />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/contact" element={<ContactPage />}></Route>
    </Routes>
  );
};

export default Router;
