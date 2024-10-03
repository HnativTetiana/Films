import RateSwitch from "./RateSwitch";

import PopUp from "./PopUp";

const Film = (props) => {

    const { film, stateFilmId, FilmIdHandler } = props;

    const { id: filmId, title, poster_path: poster, overview, popularity, release_date: releaseDate } = film;

    return (
        <li className="films-item">
            <h2>{title}</h2>

            <img
                src={"https://image.tmdb.org/t/p/w200" + poster}
                alt={title}
                onClick={() => FilmIdHandler(film.id)}
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