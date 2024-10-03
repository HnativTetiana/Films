import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import FavouriteMovies from "./pages/FavouriteMovies.tsx";
import TopRatedMovies from "./pages/TopRatedMovies.tsx";
import { store } from "./store/store.ts";

import "./styles/App.css";

const App: React.FC = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FavouriteMovies></FavouriteMovies>} />
                <Route path="/top_rated" element={<TopRatedMovies></TopRatedMovies>} />
                <Route path="/tv_shows" element={<FavouriteMovies></FavouriteMovies>} />
            </Routes>
        </BrowserRouter>
    </Provider>
)

export default App;
