import React, { useState } from "react";

import { ThemeContext, themes } from "../theme-context.js";

import Films from "./Films.js";

import ThemeButton from "./ThemeButton.js";

import { Link } from "react-router-dom";

const Movies = (props) => {
    const [theme, setTheme] = useState(themes.light);

    const toggleTheme = () => {
        setTheme(prevState =>
            (prevState === themes.light ? themes.dark : themes.light)
        )
    }

    return (
        <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
            <div className="main-container" style={{ color: theme.TextColor, backgroundColor: theme.backgroundColor }}>

                <nav className="nav-menu">
                    <ul className="nav-menu-list">
                        <li>
                            <Link to="/" className={`link ${theme.navLinkClass}`}>
                                Favourite Movies
                            </Link>
                        </li>
                        <li>
                            <Link to="/top_rated" className={`link ${theme.navLinkClass}`}>
                                Top Rated Movies
                            </Link>
                        </li>
                        <li>
                            <Link to="/tv_shows" className={`link ${theme.navLinkClass}`} onClick={() => alert("This page is under construction")}>
                                TV Shows
                            </Link>
                        </li>
                    </ul>
                </nav>

                <h1 className="main-title">{props.title}</h1>

                <ThemeButton></ThemeButton>

                <Films filmCategory={props.filmCategory}></Films>
            </div>
        </ThemeContext.Provider>
    )
}

export default Movies;