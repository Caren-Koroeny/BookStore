/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { AddBook, getBookData, RemoveBook } from './BookThunk';

const initialState = {
  booksArray: [],
  error: false,
};
const bookSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: {
    [getBookData.fulfilled]: (state, action) => {
      state.booksArray = action.payload;
    },
    [getBookData.rejected]: (state) => {
      state.error = true;
    },
    [AddBook.fulfilled]: (state, { payload }) => {
      const {
        title, author, category,
      } = payload;
      state.booksArray[payload.item_id] = [{
        title,
        author,
        category,
      }];
    },
    [RemoveBook.fulfilled]: (state, { payload }) => {
      delete state.booksArray[payload];
    },
  },

  //   AddBooks: (state, action) => {
  //     const newBook = {
  //       item_id: nanoid(),
  //       title: action.payload.title,
  //       author: action.payload.author,
  //     };
  //     return {
  //       ...state,
  //       booksArray: [...state.booksArray, newBook],
  //     };
  //   },
  //   RemoveBook: (state, { payload }) => {
  //     state.booksArray = state.booksArray.filter((books) => books.item_id !== payload);
  //   },

  // },
});

// export const { AddBooks, RemoveBook } = bookSlice.actions;

export default bookSlice.reducer;
