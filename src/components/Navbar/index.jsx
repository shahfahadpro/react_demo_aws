import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav style={{ display: "flex", padding: "10px" }}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/products">Products</NavLink>
    </nav>
  );
};
