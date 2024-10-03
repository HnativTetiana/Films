import React, { useState } from "react";
import { useSelector } from "react-redux";
import Film from "./Film.tsx";
import Pagination from "./Pagination.tsx";
import useFetchMovies from "../hooks/useFetchMovies.ts";
import { IFilm } from "./interfaces.ts";
import { filmSelector, loadingSelector } from "../store/selectors.ts";

const Films: React.FC<{ filmCategory: string }> = (props) => {
    const [currentPage, setCurrentPage] = useState(1);

    const [stateFilmId, setFilmId] = useState<string | null>(null);

    const filmsLink = (filmCategory: string) => `https://api.themoviedb.org/3/movie/${filmCategory}?api_key=fb073839532ae8f5b7f1255e18af7e65&page=`;

    useFetchMovies(filmsLink(props.filmCategory), currentPage);

    const isLoading = useSelector(loadingSelector);
    const { films: data, error } = useSelector(filmSelector);

    if (isLoading) {
        return (
            <div className="loader-container">
                <div className="loader"></div>
            </div>
        )
    }

    const pageHandler = (value: number) => {
        setCurrentPage(currentPage + value);
        setFilmId(null);
    };

    const FilmIdHandler = (filmId: string | null) => setFilmId(filmId);

    if (error) {
        return (
            <div className="error ">
                <h2>Error : {error}</h2>
            </div>
        )
    }

    return (
        <>
            <ul className="films-list">
                {
                    data.map(((film: IFilm) =>
                        <Film
                            key={film.id}
                            filmId={film.id}
                            stateFilmId={stateFilmId}
                            FilmIdHandler={FilmIdHandler}
                        >
                        </Film>

                    ))
                }
            </ul>

            <Pagination
                currentPage={currentPage}
                pageHandler={pageHandler}
            />
        </>
    )

}

export default Films;