/* eslint-disable no-param-reassign */
import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  booksArray:
  // Initial state:
  [
    {
      item_id: '1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: '2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: '3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};
const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    AddBooks: (state, action) => {
      const newBook = {
        item_id: nanoid(),
        title: action.payload.title,
        author: action.payload.author,
      };
      return {
        ...state,
        booksArray: [...state.booksArray, newBook],
      };
    },
    RemoveBook: (state, { payload }) => {
      state.booksArray = state.booksArray.filter((books) => books.item_id !== payload);
    },

  },
});

export const { AddBooks, RemoveBook } = bookSlice.actions;

export default bookSlice.reducer;
