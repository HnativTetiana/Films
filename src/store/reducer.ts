import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { themes } from "../theme-context.ts";
import initialState from "./initialState.ts";
import { toggleTheme } from './actions.ts';
import fetchMoviesList from "./thunks.ts";
import { IFilm } from '../components/interfaces.ts';

const rootReducer = createReducer(initialState,
    (builder) => {
        builder
            .addCase(toggleTheme, (state) => {
                state.theme = state.theme.themeName === "light" ? themes.dark : themes.light;
            })
            .addCase(fetchMoviesList.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchMoviesList.fulfilled, (state, action: PayloadAction<{ films: IFilm[]; total_pages: number; }>) => {
                const { films, total_pages } = action.payload;
                state.filmsData = {
                    films,
                    totalPages: total_pages,
                    error: null,
                };
                state.isLoading = false;
            })
            .addCase(fetchMoviesList.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.isLoading = false;
                state.filmsData.error = action.payload || "An unknown error occurred";
            })
    });

export default rootReducer;