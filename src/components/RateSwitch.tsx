import React, { useState } from "react";

import { useSelector } from "react-redux";

import { themeSelector } from "../store/selectors.ts";

const RateSwitch: React.FC<{ popularity: string }> = (props) => {

    const { popularity } = props;

    const theme = useSelector(themeSelector);

    const [switchState, setSwitchState] = useState(false);

    const SwitchHandler = () => setSwitchState(!switchState);

    return (
        <div className='rating'>
            {
                switchState && <span className="show-rating" style={{ color: theme.RatingColor }}>{popularity}</span>
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