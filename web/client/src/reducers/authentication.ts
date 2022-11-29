import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';

export type Auth = {
    perfil: string,
    isLogado: boolean
}

const initialState: Auth = {
    perfil: "Deslogado",
    isLogado: false
}

const slice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        setPerfil: (state, { payload }: PayloadAction<string>) => {
            state.perfil = payload;
        }
    }
});

export const { setPerfil } = slice.actions;

export default slice.reducer;

export const perfil = (state: RootState) => state.authentication.perfil;