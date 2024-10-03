import React, { useState, useContext } from "react";

import { ThemeContext } from "../theme-context.js";

const RateSwitch = (props) => {

    const [switchState, setSwitchState] = useState(false);

    const SwitchHandler = () => setSwitchState(!switchState);

    const { theme } = useContext(ThemeContext);

    return (
        <div className='rating'>
            {
                switchState && <p className="show-rating" style={{ color: theme.RatingColor }}>{props.popularity}</p>
            }

            <p
                className="show-text"
                style={{ color: theme.RatingColor }}
                onClick={SwitchHandler}
            >
                {!switchState ? "Show Rate" : "Hide Rate"}
            </p>
        </div>
    )
}


export default RateSwitch;