import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div
      style={{
        height: "100vh",
        padding: "10px",
      }}
    >
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="featured-products">Featured</Link>
        <Link to="new-products">New product</Link>
        {/* Make sure not to include '/' to nested routes*/}
      </nav>
      <Outlet />
      {/* outlet component tells react which nested component should render 
      It renders the matching route from parent list of routes
      */}
    </div>
  );
};

export default Products;
