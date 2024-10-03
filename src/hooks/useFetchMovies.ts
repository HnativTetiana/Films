import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { AppDispatch } from "../store/store.ts";
import fetchMoviesList from '../store/thunks.ts';

const useFetchMovies = (link: string, page: number) => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchMoviesList({ link, page }));
    }, [link, page, dispatch]);
}

export default useFetchMovies;