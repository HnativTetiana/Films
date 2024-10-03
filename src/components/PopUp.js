import React from "react";
import ReactDOM from "react-dom";

class PopUp extends React.Component {

    render() {
        const { FilmIdHandler, releaseDate } = this.props;

        return ReactDOM.createPortal(
            <div className="modal-container">
                <button className="close-button" onClick={() => FilmIdHandler(null)}>x</button>

                <p className="release-date">{releaseDate}</p>
            </div>,
            document.getElementById("modal"),
        )
    }
}

export default PopUp;