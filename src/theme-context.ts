import sunImage from './imgs/sun.svg';

import moonImage from './imgs/moon.svg';

export interface Theme {
    themeName: string,
    TextColor: string,
    backgroundColor: string,
    RatingColor: string,
    PaginationButtonClass: string,
    themeButtonImg: string,
    navLinkClass: string,
}

export const themes: Record<string, Theme> = {
    light: {
        themeName: "light",
        TextColor: 'rgb(105, 31, 31)',
        backgroundColor: '#ffebcd',
        RatingColor: 'rgb(255, 0, 85)',
        PaginationButtonClass: "light-button",
        themeButtonImg: sunImage,
        navLinkClass: "light-link",
    },
    dark: {
        themeName: "dark",
        TextColor: '#000',
        backgroundColor: '#deb887',
        RatingColor: '#ff0000',
        PaginationButtonClass: "dark-button",
        themeButtonImg: moonImage,
        navLinkClass: "dark-link",
    },
};
