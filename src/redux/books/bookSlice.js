import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  booksArray:
  // Initial state:
  [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};
const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    AddBook: (state, action) => {
      state.booksArray.push(action.payload);
    },
    RemoveBook: (state, action) => {
      state.filter((book) => book.id !== action.payload.id);
    },
  },
});

export const { AddBook, RemoveBook } = bookSlice.actions;

export default bookSlice.reducer;
