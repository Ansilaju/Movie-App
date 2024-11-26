import "./App.css";
import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";

import MovieDetail from "./moviedetail.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/MovieDetail/:id" element={<MovieDetail />}></Route>
    </Routes>
  );
};

export default App;
