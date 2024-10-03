import React from "react";

import sunImage from './imgs/sun.svg';

import moonImage from './imgs/moon.svg';

export const themes = {
    light: {
        TextColor: 'rgb(105, 31, 31)',
        backgroundColor: 'blanchedalmond',
        RatingColor: 'rgb(255, 0, 85)',
        PaginationButtonClass: "light-button",
        themeButtonImg: sunImage,
        navLinkClass: "light-link",
    },
    dark: {
        TextColor: 'black',
        backgroundColor: 'burlywood',
        RatingColor: 'red',
        PaginationButtonClass: "dark-button",
        themeButtonImg: moonImage,
        navLinkClass: "dark-link",
    },
};

export const ThemeContext = React.createContext(
    {
        theme: themes.light,
        toggleTheme: () => { },
    }
);
