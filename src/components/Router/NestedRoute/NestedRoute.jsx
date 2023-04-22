import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./Home";
// import About from "./About";
import Products from "./Products";
import Navbar from "./Navbar";
import NewProducts from "./NewProducts";
import Featured from "./Featured";
import Users from "./DynamicRoutes/Users";
import Login from "../ProtetedRoutes/Login";
import Profile from "../ProtetedRoutes/Profile";
import { AuthProvider } from "../ProtetedRoutes/auth";
import ProtectedRoute from "../ProtetedRoutes/ProtectedRoute";

const LazyAbout = React.lazy(() => import("./About"));
const NestedRoute = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <React.Suspense fallback="Loading....">
              <LazyAbout />
            </React.Suspense>
          }
        />
        {/* Products has two nested routes 1> Featured 2>New products */}
        <Route path="products" element={<Products />}>
          <Route index element={<Featured />} />
          {/* The above route elements is used because if we dont write the above line on initial page render 
            of prodcuts page nothing will be show. The above line tells react to render newProduts page on initial render */}
          <Route path="new-products" element={<NewProducts />} />
          <Route path="featured-products" element={<Featured />} />
        </Route>
        <Route path="users" element={<Users />} />
        <Route
          path="profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="login" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
};

export default NestedRoute;
