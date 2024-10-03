import { useState, useEffect } from "react";

const useFetchMovies = (link, page) => {
    const [data, setData] = useState({ films: [], totalPages: 0, error: null });

    const fetchData = async (link, page) => {
        try {
            const response = await fetch(`${link}${page}`);

            if (!response.ok) {
                throw new Error(`Failed with status code ${response.status}`);
            }

            const data = await response.json();

            setData({ films: data.results, totalPages: data.total_pages, error: null });

        } catch (error) {
            setData((prevState) => ({ ...prevState, error: error.message }));
        }
    }

    useEffect(() => {
        fetchData(link, page)
    }, [link, page]);

    return { data: data.films, totalPages: data.totalPages, currentPage: page, error: data.error };

}

export default useFetchMovies;