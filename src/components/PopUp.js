import ReactDOM from "react-dom";

const PopUp = (props) => {

    const { FilmIdHandler, releaseDate } = props;

    return ReactDOM.createPortal(
        <div className="modal-container">
            <button className="close-button" onClick={() => FilmIdHandler(null)}>x</button>

            <p className="release-date">{releaseDate}</p>
        </div>,
        document.getElementById("modal"),
    )
}

export default PopUp;