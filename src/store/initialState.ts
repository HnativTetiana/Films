import { themes, Theme } from "../theme-context.ts";
import { IFilm } from '../components/interfaces.ts';

export interface IFilmsData {
    films: IFilm[];
    totalPages: number;
    error: string | null;
}

export interface IInitialState {
    theme: Theme;
    filmsData: IFilmsData;
    isLoading: boolean;
}

const initialState: IInitialState = {
    theme: themes.light,
    filmsData: {
        films: [],
        totalPages: 0,
        error: null,
    },
    isLoading: false,
}

export default initialState;