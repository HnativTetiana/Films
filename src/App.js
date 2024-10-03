import React from "react";

import FavouriteMovies from "./pages/FavouriteMovies";
import TopRatedMovies from "./pages/TopRatedMovies";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<FavouriteMovies></FavouriteMovies>} />
            <Route exact path="/top_rated" element={<TopRatedMovies></TopRatedMovies>} />
            <Route exact path="/tv_shows" element={<FavouriteMovies></FavouriteMovies>} />
        </Routes>
    </BrowserRouter>
)

export default App;
