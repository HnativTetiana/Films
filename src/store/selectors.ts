import { RootState } from "./store";

export const themeSelector = (state: RootState) => state.theme;

export const filmSelector = (state: RootState)  => state.filmsData;

export const loadingSelector = (state: RootState)  => state.isLoading;