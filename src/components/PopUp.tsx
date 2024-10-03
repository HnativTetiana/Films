import ReactDOM from "react-dom";

const PopUp: React.FC<{ FilmIdHandler: (filmId: string | null) => void, releaseDate: string }> = (props) => {

    const { FilmIdHandler, releaseDate } = props;

    const modalElement = document.getElementById("modal");

    return modalElement ? ReactDOM.createPortal(
        <div className="modal-container">
            <button className="close-button" onClick={() => FilmIdHandler(null)}>X</button>
            <span className="release-date">{releaseDate}</span>
        </div>,
        modalElement
    ) : <></>
}

export default PopUp;