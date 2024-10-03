import React from "react";

import { useSelector, useDispatch } from "react-redux";

import { toggleTheme } from "../store/actions.ts";

import { themeSelector } from "../store/selectors.ts";

const ThemeButton: React.FC = () => {

    const theme = useSelector(themeSelector);

    const dispatch = useDispatch();

    const handleToggle = () => dispatch(toggleTheme());

    return (
        <button className="theme-button" onClick={handleToggle}>
            <img src={theme.themeButtonImg} alt="icon" className="theme-img" />
        </button>
    )

}

export default ThemeButton;