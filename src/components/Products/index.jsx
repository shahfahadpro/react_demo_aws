import { Link, Outlet } from "react-router-dom";

export const Products = () => {
  return (
    <>
      <input type="search" placeholder="= search products" />
      <div>
        <nav>
          <Link to="featured">Featured</Link>
          <Link to="new">New Products</Link>
        </nav>
        <Outlet />
      </div>
    </>
  );
};
