import { NavLink } from "react-router-dom";
import "./index.css";
import { Box } from "@mui/material";
import { useAuth } from "../ProtetedRoutes/auth";

const Navbar = () => {
  const auth = useAuth();

  return (
    <Box
      sx={{ display: "flex", gap: "1rem", p: 2, bgcolor: "lightblue" }}
      component="nav"
    >
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      {!auth.user && <NavLink to="/login">Login</NavLink>}
    </Box>
  );
};

export default Navbar;
