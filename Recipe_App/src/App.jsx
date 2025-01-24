import React, { Suspense } from "react";
import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar.jsx";

export default function App() {
  const Home = lazy(() => import("./home-page/home.jsx"));
  const Details = lazy(() => import("./details-page/details.jsx"));
  const Favorites = lazy(() => import("./favorite-page/favorite.jsx"));

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="./details.id" element={<Details />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}
