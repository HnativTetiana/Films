import React from "react";

import Films from "./components/Films";

import ThemeButton from "./components/ThemeButton";

import { ThemeContext, themes } from "./theme-context.js";

import "./App.css";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            theme: themes.light,
        }
        this.toggleTheme = this.toggleTheme.bind(this);
    }

    toggleTheme = () => {
        this.setState(prevState =>
            ({ theme: prevState.theme === themes.light ? themes.dark : themes.light })
        )
    }

    render() {
        return (
            <ThemeContext.Provider value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}>
                <ThemeContext.Consumer>
                    {
                        ({ theme }) =>
                            <div className="main-container" style={{ color: theme.TextColor, backgroundColor: theme.backgroundColor }}>
                                <h1 className="main-title">Favourite Movies</h1>
                                <ThemeButton></ThemeButton>
                                <Films></Films>
                            </div>

                    }
                </ThemeContext.Consumer>
            </ThemeContext.Provider>
        )
    }
}

export default App;
