import { createAsyncThunk } from "@reduxjs/toolkit";
import { IFilm } from "../components/interfaces";

interface FetchMoviesListPayload {
    link: string;
    page: number;
}

const fetchMoviesList = createAsyncThunk<{ films: IFilm[]; total_pages: number }, FetchMoviesListPayload, { rejectValue: string }>("films/fetchMoviesList",
    async ({ link, page }, { rejectWithValue }) => {
        try {
            const response = await fetch(`${link}${page}`);

            if (!response.ok) {
                throw new Error(`Failed with status code ${response.status}`);
            }

            const data = await response.json();

            if (data.results && Array.isArray(data.results)) {
                return {
                    films: data.results,
                    total_pages: data.total_pages,
                }
            } else {
                return rejectWithValue("Unexpected response format");
            }

        } catch (error: any) {
            return rejectWithValue(error.message || "An error occurred");
        }
    }
)

export default fetchMoviesList;