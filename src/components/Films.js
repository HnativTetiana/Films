import React, { useState } from "react";

import Film from "./Film";

import Pagination from "./Pagination";

import useFetchMovies from "../hooks/useFetchMovies";

const Films = (props) => {
    const [currentPage, setCurrentPage] = useState(1);

    const [stateFilmId, setFilmId] = useState(null);

    const filmsLink = (filmCategory) => `https://api.themoviedb.org/3/movie/${filmCategory}?api_key=fb073839532ae8f5b7f1255e18af7e65&page=`;

    const { data, totalPages, error } = useFetchMovies(filmsLink(props.filmCategory), currentPage);

    const pageHandler = (value) => {
        setCurrentPage(currentPage + value);
        setFilmId(null);
    };

    const FilmIdHandler = (filmId) => setFilmId(filmId);

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
                    data.map((film =>
                        <Film
                            key={film.id}
                            film={film}
                            stateFilmId={stateFilmId}
                            FilmIdHandler={FilmIdHandler}
                        >
                        </Film>

                    ))
                }
            </ul>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                pageHandler={pageHandler}
            />
        </>
    )

}

export default Films;