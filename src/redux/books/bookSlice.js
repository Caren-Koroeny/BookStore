import { createSlice, nanoid } from '@reduxjs/toolkit';

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
    AddBooks: (state, action) => {
      const newBook = {
        id: nanoid(),
        title: action.payload.title,
        author: action.payload.author,
      };

      state.concat(newBook);
    },
    RemoveBook: (state, action) => {
      state.filter((book) => book.id !== action.payload.id);
    },
  },
});

export const { AddBooks, RemoveBook } = bookSlice.actions;

export default bookSlice.reducer;
