import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Ініціалізуємо змінну для збереження теми
let storedTheme = 'light';

// Перевіряємо, чи виконується код у браузері
if (typeof window !== 'undefined') {
    storedTheme = localStorage.getItem('theme') ?? 'light';
}

const initialState = {
    theme: storedTheme,
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state, action: PayloadAction<string>) => {
            state.theme = action.payload;
            if (typeof window !== 'undefined') {
                localStorage.setItem('theme', action.payload);
            }
        },
    },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
