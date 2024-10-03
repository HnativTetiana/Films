import React from "react";

import Film from "./Film";

import Pagination from "./Pagination";

class Films extends React.Component {

    constructor() {
        super();

        this.state = {
            data: [],
            page: 1,
            totalPages: 0,
            error: null,
            stateFilmId: null,
        };

        this.pageHandler = this.pageHandler.bind(this);

        this.FilmIdHandler = this.FilmIdHandler.bind(this);
    }

    async fetchData(page) {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=fb073839532ae8f5b7f1255e18af7e65&page=${page}`);

            if (!response.ok) {
                throw new Error(`Failed with status code ${response.status}`);
            }

            const data = await response.json();

            this.setState({ data: data.results, totalPages: data.total_pages });

        } catch (error) {
            this.setState({ error: error.message });
        }
    }

    async componentDidMount() {
        this.fetchData(this.state.page);
    }

    pageHandler = (value) => {
        this.setState((prevState) => {
            const newPage = prevState.page + value;

            if (newPage > 0 && newPage <= prevState.totalPages) {
                return { page: newPage };
            }
            
            return null;
        }, () => {
            this.fetchData(this.state.page);
        });
        this.setState({ stateFilmId: null });
    }

    FilmIdHandler = (filmId) => this.setState({ stateFilmId: filmId });

    render() {
        const { data, error, stateFilmId, page, totalPages } = this.state;

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
                                FilmIdHandler={this.FilmIdHandler}
                            >
                            </Film>

                        ))
                    }
                </ul>

                <Pagination
                    page={page}
                    totalPages={totalPages}
                    pageHandler={this.pageHandler}
                />
            </>
        )

    }
}

export default Films;