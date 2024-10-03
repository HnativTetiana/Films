import React from "react";

import { ThemeContext } from "../theme-context.js";

class ThemeButton extends React.Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {
                    ({ theme, toggleTheme }) => (
                        <button className="theme-button" onClick={toggleTheme}>
                            <img src={theme.themeButtonImg} alt="icon" className="theme-img" />
                        </button>
                    )
                }
            </ThemeContext.Consumer>
        )
    }
}

export default ThemeButton;