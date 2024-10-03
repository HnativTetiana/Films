export interface IFilm {
    id: string,
    title: string,
    poster_path: string,
    overview: string,
    popularity: string,
    release_date: string,
}

export interface IFilmProps {
    filmId: string | null,
    stateFilmId: string | null,
    FilmIdHandler: (filmId: string | null) => void,
}