import React from "react";

import { ThemeContext } from "../theme-context.js";

class RateSwitch extends React.Component {

    constructor() {
        super();
        this.state = { switch: false };
        this.SwitchHandler = this.SwitchHandler.bind(this);
    }

    SwitchHandler = () => this.setState({ switch: !this.state.switch });

    render() {
        return (
            <ThemeContext.Consumer>
                {
                    ({ theme }) => (
                        <div className='rating'>
                            {
                                this.state.switch && <p className="show-rating" style={{ color: theme.RatingColor }}>{this.props.popularity}</p>
                            }

                            <p
                                className="show-text"
                                style={{ color: theme.RatingColor }}
                                onClick={this.SwitchHandler}
                            >
                                {!this.state.switch ? "Show Rate" : "Hide Rate"}
                            </p>
                        </div>
                    )
                }
            </ThemeContext.Consumer>
        )
    }
}


export default RateSwitch;