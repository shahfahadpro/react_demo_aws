import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  // About,
  NotFound,
  Navbar,
  OrderSummary,
  Products,
  FeaturedProducts,
  NewProducts,
  Users,
  UserDetails,
  Admin,
} from "./components";

const LazyAbout = React.lazy(() => import("./components/About"));

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <Suspense fallback="Loading ...">
              <LazyAbout />
            </Suspense>
          }
        />
        <Route path="/order-summary" element={<OrderSummary />} />
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="/users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
