import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Films from "./Films.tsx";
import ThemeButton from "./ThemeButton.tsx";
import { themeSelector } from "../store/selectors.ts";

const Movies: React.FC<{ title: string, filmCategory: string }> = (props) => {
    const { title, filmCategory } = props;

    const theme = useSelector(themeSelector);

    return (
        <div className="main-container" style={{ color: theme.TextColor, backgroundColor: theme.backgroundColor }}>

            <header>
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
            </header>

            <main>
                <h1 className="main-title">{title}</h1>

                <ThemeButton></ThemeButton>

                <Films filmCategory={filmCategory}></Films>
            </main>
        </div>
    )
}

export default Movies;