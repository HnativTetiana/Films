import RateSwitch from "./RateSwitch.tsx";
import { useSelector } from "react-redux";
import PopUp from "./PopUp.tsx";
import { IFilmProps } from "./interfaces.ts";
import { filmSelector } from "../store/selectors.ts";
import filmImage from "../imgs/film.png";

const Film: React.FC<IFilmProps> = (props) => {

    const { filmId, stateFilmId, FilmIdHandler } = props;

    const { films } = useSelector(filmSelector);

    const film = films.find((film) => film.id === filmId) ||
    {
        title: "Unknown Film",
        poster_path: "",
        overview: "No overview available",
        popularity: "0",
        release_date: "Unknown Date"
    };

    const { title, poster_path: poster, overview, popularity, release_date: releaseDate } = film;

    return (
        <li className="films-item">
            <h2>{title}</h2>

            <img className="film-img"
                src={poster ? `https://image.tmdb.org/t/p/w200${poster}` : filmImage}
                alt={title || "Film poster"}
                onClick={() => FilmIdHandler(filmId)}
            />

            <RateSwitch popularity={popularity} />

            <p className="film-description">{overview}</p>

            {
                (stateFilmId === filmId) && <PopUp releaseDate={releaseDate} FilmIdHandler={FilmIdHandler} />
            }
        </li>
    )

}

export default Film;