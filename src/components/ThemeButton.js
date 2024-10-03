import React, { useContext } from "react";

import { ThemeContext } from "../theme-context.js";

const ThemeButton = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button className="theme-button" onClick={toggleTheme}>
            <img src={theme.themeButtonImg} alt="icon" className="theme-img" />
        </button>
    )



}

export default ThemeButton;