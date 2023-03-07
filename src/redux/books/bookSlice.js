import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'book',
  initialState:{booksArray: [] },
  reducers: {
    addBook: (state, action ) => {
      state.booksArray.pish(action.payload);
    },
    removeBook: (state,action) => {
      state.booksArray = state.booksArray.filter((book) => book.id !==action.payload);
    },
  },
});

export const { addBook, removeBook} = bookSlice.actions;

export default bookSlice.reducer;