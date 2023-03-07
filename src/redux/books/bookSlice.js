import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'book',
  initialState: {
    booksArray: [],
  },
  reducers: {
    addBook: (state, action) => {
      state.booksArray.push(action.payload);
    },
    removeBook: (state, action) => {
      state.filter((book) => book.id !== action.payload.id);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
